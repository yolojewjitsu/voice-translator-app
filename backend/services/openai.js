const OpenAI = require('openai');
const fs = require('fs');

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

/**
 * Transcribe audio file using OpenAI Whisper
 * @param {string} audioFilePath - Path to the audio file
 * @returns {Promise<string>} - Transcribed text
 */
async function transcribeAudio(audioFilePath) {
  try {
    if (!fs.existsSync(audioFilePath)) {
      throw new Error('Audio file not found');
    }

    console.log(`Transcribing audio file: ${audioFilePath}`);

    const transcription = await openai.audio.transcriptions.create({
      file: fs.createReadStream(audioFilePath),
      model: 'whisper-1',
      language: 'en', // Expect English input
      response_format: 'text'
    });

    if (!transcription || typeof transcription !== 'string') {
      throw new Error('Failed to transcribe audio - empty or invalid response');
    }

    return transcription.trim();
  } catch (error) {
    console.error('Transcription error:', error);
    throw new Error(`Transcription failed: ${error.message}`);
  }
}

/**
 * Translate English text to Spanish using OpenAI GPT
 * @param {string} englishText - English text to translate
 * @returns {Promise<string>} - Spanish translation
 */
async function translateToSpanish(englishText) {
  try {
    if (!englishText || englishText.trim().length === 0) {
      throw new Error('No text provided for translation');
    }

    console.log(`Translating text: "${englishText}"`);

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a professional translator. Translate the given English text to Spanish. Only return the Spanish translation, nothing else. If the input is already in Spanish, return it as-is.'
        },
        {
          role: 'user',
          content: `Translate this English text to Spanish: "${englishText}"`
        }
      ],
      max_tokens: 500,
      temperature: 0.3 // Lower temperature for more consistent translations
    });

    const translation = completion.choices?.[0]?.message?.content?.trim();

    if (!translation) {
      throw new Error('Failed to get translation - empty response');
    }

    return translation;
  } catch (error) {
    console.error('Translation error:', error);
    throw new Error(`Translation failed: ${error.message}`);
  }
}

/**
 * Health check for OpenAI service
 * @returns {Promise<boolean>} - Service availability
 */
async function checkServiceHealth() {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return false;
    }

    // Simple test to verify API key works
    await openai.models.list();
    return true;
  } catch (error) {
    console.error('OpenAI service health check failed:', error);
    return false;
  }
}

module.exports = {
  transcribeAudio,
  translateToSpanish,
  checkServiceHealth
};