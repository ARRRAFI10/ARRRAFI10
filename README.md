# Portfolio Website

A modern, professional portfolio website showcasing full-stack development and AI/ML expertise with a unique nature-tech fusion design.

## 🌟 Features

- **Unique Design**: Nature-tech fusion theme with particle effects and smooth animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **Blog System**: Built-in blog with search and filtering
- **CV Download**: Easy access to downloadable CV
- **Contact Form**: Interactive contact section
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **TypeScript**: Fully typed codebase for better developer experience
- **Modern Stack**: React, Next.js, TypeScript, Tailwind CSS, Framer Motion

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Package Manager**: npm

## 📦 Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── blog/              # Blog pages
│   ├── components/            # React components
│   │   ├── sections/          # Page sections
│   │   ├── Navigation.tsx     # Navigation component
│   │   ├── Footer.tsx         # Footer component
│   │   └── ParticleBackground.tsx
│   ├── lib/                   # Utilities and data
│   │   ├── data.ts           # Portfolio data
│   │   ├── animations.ts     # Animation variants
│   │   └── utils.ts          # Helper functions
│   ├── styles/               # Global styles
│   │   └── globals.css
│   └── types/                # TypeScript types
│       └── index.ts
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## ✏️ Customization

### Update Personal Information

Edit `src/lib/data.ts` to update:

- Personal information
- Skills and expertise
- Work experience
- Education
- Projects
- Social links

### Add Blog Posts

Blog posts are currently mock data in the blog pages. To add a real blog:

1. Create markdown files in a `content/blog/` directory
2. Use a library like `gray-matter` and `next-mdx-remote` (already included)
3. Update the blog page to fetch and render real content

### Update Styling

- Colors and theme: Edit `tailwind.config.ts`
- Global styles: Edit `src/styles/globals.css`
- Component styles: Modify Tailwind classes in components

### Add CV

Place your CV PDF in the `public` folder as `cv.pdf` or update the link in `src/components/sections/Hero.tsx`

## 🎨 Features Breakdown

### Home Page Sections

- **Hero**: Eye-catching introduction with animated elements
- **Skills**: Categorized skills with progress indicators
- **Projects**: Filterable project showcase
- **Experience**: Timeline of work history and education
- **Contact**: Interactive contact form with social links

### Blog

- Article listing with search and filtering
- Featured post highlight
- Individual article pages with related posts
- Reading time estimates

### Design Elements

- Particle background animation
- Glass-morphism effects
- Gradient text and buttons
- Smooth page transitions
- Hover animations
- Responsive navigation
- Custom scrollbar

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Other Platforms

- **Netlify**: Connect GitHub repo and deploy
- **Self-hosted**: Build and serve the `out` directory

## 📝 Environment Variables

Create a `.env.local` file for any environment variables:

```env
# Example
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

## 🔧 Development

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build
npm run build
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📧 Contact

For questions or feedback, reach out through the contact form on the website or via email.

---

**Built with ❤️ using Next.js and modern web technologies**
