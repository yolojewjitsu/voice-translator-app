# Setup Voice Translator Project

Create the initial project structure and configuration for voice translator app.

## What this command does:
1. Creates frontend/ and backend/ directories
2. Initializes package.json files for both
3. Sets up basic dependencies
4. Creates .gitignore and initial README
5. Initializes git repository with first commit

## Implementation:

Create project structure:
```
voice-translator-app/
├── frontend/ (React app)
├── backend/ (Express server)  
├── README.md
├── .gitignore
└── package.json (root)
```

**Backend dependencies**: express, cors, multer, openai, dotenv
**Frontend dependencies**: react, react-dom, react-scripts

Set up .gitignore to exclude node_modules, .env, build folders.

Initialize git and make first commit: "feat: initial project setup and structure"

**Time target**: 5 minutes