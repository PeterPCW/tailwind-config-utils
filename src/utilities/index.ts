// Custom Utility Generators for Tailwind CSS v4

/**
 * Gradient generators
 */
export const gradientUtilities = `
  @utility gradient-radial {
    background-image: radial-gradient(var(--tw-gradient-stops));
  }
  
  @utility gradient-conic {
    background-image: conic-gradient(var(--tw-gradient-stops));
  }
  
  @utility gradient-mesh {
    background-image: 
      radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
      radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
      radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),
      radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
      radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%);
  }
  
  @utility gradient-text {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  
  @utility gradient-border {
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      padding: 1px;
      background: linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to));
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
  }
`

/**
 * Animation utilities
 */
export const animationUtilities = `
  @utility animate-fade-in {
    animation: fadeIn 0.3s ease-out;
  }
  
  @utility animate-fade-in-up {
    animation: fadeInUp 0.3s ease-out;
  }
  
  @utility animate-fade-in-down {
    animation: fadeInDown 0.3s ease-out;
  }
  
  @utility animate-slide-up {
    animation: slideUp 0.3s ease-out;
  }
  
  @utility animate-slide-down {
    animation: slideDown 0.3s ease-out;
  }
  
  @utility animate-slide-left {
    animation: slideLeft 0.3s ease-out;
  }
  
  @utility animate-slide-right {
    animation: slideRight 0.3s ease-out;
  }
  
  @utility animate-scale {
    animation: scale 0.2s ease-out;
  }
  
  @utility animate-scale-in {
    animation: scaleIn 0.2s ease-out;
  }
  
  @utility animate-elastic {
    animation: elastic 0.5s ease-out;
  }
  
  @utility animate-ping {
    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
  
  @utility animate-twist {
    animation: twist 0.5s ease-out;
  }
`

/**
 * Mask utilities
 */
export const maskUtilities = `
  @utility mask-fade {
    mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
  }
  
  @utility mask-fade-l {
    mask-image: linear-gradient(to right, black 80%, transparent 100%);
  }
  
  @utility mask-fade-r {
    mask-image: linear-gradient(to left, black 80%, transparent 100%);
  }
  
  @utility mask-fade-t {
    mask-image: linear-gradient(to top, black 80%, transparent 100%);
  }
  
  @utility mask-circle {
    mask-image: radial-gradient(circle, black 60%, transparent 100%);
  }
  
  @utility mask-hex {
    mask-image: polygonygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }
`

/**
 * Glass morphism utilities
 */
export const glassMorphism = `
  @utility glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  @utility glass-dark {
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  @utility glass-strong {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`

/**
 * Glow utilities
 */
export const glowUtilities = `
  @utility glow-sm {
    box-shadow: 0 0 10px currentColor;
  }
  
  @utility glow-md {
    box-shadow: 0 0 20px currentColor;
  }
  
  @utility glow-lg {
    box-shadow: 0 0 30px currentColor;
  }
  
  @utility glow-xl {
    box-shadow: 0 0 40px currentColor;
  }
  
  @utility glow-inner {
    box-shadow: inset 0 0 10px currentColor;
  }
`

/**
 * All utility generators combined
 */
export function utilitiesPlugin() {
  return `
    ${gradientUtilities}
    
    ${animationUtilities}
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeInDown {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideUp {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
    
    @keyframes slideDown {
      from { transform: translateY(-100%); }
      to { transform: translateY(0); }
    }
    
    @keyframes slideLeft {
      from { transform: translateX(100%); }
      to { transform: translateX(0); }
    }
    
    @keyframes slideRight {
      from { transform: translateX(-100%); }
      to { transform: translateX(0); }
    }
    
    @keyframes scale {
      from { transform: scale(0.95); }
      to { transform: scale(1); }
    }
    
    @keyframes scaleIn {
      from { transform: scale(0.9); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    
    @keyframes elastic {
      0% { transform: scale(1); }
      25% { transform: scale(1.1); }
      50% { transform: scale(0.95); }
      75% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    @keyframes ping {
      75%, 100% { transform: scale(2); opacity: 0; }
    }
    
    @keyframes twist {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    ${maskUtilities}
    
    ${glassMorphism}
    
    ${glowUtilities}
  `
}
