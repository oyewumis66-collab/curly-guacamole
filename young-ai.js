const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const typingIndicator = document.getElementById('typingIndicator');

// Send message when button is clicked or Enter is pressed
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

async function sendMessage() {
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    // Add user message to chat
    addMessage(message, 'user');
    userInput.value = '';
    userInput.focus();
    
    // Show typing indicator
    showTypingIndicator();
    
    try {
        // Send message to Flask backend
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message })
        });
        
        const data = await response.json();
        
        if (data.success) {
            removeTypingIndicator();
            addMessage(data.response, 'bot');
        } else {
            removeTypingIndicator();
            addMessage('Sorry, I encountered an error. Please try again.', 'bot');
        }
    } catch (error) {
        console.error('Error:', error);
        removeTypingIndicator();
        addMessage('⚠️ Error connecting to Young. Make sure the Flask server is running on http://localhost:5000', 'bot');
    }
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    
    const avatar = document.createElement('div');
    avatar.classList.add('message-avatar');
    avatar.textContent = sender === 'user' ? '👤' : '🤖';
    
    const content = document.createElement('div');
    content.classList.add('message-content');
    content.textContent = text;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

function showTypingIndicator() {
    typingIndicator.classList.remove('hidden');
    scrollToBottom();
}

function removeTypingIndicator() {
    typingIndicator.classList.add('hidden');
}

function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Welcome message
window.addEventListener('load', () => {
    addMessage('👋 Hello! I\'m Young, an AI-powered chatbot! I\'m an expert in football and goalkeeping, trained with advanced AI models. Ask me anything about the beautiful game, goalkeeping techniques, football tactics, famous players, or general topics. Let\'s chat! ⚽🤖', 'bot');
});

// Check if server is running
window.addEventListener('load', () => {
    fetch('/api/health')
        .then(res => res.json())
        .then(data => {
            if (data.model_loaded) {
                console.log('✅ Young AI Model is loaded and ready!');
            } else {
                console.warn('⚠️ AI Model not yet loaded. Young will still respond but may need a moment.');
            }
        })
        .catch(err => {
            console.error('❌ Cannot connect to Young server. Make sure Flask is running!');
        });
});
