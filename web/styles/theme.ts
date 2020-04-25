import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 10px;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  body {
    font-family: 'Karla', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5em; // 15px
    min-height: 100vh;
  }

  a, a:active {
    text-decoration: none;
    color: inherit;
  }

  button, input, select, table, tbody, thead, td, tr {
    border: none;
  }
  table { border-collapse:collapse }
  button:active {
    border:none;
  }

  button:focus, input:focus, select:focus {
    outline: none;
  }

`

export const theme = {
  boxShadow: {
    'box-shadow': '6px 7px 16px 0px rgba(156,156,156,0.4)',
  },
  palette: {
    primary: '#393E41',
    secondary: '#F0544F',
    green_gradient: 'linear-gradient(to right, #44AF69, #00E599)',
    red_gradient: 'linear-gradient(to right, #F8333C, #F9585F)',
  },
  breakpoints: {
    phone: 'max-width: 599px',
    tabletPortrait: 'min-width: 600px',
    tabletLandscape: 'min-width: 900px',
    laptop: 'min-width: 1200px',
    laptopBig: 'min-width 1500px',
    desktop: 'min-width: 1800px',
  },
}

export const breakPoints = {
  phone: 'max-width: 599px',
  tabletPortrait: 'min-width: 600px',
  tabletLandscape: 'min-width: 900px',
  laptop: 'min-width: 1200px',
  laptopBig: 'min-width 1500px',
  desktop: 'min-width: 1800px',
}
