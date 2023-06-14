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
      'earth':"url('https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg'), url('https://i.gifer.com/YlWC.gif')",
      'jupiter':"url('https://www.solarsystemscope.com/textures/download/2k_jupiter.jpg'), url('https://i.gifer.com/YlWC.gif')",
      'venus':"url('https://www.solarsystemscope.com/textures/download/2k_venus_atmosphere.jpg'), url('https://i.gifer.com/YlWC.gif')",
      'mercury':"url('https://www.solarsystemscope.com/textures/download/2k_mercury.jpg'), url('https://i.gifer.com/YlWC.gif')",
      'mars':"url('https://www.solarsystemscope.com/textures/download/2k_mars.jpg'), url('https://i.gifer.com/YlWC.gif')",
      'neptune':"url('https://www.solarsystemscope.com/textures/download/2k_neptune.jpg'), url('https://i.gifer.com/YlWC.gif')",
      'uranus':"url('https://www.solarsystemscope.com/textures/download/2k_uranus.jpg'), url('https://i.gifer.com/YlWC.gif')",
      'moon':"url('https://www.solarsystemscope.com/textures/download/2k_moon.jpg'), url('https://i.gifer.com/YlWC.gif')",
      'sun':"url('https://www.solarsystemscope.com/textures/download/2k_sun.jpg'), url('https://i.gifer.com/YlWC.gif')",
      'nature': "url('https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80'), url('https://i.gifer.com/YlWC.gif')",
      'financial':"url('https://images.unsplash.com/photo-1634542984003-e0fb8e200e91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'), url('https://i.gifer.com/YlWC.gif')",
      'it':"url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'), url('https://i.gifer.com/YlWC.gif')"
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
      ],
      'jupiter': [
        '-25px -25px 30px black inset',
        '10px 10px 30px white inset',
        '0px 0px 30px #dfa872'
      ],
      'venus': [
        '-25px -25px 30px black inset',
        '10px 10px 30px white inset',
        '0px 0px 30px #a6571a'
      ],
      'mercury': [
        '-25px -25px 30px black inset',
        '10px 10px 30px white inset',
        '0px 0px 30px #c0c0c0'
      ],
      'mars': [
        '-25px -25px 30px black inset',
        '10px 10px 30px white inset',
        '0px 0px 30px #ff6a22'
      ],
      'neptune': [
        '-25px -25px 30px black inset',
        '10px 10px 30px white inset',
        '0px 0px 30px #61a1cd'
      ],
      'uranus': [
        '-25px -25px 30px black inset',
        '10px 10px 30px white inset',
        '0px 0px 30px #afe4ea'
      ],
      'sun': '0px 0px 8vw #fda51f',
      'moon': [
        '-25px -25px 30px black inset',
        '10px 10px 30px white inset',
        '0px 0px 30px #a7a7a7'
      ],
      'card': '0 0 0 1000px rgba(0, 0, 0, 0.6) inset'
    }
  },
};
export const plugins = [];
