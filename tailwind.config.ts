import type { Config } from 'tailwindcss';

const config: Config = {
      content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
      theme: {
            extend: {
                  colors: {
                        primary: '#00863D',
                        secondary: '#FFC61D',
                        third: '#0000ff',
                  },
                  container: {
                        center: true,
                        padding: '2rem',
                        screens: {
                              sm: '640px',
                              md: '768px',
                              lg: '1024px',
                              xl: '1200px',
                              '2xl': '1300px',
                        },
                  },
                  keyframes: {
                        fadeIn: {
                              '0%': { opacity: '0', transform: 'translateY(10px)' },
                              '100%': { opacity: '1', transform: 'translateY(0)' },
                        },
                  },
                  animation: {
                        fadeIn: 'fadeIn 0.5s ease-out forwards',
                  },
            },
      },
      plugins: [],
};
export default config;
