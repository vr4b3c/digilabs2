/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');


module.exports = {
    content: ['./index.html', './js/*.js'],
    safelist: [
        'fixed' 
    ],
    theme: { 
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        fontFamily: {
            sans: [ 'Montserrat', 'Arial', 'sans-serif'],
            serif: [ 'Tangerine', 'Georgia', 'serif'],                  
        },
       
        colors: { 
            transparent: 'transparent',
            black: colors.black,
            white: colors.white, 
            gray: colors.gray,          
            secondary: {
                '50': '#bbaaaa',
                '100': '#aa9999',
                '200': '#998888',
                '300': '#887777',
                '400': '#776666',
                '500': '#665555',
                '600': '#554444',
                '700': '#443333',
                '800': '#332222',
                '900': '#221111',
                '950': '#100d0d',
            },
                   
            primary:  {
                '50': '#fff4fe',
                '100': '#fee9fd',
                '200': '#fdd1fc',
                '300': '#faadf3',
                '400': '#f67cea',
                '500': '#eb4adb',
                '600': '#d42bc0',
                '700': '#ac1f99',
                '800': '#8c1c7a',
                '900': '#731c64',
                '950': '#4c0640',
            },
        }, 
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                xl: '1rem'
            }
        },
        extend: {},
    },
    plugins: [
        'postcss-import': {}, 
    ]
}

/*
import {
    Collapse,
    initTWE,
  } from "tw-elements";
  
  initTWE({ Collapse });
*/