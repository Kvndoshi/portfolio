// Spotlight Effect
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.bento-card');
    
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// 3D Tilt Effect
document.querySelectorAll('.bento-card[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -2; // Max rotation deg
        const rotateY = ((x - centerX) / centerX) * 2;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

// Typewriter Effect
const roleElement = document.querySelector('.role-text');
const roles = [
    "Computer Vision Engineer",
    "AI/ML Specialist",
    "Deep Learning Researcher",
    "Photogrammetry Expert"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeRole() {
    if (!roleElement) return;
    
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        roleElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        roleElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }

    setTimeout(typeRole, typeSpeed);
}

typeRole();

// LLM Interaction (Mock)
const llmInput = document.getElementById('llm-input');
const llmSubmit = document.getElementById('llm-submit');
const llmResponse = document.getElementById('llm-response');

function handleLLMSubmit() {
    const query = llmInput.value.trim();
    if (!query) return;

    // User Message
    const userMsg = document.createElement('div');
    userMsg.className = 'user-msg';
    userMsg.style.textAlign = 'right';
    userMsg.style.marginTop = '10px';
    userMsg.style.color = '#fff';
    userMsg.textContent = query;
    llmResponse.appendChild(userMsg);
    
    llmInput.value = '';
    
    // AI Thinking
    const aiMsg = document.createElement('div');
    aiMsg.className = 'ai-msg';
    aiMsg.style.marginTop = '10px';
    aiMsg.style.color = '#a1a1aa';
    aiMsg.textContent = 'Thinking...';
    llmResponse.appendChild(aiMsg);
    
    // Scroll to bottom
    llmResponse.scrollTop = llmResponse.scrollHeight;

    setTimeout(() => {
        aiMsg.textContent = generateMockResponse(query);
    }, 1000);
}

function generateMockResponse(query) {
    const q = query.toLowerCase();
    if (q.includes('skill') || q.includes('stack')) {
        return "My stack includes Python, PyTorch, OpenCV, and LangChain. I specialize in Photogrammetry and Embedded AI.";
    } else if (q.includes('isro')) {
        return "At ISRO, I worked on semantic segmentation for satellite imagery using U-Net and EfficientNet.";
    } else {
        return "I can tell you about my projects, skills, or experience. Try asking 'What did you do at NASA?'";
    }
}

if (llmSubmit) {
    llmSubmit.addEventListener('click', handleLLMSubmit);
    llmInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLLMSubmit();
    });
}
