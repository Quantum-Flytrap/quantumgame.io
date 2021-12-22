module.exports = {
    theme: {
        extend: {
            colors: {
                'brand-violet': "#310D67",
                'intense-violet': "#5D00D3",
                'dark-violet': "#250B38",
                'pink-beige': "#ECE9F0",
            },
            maxWidth: {
                '150px': '150px',
            }
        }
    },
    purge: [
        './content/**/*.md',
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.js',
    ],
    plugins: [
        require('@tailwindcss/typography'),
    ]    
}