/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Poppins"'],
        'poppins': ['"Poppins"'],
        'montserrat': ['"Montserrat"'],
        'open-sans': ['"Open Sans"'],
        'pt-sans': ['"PT Sans"'],
      },
      colors: {
        'primary': '#053B50',
        'secondary': '#176B87',
        'outline-text': '#343330',
        'accent-blue': '#00CEC8',
        'accent-white': 'EEEEEE'
      }
    }
  },
  daisyui: {
    themes: ['light']
  },
  plugins: [require("daisyui")],
}
