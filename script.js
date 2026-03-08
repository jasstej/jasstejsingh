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

// =====================
// NAVBAR SCROLL EFFECT
// =====================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, { passive: true });

// =====================
// WRITINGS DROPDOWN
// =====================

const writingsDropdown = document.getElementById('writingsDropdown');
const writingsBtn = document.getElementById('writingsDropdownBtn');

if (writingsDropdown && writingsBtn) {
    writingsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        writingsDropdown.classList.toggle('open');
    });

    // Close when clicking outside
    document.addEventListener('click', () => {
        writingsDropdown.classList.remove('open');
    });

    // Close when pressing Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') writingsDropdown.classList.remove('open');
    });
}

// =====================
// ACTIVE NAV LINK TRACKING
// =====================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links-desktop .nav-link[href^="#"]');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active'));
            const id = entry.target.getAttribute('id');
            const activeLink = document.querySelector(`.nav-links-desktop .nav-link[href="#${id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
}, {
    rootMargin: '-40% 0px -55% 0px',
    threshold: 0
});

sections.forEach(section => navObserver.observe(section));

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
    let startTime = Date.now();
    let cursorVisible = true;
    let lastCursorToggle = Date.now();

    const typewriter = setInterval(() => {
        const elapsedTime = Date.now() - startTime;

        if (Date.now() - lastCursorToggle > 500) {
            cursorVisible = !cursorVisible;
            lastCursorToggle = Date.now();
        }

        let activeLineIndex = 0;
        for (let i = 0; i < lines.length; i++) {
            if (elapsedTime >= lines[i].delay) {
                activeLineIndex = i;
            } else {
                break;
            }
        }

        if (activeLineIndex > currentLineIndex) {
            currentLineIndex = activeLineIndex;
            currentCharIndex = 0;
        }

        if (currentLineIndex >= lines.length) {
            clearInterval(typewriter);
            renderTerminal();
            return;
        }

        const line = lines[currentLineIndex];
        const lineShouldStartTime = startTime + line.delay;
        const lineElapsedTime = Date.now() - lineShouldStartTime;
        const charsToShow = Math.floor(lineElapsedTime / 35);

        currentCharIndex = Math.min(charsToShow, (line.prefix + line.text).length);

        renderTerminal();
    }, 35);

    function renderTerminal() {
        const completedLines = lines.slice(0, currentLineIndex).map((line, i) => {
            const cls = i === 0 ? 'command'
                      : i === 1 ? 'output name'
                      : i === 3 ? 'output location'
                      : 'output title';
            return `<div class="terminal-line ${cls}">${line.prefix}<span>${line.text}</span></div>`;
        }).join('');

        let currentLineHTML = '';
        if (currentLineIndex < lines.length) {
            const line = lines[currentLineIndex];
            const fullText = line.prefix + line.text;
            const partialText = fullText.substring(0, currentCharIndex);
            const cursorChar = cursorVisible ? '▋' : '&nbsp;';
            const cls = currentLineIndex === 0 ? 'command'
                      : currentLineIndex === 1 ? 'output name'
                      : currentLineIndex === 3 ? 'output location'
                      : 'output title';
            currentLineHTML = `<div class="terminal-line ${cls}">${partialText}<span class="cursor">${cursorChar}</span></div>`;
        }

        const promptHTML = currentLineIndex >= lines.length
            ? `<div class="terminal-line command prompt">$ <span class="cursor">${cursorVisible ? '▋' : '&nbsp;'}</span></div>`
            : '';

        terminalBody.innerHTML = completedLines + currentLineHTML + promptHTML;
    }

    renderTerminal();
}

window.addEventListener('load', () => {
    setTimeout(createTypewriterEffect, 100);
});

// =====================
// SCROLL ANIMATIONS
// =====================

const animatedEls = document.querySelectorAll(
    '.skill-card, .project-card, .cert-card, .highlight-card, .timeline-item'
);

// Add scroll-hidden and stagger delays per grid group
const staggerGroups = [
    '.projects-grid',
    '.skills-grid',
    '.highlights-grid',
    '.certifications-grid',
    '.experience-timeline'
];

staggerGroups.forEach(selector => {
    const group = document.querySelector(selector);
    if (!group) return;
    const children = group.querySelectorAll(':scope > *');
    children.forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.07}s`;
    });
});

animatedEls.forEach(el => el.classList.add('scroll-hidden'));

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('scroll-hidden');
            entry.target.classList.add('scroll-visible');
            scrollObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
});

animatedEls.forEach(el => scrollObserver.observe(el));

// =====================
// CONTACT FORM
// =====================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('nameInput').value;
    const message = document.getElementById('messageInput').value;
    const subject = `Contact from ${name}`;
    const body = encodeURIComponent(message);
    const mailtoLink = `mailto:sjasstej@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailtoLink;
    contactForm.reset();
});

// =====================
// SMOOTH SCROLL
// =====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') {
            e.preventDefault();
            return;
        }
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
