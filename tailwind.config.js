/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'primary': '#E7E4DE',
      'white': '#ffffff',
      'tertiary': '#F0EEEB',
      'black': '#000000',
      'ccc': '#cccccc',
      '999': '#999999',
      '666': '#666666',
      '333': '#333333',
    },
    spacing: {
      '0': '0px',
      '1': '8px',
      '2': '14px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
      '7': '60px',
      '8': '80px',
      '9': '120px',
      "10": "150px",
      "11": "200px",
    },
  },
  plugins: [],
}

