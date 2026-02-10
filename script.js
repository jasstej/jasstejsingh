// =====================
// NAVBAR FUNCTIONALITY
// =====================

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

// Toggle mobile menu
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Update active nav link on scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

updateActiveNavLink();

// =====================
// TYPEWRITER EFFECT
// =====================

const lines = [
    { prefix: '$ ', text: 'whoami', delay: 0 },
    { prefix: '', text: 'Jasstej Singh Marwaha', delay: 800 },
    { prefix: '', text: 'Cybersecurity Researcher | B.Tech CSE Student', delay: 1600 },
    { prefix: '📍 ', text: 'Punjab, India', delay: 2200 }
];

function createTypewriterEffect() {
    const terminalBody = document.querySelector('.terminal-body');
    let currentLineIndex = 0;
    let currentCharIndex = 0;

    const typewriter = setInterval(() => {
        if (currentLineIndex >= lines.length) {
            clearInterval(typewriter);
            return;
        }

        const line = lines[currentLineIndex];
        const fullText = line.prefix + line.text;

        if (currentCharIndex === 0) {
            // Wait for line delay before starting
            if (currentLineIndex > 0) {
                const delay = line.delay - (lines[currentLineIndex - 1]?.delay || 0);
                return;
            }
        }

        currentCharIndex++;

        // Render the terminal
        renderTerminal();

        if (currentCharIndex > fullText.length) {
            currentLineIndex++;
            currentCharIndex = 0;
        }
    }, 35);

    function renderTerminal() {
        const completedLines = lines.slice(0, currentLineIndex).map((line, i) => {
            return `
                <div class="terminal-line ${i === 0 ? 'command' : 'output' + (i === 1 ? ' name' : i === 3 ? ' location' : ' title')}">
                    ${line.prefix}<span>${line.text}</span>
                </div>
            `;
        }).join('');

        let currentLineHTML = '';
        if (currentLineIndex < lines.length) {
            const line = lines[currentLineIndex];
            const fullText = line.prefix + line.text;
            const partialText = fullText.substring(0, currentCharIndex);
            
            const className = currentLineIndex === 0 ? 'command' : 
                            currentLineIndex === 1 ? 'output name' : 
                            currentLineIndex === 3 ? 'output location' : 
                            'output title';
            
            currentLineHTML = `
                <div class="terminal-line ${className}">
                    ${partialText}<span class="cursor">▋</span>
                </div>
            `;
        }

        const promptHTML = currentLineIndex >= lines.length ? `
            <div class="terminal-line command prompt">
                $ <span class="cursor">▋</span>
            </div>
        ` : '';

        terminalBody.innerHTML = completedLines + currentLineHTML + promptHTML;
    }

    renderTerminal();
}

// Delay typewriter effect until page is loaded
window.addEventListener('load', () => {
    setTimeout(createTypewriterEffect, 100);
});

// =====================
// CONTACT FORM
// =====================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const message = document.getElementById('messageInput').value;

    // Create mailto link
    const subject = `Contact from ${name}`;
    const body = encodeURIComponent(message);
    const mailtoLink = `mailto:jasstej@example.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Open mailto
    window.location.href = mailtoLink;

    // Reset form
    contactForm.reset();
});

// =====================
// SMOOTH SCROLL
// =====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =====================
// SCROLL ANIMATIONS
// =====================

function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-card, .project-card, .cert-card, .experience-timeline, .highlight-card').forEach(el => {
        observer.observe(el);
    });
}

window.addEventListener('load', observeElements);

// =====================
// ADD FADE IN UP ANIMATION
// =====================

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .skill-card, .project-card, .cert-card, .experience-timeline, .highlight-card {
        opacity: 0;
    }
`;
document.head.appendChild(style);
