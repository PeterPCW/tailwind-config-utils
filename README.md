# Tailwind Config Utils

Common utilities for Tailwind CSS v4 that are missing from core.

## Features

- **Theme Extensions** - Semantic colors, fluid typography, spacing, shadows
- **Dark Mode Utilities** - Toggle, transitions, persistence, flash prevention
- **Breakpoint Utilities** - Custom breakpoints, container queries, print utilities
- **Utility Generators** - Gradients, animations, masks, glass morphism, glow effects

## Installation

```bash
npm install tailwind-config-utils
# or
pnpm add tailwind-config-utils
```

## Usage

### CSS-First (Recommended for v4)

```css
/* globals.css */
@import "tailwindcss";

@plugin "tailwind-config-utils/theme";
@plugin "tailwind-config-utils/dark-mode";
@plugin "tailwind-config-utils/breakpoints";
@plugin "tailwind-config-utils/utilities";

@theme {
  /* Your custom theme extensions */
  --color-primary: #3b82f6;
}
```

### JavaScript (Alternative)

```typescript
// tailwind.config.ts
import { themePlugin } from 'tailwind-config-utils/theme'
import { darkModePlugin } from 'tailwind-config-utils/dark-mode'
import { breakpointsPlugin } from 'tailwind-config-utils/breakpoints'
import { utilitiesPlugin } from 'tailwind-config-utils/utilities'

export default {
  plugins: [
    themePlugin,
    darkModePlugin,
    breakpointsPlugin,
    utilitiesPlugin,
  ],
}
```

## Theme Extensions

```css
@plugin "tailwind-config-utils/theme";

@theme {
  --color-primary: #3b82f6;
  --font-display: 'Inter', sans-serif;
}
```

Available utilities:
- Semantic colors (surface, text, accent, status)
- Fluid typography scale
- Custom spacing
- Border radius
- Shadows
- Animations

## Dark Mode

```css
@plugin "tailwind-config-utils/dark-mode";

@theme {
  --color-dark-bg: #0f172a;
}
```

Available utilities:
- `dark-toggle` - Toggle dark mode with class
- `dark-transition` - Smooth theme transitions
- `dark-system` - Follow system preference
- `dark-persistence` - localStorage persistence
- `color-scheme-transition` - Smooth color scheme changes

## Breakpoints

```css
@plugin "tailwind-config-utils/breakpoints";
```

Available utilities:
- Custom breakpoints (3xl, 4xl, tablet, laptop, desktop)
- Container queries (container-sm through container-xl)
- Print utilities (print-hidden, print-only)
- Reduced motion
- High contrast
- Safe area insets (mobile)

## Utility Generators

```css
@plugin "tailwind-config-utils/utilities";
```

Available utilities:
- Gradient utilities (radial, conic, mesh, text, border)
- Animation utilities (fade-in, slide, scale, elastic)
- Mask utilities (fade, circle, hex)
- Glass morphism
- Glow effects

## API

### Theme Toggle (JavaScript)

```typescript
import { createThemeToggle } from 'tailwind-config-utils/dark-mode'

const { toggle, setTheme, initTheme } = createThemeToggle()

// Initialize theme on page load
initTheme()

// Toggle between light/dark
toggle()

// Set specific theme
setTheme('dark')  // Force dark
setTheme('light') // Force light
setTheme('system') // Follow system
```

## Packages

### Individual Exports

```typescript
// Import specific modules
import { themePlugin } from 'tailwind-config-utils/theme'
import { darkModePlugin } from 'tailwind-config-utils/dark-mode'
import { breakpointsPlugin } from 'tailwind-config-utils/breakpoints'
import { utilitiesPlugin } from 'tailwind-config-utils/utilities'
```

## License

MIT
