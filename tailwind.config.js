/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            width: {
                '12px': '12px',
                '14px': '14px',
                '16px': '16px',
                '20px': '20px',
                '30px': '30px',
                '40px': '40px',
                '40px': '40px',
                '50px': '50px',
                '60px': '60px',
                '70px': '70px',
                '80px': '80px',
                '90px': '90px',
                '100px': '100px',
                '200px': '200px',
                '300px': '300px',
                '400px': '400px',
                '500px': '500px',
                '600px': '600px',
                '700px': '700px',
                '800px': '800px',
                '900px': '900px',
                '1000px': '1000px'
            },
            height: {
                '20px': '20px',
                '30px': '30px',
                '40px': '40px',
                '50px': '50px',
                '60px': '60px',
                '70px': '70px',
                '80px': '80px',
                '90px': '90px',
                '100px': '100px',
                '200px': '200px',
                '300px': '300px',
                '400px': '400px',
                '500px': '500px',
                '600px': '600px',
                '700px': '700px',
                '800px': '800px',
                '900px': '900px',
                '1000px': '1000px'
            },
            minWidth: {
                '20px': '20px',
                '40px': '40px',
                '100px': '100px',
                '200px': '200px',
                '300px': '300px',
                '400px': '400px',
                '500px': '500px',
                '600px': '600px',
                '700px': '700px',
                '800px': '800px',
                '900px': '900px',
                '1000px': '1000px'
            }
        },
        backgroundColor: (theme) => ({
            ...theme('colors'),
            header: '#030852',
            main: '#f0f2f5'
        }),
        borderColor: (theme) => ({
            ...theme('colors'),
            menu: '#dcdfe6'
        }),
        textColor: (theme) => ({
            ...theme('colors')
            // dark: '#fff'
        }),
        boxShadow: {
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            none: 'none',
            'dark-2xl': '0 25px 50px -12px rgba(255, 255, 255, 0.25)'
        }
    },
    plugins: [],
    darkMode: 'class'
};
