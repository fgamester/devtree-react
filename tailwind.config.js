/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      minHeight:{
        'remain': 'calc(100vh - 60px)'
      },
      height: {
        'fit': 'fit-content'
      },
      width: {
        'fit': 'fit-content'
      },
      margin: {
        'nb': '60px'
      },
      padding:{
        'nb': '60px'
      },
      backgroundColor: {
        'devtree': {
          '1': '#024873',
          '2': '#048ABF',
          '3': '#81C4DE',
          '4': '#458C7F',
          '5': '#1F590F',
          '6': '#0D0D0D',
        }
      }
    },
  },
  plugins: [],
}