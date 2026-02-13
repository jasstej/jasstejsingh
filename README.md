# 🔐 Jasstej Singh - Cybersecurity Portfolio

> **Live Portfolio**: [jasstej.github.io/jasstejsingh](https://jasstej.github.io/jasstejsingh/)

Cybersecurity researcher & developer focused on **network security**, **vulnerability research**, and **security automation**. This repository contains my professional portfolio showcasing 9+ cybersecurity projects and research work.

---

## 📋 About This Repository

This is a **pure HTML/CSS/JS portfolio** deployed on GitHub Pages - no build process required.

## Features

- ✅ **Fully Static** - No build process required, pure HTML/CSS/JS
- ✅ **Responsive Design** - Mobile-friendly and fully responsive
- ✅ **Terminal Theme** - Cybersecurity-themed dark interface
- ✅ **Interactive Elements** - Typewriter effect, smooth scrolling, mobile menu
- ✅ **GitHub Pages Ready** - Deploy directly to GitHub Pages
- ✅ **Fast & Lightweight** - Minimal dependencies, optimized performance
- ✅ **Accessible** - Semantic HTML, keyboard navigation support

## Files

- `index.html` - Main HTML file with all sections
- `styles.css` - All styling with CSS custom properties
- `script.js` - Interactivity and animations
- `README.md` - This file

## How to Use Locally

1. Clone or download this folder
2. Open `index.html` in your web browser
3. That's it! No build process needed.

## Deploy to GitHub Pages

### Method 1: Using GitHub Web Interface

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to **Settings** > **Pages**
4. Under "Source", select **main** (or your branch) and **/root**
5. Click **Save**
6. Your site will be available at `https://yourusername.github.io/repository-name/`

### Method 2: Using Git Command Line

```bash
# Clone your GitHub repository
git clone https://github.com/yourusername/your-repo.git
cd your-repo

# Copy all files from this folder to your repo folder
# Then:
git add .
git commit -m "Add static portfolio"
git push origin main

# Go to Settings > Pages and enable GitHub Pages
```

### Method 3: Deploy to root of username.github.io

If you have a `username.github.io` repository:

1. Upload all files directly to the root of your repository
2. GitHub Pages will automatically serve `index.html` at `https://yourusername.github.io/`

## Customization

### Update Your Information

Edit `index.html` and update:

- **Hero Section**: Name, title, location
- **About Section**: Bio and highlights
- **Skills Section**: Your skills and tools
- **Experience Section**: Your experience and roles
- **Projects Section**: Your projects details
- **Certifications Section**: Your achievements
- **Contact Section**: Email and links

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary: #40c463;        /* Green accent color */
    --secondary: #58a6ff;      /* Blue accent color */
    --background: #0f1117;     /* Dark background */
    --foreground: #d8e0ea;     /* Light text */
    /* ... more variables ... */
}
```

### Update Social Links

In `index.html`, update the social media links:

- GitHub: Change `https://github.com/jasstej`
- LinkedIn: Change `https://linkedin.com/in/jasstej-singh`
- Email: Change `jasstej@example.com`

### Update Resume Link

In the Hero section, update:
```html
<a href="#" class="btn btn-secondary">Download Resume</a>
```

Replace `#` with a direct link to your resume PDF.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Page Size**: ~50KB (uncompressed)
- **Load Time**: <1 second on average connection

## Features Explained

### Typewriter Effect
The hero section displays text with a typewriter animation. This is done purely with JavaScript without any external libraries.

### Mobile Responsive Menu
The navigation bar includes a hamburger menu on mobile devices that toggles with smooth animation.

### Smooth Scrolling
All internal links use smooth scrolling to navigate between sections.

### Active Navigation Highlighting
The navbar automatically highlights the current section as you scroll.

### Intersection Observer
Elements fade in as they come into view for a smooth scroll experience.

## Tips

1. **Use a CDN for Assets**: If you add images, consider using a CDN for faster loading
2. **SEO Optimization**: Update meta tags and add Open Graph tags for better sharing
3. **Custom Domain**: Follow GitHub's guide to connect a custom domain
4. **Analytics**: Add Google Analytics by adding a script tag in the `<head>`

## License

Free to use and modify for your personal portfolio.

## Need Help?

- Check [GitHub Pages Documentation](https://docs.github.com/en/pages)
- Review the HTML, CSS, and JS files for specific customizations
- Test responsiveness using browser DevTools

---

**Last Updated**: February 2025

Build with 💚 for GitHub Pages
