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
	console.log(props.data.description);
	return (
		<div>
			<Container maxWidth="xl">
				<Grid container spacing={1}>
					<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
						<Carousel
							showStatus={false}
							swipeable={true}
							showArrows={false}
							showIndicators={true}
							emulateTouch={true}
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
						<PortableText value={props.data.description[0]}  />
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
		revalidate: 1000, // In seconds
	};
}
export async function getStaticPaths() {
	const blogs = await sanity.fetch(blog);
	const paths = blogs.map((post) => ({ params: { slug: post.slug.current } }));

	return { paths, fallback: "blocking" };
}

export default Blog;
