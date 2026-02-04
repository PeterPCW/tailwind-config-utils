// Theme Extension Utilities

/**
 * Semantic color tokens for theming
 * Use these instead of hardcoded colors for consistent theming
 */
export const semanticColors = {
  // Surface colors
  '--color-surface': '#ffffff',
  '--color-surface-elevated': '#f8fafc',
  '--color-surface-inverted': '#0f172a',

  // Text colors
  '--color-text': '#0f172a',
  '--color-text-secondary': '#64748b',
  '--color-text-muted': '#94a3b8',
  '--color-text-inverted': '#f8fafc',

  // Accent colors
  '--color-primary': '#3b82f6',
  '--color-primary-hover': '#2563eb',
  '--color-secondary': '#8b5cf6',
  '--color-accent': '#06b6d4',

  // Status colors
  '--color-success': '#22c55e',
  '--color-warning': '#f59e0b',
  '--color-error': '#ef4444',
  '--color-info': '#3b82f6',

  // Border colors
  '--color-border': '#e2e8f0',
  '--color-border-strong': '#94a3b8',
}

/**
 * Fluid typography scale
 * Automatically scales between min and max sizes based on viewport
 */
export const fluidTypography = {
  '--font-size-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
  '--font-size-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
  '--font-size-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
  '--font-size-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
  '--font-size-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
  '--font-size-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 1.875rem)',
  '--font-size-3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem)',
  '--font-size-4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)',
}

/**
 * Spacing utilities
 */
export const spacing = {
  '--spacing-container': '1280px',
  '--spacing-section': 'clamp(3rem, 5vw, 6rem)',
  '--spacing-element': 'clamp(1rem, 2vw, 1.5rem)',
  '--spacing-inline': 'clamp(0.5rem, 1vw, 1rem)',
}

/**
 * Border radius utilities
 */
export const borderRadius = {
  '--radius-sm': '0.25rem',
  '--radius-md': '0.375rem',
  '--radius-lg': '0.5rem',
  '--radius-xl': '0.75rem',
  '--radius-2xl': '1rem',
  '--radius-full': '9999px',
}

/**
 * Shadow utilities
 */
export const shadows = {
  '--shadow-sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  '--shadow-md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  '--shadow-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  '--shadow-xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
}

/**
 * Export all theme utilities as a plugin
 */
export function themePlugin() {
  return `
    @theme {
      ${Object.entries(semanticColors).map(([key, value]) => `${key}: ${value};`).join('\n      ')}

      ${Object.entries(fluidTypography).map(([key, value]) => `${key}: ${value};`).join('\n      ')}

      ${Object.entries(spacing).map(([key, value]) => `${key}: ${value};`).join('\n      ')}

      ${Object.entries(borderRadius).map(([key, value]) => `${key}: ${value};`).join('\n      ')}

      ${Object.entries(shadows).map(([key, value]) => `${key}: ${value};`).join('\n      ')}
    }
  `
}
