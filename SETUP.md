# Setup Guide

This guide will help you set up and run the Arish Limbu Developer Portfolio project on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- A code editor (VS Code recommended)

## Step 1: PowerShell Execution Policy Fix

If you encountered PowerShell execution policy errors, you need to fix this first:

### Option A: Temporary Fix (Current Session Only)
Run this command in PowerShell:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
```

### Option B: Permanent Fix (For Current User)
Run this command in PowerShell:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## Step 2: Install Dependencies

Once PowerShell is fixed, install the project dependencies:

```bash
npm install
```

This will install all required packages including:
- React and React DOM
- Three.js and React Three Fiber
- Framer Motion
- GSAP
- Lucide React icons
- Vite and build tools

## Step 3: Start Development Server

Run the development server:

```bash
npm run dev
```

The server will start at `http://localhost:3000` and should open automatically in your browser.

## Step 4: Project Customization

### Update Personal Information

Edit the files in `src/data/` directory:

1. **src/data/profile.js** - Update your personal information
2. **src/data/projects.js** - Add your projects
3. **src/data/skills.js** - Update your skills
4. **src/data/education.js** - Add your education
5. **src/data/certificates.js** - Add your certificates
6. **src/data/socialLinks.js** - Update your social links

### Update GitHub Configuration

1. **Update GitHub username** in `src/data/profile.js`:
   ```javascript
   github: "your-github-username"
   ```

2. **Update Vite base path** in `vite.config.js` if your repository name is different:
   ```javascript
   base: '/your-repo-name/',
   ```

### Add Project Images

1. Place your project screenshots in `public/images/projects/`
2. Update image paths in `src/data/projects.js`:
   ```javascript
   image: "/images/projects/your-project.jpg"
   ```

### Add Resume

1. Place your resume PDF in `public/` directory
2. Name it `resume.pdf`
3. The navbar will automatically link to it

## Step 5: Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized `dist` folder ready for deployment.

## Step 6: Local Testing

Test the production build locally:

```bash
npm run preview
```

## GitHub Pages Deployment

### Option 1: GitHub Actions (Recommended)

1. Create a `.github/workflows/deploy.yml` file
2. Add the workflow configuration
3. Push to GitHub
4. Enable GitHub Pages in repository settings

### Option 2: Manual Deployment

1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages
3. Or use the `gh-pages` branch

### Option 3: GitHub CLI

```bash
npm install -g gh-pages
npm run build
gh-pages -d dist
```

## Troubleshooting

### "Cannot find module" Error

```bash
rm -rf node_modules package-lock.json
npm install
```

### PowerShell Execution Policy Error

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Port Already in Use

Change the port in `vite.config.js`:
```javascript
server: {
  port: 3001, // Change to available port
  open: true
}
```

### 3D Scene Not Rendering

- Check browser console for WebGL errors
- Ensure hardware acceleration is enabled
- Try reducing particle count in `src/three/Particles.jsx`

### Styles Not Loading

- Clear browser cache
- Check CSS imports in `src/main.jsx`
- Verify CSS variable syntax

## Development Tips

### Hot Module Replacement

The development server supports hot module replacement. Changes to React components will automatically refresh.

### CSS Changes

CSS changes also hot-reload. No need to refresh the browser manually.

### 3D Scene Development

For 3D development:
- Use the React DevTools for component inspection
- Check the browser console for Three.js errors
- Test on multiple browsers for WebGL compatibility

## Performance Optimization

### Image Optimization

- Use WebP format for better compression
- Optimize image sizes before adding to project
- Use lazy loading for large images

### 3D Performance

- Reduce particle count on mobile devices
- Use simple geometries instead of complex models
- Enable response for GPU acceleration

### Build Optimization

The project is already configured with:
- Code splitting
- Tree shaking
- Asset optimization
- Minification

## Next Steps

1. ✅ Fix PowerShell execution policy
2. ✅ Install dependencies with `npm install`
3. ✅ Start development server with `npm run dev`
4. ✅ Customize portfolio data
5. ✅ Add your project images
6. ✅ Test thoroughly on different devices
7. ✅ Build for production with `npm run build`
8. ✅ Deploy to GitHub Pages

## Additional Resources

- [React Documentation](https://react.dev/)
- [Three.js Documentation](https://threejs.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## Support

If you encounter issues:
1. Check the browser console for errors
2. Review the troubleshooting section above
3. Check the main README.md for additional information
4. Ensure all dependencies are properly installed

---

**Happy Development! 🚀**
