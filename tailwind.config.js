'use strict';
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                accent: 'var(--color-accent)',
            },
            height: {
                nav: 'var(--nav-height)',
            },
            fontFamily: {
                sans: ['var(--font-sans)', 'sans-serif'],
                serif: ['var(--font-serif)', 'cursive'],
            },
            screens: {
                'max-1210': { max: '1210px' },
                'max-1030': { max: '1030px' }, // Custom breakpoint for below 1030px
                'max-980': { max: '980px' }, // Custom breakpoint for below 980px
                'max-lg': { max: '1024px' }, // Re-add default max-lg
                'max-md': { max: '768px' }, // Re-add default max-md
                'max-sm': { max: '640px' }, // Re-add default max-sm
            },
        },
    },
    plugins: [],
};
