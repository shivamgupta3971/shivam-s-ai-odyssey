import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: { center: true, padding: "1.5rem", screens: { "2xl": "1400px" } },
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          glow: "hsl(var(--secondary-glow))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-glow': 'var(--gradient-glow)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-card': 'var(--gradient-card)',
      },
      boxShadow: {
        neon: 'var(--shadow-neon)',
        'card-glow': 'var(--shadow-card)',
        elegant: 'var(--shadow-elegant)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-in": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "fade-in-up": { "0%": { opacity: "0", transform: "translateY(40px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "scale-in": { "0%": { opacity: "0", transform: "scale(0.95)" }, "100%": { opacity: "1", transform: "scale(1)" } },
        "glow-pulse": {
          "0%,100%": { boxShadow: "0 0 20px hsl(var(--primary) / 0.4), 0 0 40px hsl(var(--secondary) / 0.2)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--primary) / 0.7), 0 0 80px hsl(var(--secondary) / 0.4)" },
        },
        "float": { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        "shimmer": { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "grid-move": { "0%": { transform: "translate(0,0)" }, "100%": { transform: "translate(48px,48px)" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out both",
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.22,1,0.36,1) both",
        "scale-in": "scale-in 0.5s ease-out both",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "grid-move": "grid-move 12s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
