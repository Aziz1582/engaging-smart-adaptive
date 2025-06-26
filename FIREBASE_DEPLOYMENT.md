# Firebase Deployment Guide for EduAI Learning Platform

## Quick Setup

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Create Firebase Project**
   - Go to https://console.firebase.google.com
   - Click "Add project"
   - Enter project name: `eduai-learning-platform`
   - Follow setup steps

4. **Initialize Firebase in your project**
   ```bash
   firebase init hosting
   ```
   - Select your project
   - Set public directory to: `dist`
   - Configure as single-page app: `Yes`
   - Don't overwrite index.html: `No`

5. **Update .firebaserc**
   Replace `your-project-id` with your actual Firebase project ID

6. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

## Your App URL
After deployment, your app will be available at:
`https://your-project-id.web.app`

## Student Access
Share this URL with your students along with login credentials:
- Admin: admin@school.com / password123
- Students: student1@school.com through student10@school.com / password123

## Troubleshooting
- If build fails, run `npm install` first
- Make sure you're in the project root directory
- Check Firebase project permissions
