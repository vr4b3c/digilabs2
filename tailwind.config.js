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
            sans: [ 'Open Sans', 'Roboto' ,'Arial', 'sans-serif']                  
        },
       
        colors: { 
            transparent: 'transparent',
            white: '#ffffff',
            black: '#101010',    
            gray: {
                100: '#707070',   
                200: '#E2E2E2',
                300: '#E7E8EA'
            }, 
            darkblue: '#0A142F',
            yellow: '#FCD404'


        }, 
        container: {
            center: true,
            padding: '2rem'
        },
        extend: {},
    },
    plugins: [
        'postcss-import': {}, 
    ]
}
