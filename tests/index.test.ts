import { describe, it, expect } from 'vitest'
import {
  semanticColors,
  fluidTypography,
  spacing,
  borderRadius,
  shadows,
  themePlugin,
} from '../src/theme/index.ts'
import {
  darkToggle,
  darkTransition,
  darkSystem,
  darkPersistence,
  darkModeColors,
  colorSchemeTransition,
  darkModePlugin,
  createThemeToggle,
} from '../src/dark-mode/index.ts'
import {
  customBreakpoints,
  containerQueries,
  printUtilities,
  reducedMotion,
  highContrast,
  aspectRatios,
  safeAreaInsets,
  breakpointsPlugin,
} from '../src/breakpoints/index.ts'
import {
  gradientUtilities,
  animationUtilities,
  maskUtilities,
  glassMorphism,
  glowUtilities,
  utilitiesPlugin,
} from '../src/utilities/index.ts'

describe('theme utilities', () => {
  it('should export semantic colors', () => {
    expect(semanticColors).toBeDefined()
    expect(semanticColors['--color-primary']).toBe('#3b82f6')
    expect(semanticColors['--color-success']).toBe('#22c55e')
  })

  it('should export fluid typography', () => {
    expect(fluidTypography).toBeDefined()
    expect(fluidTypography['--font-size-xl']).toContain('clamp')
  })

  it('should export spacing', () => {
    expect(spacing).toBeDefined()
    expect(spacing['--spacing-container']).toBe('1280px')
  })

  it('should export border radius', () => {
    expect(borderRadius).toBeDefined()
    expect(borderRadius['--radius-lg']).toBe('0.5rem')
  })

  it('should export shadows', () => {
    expect(shadows).toBeDefined()
    expect(shadows['--shadow-md']).toContain('0 4px 6px')
  })

  it('should generate theme plugin CSS', () => {
    const css = themePlugin()
    expect(css).toContain('@theme')
    expect(css).toContain('--color-primary')
    expect(css).toContain('--font-size-xl')
  })

  it('should NOT contain animation keyframes in theme plugin', () => {
    const css = themePlugin()
    expect(css).not.toContain('@keyframes')
  })
})

describe('dark mode utilities', () => {
  it('should export darkToggle', () => {
    expect(darkToggle).toContain('dark-toggle')
    expect(darkToggle).toContain('@utility')
  })

  it('should export darkTransition', () => {
    expect(darkTransition).toContain('dark-transition')
  })

  it('should export darkSystem', () => {
    expect(darkSystem).toContain('dark-system')
    expect(darkSystem).toContain('prefers-color-scheme: dark')
  })

  it('should export darkPersistence', () => {
    expect(darkPersistence).toContain('dark-persistence')
  })

  it('should export darkModeColors', () => {
    expect(darkModeColors).toContain('--color-dark-bg')
    expect(darkModeColors).toContain('--color-light-bg')
  })

  it('should export colorSchemeTransition', () => {
    expect(colorSchemeTransition).toContain('color-scheme-transition')
  })

  it('should generate dark mode plugin CSS', () => {
    const css = darkModePlugin()
    expect(css).toContain('@theme')
    expect(css).toContain('--color-dark-bg')
  })
})

describe('breakpoint utilities', () => {
  it('should export customBreakpoints', () => {
    expect(customBreakpoints).toContain('--breakpoint-3xl')
    expect(customBreakpoints).toContain('--breakpoint-tablet')
  })

  it('should export containerQueries', () => {
    expect(containerQueries).toContain('container-sm')
    expect(containerQueries).toContain('container-type')
  })

  it('should export printUtilities', () => {
    expect(printUtilities).toContain('print-hidden')
    expect(printUtilities).toContain('print-only')
  })

  it('should export reducedMotion', () => {
    expect(reducedMotion).toContain('motion-safe')
    expect(reducedMotion).toContain('motion-reduce')
    expect(reducedMotion).toContain('prefers-reduced-motion')
  })

  it('should export highContrast', () => {
    expect(highContrast).toContain('high-contrast')
    expect(highContrast).toContain('forced-colors')
    expect(highContrast).toContain('prefers-contrast')
  })

  it('should export aspectRatios', () => {
    expect(aspectRatios).toContain('aspect-video')
    expect(aspectRatios).toContain('aspect-photo')
  })

  it('should export safeAreaInsets', () => {
    expect(safeAreaInsets).toContain('safe-area-inset')
    expect(safeAreaInsets).toContain('safe-top')
  })

  it('should generate breakpoint plugin CSS', () => {
    const css = breakpointsPlugin()
    expect(css).toContain('--breakpoint-3xl')
    expect(css).toContain('container-type')
    expect(css).toContain('print-hidden')
  })
})

describe('utility generators', () => {
  it('should export gradientUtilities', () => {
    expect(gradientUtilities).toContain('gradient-radial')
    expect(gradientUtilities).toContain('gradient-conic')
    expect(gradientUtilities).toContain('gradient-mesh')
    expect(gradientUtilities).toContain('gradient-text')
    expect(gradientUtilities).toContain('gradient-border')
  })

  it('should export animationUtilities', () => {
    expect(animationUtilities).toContain('animate-fade-in')
    expect(animationUtilities).toContain('animate-slide-up')
    expect(animationUtilities).toContain('animate-elastic')
    expect(animationUtilities).toContain('animate-ping')
  })

  it('should export maskUtilities', () => {
    expect(maskUtilities).toContain('mask-fade')
    expect(maskUtilities).toContain('mask-circle')
    expect(maskUtilities).toContain('mask-hex')
  })

  it('should export glassMorphism', () => {
    expect(glassMorphism).toContain('@utility glass')
    expect(glassMorphism).toContain('glass-dark')
    expect(glassMorphism).toContain('glass-strong')
  })

  it('should export glowUtilities', () => {
    expect(glowUtilities).toContain('glow-sm')
    expect(glowUtilities).toContain('glow-md')
    expect(glowUtilities).toContain('glow-lg')
    expect(glowUtilities).toContain('glow-xl')
    expect(glowUtilities).toContain('glow-inner')
  })

  it('should generate utilities plugin CSS', () => {
    const css = utilitiesPlugin()
    expect(css).toContain('@utility')
    expect(css).toContain('@keyframes')
    expect(css).toContain('animate-fade-in')
    expect(css).toContain('mask-fade')
    expect(css).toContain('glass')
    expect(css).toContain('glow-')
  })

  it('should contain animation keyframes in utilities plugin', () => {
    const css = utilitiesPlugin()
    expect(css).toContain('@keyframes fadeIn')
    expect(css).toContain('@keyframes slideUp')
    expect(css).toContain('@keyframes elastic')
  })
})

describe('createThemeToggle', () => {
  it('should return null in SSR/server environment', () => {
    const result = createThemeToggle()
    expect(result).toBeNull()
  })
})
