# Arish Limbu | Developer Portfolio

A premium, futuristic 3D developer portfolio website built with React, Three.js, and modern web technologies. This portfolio showcases projects, skills, education, and professional achievements in an interactive "Developer Universe" theme.

![Portfolio Preview](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-0.169.0-000000?style=flat-square&logo=three.js)
![Vite](https://img.shields.io/badge/Vite-5.4.8-646CFF?style=flat-square&logo=vite)

## 🌟 Features

- **Interactive 3D Universe**: Immersive Three.js/React Three Fiber hero section with particles, floating objects, and smooth animations
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Modern UI/UX**: Glassmorphism, smooth transitions, and premium aesthetics
- **Project Showcase**: Interactive project cards with modal details and 3D hover effects
- **Skills Visualization**: Categorized tech stack with interactive cards
- **Education Timeline**: Animated journey timeline
- **GitHub Integration**: Live GitHub profile data with fallback to static data
- **Contact Form**: Functional contact form ready for Formspree/EmailJS integration
- **Custom Cursor**: Smooth custom cursor for desktop users
- **Loading Animation**: Cinematic loading sequence
- **SEO Optimized**: Meta tags, robots.txt, and sitemap.xml included
- **Accessibility**: WCAG compliant with reduced motion support

## 🚀 Technologies

### Core
- **React 18.3.1** - UI library
- **Vite 5.4.8** - Build tool and dev server
- **JavaScript/JSX** - Programming language

### 3D & Animation
- **Three.js 0.169.0** - 3D graphics library
- **@react-three/fiber 8.17.10** - React renderer for Three.js
- **@react-three/drei 9.114.3** - Useful helpers for React Three Fiber
- **Framer Motion 11.5.4** - Animation library
- **GSAP 3.12.5** - Professional animation library (ready for scroll animations)

### UI & Styling
- **CSS3** - Styling with custom properties
- **Lucide React 0.445.0** - Icon library

### Data
- **JSON/JavaScript** - Structured portfolio data

## 📁 Project Structure

```
arish-limbu-portfolio/
│
├── public/
│   ├── images/           # Project images, screenshots
│   ├── models/           # 3D models (GLB/GLTF)
│   ├── textures/         # Texture files
│   ├── icons/            # Custom icons
│   ├── favicon.svg       # Website favicon
│   ├── robots.txt        # SEO robots file
│   └── sitemap.xml       # SEO sitemap
│
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Button.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── Modal.jsx
│   │   ├── CustomCursor.jsx
│   │   └── Footer.jsx
│   │
│   ├── sections/         # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Certificates.jsx
│   │   ├── Github.jsx
│   │   └── Contact.jsx
│   │
│   ├── three/           # 3D components
│   │   ├── Scene.jsx
│   │   ├── Particles.jsx
│   │   ├── FloatingObjects.jsx
│   │   └── CameraController.jsx
│   │
│   ├── animations/      # Animation configurations
│   │   └── (ready for GSAP implementations)
│   │
│   ├── data/            # Editable portfolio data
│   │   ├── profile.js
│   │   ├── skills.js
│   │   ├── projects.js
│   │   ├── education.js
│   │   ├── certificates.js
│   │   └── socialLinks.js
│   │
│   ├── styles/          # CSS files
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── responsive.css
│   │
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
│
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── index.html           # HTML template
└── README.md           # This file
```

## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Arish0limbu/arish-limbu-portfolio.git
   cd arish-limbu-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📜 Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement.

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist` directory.

### Preview
```bash
npm run preview
```
Previews the production build locally.

### Lint
```bash
npm run lint
```
Runs ESLint to check for code quality issues.

## 🌐 GitHub Pages Deployment

### Automatic Deployment

1. **Update Vite Configuration**
   The `vite.config.js` is already configured for GitHub Pages with:
   ```js
   base: '/arish-limbu-portfolio/',
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**
   - Go to your repository Settings > Pages
   - Set source to `gh-pages` branch or use GitHub Actions
   - Or manually deploy the `dist` folder

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy dist folder**
   - Push the `dist` folder to your GitHub repository
   - Or use GitHub Pages from the `main` branch with `/docs` folder

## 🎨 Customization

### Personal Information

Edit the data files in `src/data/`:

**profile.js**
```javascript
export const profile = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  github: "your-github-username",
  // ... other profile information
};
```

**projects.js**
```javascript
export const projects = [
  {
    name: "Project Name",
    description: "Project description",
    technologies: ["React", "Node.js"],
    github: "https://github.com/username/repo",
    demo: "https://your-demo-url.com",
    // ... other project details
  }
];
```

### Styling

Edit CSS variables in `src/styles/variables.css`:
```css
:root {
  --color-accent-primary: #6366f1;
  --color-accent-secondary: #8b5cf6;
  /* ... other color variables */
}
```

### 3D Scene

Modify 3D components in `src/three/`:
- Adjust particle count in `Particles.jsx`
- Change floating objects in `FloatingObjects.jsx`
- Modify camera controls in `CameraController.jsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Desktop**: 1200px+
- **Laptop**: 992px - 1199px
- **Tablet**: 768px - 991px
- **Mobile**: 576px - 767px
- **Small Mobile**: < 576px

Mobile optimizations include:
- Reduced particle count
- Simplified 3D effects
- Touch-friendly navigation
- Optimized animations

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus states for interactive elements
- Reduced motion support (`prefers-reduced-motion`)
- Screen reader friendly
- Color contrast compliance

## 🔧 Performance Optimizations

- Code splitting with Vite
- Lazy loading of 3D assets
- Optimized images (use WebP/AVIF)
- Reduced particle count on mobile
- Efficient Three.js rendering
- GPU-friendly animations
- Proper resource disposal

## 📧 Contact Form Integration

The contact form is ready for integration with:

### Formspree
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the form action in `Contact.jsx`

### EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Configure your service
3. Integrate in `Contact.jsx`

## 🐛 Troubleshooting

### Common Issues

**Build fails with "Cannot find module"**
```bash
rm -rf node_modules package-lock.json
npm install
```

**3D scene not rendering**
- Check browser console for WebGL errors
- Ensure hardware acceleration is enabled
- Try reducing particle count in `Particles.jsx`

**GitHub Pages 404 errors**
- Verify `base` path in `vite.config.js`
- Check repository settings for Pages source
- Ensure `dist` folder is properly deployed

**Styles not loading**
- Clear browser cache
- Check CSS file imports in `main.jsx`
- Verify CSS variable syntax

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Arish Limbu**
- GitHub: [@Arish0limbu](https://github.com/Arish0limbu)
- Portfolio: [arish0limbu.github.io/arish-limbu-portfolio](https://arish0limbu.github.io/arish-limbu-portfolio)

## 🙏 Acknowledgments

- React team for the amazing library
- Three.js community for 3D web graphics
- Framer Motion for smooth animations
- Lucide for beautiful icons
- Vite for the fast build tool

## 📄 Additional Notes

- The project uses ES modules and requires modern browsers
- For best performance, use Chrome, Firefox, Safari, or Edge
- The 3D scene may not work on browsers without WebGL support
- Contact form requires backend integration for actual email sending

## 🔄 Version History

- **v1.0.0** (2026-08-28)
  - Initial release
  - Complete portfolio implementation
  - 3D hero section with particles
  - All sections implemented
  - Responsive design
  - GitHub Pages ready

---

Built with ❤️ by Arish Limbu
