/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	fontFamily: {
  		inter: ["Inter", "sans-serif"]
  	},
  	screens: {
  		sm: {
  			max: '540px',
  			min: '340px'
  		},
  		md: {
  			max: '960px',
  			min: '540px'
  		},
  		lg: {
  			max: '1140px',
  			min: '960px'
  		},
  		xl: {
  			max: '1440px'
  		}
  	},
  	extend: {
  		colors: {},
  		keyframes: {
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          margin: "0 auto",
          padding: "5rem 2.5rem",
          maxWidth: "calc(1350px + 80px)",

          "@screen sm": {
            paddingInline: "1.5rem",
          },

          "@screen md": {
            paddingInline: "2rem",
          },
        },
      });
    },
    require("tailwindcss-animate"),
  ],
};
