import "../styles/globals.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "../Components/Layout";
import 'animate.css';
const outerTheme = createTheme({

	breakpoints:{
		values:{
			xs:0,
			sm:600,
			md:900,
			lg:1100,
			xl:1300,
		}
	},
	palette: {
		primary: {
			main: "#0BBA60",
			dark: "#0E9C53",
		},
		secondary: {
			main: "#C7CFDF",
			light: "#E1E6ED",
			dark: "#FFFFFF",
		},
		black:{
			dark:'#313131',
			light:'#656565'
		},
		blue:{
			light:'#526899'
		}
	},
	typography: {
		h1:{
			fontFamily:`"Raleway"`,
			fontWeight: "700",
			fontSize: "3rem",
			'@media (max-width:1100px)': {
				fontSize: "2.8rem"
			  },
			  '@media (max-width:900px)': {
				fontSize: "2.6rem"
			  },
			  '@media (max-width:600px)': {
				fontSize: "2.2rem"
			  },
			  '@media (max-width:430px)': {
				fontSize: "1.8rem"
			  },
		},
		h2:{
			fontFamily:`"Raleway"`,
			fontWeight: "700",
			fontSize: "2.5rem",
		},
		h3:{
			fontFamily:`"Raleway"`,
			fontWeight: "700",
			fontSize: "24px",
	
		},
		h4:{
			fontFamily:`"Raleway"`,
			fontWeight: "700",
			fontSize: "1.5rem",
		},
		h5:{
			fontFamily:`"Raleway"`
		},
		h6:{
			fontFamily:`"Raleway"`
		},
		body1:{
			fontFamily:`"Raleway"`,
			fontWeight: "500",
			fontSize: "1.25rem",
		},
		body2:{
			fontFamily:`"Raleway"`,
			fontWeight: "500",
			fontSize: "1rem",
			lineHeight:'1.3rem'
		}
	},
	
});

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={outerTheme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}
export default MyApp;
