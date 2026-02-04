// Breakpoint Utilities for Tailwind CSS v4

/**
 * Custom breakpoints beyond standard sm/md/lg/xl/2xl
 */
export const customBreakpoints = `
  @theme {
    --breakpoint-3xl: 100rem;
    --breakpoint-4xl: 120rem;
    
    --breakpoint-tablet: 640px;
    --breakpoint-laptop: 1024px;
    --breakpoint-desktop: 1280px;
    --breakpoint-wide: 1536px;
  }
`

/**
 * Container query utilities
 */
export const containerQueries = `
  @utility container-sm {
    container-type: inline-size;
    container-name: sm;
  }
  
  @utility container-md {
    container-type: inline-size;
    container-name: md;
  }
  
  @utility container-lg {
    container-type: inline-size;
    container-name: lg;
  }
  
  @utility container-xl {
    container-type: inline-size;
    container-name: xl;
  }
  
  @utility container-2xl {
    container-type: inline-size;
    container-name: 2xl;
  }
`

/**
 * Print utilities
 */
export const printUtilities = `
  @utility print-hidden {
    @media print {
      display: none !important;
    }
  }
  
  @utility print-only {
    display: none !important;
    
    @media print {
      display: block !important;
    }
  }
  
  @utility print-text-black {
    @media print {
      color: black !important;
      background-color: white !important;
    }
  }
  
  @utility print-break-after-always {
    page-break-after: always;
  }
  
  @utility print-break-avoid {
    page-break-inside: avoid;
  }
`

/**
 * Reduced motion utilities
 */
export const reducedMotion = `
  @utility motion-safe {
    @media (prefers-reduced-motion: no-preference) {
      @apply animate-spin;
    }
  }
  
  @utility motion-reduce {
    @media (prefers-reduced-motion: reduce) {
      animation: none !important;
      transition: none !important;
    }
  }
`

/**
 * High contrast mode utilities
 */
export const highContrast = `
  @utility high-contrast {
    @media (prefers-contrast: more) {
      @apply border-2 border-current;
    }
  }
  
  @utility forced-colors {
    @media (forced-colors: active) {
      @apply border-2 border-current;
    }
  }
`

/**
 * Aspect ratio utilities beyond standard ratios
 */
export const aspectRatios = `
  @utility aspect-video {
    aspect-ratio: 16 / 9;
  }
  
  @utility aspect-photo {
    aspect-ratio: 4 / 3;
  }
  
  @utility aspect-portrait {
    aspect-ratio: 3 / 4;
  }
  
  @utility aspect-cinema {
    aspect-ratio: 21 / 9;
  }
  
  @utility aspect-golden {
    aspect-ratio: 1.618 / 1;
  }
`

/**
 * Safe area insets for mobile devices
 */
export const safeAreaInsets = `
  @theme {
    --spacing-safe-top: env(safe-area-inset-top);
    --spacing-safe-right: env(safe-area-inset-right);
    --spacing-safe-bottom: env(safe-area-inset-bottom);
    --spacing-safe-left: env(safe-area-inset-left);
  }
  
  @utility safe-top {
    padding-top: env(safe-area-inset-top);
  }
  
  @utility safe-right {
    padding-right: env(safe-area-inset-right);
  }
  
  @utility safe-bottom {
    padding-bottom: env(safe-area-inset-bottom);
  }
  
  @utility safe-left {
    padding-left: env(safe-area-inset-left);
  }
  
  @utility safe-all {
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
  }
`

/**
 * All breakpoint utilities combined
 */
export function breakpointsPlugin() {
  return `
    ${customBreakpoints}
    
    ${containerQueries}
    
    ${printUtilities}
    
    ${reducedMotion}
    
    ${highContrast}
    
    ${aspectRatios}
    
    ${safeAreaInsets}
  `
}
