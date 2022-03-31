import "../styles/globals.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "../Components/Layout";
import 'animate.css';
const outerTheme = createTheme({

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
			dark:'#313131'
		}
	},
	typography: {
		h1:{
			fontFamily:`"Barracuda"`
		},
		h2:{
			fontFamily:`"Barracuda"`
		},
		h3:{
			fontFamily:`"Barracuda"`
		},
		h4:{
			fontFamily:`"Barracuda"`
		},
		h5:{
			fontFamily:`"Barracuda"`
		},
		h6:{
			fontFamily:`"Raleway"`
		},
		body1:{
			fontFamily:`"Raleway"`
		},
		body2:{
			fontFamily:`"Raleway"`
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
