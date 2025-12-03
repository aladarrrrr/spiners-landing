/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        neon: {
          DEFAULT: 'hsl(var(--primary))',
          50: 'hsl(var(--primary) / 0.1)',
          100: 'hsl(var(--primary) / 0.2)',
          200: 'hsl(var(--primary) / 0.3)',
          300: 'hsl(var(--primary) / 0.5)',
          400: 'hsl(var(--primary) / 0.7)',
          500: 'hsl(var(--primary))',
          600: 'hsl(var(--primary) / 0.9)',
          700: 'hsl(var(--primary) / 0.8)',
          800: 'hsl(var(--primary) / 0.6)',
          900: 'hsl(var(--primary) / 0.4)',
        },
        cream: {
          DEFAULT: '#F5F5DC',
          light: '#FAFAE6',
        },
        dark: {
          DEFAULT: '#0A0A0B',
          50: '#1A1A1C',
          100: '#141415',
          200: '#0F0F10',
          300: '#0A0A0B',
          400: '#050506',
          500: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 15px rgb(var(--theme-color) / 0.2)' },
          '100%': { boxShadow: '0 0 30px rgb(var(--theme-color) / 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-neon': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      boxShadow: {
        'neon': '0 0 15px rgb(var(--theme-color) / 0.2)',
        'neon-lg': '0 0 25px rgb(var(--theme-color) / 0.25)',
        'neon-xl': '0 0 40px rgb(var(--theme-color) / 0.3)',
        'card': '0 4px 30px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-neon': 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.8) 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A0A0B 0%, #141415 100%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
