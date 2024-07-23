/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'background': '#F9F7F4',
      'primary': '#F0EEEB',
      'pink': '#F3C1C0',
      'white': '#ffffff',
      'tertiary': '#C7C9C0',
      'purple': '#4F3852',
      'black': '#000000',
      'ccc': '#cccccc',
      '999': '#999999',
      '666': '#666666',
      '333': '#333333',
    },
    spacing: {
      '0': '0px',
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
      '7': '80px',
      '8': '100px',
      '9': '140px',
      "10": "150px",
      "11": "200px",
    },
  },
  plugins: [],
}

