/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#2563EB', // Основной синий цвет из макета
            hover: '#1D4ED8',
          },
          secondary: {
            DEFAULT: '#64748B', // Серый цвет для второстепенных элементов
          },
          background: {
            DEFAULT: '#F8FAFC', // Фоновый цвет
          },
          text: {
            primary: '#1E293B', // Основной цвет текста
            secondary: '#64748B', // Второстепенный цвет текста
          }
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        boxShadow: {
          'card': '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
        }
      },
    },
    plugins: [],
  }