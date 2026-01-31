# SeniorFrontend.dev 🚀

> **The deep-dive curriculum designed for engineers preparing for Senior, Staff, and Principal roles.**

A premium learning platform featuring 105+ interview-ready questions covering React internals, Next.js & SSR, Performance optimization, and Accessibility & Design Systems.

## ✨ Features

- 📚 **105 Senior-Level Questions** across 4 core pillars
- 🎯 **Interview-Ready Answers** in authentic Hinglish style
- 🎨 **Premium UI/UX** with React.dev-inspired design
- 📱 **Fully Mobile Responsive** with drawer navigation
- 🔖 **Bookmark System** for saving important questions
- 💻 **Syntax Highlighting** for code snippets
- 🌙 **Clean, Modern Design** with glassmorphism effects

## 📖 Curriculum

### 1️⃣ React Architecture & State Management (15 Questions)
- Large-scale application structure
- Local vs global state decisions
- useReducer vs useState patterns
- Avoiding unnecessary re-renders
- Redux vs Context API
- Reusable components & custom hooks
- Complex forms & error handling
- Code maintainability & onboarding

### 2️⃣ Next.js & SSR (30 Questions)
- Rendering strategies (SSR, SSG, ISR, CSR)
- Server-side rendering benefits & trade-offs
- Hydration mismatch debugging
- SSR optimization techniques
- Backend contracts & caching strategies
- API Routes & Middleware usage
- Environment variable handling
- SEO & code splitting
- App Router vs Pages Router
- Server Components evaluation
- Authentication & personalization

### 3️⃣ Performance & Optimization (30 Questions)
- Core Web Vitals (LCP, CLS, INP)
- Performance debugging methodology
- Bundle size optimization
- Code splitting strategies
- Image & font optimization
- Third-party script management
- Lighthouse vs Real User Metrics
- Performance regression prevention
- SSR performance impact
- Mobile-first optimization
- War stories & production issues

### 4️⃣ Accessibility & Design Systems (30 Questions)
- WCAG 2.1 AA compliance
- Semantic HTML importance
- Keyboard navigation testing
- Focus management in complex UIs
- ARIA attributes usage
- Screen reader testing
- Form accessibility
- Modal accessibility
- Design system integration
- Color & typography accessibility
- Responsive design considerations
- Team training & culture building

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS + Custom Design System
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Code Highlighting**: react-syntax-highlighter
- **Content**: MDX for rich question content
- **State Management**: React Hooks + Local Storage

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/SeniorFrontend.dev.git

# Navigate to project directory
cd SeniorFrontend.dev

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
SeniorFrontend.dev/
├── app/
│   ├── (marketing)/        # Landing page
│   ├── (platform)/         # Main application
│   │   ├── topics/         # Topics listing
│   │   ├── topic/[slug]/   # Individual topic pages
│   │   └── bookmarks/      # Saved questions
│   └── globals.css
├── components/
│   ├── layout/             # Navbar, Sidebar, Footer
│   └── ui/                 # Reusable UI components
├── content/
│   └── questions/          # MDX question files
│       ├── react/
│       ├── nextjs/
│       ├── performance/
│       └── accessibility/
├── lib/
│   ├── content.ts          # Content loading utilities
│   ├── topics.ts           # Topic definitions
│   └── types/              # TypeScript types
└── hooks/                  # Custom React hooks
```

## 🎨 Design Philosophy

- **Signal over Noise**: Zero fluff, pure technical depth
- **Interview-Ready**: Answers crafted for real senior interviews
- **Authentic Voice**: Hinglish responses reflecting real engineering conversations
- **Visual Excellence**: Premium UI that respects the content
- **Mobile-First**: Fully responsive with thoughtful mobile UX

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by React.dev's exceptional documentation design
- Built for the senior frontend engineering community
- Content curated from real interview experiences

---

**Built with ❤️ for Senior Frontend Engineers**
