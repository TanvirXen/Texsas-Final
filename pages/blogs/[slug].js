import Head from "next/head";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import sanity from "../../lib/sanity";
const blog = '*[_type=="blog"]| order(date desc)';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PortableText } from "@portabletext/react";
import imageUrlFor from "../../utils/imageUrlFor.js";
function Blog(props) {

	return (
		<div>
			<Head>
				<title> {props.data.mtitle}</title>
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
				<meta property="og:url" content={"https://texsasbd.com/blogs/"+props.data.slug.current} />
				<meta property="og:title" content={props.data.mtitle} />
				<meta name = "keywords" content = {"Texsas, Texsas Engineering,Textile Machines Bangladesh,Textile Bangladesh,Textile Machines BD,Texsas BD,Texsas Bangladesh,"+props.data.keywords} />
				<meta
					property="og:description"
					content="Connecting you to the world’s leading Textile Solutions with top class service."
				/>
				<meta property="og:image" content=	{imageUrlFor(props.data.images[0].asset)} />
			</Head>
			<Container maxWidth="xl">
				<Grid container spacing={1}>
					<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
						<Carousel
							showStatus={false}
							swipeable={true}
							showArrows={false}
							showIndicators={true}
							emulateTouch={true}
							autoPlay={true}
							infiniteLoop={true}
							className="topspace"
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
					<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
						<Typography variant="h1" color="black.dark">
							{props.data.title}
						</Typography>
					</Grid>
					<Grid item xs={12} sm={10} md={9} lg={8} xl={8} className='padddowns'>
						<PortableText value={props.data.description}  />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export async function getStaticProps(context) {
	const id = context.params.slug;
	const karma = `*[_type=="blog" && slug.current=="${id}"]`;
	const blogs = await sanity.fetch(karma);
	return {
		props: { data: blogs[0] },
		revalidate: 100, // In seconds
	};
}
export async function getStaticPaths() {
	const blogs = await sanity.fetch(blog);
	const paths = blogs.map((post) => ({ params: { slug: post.slug.current } }));

	return { paths, fallback: "blocking" };
}

export default Blog;
