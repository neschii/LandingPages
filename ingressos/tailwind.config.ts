import { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette';

// Function to add CSS variables for colors
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

const plugins = [
  addVariablesForColors,
  plugin(function ({ addComponents, addBase, theme }) {
    const buttons = {
      '.btn-gradient-yellow': {
        backgroundImage: 'linear-gradient(to right, rgba(250, 204, 21, 0.9), rgba(226, 167, 3, 0.9))',
        transition: 'all 0.2s ease-in-out',
        boxShadow: '0 2px 10px rgba(250, 204, 21, 0.3)',
        outline: 'none',
        '&:hover': {
          backgroundImage: 'linear-gradient(to right, rgba(250, 204, 21, 1), rgba(250, 204, 21, 0.9))',
        },
        '&:focus': {
          outline: 'none',
          boxShadow: '0 0 0 4px rgba(250, 204, 21, 0.5)',
        },
      },
    };
    addComponents(buttons);
  }),
];

export default {
  darkMode: ["selector", '[data-mode="dark"]', "class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      colors: {
        'dark-bg': 'var(--darkmode)',
        'dark-text': 'var(--text-color)',
        'dark-secondary': '#4a4a4a',
        'light-secondary': '#f5f5f5',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      backgroundColor: {
        'dark-primary': 'var(--darkmode)',
      },
      textColor: {
        'dark-text': 'var(--text-color)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
            keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
    },

    },
  },
  plugins,
} satisfies Config;