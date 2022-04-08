import Head from "next/head";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import sanity from "../../lib/sanity";
import imageUrlFor from "../../utils/imageUrlFor.js";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PortableText } from "@portabletext/react";
const blog = '*[_type=="product"]';
function Products(props) {
	console.log(props.data);
	return (
		<div>
				<Head>
				<title>TEXSAS- 	{props.data.model}</title>
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
				<meta property="og:url" content={"https://www.texsasbd.com/products/"+props.data.slug.current} />
				<meta property="og:title" content={"TEXSAS-"+props.data.model} />
				<meta
					property="og:description"
					content={props.data.sdescription}
				/>
				<meta property="og:image" content=	{imageUrlFor(props.data.images[0].asset)} />
			</Head>
			<Container maxWidth="xl">
				<Grid
					container
					spacing={1}
					direction="row"
					style={{ paddingTop: "40px" }}
				>
					<Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
						<Typography variant="h1" color="black.dark">
							{props.data.model}
						</Typography>
					</Grid>
					<Grid
						item
						xs={4}
						sm={4}
						md={4}
						lg={4}
						xl={4}
						style={{ display: "flex", justifyContent: "flex-end" }}
					>
						<img
							src={imageUrlFor(props.data.brand.logo)}
							alt=""
							className="respImg"
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
						<Carousel
							showStatus={false}
							swipeable={true}
							showArrows={false}
							showIndicators={true}
							emulateTouch={true}
						>
							{props.data.images.map((e) => {
								return (
									<img
										src={imageUrlFor(e.asset)}
										alt="Blog Image"
										style={{ width: "100%", height: "auto" }}
										key={e.key}
									/>
								);
							})}
						</Carousel>
					</Grid>
				</Grid>
			</Container>
			<Container maxWidth="xl">
				<Grid
					container
					spacing={1}
					direction="row"
					style={{ paddingTop: "40px" }}
				>
					<Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
						<Typography variant="body2" color="initial">
							{}
						</Typography>
						<Typography variant="h2" color="initial">
							{props.data.title}
						</Typography>
						<PortableText value={props.data.description[0]} />
					</Grid>
				</Grid>
			</Container>
			<Container maxWidth="xl">
				<Grid
					container
					spacing={1}
					direction="row"
					style={{ paddingTop: "40px" }}
				>
					<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
						<Typography variant="h2" color="initial">
							Specifications
						</Typography>
					</Grid>
					{props.data.specs.map((e)=>{
						return(
							<Grid
							container
							spacing={1}
							direction="row"
							style={{ paddingTop: "40px" }}
							key={e.key}
						>
												<Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
						<Typography variant="body2" color="black.light">
					{e.name}
						</Typography>
					</Grid>
					<Grid item xs={12} sm={8} md={9} lg={9} xl={9}>
					<PortableText value={e.description[0]}    />
					</Grid>
							</Grid>
						)
					})}

				</Grid>
			</Container>
		</div>
	);
}

export async function getStaticProps(context) {
	const id = context.params.slug;
	const karma = `*[_type=="product" && slug.current=="${id}"]{...,brand->}{...,categories->}`;
	const blogs = await sanity.fetch(karma);
	return {
		props: { data: blogs[0] },
		revalidate: 1000, // In seconds
	};
}
export async function getStaticPaths() {
	const blogs = await sanity.fetch(blog);
	const paths = blogs.map((post) => ({ params: { slug: post.slug.current } }));

	return { paths, fallback: "blocking" };
}

export default Products;
