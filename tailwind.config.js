/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'light-slate-blue': 'hsl(252, 100%, 67%)',
                'light-royal-blue': 'hsl(241, 81%, 54%)',
                'very-light-blue': '#ECF2FF',
                'violet-blue': 'hsla(256, 72%, 46%, 1)',
                'persian-blue': 'hsla(241, 72%, 46%, 0)',
                'pale-blue': 'hsl(221, 100%, 96%)',
                'light-lavender': 'hsl(241, 100%, 89%)',
                'dark-grey-blue': 'hsl(224, 30%, 27%)',
            },
            boxShadow: {
                '3xl': '0 30px 60px 0 rgba(61, 108, 236, 0.15)',
            },
            borderRadius: {
                '4xl': '32px',
            },
        },
        fontFamily: {
            sans: ['Hanken Grotesk', 'sans-serif'],
        },
    },
    plugins: [],
};
