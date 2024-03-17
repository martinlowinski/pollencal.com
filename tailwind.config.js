/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          '50': '#f2fbf4',
          '100': '#e1f7e5',
          '200': '#c4eece',
          '300': '#95e0a7',
          '400': '#60c879',
          '500': '#40bf5f',
          '600': '#2b8e43',
          '700': '#257038',
          '800': '#225930',
          '900': '#1d4a29',
          '950': '#0b2813'
        }
      }
    },
  },
  plugins: [],
}

