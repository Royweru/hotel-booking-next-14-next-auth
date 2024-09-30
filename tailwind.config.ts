import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
	"./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  fontFamily:{
			montserrat:"var(--font-montserrat)"
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

// function addVariablesForColors({ addBase, theme }: any) {
// 	// eslint-disable-next-line prefer-const
// 	let allColors = flattenColorPalette(theme("colors"));
// 	// eslint-disable-next-line prefer-const
// 	let newVars = Object.fromEntries(
// 	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
// 	);
   
// 	addBase({
// 	  ":root": newVars,
// 	});
//   }

// function flattenColorPalette(_arg0: any) {
// 		throw new Error("Function not implemented.");
// 	}
	
export default config;
