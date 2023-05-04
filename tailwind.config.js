/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    backgroundImage: {
      'space': "url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=893&q=80')",
      'earth':"url('https://www.solarsystemscope.com/textures/download/8k_earth_daymap.jpg'), url('https://media2.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif?cid=ecf05e47p55fd2e2iraf5dydwxpgvow00afb5c1zcnywtcyv&ep=v1_gifs_search&rid=giphy.gif&ct=g')",
      'jupiter':"url('https://www.solarsystemscope.com/textures/download/8k_jupiter.jpg'), url('https://media2.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif?cid=ecf05e47p55fd2e2iraf5dydwxpgvow00afb5c1zcnywtcyv&ep=v1_gifs_search&rid=giphy.gif&ct=g')",
    },
    fontFamily: {
      'h1': "'Quicksand', sans-serif",
      'h2':"'Kanit', sans-serif",
      'a':"'Lekton', sans-serif",
      'p':"'Catamaran', sans-serif"
    },
    keyframes:{
      planet_rotation: {
        '0%': { backgroundPosition: '0 100%' },
        '100%': { backgroundPosition: '100% 100%' },
      },
    },
    animation:{
      'rotate': 'planet_rotation 100s linear infinite'
    },
    boxShadow: {
      'earth': [
        '-25px -25px 30px black inset',
        '10px 10px 30px white inset',
        '0px 0px 30px #3a96ff'
      ]
    }
  },
};
export const plugins = [];
