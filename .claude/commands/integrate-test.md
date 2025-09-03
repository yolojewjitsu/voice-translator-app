# Integration & Testing

Connect frontend and backend, test complete workflow, fix issues.

## What this command does:
1. Test complete audio recording → STT → translation flow
2. Fix any CORS issues between ports 3000 and 3001
3. Handle edge cases and error scenarios
4. Improve user feedback and loading states
5. Test with various English phrases
6. Verify Spanish translations are accurate
7. Add proper error messaging

## Testing scenarios:

**Happy path**:
- Record "Hello" → Should show "Hola"
- Record "How are you?" → Should show "¿Cómo estás?"
- Record "Thank you" → Should show "Gracias"

**Edge cases**:
- No microphone permission
- Network connectivity issues
- OpenAI API errors
- Empty or very short recordings
- Background noise handling

## Fixes to implement:
- CORS configuration if needed
- Audio format compatibility
- File size limits
- Timeout handling for long API calls
- Better error messages for users
- Loading indicators during processing

## Integration checks:
- Backend starts on port 3001
- Frontend connects successfully
- Audio files upload correctly
- OpenAI API responses properly
- Translation displays in UI

## User experience improvements:
- Clear feedback during recording
- Progress indicators for processing
- Helpful error messages
- Audio playback before sending

Make commit: "feat: connect frontend and backend for full workflow"

**Time target**: 10 minutes