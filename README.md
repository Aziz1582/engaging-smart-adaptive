# EduAI Learning Platform

A cross-platform educational app with AI-powered features for students and administrators.

## Features

### For Students:
- Secure login and quiz taking
- AI-powered feedback and recommendations
- Progress tracking and study materials
- Mobile-friendly responsive design

### For Administrators:
- Student management and analytics
- Quiz creation and grading
- Content management system
- Performance insights

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser to the URL shown (usually http://localhost:5173)

### Demo Login Credentials
- **Administrator**: admin@school.com (any password)
- **Student**: student1@school.com (any password)

## Deployment Options

### Option 1: Deploy to Vercel (Recommended)
1. Push code to GitHub repository
2. Connect GitHub to Vercel (vercel.com)
3. Deploy automatically - get a public URL
4. Share the URL with students

### Option 2: Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Get public URL to share

### Option 3: Local Network Sharing
1. Run `npm run dev -- --host`
2. Share your local IP address with students on same network

## Sharing with Students

1. **Get a public URL** using Vercel/Netlify deployment
2. **Share login credentials**:
   - Student accounts: student1@school.com, student2@school.com, etc.
   - All use any password for demo
3. **Students access via**:
   - Web browsers on phones/tablets
   - Desktop computers
   - Any device with internet access

## Built With
- React + TypeScript
- Tailwind CSS
- Vite
- Supabase (backend ready)

## Next Steps
- Set up real authentication
- Connect to Supabase database
- Add real AI integration
- Enable push notifications