# Deploy to Vercel - Step by Step Guide

## Quick Start (No GitHub Required)

### Method 1: Direct Upload to Vercel
1. Build your app locally:
   ```bash
   npm run build
   ```
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "Add New" → "Project"
4. Drag and drop your `dist` folder to Vercel
5. Get your public URL instantly!

### Method 2: GitHub + Vercel (Recommended)
1. **Create GitHub Repository:**
   - Go to [github.com](https://github.com) and create account
   - Click "New Repository"
   - Name it "eduai-learning-platform"
   - Make it public
   - Don't initialize with README (we have one)

2. **Upload Your Code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/eduai-learning-platform.git
   git push -u origin main
   ```

3. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import from GitHub
   - Select your repository
   - Click "Deploy"
   - Get your public URL!

## Your Repository URL Structure

Once uploaded to GitHub, your repository URL will be:
```
https://github.com/YOUR_USERNAME/eduai-learning-platform
```

Your live app URL from Vercel will be:
```
https://eduai-learning-platform-YOUR_USERNAME.vercel.app
```

## Share with Students

1. **Give students the Vercel URL** (not GitHub URL)
2. **Provide login credentials:**
   - Students: student1@school.com, student2@school.com, etc.
   - Admin: admin@school.com
   - Password: any text works

## Troubleshooting

- **Build fails?** Run `npm run build` locally first
- **404 errors?** Check if all files uploaded correctly
- **Need help?** Contact Vercel support or check their docs

## Alternative: Quick Deploy Services

- **Netlify**: Similar to Vercel, drag & drop `dist` folder
- **GitHub Pages**: Free hosting directly from GitHub
- **Firebase Hosting**: Google's hosting service

The Vercel URL is what you share with students - not the GitHub repository URL!