/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors from design system
        'tech-black': '#000000',
        'tech-dark': '#0a0a0a',
        'tech-card': '#1a1a1a',
        'tech-code': '#0d0d0d',
        'tech-border': '#2D2D2D',
        'tech-red': '#EF4444',
        'tech-red-dark': '#DC2626',
        'tech-purple': '#A855F7',
        'tech-blue': '#3B82F6',
        'tech-blue-light': '#60A5FA',
        'tech-green': '#10B981',
        'tech-orange': '#F97316',
        'tech-text-primary': '#FFFFFF',
        'tech-text-secondary': '#9CA3AF',
        'tech-text-tertiary': '#6B7280',
      },
      boxShadow: {
        'glow-red': '0 4px 20px rgba(239, 68, 68, 0.4)',
        'glow-red-lg': '0 8px 30px rgba(239, 68, 68, 0.6)',
        'glow-blue': '0 4px 20px rgba(59, 130, 246, 0.4)',
        'glow-blue-lg': '0 8px 30px rgba(59, 130, 246, 0.6)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
