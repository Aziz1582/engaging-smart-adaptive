# How to Share Your EduAI App with Students

## Quick Start (5 minutes)

### Step 1: Deploy to Vercel (Free & Easy)
1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click "New Project" and import your code repository
3. Vercel will automatically build and deploy your app
4. You'll get a public URL like: `https://your-app-name.vercel.app`

### Step 2: Share with Students
Send your students:
1. **App URL**: The Vercel link from Step 1
2. **Login Instructions**:
   - Go to the app URL
   - Use email: `student1@school.com` (or student2, student3, etc.)
   - Use any password (demo mode)

## Alternative Deployment Options

### Option A: Netlify (Also Free)
1. Run `npm run build` in your project folder
2. Go to [netlify.com](https://netlify.com) and drag the `dist` folder
3. Get your public URL and share with students

### Option B: Local Network (Same WiFi)
1. Run `npm run dev -- --host` in your project
2. Find your computer's IP address (e.g., 192.168.1.100)
3. Students visit: `http://YOUR-IP:5173` on same WiFi

## Student Access Methods

### Mobile Devices (Recommended)
- Students open their phone browsers
- Go to your app URL
- App works like a native mobile app
- Can "Add to Home Screen" for app-like experience

### Desktop/Laptop
- Any web browser works
- Full functionality available
- Great for longer quiz sessions

## Demo Accounts Available

### Administrator Account
- Email: `admin@school.com`
- Password: any text
- Full access to create quizzes, manage students

### Student Accounts
- `student1@school.com` through `student10@school.com`
- Password: any text
- Each has separate progress tracking

## Making It Production Ready

### For Real Classroom Use:
1. **Set up Supabase backend** (free tier available)
2. **Create real user accounts** with proper passwords
3. **Add actual quiz content** through admin dashboard
4. **Enable push notifications** for mobile users
5. **Customize branding** with your school colors/logo

### Security Notes:
- Current version uses demo authentication
- For real use, implement proper password security
- Consider student privacy and data protection

## Troubleshooting

### Students Can't Access
- Check if URL is correct and accessible
- Ensure students are using supported browsers
- Try incognito/private browsing mode

### App Not Loading
- Verify deployment was successful
- Check browser console for errors
- Try different devices/browsers

## Support

For technical issues:
1. Check the browser console (F12) for error messages
2. Verify all students are using the same URL
3. Test with different devices to isolate issues

---

**Ready to go?** Deploy to Vercel and share the URL with your students!