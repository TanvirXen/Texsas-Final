import Head from "next/head";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import sanity from "../../lib/sanity";
import imageUrlFor from "../../utils/imageUrlFor.js";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PortableText } from "@portabletext/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../../Components/ProductCardS";
import styles from "../../styles/Brands.module.scss";
import { useState, useCallback, useEffect, useRef } from "react";
const blog = `*[_type=="product"]{...,product->,brand->}`;
function Products(props) {
	const sliders = useRef(null);
	var settingss = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 2,
		arrows: false,
		initialSlide: 0,
		centerMode: false,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					dots: false,
					infinite: false,
					speed: 500,
					slidesToShow: 3,
					slidesToScroll: 2,
					arrows: false,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 850,
				settings: {
					dots: false,
					infinite: false,
					speed: 500,
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
					initialSlide: 1.8,
				},
			},
			{
				breakpoint: 630,
				settings: {
					dots: false,
					infinite: false,
					speed: 500,
					slidesToShow: 1.8,
					slidesToScroll: 1,
					arrows: false,
					initialSlide: 1.8,
				},
			},
			{
				breakpoint: 480,
				settings: {
					dots: false,
					infinite: false,
					speed: 500,
					slidesToShow: 1.3,
					slidesToScroll: 1,
					arrows: false,
					initialSlide: 1.3,
				},
			},
		],
	};
	return (
		<div>
			<Head>
				<title>{props.data.mtitle ||props.data.model}</title>
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
				<meta property="og:url" content={"https://texsasbd.com/products/"+props.data.slug.current} />
				<meta property="og:title" content={props.data.mtitle} />
				<meta
					name="keywords"
					content={
						"Texsas, Texsas Engineering,Textile Machines Bangladesh,Textile Bangladesh,Textile Machines BD,Texsas BD,Texsas Bangladesh," +
						props.data.keywords
					}
				/>
				<meta property="og:description" content={props.data.sdescription} />
				<meta
					property="og:image"
					content={imageUrlFor(props.data.images[0].asset)}
				/>
			</Head>
			<Container maxWidth="xl">
				<Grid
					container
					spacing={1}
					direction="row"
					style={{ paddingTop: "40px" }}
				>
					<Grid
						item
						xs={8}
						sm={8}
						md={8}
						lg={8}
						xl={8}
						style={{ paddingBottom: "20px" }}
					>
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
						style={{
							display: "flex",
							justifyContent: "flex-end",
							paddingBottom: "20px",
						}}
					>
						<img
							src={imageUrlFor(props.data.brand.logo)}
							alt="logo"
							className="respImg"
							style={{ maxHeight: "60px" }}
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
						<Carousel
							showStatus={false}
							swipeable={true}
							showArrows={false}
							showIndicators={true}
							emulateTouch={true}
							autoPlay={true}
							infiniteLoop={true}
						>
							{props.data.images.map((e) => {
								return (
									<img
										src={imageUrlFor(e.asset)}
										alt="Blog Image"
										className="pimg"
										key={e.key}
									/>
								);
							})}
						</Carousel>
					</Grid>
				</Grid>
			</Container>

			<Container maxWidth="xl" style={{ paddingBottom: "40px" }}>
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
						<Typography
							variant="h2"
							color="initial"
							style={{ marginBottom: "20px" }}
						>
							{props.data.title}
						</Typography>
				
						<PortableText value={props.data.description} />
					</Grid>
				</Grid>
			</Container>
			{props.data.url ?(			<Container maxWidth="xl" className={styles.hero11}>
				<Grid
					container
					spacing={1}
					direction="row"
					style={{ paddingTop: "40px" }}
				>
					<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
						<Typography variant="h2" color="black.dark" className={styles.pd1}>
							Product Preview
						</Typography>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<iframe style={{width:'100%',height:'500px'}}
src={props.data.url}>
</iframe>
					</Grid>
				</Grid>
			</Container>):(<div></div>)

}
			{props.data.specs ? (
				<Container maxWidth="xl" style={{ paddingBottom: "40px" }}>
					<Grid
						container
						spacing={1}
						direction="row"
						style={{ paddingTop: "40px" }}
					>
						<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
							<Typography
								variant="h2"
								color="initial"
								style={{ paddingBottom: "18px" }}
							>
								Specifications
							</Typography>
						</Grid>
						{props.data.specs.map((e) => {
							return (
								<Grid
									container
									spacing={1}
									direction="row"
									style={{ paddingTop: "10px" }}
									key={e.key}
									className="bdrProduct"
								>
									<Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
										<Typography
											variant="body2"
											color="black.light"
											style={{ fontWeight: "bold" }}
										>
											{e.name}
										</Typography>
									</Grid>

									<Grid item xs={12} sm={8} md={9} lg={9} xl={9}>
										<PortableText value={e.description} />
									</Grid>
								</Grid>
							);
						})}
					</Grid>
				</Container>
			) : (
				<div></div>
			)}
			{props.data.auxProduct ? (
				<Container maxWidth="xl" className={styles.hero11}>
					<Grid>
						<Typography variant="h2" color="black.dark" className={styles.pd1}>
							Similar Products:
						</Typography>
						<div>
							<Slider ref={sliders} {...settingss}>
								{props.data.auxProduct.map((e) => {
				return (
					<ProductCard
						image={e.mainImage}
						key={e.model}
						title={e.model}
						description={e.sdescription}
						logo={e.brand.logo}
					/>
				);
			})}
							</Slider>
							<div
								style={{ marginTop: "16px", paddingBottom: "100px" }}
								className="none"
							>
								<span onClick={() => sliders?.current?.slickPrev()}>
									<img src="/arrowLG.svg" alt="" />
								</span>
								<span onClick={() => sliders?.current?.slickNext()}>
									<img src="/arrowRG.svg" alt="" />
								</span>
							</div>
						</div>
					</Grid>
				</Container>
			) : (
				<div></div>
			)}


		</div>
	);
}

export async function getStaticProps(context) {
	const id = context.params.slug;
	const karma = `*[_type=="product" && slug.current=="${id}"]{
		...,
		"auxProduct": product[]->{
			...
			brand->
		  },'category': category[]->,brand->
	  }`;
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

export default Products;
