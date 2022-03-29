import "../styles/globals.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "../Components/Layout";
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
		fontFamily: "Barracuda",
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
