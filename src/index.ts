// Tailwind Config Utils - Main Entry Point

// Theme extension utilities
export * from './theme/index'

// Dark mode utilities
export * from './dark-mode/index'

// Breakpoint utilities
export * from './breakpoints/index'

// Custom utility generators
export * from './utilities/index'

/**
 * Tailwind CSS v4 Configuration Utilities
 * 
 * Common utilities for Tailwind v4 that are missing from core:
 * - Theme extensions (semantic colors, fluid typography)
 * - Enhanced dark mode (transitions, persistence, toggle)
 * - Custom breakpoints (container queries, print utilities)
 * - Custom utility generators (animations, gradients, aspect ratios)
 * 
 * @example
 * ```css
 * @import "tailwindcss";
 * @plugin "tailwind-config-utils/theme";
 * @plugin "tailwind-config-utils/dark-mode";
 * 
 * @theme {
 *   --color-primary: #3b82f6;
 *   --font-display: 'Inter', sans-serif;
 * }
 * ```
 */
