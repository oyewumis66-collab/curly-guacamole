const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// Send message when button is clicked or Enter is pressed
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    // Add user message to chat
    addMessage(message, 'user');
    userInput.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate Young thinking (500-1500ms)
    setTimeout(() => {
        removeTypingIndicator();
        const response = getYoungResponse(message);
        addMessage(response, 'bot');
    }, Math.random() * 1000 + 500);
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
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'bot');
    messageDiv.id = 'typing-indicator';
    
    const avatar = document.createElement('div');
    avatar.classList.add('message-avatar');
    avatar.textContent = '🤖';
    
    const content = document.createElement('div');
    content.classList.add('message-content', 'typing-indicator');
    
    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('div');
        dot.classList.add('typing-dot');
        content.appendChild(dot);
    }
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

function removeTypingIndicator() {
    const typing = document.getElementById('typing-indicator');
    if (typing) {
        typing.remove();
    }
}

function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Welcome message
window.addEventListener('load', () => {
    addMessage('Hey! 👋 I\'m Young, your AI assistant! I\'m an expert in football and goalkeeping. Feel free to ask me anything about the beautiful game, and I can also help with general questions. What would you like to know? ⚽', 'bot');
});