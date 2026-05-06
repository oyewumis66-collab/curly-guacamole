import streamlit as st
from transformers import pipeline, Conversation
import os

# Page config
st.set_page_config(
    page_title="⚽ Young AI - Football Expert",
    page_icon="⚽",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS for better styling
st.markdown("""
    <style>
        .main { padding: 2rem; }
        .stChatMessage { border-radius: 10px; }
        h1 { color: #2E86AB; text-align: center; }
        .info-box { background-color: #F0F2F6; padding: 1rem; border-radius: 8px; }
    </style>
""", unsafe_allow_html=True)

# Football & Goalkeeping Knowledge Base
football_knowledge = {
    "goalkeeper": "A goalkeeper is the most important defender in football. They're the only player allowed to use their hands within the penalty area. Great goalkeepers like Manuel Neuer revolutionized the position by playing as a 'sweeper keeper'.",
    "goalkeeping skills": "Essential goalkeeper skills include: shot-stopping, distribution, positioning, footwork, communication, bravery, and mental strength. Modern goalkeepers need to be comfortable with the ball at their feet.",
    "penalty save": "To save penalties, you must read the striker's body language, watch their approach, and react quickly. Some keepers use psychology to distract the shooter. Practice and confidence are key.",
    "football tactics": "Common formations include 4-4-2 (classic), 4-3-3 (balanced), 3-5-2 (wing play), and 5-3-2 (defensive). Modern football emphasizes pressing, possession, and quick transitions.",
    "famous goalkeeper": "Greatest goalkeepers include Gianluigi Buffon (Italian legend), Manuel Neuer (revolutionary ball-player), Edwin van der Sar (reliable), and modern greats like De Gea, Ter Stegen, and Alisson.",
    "goalkeeper drills": "Key drills: shot-stopping, footwork ladder work, diving practice, distribution drills, cross catching, punching practice, angle narrowing, reaction training, and communication exercises.",
    "football history": "Modern football started in England in the 1860s. Key milestones: 1930 first World Cup, 1955 European Cup, 1970 Brazil's golden era, 1990s Premier League boom, and today's global game.",
    "diving": "When diving, push off with your far foot, keep your body big, and protect your face. Good footwork before the dive is crucial for positioning. Practice builds muscle memory needed for consistency.",
    "distribution": "Modern goalkeepers must be comfortable distributing the ball. Use throws for short passes, roll-outs for accuracy, and kicks for distance. Good footwork and awareness are essential.",
    "crossing": "When dealing with crosses, position yourself to intercept the ball, communicate with defenders, and decide whether to catch or punch. Coming off your line early can prevent danger.",
}

# Initialize session state
if "messages" not in st.session_state:
    st.session_state.messages = []
if "conversation_pipeline" not in st.session_state:
    st.session_state.conversation_pipeline = None
if "model_loaded" not in st.session_state:
    st.session_state.model_loaded = False

# Load model on startup
@st.cache_resource
def load_model():
    try:
        model = pipeline(
            "conversational",
            model="microsoft/DialoGPT-small"
        )
        return model
    except Exception as e:
        st.error(f"Error loading model: {e}")
        return None

def get_football_response(user_message):
    """Check if user message matches football knowledge"""
    user_lower = user_message.lower()
    
    for keyword, response in football_knowledge.items():
        if keyword in user_lower:
            return response
    
    return None

def get_ai_response(user_message, pipeline_model):
    """Get response from AI model"""
    try:
        if pipeline_model is None:
            return "I'm having trouble loading my AI model. Please try again later."
        
        conversation = Conversation(user_message)
        response = pipeline_model(conversation)
        ai_response = response.generated_responses[-1]
        
        return ai_response
    except Exception as e:
        return f"I encountered an error: {str(e)}"

# Main UI
col1, col2 = st.columns([3, 1])
with col1:
    st.markdown("<h1>⚽ Young AI - Football Expert Chatbot</h1>", unsafe_allow_html=True)
with col2:
    st.markdown("<div class='info-box'><small>Powered by DialoGPT</small></div>", unsafe_allow_html=True)

st.markdown("---")

# Sidebar
with st.sidebar:
    st.header("ℹ️ About")
    st.info(
        """
        **Young AI** is a conversational chatbot specialized in:
        - ⚽ Football tactics and strategies
        - 🥅 Goalkeeping techniques
        - 📚 Football history
        - 🎯 Training drills
        
        Ask me anything about football and goalkeeping!
        """
    )
    
    st.header("🎯 Quick Topics")
    topics = list(football_knowledge.keys())
    selected_topic = st.selectbox("Or select a topic:", topics)
    
    if st.button("📖 Learn about this topic", use_container_width=True):
        st.session_state.messages.append({"role": "user", "content": selected_topic})
        st.session_state.messages.append({"role": "assistant", "content": football_knowledge[selected_topic]})

# Load model
if not st.session_state.model_loaded:
    with st.spinner("🔄 Loading AI model..."):
        st.session_state.conversation_pipeline = load_model()
        st.session_state.model_loaded = True

# Display chat messages
chat_container = st.container()
with chat_container:
    for message in st.session_state.messages:
        with st.chat_message(message["role"]):
            st.markdown(message["content"])

# Chat input
if prompt := st.chat_input("Ask me about football, goalkeeping, or anything else..."):
    # Add user message
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user"):
        st.markdown(prompt)
    
    # Generate response
    with st.chat_message("assistant"):
        with st.spinner("⏳ Thinking..."):
            # First check for football knowledge
            football_response = get_football_response(prompt)
            
            if football_response:
                response = football_response
            else:
                # Fall back to AI model
                response = get_ai_response(prompt, st.session_state.conversation_pipeline)
            
            st.markdown(response)
    
    # Add assistant message to history
    st.session_state.messages.append({"role": "assistant", "content": response})

# Footer
st.markdown("---")
st.markdown(
    """
    <div style='text-align: center; color: gray; font-size: 0.8rem;'>
    💡 Young AI Chatbot | Football & Goalkeeping Expert | Powered by Streamlit
    </div>
    """,
    unsafe_allow_html=True
)
