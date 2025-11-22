// Custom Cursor Logic
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot follows instantly
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Outline follows with slight delay via CSS transition
        // But we set position directly for performance
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Hover effects for cursor
    const interactives = document.querySelectorAll('a, button, .project-card');
    interactives.forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.classList.add('hovering');
        });
        el.addEventListener('mouseleave', () => {
            document.body.classList.remove('hovering');
        });
    });
}

// Scroll Reveal Logic
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

const revealElements = document.querySelectorAll('.reveal-text, .reveal-image, .reveal-item');
revealElements.forEach(el => observer.observe(el));


// LLM Interaction Logic
const llmInput = document.getElementById('llm-input');
const llmSubmit = document.getElementById('llm-submit');
const chatHistory = document.getElementById('chat-history');
const suggestionBtns = document.querySelectorAll('.suggestion-btn');

function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('chat-msg', sender);
    msgDiv.textContent = text;
    chatHistory.appendChild(msgDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

function handleLLMSubmit() {
    const query = llmInput.value.trim();
    if (!query) return;

    // User Message
    addMessage(query, 'user');
    llmInput.value = '';

    // Simulate AI thinking
    setTimeout(() => {
        const response = generateMockResponse(query);
        addMessage(response, 'ai');
    }, 800);
}

function generateMockResponse(query) {
    const q = query.toLowerCase();
    if (q.includes('stack') || q.includes('tech')) {
        return "My technical toolkit includes Python, PyTorch, and OpenCV. I specialize in Photogrammetry, 3D Reconstruction, and Embedded AI systems.";
    } else if (q.includes('isro')) {
        return "During my time at ISRO, I focused on semantic segmentation of satellite imagery using architectures like U-Net and EfficientNet to analyze complex geospatial data.";
    } else if (q.includes('photo') || q.includes('3d')) {
        return "I'm currently building automated 3D reconstruction pipelines for NASA & Lunar Outpost, turning 2D imagery into high-fidelity 3D models for VR exploration.";
    } else {
        return "I can tell you about my Computer Vision research, my work with NASA/ISRO, or my projects. What would you like to know?";
    }
}

if (llmSubmit) {
    llmSubmit.addEventListener('click', handleLLMSubmit);
    llmInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLLMSubmit();
    });
}

// Handle suggestions
suggestionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const prompt = btn.getAttribute('data-prompt');
        llmInput.value = prompt;
        handleLLMSubmit();
    });
});
