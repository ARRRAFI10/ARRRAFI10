# Tech-Interface Portfolio - Component Overview

## 🎨 Design Philosophy

Each section of the portfolio mimics a different technological interface, creating a unique and immersive experience that showcases your technical versatility.

## 📦 Component Breakdown

### 1. Hero Section - VS Code Interface (`HeroVSCode.tsx`)

**Theme:** Visual Studio Code Editor

- **Features:**
  - VS Code title bar with traffic light controls
  - Three file tabs: README.md, about.py, skills.js
  - Line numbers and syntax highlighting
  - Sidebar with quick action buttons
  - Status bar with file info
- **Visual Style:** Dark theme (#1e1e1e), Monaco font family
- **Interactive:** Tab switching between different file views

### 2. Skills Section - Kaggle/Jupyter Interface (`SkillsKaggle.tsx`)

**Theme:** Jupyter Notebook / Kaggle Kernel

- **Features:**
  - Notebook header with play button
  - Code cells with In[]/Out[] notation
  - Animated cell execution
  - Progress bars as cell output
  - Skill proficiency visualization
- **Visual Style:** Light notebook theme, code cells with execution counts
- **Interactive:** Play button animation, cell execution simulation

### 3. Projects Section - GitHub Interface (`ProjectsGitHub.tsx`)

**Theme:** GitHub Repository List

- **Features:**
  - GitHub dark theme (#0d1117)
  - Repository cards with metadata
  - Stars, forks, and language tags
  - Featured badges for special projects
  - Expandable descriptions
- **Visual Style:** GitHub's signature dark mode
- **Interactive:** Hover effects, expandable project details

### 4. Experience Section - Terminal Interface (`ExperienceTerminal.tsx`)

**Theme:** Interactive Bash Terminal

- **Features:**
  - Terminal window with header controls
  - Command-line interface with prompt
  - Interactive commands: ls, cat, help, whoami, achievements, skills
  - Command history display
  - Quick command buttons
- **Visual Style:** Classic terminal black background (#1e1e1e), green text
- **Interactive:** Fully functional command parser, blinking cursor

### 5. Publications Section - Academic Paper Interface (`PublicationsAcademic.tsx`)

**Theme:** LaTeX/Academic Paper

- **Features:**
  - Formal academic paper layout
  - Conference and publication details
  - Abstract sections
  - Citation formatting
  - Publication statistics
- **Visual Style:** Clean academic theme with serif fonts, teal accents (#008080)
- **Data:** 2 accepted papers at QPAIN 2025

### 6. Problem Solving Section - Codeforces Interface (`ProblemSolvingCodeforces.tsx`)

**Theme:** Competitive Programming Platforms

- **Features:**
  - Dual platform display (Codeforces + CodeChef)
  - Rating badges and ranks
  - Problem count and contest participation
  - Rating history graphs
  - Problem category breakdown
- **Visual Style:** Platform-specific colors (Codeforces blue, CodeChef brown)
- **Data:**
  - Codeforces: ARR100, 330+ problems, 1239 rating (Pupil)
  - CodeChef: arr100, 50+ problems, 1455 rating (2★)

### 7. Contact Section - Contact Form (`Contact.tsx`)

**Theme:** Contact form (existing component)

- **Note:** Can be redesigned as terminal/command-line style if desired

## 🎯 Key Features Across All Components

- ✅ Fully responsive design
- ✅ Framer Motion animations
- ✅ Unique visual identity per section
- ✅ Interactive elements
- ✅ Professional data presentation
- ✅ Real CV data integration

## 🚀 Technologies Used

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

All components are fully responsive and adapt their layouts for different screen sizes.

## 🎨 Color Schemes by Section

1. **VS Code:** Dark (#1e1e1e), Blue accent (#007acc)
2. **Kaggle:** Orange (#20beff), Light background
3. **GitHub:** Dark (#0d1117), Blue/Green accents
4. **Terminal:** Black (#1e1e1e), Green text (#00ff00)
5. **Publications:** Cream (#f5f5f0), Teal (#008080)
6. **Codeforces:** Blue (#1e88e5), Brown (#5b4638)
7. **Contact:** Custom theme

## 🔄 Integration

All components are integrated into the main page at `src/app/page.tsx` and render in sequence to create a cohesive multi-interface portfolio experience.

## 📊 Data Source

All personal data is stored in `src/lib/data.ts` and imported into respective components.
