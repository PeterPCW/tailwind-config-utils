// Dark Mode Utilities for Tailwind CSS v4

/**
 * Dark mode toggle utility class
 * Add 'dark-toggle' class to html/body to enable
 */
export const darkToggle = `
  @utility dark-toggle {
    &.dark {
      @apply text-white bg-slate-900;
    }
  }
`

/**
 * Smooth theme transition
 * Prevents flash when switching themes
 */
export const darkTransition = `
  @utility dark-transition {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }
`

/**
 * Follow system preference
 * Automatically applies dark mode based on OS settings
 */
export const darkSystem = `
  @utility dark-system {
    @media (prefers-color-scheme: dark) {
      &:not(.light) {
        @apply text-white bg-slate-900;
      }
    }
  }
`

/**
 * Theme persistence utility
 * Stores preference in localStorage
 */
export const darkPersistence = `
  @utility dark-persistence {
    --theme-toggle: auto;
    
    &.dark {
      @apply text-white bg-slate-900;
    }
  }
`

/**
 * Enhanced dark mode colors
 */
export const darkModeColors = `
  @theme {
    --color-dark-bg: #0f172a;
    --color-dark-surface: #1e293b;
    --color-dark-surface-elevated: #334155;
    --color-dark-text: #f8fafc;
    --color-dark-text-secondary: #94a3b8;
    --color-dark-border: #334155;
    
    --color-light-bg: #ffffff;
    --color-light-surface: #f8fafc;
    --color-light-surface-elevated: #f1f5f9;
    --color-light-text: #0f172a;
    --color-light-text-secondary: #64748b;
    --color-light-border: #e2e8f0;
  }
`

/**
 * Color scheme transition
 * Smooth transitions between light and dark
 */
export const colorSchemeTransition = `
  @utility color-scheme-transition {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, fill 0.3s ease;
  }
`

/**
 * Flash prevention
 * Prevents "flash of unstyled content" on page load
 */
export const flashPrevention = `
  @utility flash-prevention {
    &.dark {
      display: none;
    }
    
    @media (prefers-color-scheme: dark) {
      &:not(.light) {
        display: none;
      }
    }
  }
`

/**
 * All dark mode utilities combined
 */
export function darkModePlugin() {
  return `
    ${darkModeColors}
    
    ${colorSchemeTransition}
    
    @keyframes fadeInDark {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `
}

/**
 * Theme toggle JavaScript helper
 */
export function createThemeToggle() {
  if (typeof window === 'undefined') return null;
  
  const toggle = () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    return isDark;
  };
  
  const setTheme = (theme: 'light' | 'dark' | 'system') => {
    if (theme === 'system') {
      localStorage.removeItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      localStorage.setItem('theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };
  
  const initTheme = () => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setTheme(saved as 'light' | 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      }
    }
  };
  
  return { toggle, setTheme, initTheme };
}
