/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'nav-bg-color':"#1E1F22"
      }
    },
  },
  variants:{
    padding: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    placeholder: ['responsive', 'focus', 'hover', 'active'],
  },
  plugins: [],
}

