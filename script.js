// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    // Save preference
    const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
});

// Navigation Active State (Top Nav)
const navLinks = document.querySelectorAll('.nav-link-top');
const sections = document.querySelectorAll('section[id]');

function setActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100; // Offset for sticky header
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveNav);

// Smooth Scroll
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offset = 80; // Height of sticky nav + padding
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = targetSection.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// KVN LLM Interaction
const llmInput = document.getElementById('llm-input');
const llmSubmit = document.getElementById('llm-submit');
const llmResponse = document.getElementById('llm-response');
const promptButtons = document.querySelectorAll('.prompt-btn');

// Handle prompt button clicks
if (promptButtons) {
    promptButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const prompt = btn.getAttribute('data-prompt');
            if (llmInput) {
                llmInput.value = prompt;
                llmInput.focus();
                // Optional: Auto-submit
                // handleLLMSubmit();
            }
        });
    });
}

// Handle submit
if (llmSubmit) {
    llmSubmit.addEventListener('click', handleLLMSubmit);
}

if (llmInput) {
    llmInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLLMSubmit();
    });
}

function handleLLMSubmit() {
    const query = llmInput.value.trim();
    if (!query) return;

    // Show loading state
    // llmResponse.classList.add('active');
    const loadingMsg = document.createElement('div');
    loadingMsg.innerHTML = '<span class="typing" style="color: var(--text-secondary);">Thinking...</span>';
    llmResponse.appendChild(loadingMsg);
    llmResponse.scrollTop = llmResponse.scrollHeight;

    // Simulate API delay
    setTimeout(() => {
        // Remove loading message
        llmResponse.removeChild(loadingMsg);
        
        // In a real app, you would fetch from your backend here
        const mockResponse = generateMockResponse(query);
        
        // Append User Query
        const userDiv = document.createElement('div');
        userDiv.style.marginBottom = '0.5rem';
        userDiv.style.color = 'var(--text-secondary)';
        userDiv.style.fontSize = '0.85rem';
        userDiv.textContent = `> ${query}`;
        llmResponse.appendChild(userDiv);

        // Append AI Response with Typewriter
        const aiDiv = document.createElement('div');
        aiDiv.style.marginBottom = '1.5rem';
        aiDiv.style.color = 'var(--text-primary)';
        llmResponse.appendChild(aiDiv);
        
        typeWriter(mockResponse, aiDiv);
        
        llmInput.value = '';
    }, 1000);
}

function generateMockResponse(query) {
    // Simple keyword matching for demo purposes
    const q = query.toLowerCase();
    if (q.includes('skill') || q.includes('stack') || q.includes('technical')) {
        return "My technical expertise includes **Python, PyTorch, and Computer Vision**. I specialize in building automated pipelines for 3D reconstruction and semantic segmentation. I'm also experienced with LLMs, LangChain, and embedded AI systems like ESP32.";
    } else if (q.includes('isro')) {
        return "At **ISRO**, I worked as an AI Research Intern where I implemented semantic segmentation models (U-Net, EfficientNet) for satellite imagery. I also developed a weather-focused LLM using LangChain to analyze meteorological data.";
    } else if (q.includes('project')) {
        return "I've built several impactful projects, including an **Automated ML Training Platform** using Streamlit and PyCaret, and **Air Drums**, a virtual instrument using IMU sensors and deep learning. Currently, I'm working on 3D reconstruction pipelines for NASA.";
    } else if (q.includes('education') || q.includes('asu')) {
        return "I'm currently pursuing my **M.S. in Computer Science at Arizona State University** with a 4.00 GPA. My coursework focuses on Artificial Intelligence, Machine Learning, and Visual Computing.";
    } else {
        return "That's an interesting question! As an AI assistant for Kevin's portfolio, I can tell you about his work in Computer Vision, his time at ISRO, or his projects at ASU. Feel free to ask about any of those topics.";
    }
}

function typeWriter(text, element) {
    let i = 0;
    const speed = 15; // typing speed in ms

    function type() {
        if (i < text.length) {
            // Handle bold formatting (simple implementation)
            if (text.substring(i).startsWith('**')) {
                const end = text.indexOf('**', i + 2);
                if (end !== -1) {
                    element.innerHTML += '<strong>' + text.substring(i + 2, end) + '</strong>';
                    i = end + 2;
                } else {
                    element.innerHTML += text.charAt(i);
                    i++;
                }
            } else {
                element.innerHTML += text.charAt(i);
                i++;
            }
            llmResponse.scrollTop = llmResponse.scrollHeight;
            setTimeout(type, speed);
        }
    }
    type();
}
