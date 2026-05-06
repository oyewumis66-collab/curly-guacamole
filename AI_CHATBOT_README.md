# Young - AI-Powered Chatbot

Young is an intelligent AI-powered chatbot that specializes in football and goalkeeping expertise, built with Python, Flask, and Hugging Face Transformers.

## Features

🤖 **AI-Powered** - Uses state-of-the-art NLP models (Microsoft DialoGPT)
⚽ **Football Expert** - Comprehensive knowledge about football, tactics, and famous matches
🥅 **Goalkeeping Specialist** - Expert advice on goalkeeper techniques, drills, and training
💬 **Natural Conversations** - Context-aware responses with conversation history
🌐 **Web Interface** - Beautiful modern chat UI

## Installation

### Requirements
- Python 3.8+
- pip

### Setup

1. **Install dependencies:**
```bash
pip install -r requirements.txt
```

2. **Run the Flask server:**
```bash
python young_ai.py
```

3. **Open in browser:**
```
http://localhost:5000
```

## Usage

Just start chatting! Young can discuss:

- **Football:** Rules, history, tactics, famous matches
- **Goalkeeping:** Techniques, training drills, famous goalkeepers
- **General Q&A:** Any topic you'd like to chat about

### Example Prompts

```
"Tell me about goalkeeping techniques"
"What are the best goalkeeper drills?"
"How do I save penalties?"
"Explain football tactics and formations"
"Who are the greatest goalkeepers of all time?"
"Tell me a joke"
```

## Project Structure

```
├── young_ai.py           # Flask backend with AI model
├── young-ai.html         # Frontend HTML
├── young-ai-style.css    # Styling
├── young-ai.js          # Frontend JavaScript
└── requirements.txt      # Python dependencies
```

## Technology Stack

- **Backend:** Flask, Python
- **AI Model:** Hugging Face Transformers (DialoGPT)
- **Frontend:** HTML, CSS, JavaScript
- **API:** RESTful JSON API

## Models Available

You can switch between different AI models in `young_ai.py`:

- `microsoft/DialoGPT-small` (default) - Lightweight, conversational
- `microsoft/DialoGPT-medium` - Better quality, slower
- `distilgpt2` - Fast, general purpose
- `EleutherAI/gpt-neo-125M` - More advanced

## Architecture

1. User sends message via web UI
2. Flask backend receives message via `/api/chat` endpoint
3. Backend checks football knowledge base first
4. If no match, uses AI model for intelligent response
5. Response sent back to frontend
6. Message displayed in chat interface

## Future Enhancements

- [ ] Persist conversation history to database
- [ ] Add video tutorial recommendations
- [ ] Integrate with real match data
- [ ] Multi-language support
- [ ] Deploy to cloud (Heroku, AWS, etc.)
- [ ] Add sentiment analysis
- [ ] Fine-tune model on football/goalkeeping corpus

## License

MIT License
