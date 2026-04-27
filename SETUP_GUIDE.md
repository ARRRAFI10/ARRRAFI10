# Quick Start Guide

Welcome to your professional portfolio website! Follow these steps to get started.

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- A code editor (VS Code recommended)
- Git (optional, for version control)

## 🚀 Quick Setup

### 1. Install Dependencies

Open PowerShell in the project directory and run:

```powershell
npm install
```

This will install all required packages including Next.js, React, TypeScript, Tailwind CSS, and more.

### 2. Start Development Server

```powershell
npm run dev
```

Your site will be available at: **http://localhost:3000**

### 3. Customize Your Content

Edit `src/lib/data.ts` to update:

```typescript
// Update your personal information
export const personalInfo = {
  name: "Your Actual Name",
  title: "Your Professional Title",
  email: "your.email@example.com",
  // ... more fields
};

// Add your skills
export const skills: Skill[] = [
  { name: "React", category: "frontend", level: 90 },
  // ... add your skills
];

// Update experiences
export const experiences: Experience[] = [
  {
    role: "Your Job Title",
    company: "Company Name",
    period: "2022 - Present",
    // ... more details
  },
];
```

### 4. Add Your CV Files

Place your CV files in the `public/` folder:

- `cv.pdf` - PDF version
- `cv.docx` - Word version

### 5. Update Social Links

In `src/lib/data.ts`, update your social media URLs:

```typescript
export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/YOUR_USERNAME", icon: "FaGithub" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/YOUR_USERNAME",
    icon: "FaLinkedin",
  },
  // ... more links
];
```

## 🎨 Customization Options

### Change Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    500: '#YOUR_COLOR', // Change primary color
  },
  tech: {
    500: '#YOUR_COLOR', // Change secondary color
  },
}
```

### Add Projects

In `src/lib/data.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Your Project Name",
    description: "Brief description",
    tags: ["React", "Node.js"],
    category: "fullstack", // or 'ai-ml', 'hardware'
    githubUrl: "https://github.com/...",
    liveUrl: "https://your-project.com",
    featured: true,
  },
];
```

## 📝 Creating Blog Posts

Currently, blog posts are mock data. To add real blog posts:

1. Create a `content/blog/` directory
2. Add markdown files with frontmatter:

```markdown
---
title: "Your Blog Post Title"
date: "2024-01-15"
tags: ["React", "Next.js"]
---

Your blog content here...
```

3. Update the blog pages to fetch and render these files

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Your site will be live in minutes!

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Click "Deploy"

## 🔧 Available Scripts

```powershell
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run type checking
npm run type-check

# Run linting
npm run lint
```

## 📱 Testing Responsive Design

The site is fully responsive. Test it on:

- Desktop (1920px+)
- Laptop (1366px)
- Tablet (768px)
- Mobile (375px)

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Start dev server
3. ✅ Update personal information
4. ✅ Add your CV files
5. ✅ Customize colors (optional)
6. ✅ Add your projects
7. ✅ Test on different devices
8. ✅ Deploy to production

## 💡 Tips

- **Hot Reload**: Changes auto-refresh in development mode
- **TypeScript**: Use TypeScript for better code quality
- **Tailwind**: Use Tailwind utility classes for styling
- **Components**: Create reusable components in `src/components/`
- **Performance**: Next.js optimizes images and code automatically

## 🆘 Need Help?

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Review the [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Look at component examples in `src/components/`

## 🎉 You're All Set!

Your portfolio website is ready to customize and deploy. Make it your own and showcase your amazing work!

---

**Happy coding! 🚀**
