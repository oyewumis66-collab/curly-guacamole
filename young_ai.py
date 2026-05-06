from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline
import os

app = Flask(__name__)
CORS(app)

# Initialize the conversational AI model
# Using a lightweight model for better performance
try:
    # You can switch between different models:
    # "distilgpt2" - Lightweight, fast
    # "gpt2" - Standard, good quality
    # "EleutherAI/gpt-neo-125M" - More advanced
    conversational_pipeline = pipeline(
        "conversational",
        model="microsoft/DialoGPT-small"
    )
    print("✅ AI Model loaded successfully!")
except Exception as e:
    print(f"⚠️ Error loading model: {e}")
    conversational_pipeline = None

# Football & Goalkeeping Knowledge Base
football_knowledge = {
    "goalkeeper": "A goalkeeper is the most important defender in football. They're the only player allowed to use their hands within the penalty area. Great goalkeepers like Manuel Neuer revolutionized the position with their footwork and distribution.",
    "goalkeeping skills": "Essential goalkeeper skills include: shot-stopping, distribution, positioning, footwork, communication, bravery, and mental strength. Modern goalkeepers need to be comfortable with the ball at their feet.",
    "penalty save": "To save penalties, you must read the striker's body language, watch their approach, and react quickly. Some keepers use psychology to distract the shooter. Practice and confidence are essential!",
    "football tactics": "Common formations include 4-4-2 (classic), 4-3-3 (balanced), 3-5-2 (wing play), and 5-3-2 (defensive). Modern football emphasizes pressing, possession, and quick transitions.",
    "famous goalkeeper": "Greatest goalkeepers include Gianluigi Buffon (Italian legend), Manuel Neuer (revolutionary ball-player), Edwin van der Sar (reliable), and modern greats like De Gea, Ter Stegen, Courtois, and Alisson.",
    "goalkeeper drills": "Key drills: shot-stopping, footwork ladder work, diving practice, distribution drills, cross catching, punching practice, angle narrowing, reaction training, communication, and mental conditioning.",
    "football history": "Modern football started in England in the 1860s. Key milestones: 1930 first World Cup, 1955 European Cup, 1970 Brazil's golden era, 1990s Premier League boom, and today's global expansion.",
    "diving": "When diving, push off with your far foot, keep your body big, and protect your face. Good footwork before the dive is crucial for positioning. Practice builds the muscle memory needed.",
    "distribution": "Modern goalkeepers must be comfortable distributing the ball. Use throws for short passes, roll-outs for accuracy, and kicks for distance. Good footwork and awareness are essential for playing out from the back.",
    "crossing": "When dealing with crosses, position yourself to intercept the ball, communicate with defenders, and decide whether to catch or punch. Coming off your line early can prevent dangerous situations."
}

# Conversation history for context
conversation_history = []

def get_football_response(user_message):
    """Check if user message matches football knowledge"""
    user_lower = user_message.lower()
    
    for keyword, response in football_knowledge.items():
        if keyword in user_lower:
            return response
    
    return None

def get_ai_response(user_message):
    """Get response from AI model"""
    try:
        if conversational_pipeline is None:
            return "I'm having trouble loading my AI model. Please check the server setup."
        
        # Create a conversational input
        from transformers import Conversation
        conversation = Conversation(user_message)
        
        # Add to history
        for prev_msg in conversation_history[-5:]:  # Keep last 5 messages
            conversation.add_user_input(prev_msg)
        
        # Get response
        response = conversational_pipeline(conversation)
        ai_response = response.generated_responses[-1]
        
        # Add to history
        conversation_history.append(user_message)
        conversation_history.append(ai_response)
        
        return ai_response
    except Exception as e:
        print(f"Error in AI response: {e}")
        return f"I encountered an error: {str(e)}"

@app.route('/api/chat', methods=['POST'])
def chat():
    """Main chat endpoint"""
    try:
        data = request.json
        user_message = data.get('message', '').strip()
        
        if not user_message:
            return jsonify({'error': 'Empty message'}), 400
        
        # First check for football knowledge
        football_response = get_football_response(user_message)
        
        if football_response:
            response = football_response
        else:
            # Fall back to AI model
            response = get_ai_response(user_message)
        
        return jsonify({
            'response': response,
            'success': True
        })
    
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({
            'error': str(e),
            'success': False
        }), 500

@app.route('/api/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'model_loaded': conversational_pipeline is not None
    })

@app.route('/')
def index():
    """Serve the chatbot HTML"""
    return open('young-ai.html').read()

if __name__ == '__main__':
    print("\n🤖 Young AI Chatbot Starting...")
    print("📍 Server running on http://localhost:5000")
    print("⚽ Football & Goalkeeping Expert Mode: ENABLED\n")
    app.run(debug=True, port=5000)