const theme = require('./theme.json');
const tailpress = require("@jeffreyvr/tailwindcss-tailpress");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './*.php',
        './**/*.php',
        './resources/css/*.css',
        './resources/js/*.js',
        './safelist.txt'
    ],
    theme: {
        container: {
            padding: {
                // DEFAULT: '1rem',
                sm: '2rem',
                lg: '0rem'
            },
        },
        extend: {
            colors: tailpress.colorMapper(tailpress.theme('settings.color.palette', theme)),
            fontSize: tailpress.fontSizeMapper(tailpress.theme('settings.typography.fontSizes', theme)),
            animation: {
                'loop-scroll': 'loop-scroll 120s linear infinite',
                'appear': 'appear 0.3s linear forwards'
              },
            keyframes: {
                "loop-scroll":{
                "0%":{"transform":"translateX(0)"},
                "100%":{"transform":"translateX(-100%)"}
                },
                'appear':{
                    "0%":{"opacity":0},
                    "100%":{opacity:1}
                }
            },
            fontFamily:{
                'neil':'NeilBold',
                'futuraL':'FuturaLight',
                'futuraR':'FuturaRegular'

            }

        },
        screens: {
            'xs': '480px',
            'sm': '600px',
            'md': '767px',
            'lg': tailpress.theme('settings.layout.contentSize', theme),
            'xl': tailpress.theme('settings.layout.wideSize', theme),
            '2xl': '1440px'
        }
    },
    plugins: [
        tailpress.tailwind
    ]
};
