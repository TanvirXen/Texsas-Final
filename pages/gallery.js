import Head from "next/head";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import sanity from "../lib/sanity";
import imageUrlFor from "../utils/imageUrlFor.js";
function Gallery(props) {
	console.log(props.card);
	return (
		<div>
			<Container maxWidth="xl">
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
		revalidate: 1000, // In seconds
	};
}
export default Gallery;
