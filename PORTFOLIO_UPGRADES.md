# Portfolio Upgrade Instructions

Follow these steps to add the **Enhanced LLM Section** and the new **Hackathon Section** to your portfolio.

## 1. Update HTML (`index.html`)

### A. Add Navigation Link
Find the `<nav class="nav-links">` section and add the Hackathon link:

```html
<nav class="nav-links">
    <!-- ... existing links ... -->
    <a href="#hackathons" class="nav-link">
        <span class="nav-line"></span>
        <span>Hackathons</span>
    </a>
</nav>
```

### B. Replace LLM Section
Replace the existing `<!-- KVN LLM Section -->` block with this enhanced version:

```html
<!-- KVN LLM Section -->
<section id="kvn-llm" class="section-container llm-section">
    <div class="llm-header">
        <h3 class="section-title">KVN LLM</h3>
        <span class="llm-badge">AI-Powered</span>
    </div>
    <p class="llm-description">
        An intelligent assistant powered by advanced language models. Ask questions about my experience, technical skills, projects, or anything else you'd like to know.
    </p>
    
    <div class="llm-prompts">
        <p class="prompts-label">Try asking:</p>
        <div class="prompt-buttons">
            <button class="prompt-btn" data-prompt="What are your main technical skills?">💻 Technical Skills</button>
            <button class="prompt-btn" data-prompt="Tell me about your experience at ISRO">🚀 ISRO Experience</button>
            <button class="prompt-btn" data-prompt="What projects have you built with AI/ML?">🤖 AI/ML Projects</button>
            <button class="prompt-btn" data-prompt="What's your educational background?">🎓 Education</button>
        </div>
    </div>

    <div class="llm-container">
        <input type="text" class="llm-input" id="llm-input" placeholder="Ask me anything...">
        <button class="llm-submit" id="llm-submit">
            <span class="submit-text">Send</span>
            <span class="submit-icon">→</span>
        </button>
    </div>
    <div class="llm-response" id="llm-response"></div>
</section>
```

### C. Add Hackathon Section
Add this new section after the `<!-- Projects Section -->` block:

```html
<!-- Hackathon Section -->
<section id="hackathons" class="section-container">
    <h3 class="section-title">Hackathons</h3>
    <div class="hackathon-grid">
        
        <!-- Hackathon Item 1 -->
        <div class="hackathon-card">
            <div class="hackathon-image-container">
                <!-- Replace src with your actual image path -->
                <img src="hackathon1.jpg" alt="Hackathon Event" class="hackathon-img">
                <div class="hackathon-overlay">
                    <span class="hackathon-award">🏆 1st Place</span>
                </div>
            </div>
            <div class="hackathon-content">
                <h4 class="hackathon-name">SunHacks 2024</h4>
                <p class="hackathon-desc">
                    Built an AI-powered accessibility tool for visually impaired users. 
                    Leveraged computer vision to describe surroundings in real-time.
                </p>
                <div class="tech-tags">
                    <span class="tag">Computer Vision</span>
                    <span class="tag">OpenAI API</span>
                </div>
            </div>
        </div>

        <!-- Hackathon Item 2 -->
        <div class="hackathon-card">
            <div class="hackathon-image-container">
                <img src="hackathon2.jpg" alt="Hackathon Event" class="hackathon-img">
            </div>
            <div class="hackathon-content">
                <h4 class="hackathon-name">HackArizona</h4>
                <p class="hackathon-desc">
                    Developed a decentralized voting system using blockchain technology.
                    Ensured transparent and tamper-proof election results.
                </p>
                <div class="tech-tags">
                    <span class="tag">Blockchain</span>
                    <span class="tag">Solidity</span>
                </div>
            </div>
        </div>

    </div>
</section>
```

## 2. Update CSS (`style.css`)

Add these styles to the end of your `style.css` file:

```css
/* Enhanced KVN LLM Section */
.llm-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.llm-badge {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: rgba(74, 222, 128, 0.1);
    color: #4ADE80;
    padding: 0.25rem 0.75rem;
    border-radius: 100px;
    border: 1px solid rgba(74, 222, 128, 0.2);
    font-weight: 600;
}

.llm-description {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 2rem;
}

.llm-prompts {
    margin-bottom: 1.5rem;
}

.prompts-label {
    font-size: 0.8rem;
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
    font-family: var(--font-mono);
}

.prompt-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.prompt-btn {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    color: var(--text-secondary);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: var(--font-main);
}

.prompt-btn:hover {
    border-color: #4ADE80;
    color: #4ADE80;
    background: rgba(74, 222, 128, 0.05);
    transform: translateY(-1px);
}

.llm-container {
    display: flex;
    gap: 1rem;
    margin-bottom: 0;
    position: relative;
}

.llm-input {
    flex: 1;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 12px;
    padding: 1rem 1.5rem;
    color: var(--text-primary);
    font-family: var(--font-main);
    font-size: 1rem;
    transition: all 0.3s ease;
}

.llm-input:focus {
    outline: none;
    border-color: rgba(74, 222, 128, 0.5);
    box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.1);
}

.llm-submit {
    background: #4ADE80;
    border: none;
    border-radius: 12px;
    padding: 0 1.5rem;
    color: #000;
    font-family: var(--font-mono);
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.llm-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(74, 222, 128, 0.3);
}

.llm-response {
    margin-top: 1.5rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--card-border);
    border-radius: 12px;
    color: var(--text-primary);
    font-size: 0.95rem;
    line-height: 1.7;
    display: none;
    border-left: 3px solid #4ADE80;
}

.llm-response.active {
    display: block;
    animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Hackathon Section */
.hackathon-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.hackathon-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
}

.hackathon-card:hover {
    transform: translateY(-5px);
    border-color: rgba(74, 222, 128, 0.3);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.hackathon-image-container {
    width: 100%;
    height: 180px;
    background: var(--section-bg);
    position: relative;
    overflow: hidden;
}

.hackathon-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.hackathon-card:hover .hackathon-img {
    transform: scale(1.05);
}

.hackathon-overlay {
    position: absolute;
    top: 1rem;
    right: 1rem;
}

.hackathon-award {
    background: rgba(0, 0, 0, 0.8);
    color: #FFD700;
    padding: 0.3rem 0.8rem;
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 600;
    border: 1px solid rgba(255, 215, 0, 0.3);
    backdrop-filter: blur(4px);
}

.hackathon-content {
    padding: 1.5rem;
}

.hackathon-name {
    font-size: 1.1rem;
    color: var(--accent);
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.hackathon-desc {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1rem;
}

/* Mobile Adjustments */
@media (max-width: 768px) {
    .prompt-buttons {
        flex-direction: column;
    }
    
    .prompt-btn {
        width: 100%;
        text-align: left;
    }
    
    .hackathon-grid {
        grid-template-columns: 1fr;
    }
}
```

## 3. Update JavaScript (`script.js`)

Add this code to your `script.js` file:

```javascript
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
    llmResponse.classList.add('active');
    llmResponse.innerHTML = '<span class="typing">Thinking...</span>';
    
    // Simulate API delay
    setTimeout(() => {
        const mockResponse = generateMockResponse(query);
        typeWriter(mockResponse, llmResponse);
    }, 1500);
}

function generateMockResponse(query) {
    const q = query.toLowerCase();
    if (q.includes('skill') || q.includes('stack')) {
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
    element.innerHTML = '';
    let i = 0;
    const speed = 20; 
    
    function type() {
        if (i < text.length) {
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
            setTimeout(type, speed);
        }
    }
    type();
}
```
