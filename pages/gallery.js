import Head from "next/head";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import sanity from "../lib/sanity";
import styles from "../styles/Brands.module.scss";
import imageUrlFor from "../utils/imageUrlFor.js";
function Gallery(props) {
	console.log(props.card);
	return (
		<div>
						<Head>
				<title>TEXSAS - Gallery</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
				<link rel="preconnect" href="https://vitals.vercel-insights.com" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />

				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.texsasbd.com/gallery" />
				<meta property="og:title" content="TEXSAS - Gallery" />
				<meta name = "keywords" content = "Texsas, Texsas Engineering,Textile Machines Bangladesh,Textile Bangladesh,Textile Machines BD,Texsas BD,Texsas Bangladesh" />
				<meta
					property="og:description"
					content="Connecting you to the world’s leading Textile Solutions with top class service."
				/>
				<meta property="og:image" content='/meta.png' />
			</Head>
			<div className="brandHero">
				<Container maxWidth="xl">
					<Grid container spacing={1} direction="row">
						<Grid item xs={12} md={7} lg={7} xl={7} container>
							<Typography
								variant="h2"
								color="secondary.dark"
								className={
									styles.hero + " " + "animate__animated animate__bounceInLeft"
								}
							>
				Gallery
							</Typography>

						</Grid>
					</Grid>
				</Container>
			</div>
			<Container maxWidth="xl" style={{paddingBottom:'40px'}}>
				{props.card.map((s) => {
					return (
						<div key={s.title}>
							<Typography variant="h2" color="black.dark" className="textpad">
								{s.title}
							</Typography>
							<Grid container spacing={2} direction="row" >
								{s.images.map((e) => {
									return (
										<Grid
											key={s.title}
											xs={12}
											sm={6}
											md={4}
											lg={4}
											xl={4}
											item
										>
											<img
												src={imageUrlFor(e.asset)}
												alt=""
												style={{ width: "100%", height: "auto" }}
											/>
										</Grid>
									);
								})}
							</Grid>
						</div>
					);
				})}
			</Container>
		</div>
	);
}

export async function getStaticProps() {
	const product = `*[_type=="gallery" ]`;
	const products = await sanity.fetch(product);
	return {
		props: { card: products },
		revalidate: 100, // In seconds
	};
}
export default Gallery;
