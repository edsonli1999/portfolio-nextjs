# Storyline Mode Implementation Strategy

## Current Project Analysis

Based on the existing NextJS 13 project structure with:
- App Router and Pages Router components
- Tailwind CSS styling
- TypeScript
- Responsive design (different layouts for small and large screens)

## Implementation Strategy (Desktop-Only)

The storyline mode will be implemented as a desktop-only feature, preserving the current mobile experience. This approach focuses resources on creating a highly immersive experience where screen real estate allows for it, while maintaining the streamlined mobile experience.

### 1. Theme Context System

- Create a ThemeContext to manage different viewing modes:
  - Standard/Professional mode (current)
  - Storyline mode (with theme selection between Detective and Terminal)

```typescript
// src/app/context/ThemeContext.tsx
import { createContext, useState, useContext, ReactNode } from 'react';

type Theme = 'standard' | 'detective' | 'terminal';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('standard');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
```

### 2. Layout Modifications

- Update RootLayout to incorporate the ThemeProvider:

```typescript
// src/app/layout.tsx
import { ThemeProvider } from './context/ThemeContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ...existing code

  return (
    <html lang="en">
      <head>
        {/* ...existing head content */}
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
      {/* ...analytics */}
    </html>
  );
}
```

- Modify main page component to conditionally render based on theme and screen size:

```typescript
// src/app/page.tsx
'use client'
import { useTheme } from './context/ThemeContext';
// ...other imports

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  // Screen size check logic...
  useEffect(() => {
    const checkScreenSize = () => {
      const isSmall = window.innerWidth < 900;
      setIsSmallScreen(isSmall);
      
      // Automatically switch to standard theme on small screens
      if (isSmall && theme !== 'standard') {
        setTheme('standard');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [theme, setTheme]);

  // Small screens always use standard theme
  if (isSmallScreen) {
    return <SmallScreenPage />;
  }
  
  // Large screen with theme variations
  if (theme === 'standard') {
    return (
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar">
        <Header />
        {/* Current sections... */}
        <section id="hero" className='snap-center'>
          <Hero isSmallScreen={false} />
        </section>
        {/* ...other sections */}
      </div>
    );
  } else if (theme === 'detective') {
    return (
      <div className="bg-detective-primary text-detective-text h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar-detective">
        <DetectiveHeader />
        <section id="intro" className='snap-center'>
          <DetectiveHero />
        </section>
        <section id="about" className='snap-end'>
          <DetectiveAbout />
        </section>
        <section id="experience" className='snap-center'>
          <DetectiveExperience />
        </section>
        <section id="projects" className='snap-start'>
          <DetectiveProjects />
        </section>
        <section id="contact" className='snap-center'>
          <DetectiveContact />
        </section>
      </div>
    );
  } else if (theme === 'terminal') {
    return (
      <div className="bg-terminal-primary text-terminal-text h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar-terminal">
        <TerminalHeader />
        <section id="boot" className='snap-center'>
          <TerminalBoot />
        </section>
        <section id="about" className='snap-end'>
          <TerminalAbout />
        </section>
        <section id="experience" className='snap-center'>
          <TerminalExperience />
        </section>
        <section id="projects" className='snap-start'>
          <TerminalProjects />
        </section>
        <section id="contact" className='snap-center'>
          <TerminalContact />
        </section>
      </div>
    );
  }
}
```

### 3. Component-Based Implementation

- Create themed variants of each component for desktop only:

```typescript
// src/app/components/Hero/DetectiveHero.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function DetectiveHero() {
  const [text, count] = useTypewriter({
    words: ["Case File: John Doe", "Status: Active Investigation", "Clearance: Level 5"],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden bg-detective-primary">
      {/* Detective themed background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 z-0">
        <Image
          src="/detective/background-texture.png"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      
      {/* Profile image with detective styling */}
      <div className="relative z-10 border-4 border-detective-accent p-1 rounded-lg shadow-lg">
        <Image
          className="grayscale"
          src="/detective/profile.jpg"
          alt=""
          width="150"
          height="100"
        />
        <div className="absolute -bottom-3 -right-3 bg-detective-primary px-2 py-1 text-xs font-detective text-detective-accent border border-detective-accent">
          EVIDENCE #1
        </div>
      </div>
      
      <div className="z-20 bg-detective-secondary p-6 border border-detective-accent max-w-md relative">
        <div className="absolute -top-3 left-4 bg-detective-primary px-2 py-1 text-xs font-detective text-detective-accent">
          CONFIDENTIAL
        </div>
        <h2 className="text-sm uppercase text-detective-text-faded pb-2 font-detective tracking-wider">Subject Background: Computer Science Graduate</h2>
        <h2 className="text-sm uppercase text-detective-text-faded pb-4 font-detective tracking-wider">Last Known Location: University of Melbourne</h2>
        <h1 className="text-2xl lg:text-4xl font-bold px-5 font-detective text-detective-accent">
          <span>{text}</span>
          <Cursor cursorColor="#ffd700" />
        </h1>
        
        {/* Navigation styled as case file tabs */}
        <div className="pt-8 flex flex-wrap justify-center gap-2">
          <Link href="#about">
            <button className="detective-button">Dossier</button>
          </Link>
          <Link href="#experience">
            <button className="detective-button">Timeline</button>
          </Link>
          <Link href="#projects">
            <button className="detective-button">Evidence</button>
          </Link>
          <Link href="#contact">
            <button className="detective-button">Report</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DetectiveHero
```

### 4. Theme Availability Indicator for Mobile

- Add a notice on the mobile view indicating that the themed experience is available on desktop:

```typescript
// src/app/components/SmallScreenPage.tsx - Modified

import React from 'react';
import Header from './NavBar/Header';
import Hero from './Hero/Hero';
import ContactMe from './Contact/ContactMe';

const SmallScreenPage: React.FC = () => {
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar">
            <Header />

            <section id="hero" className='snap-center'>
                <Hero isSmallScreen={true} />
            </section>
            
            {/* Add desktop-only feature notice */}
            <div className="fixed bottom-5 left-0 right-0 mx-auto w-max bg-gray-800 text-white text-xs px-4 py-2 rounded-full opacity-80 z-50">
                <p>The Detective and Terminal experiences are available on desktop devices</p>
            </div>

            {/* ...existing content */}
            
            <section id="contact" className='snap-center'>
                <ContactMe />
            </section>
        </div>
    );
};

export default SmallScreenPage;
```

### 5. CSS Implementation with Tailwind Extension

- Extend your Tailwind configuration with theme variables:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      // ...existing config
      colors: {
        // Standard theme colors (existing)
        // ...
        
        // Detective theme
        detective: {
          primary: '#121212',
          secondary: '#343434',
          accent: '#ffd700',
          text: '#f0f0f0',
          'text-faded': '#a0a0a0',
        },
        
        // Terminal theme
        terminal: {
          primary: '#0a0a0a',
          secondary: '#1a1a1a',
          accent: '#00ff00',
          text: '#00ff00',
          'text-faded': '#007700',
        },
      },
      fontFamily: {
        detective: ['Courier Prime', 'monospace'],
        terminal: ['Cascadia Code', 'monospace'],
      },
    },
  },
  plugins: [
    // ...existing plugins
  ],
}
```

### 6. Theme Toggle Component (Desktop Only)

- Create a theme selector component for desktop:

```typescript
// src/app/components/ThemeToggle.tsx
'use client'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed top-5 right-5 z-50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-full ${
          theme === 'standard' 
            ? 'bg-gray-800 text-white' 
            : theme === 'detective'
              ? 'bg-detective-secondary text-detective-accent border border-detective-accent'
              : 'bg-terminal-secondary text-terminal-accent border border-terminal-accent'
        }`}
      >
        {theme === 'standard' 
          ? 'Experience' 
          : theme === 'detective'
            ? 'Case Files'
            : 'Terminal'
        }
      </button>
      
      {isOpen && (
        <div className="absolute top-12 right-0 bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden">
          <button 
            onClick={() => { setTheme('standard'); setIsOpen(false); }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Standard
          </button>
          <button 
            onClick={() => { setTheme('detective'); setIsOpen(false); }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Detective
          </button>
          <button 
            onClick={() => { setTheme('terminal'); setIsOpen(false); }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Terminal
          </button>
        </div>
      )}
    </div>
  )
}

export default ThemeToggle
```

- Add this toggle to the desktop view only:

```typescript
// Modified src/app/page.tsx (partial)
// Large screen with theme variations
if (theme === 'standard') {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar">
      <Header />
      <ThemeToggle /> {/* Add theme toggle */}
      {/* ...sections */}
    </div>
  );
} else if (theme === 'detective') {
  return (
    <div className="bg-detective-primary text-detective-text h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar-detective">
      <DetectiveHeader />
      <ThemeToggle /> {/* Add theme toggle */}
      {/* ...sections */}
    </div>
  );
}
// ...
```

## Progressive Implementation Approach

### Phase 1: Core Structure (1-2 weeks)

1. **Set up Theme Context and Screen Detection**
   - Implement ThemeContext and ThemeProvider
   - Add desktop detection logic
   - Add theme toggle component for desktop view
   - Extend Tailwind config with theme variables

2. **Create Directory Structure**
   - Create themed asset directories
   - Set up themed component structure

### Phase 2: Hero Section (1 week)

1. **Implement Themed Hero Components**
   - Create DetectiveHero and TerminalHero components
   - Style and test on desktop
   - Implement theme-specific animations

### Phase 3: Section-by-Section Implementation (3-4 weeks)

1. **Experience Section**
   - Create themed experience timelines
   - Implement interactive elements

2. **Projects Section**
   - Design themed project cards
   - Add theme-specific interactions

3. **About Section**
   - Transform about content into themed narrative
   - Add interactive elements

4. **Contact Section**
   - Redesign contact form for each theme
   - Ensure functionality remains clear

### Phase 4: Refinement and Enhancement (2 weeks)

1. **Add Advanced Interactions**
   - Implement sound effects (with controls)
   - Add animations and transitions
   - Consider interactive easter eggs

2. **Performance Optimization**
   - Implement code splitting and lazy loading
   - Optimize assets for desktop viewing

3. **Testing and Debugging**
   - Cross-browser testing on desktop browsers
   - Fix responsive issues within desktop breakpoints

## Technical Considerations

### Asset Management

- Create themed directory structure in public folder focused on desktop assets:
```
public/
  standard/ (existing assets)
  detective/
    images/
    sounds/
    fonts/
  terminal/
    images/
    sounds/
    fonts/
```

### Performance Benefits of Desktop-Only Approach

- Can use higher-quality assets and more complex animations
- No need to optimize for mobile data connections
- More screen space for immersive details and interactions
- Can take advantage of hover states and desktop-specific interactions

### Accessibility Considerations

- Ensure proper contrast ratios for all themes
- Add option to disable animations for users with motion sensitivity
- Implement keyboard navigation for interactive elements
- Include sound mute controls for audio effects

## Implementation Challenges and Solutions

### Challenge: Theme Persistence

**Solution:** Store theme preference in localStorage but only apply on desktop screens:

```typescript
// Enhanced theme context with persistence
export function ThemeProvider({ children }: { children: ReactNode }) {
  // Initialize from localStorage but only if on desktop
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      const isDesktop = window.innerWidth >= 900;
      return isDesktop && savedTheme ? savedTheme : 'standard';
    }
    return 'standard';
  });
  
  // Update localStorage when theme changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

### Challenge: Enticing Mobile Users to Desktop

**Solution:** Add subtle previews of the themed experience on mobile to encourage desktop viewing:

```typescript
// Example mobile teaser component
const ThemeTeaser = () => {
  return (
    <div className="mt-8 p-4 border border-gray-700 rounded-md">
      <h3 className="text-xl font-bold mb-2">Unlock Immersive Experiences</h3>
      <p className="text-sm text-gray-400 mb-4">
        Visit this site on desktop to explore my portfolio as a detective case file
        or access a futuristic terminal interface.
      </p>
      <div className="flex gap-4 justify-center">
        <div className="w-16 h-16 bg-detective-primary border border-detective-accent rounded opacity-80"></div>
        <div className="w-16 h-16 bg-terminal-primary border border-terminal-accent rounded opacity-80"></div>
      </div>
    </div>
  );
};
```

## Conclusion

By implementing the storyline mode exclusively for desktop, we can:

1. Focus development resources on creating a truly immersive experience
2. Take advantage of desktop-specific capabilities like hover effects and larger screens
3. Maintain the clean, optimized mobile experience without compromise
4. Create a compelling reason for users to view the portfolio on desktop

The implementation leverages the existing NextJS component structure and responsive approach, simply extending it with themed variants for desktop viewing. This approach allows for a high-quality themed experience where it makes most sense, while maintaining a consistent mobile experience. 