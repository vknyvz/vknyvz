import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            terminal: {
                green: '#4AF626',
                background: '#0a0e17',
                text: '#e0e0e0'
            }
        },
        fontFamily: {
          mono: ['SF Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace']
        },
        fontSize: {
          '2xs': '0.65rem',
        },
    }
},
  plugins: [],
}