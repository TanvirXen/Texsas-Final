import Head from "next/head";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import sanity from "../../lib/sanity";
import BrandCard from "../../Components/BrandCard";
import styles from "../../styles/Brands.module.scss";
import imageUrlFor from "../../utils/imageUrlFor.js";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../../Components/ProductCardS";
import { useState, useCallback, useEffect, useRef } from "react";
const blog = '*[_type=="brand"]';
function Brands(props) {
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
	const [more, setmore] = useState(false)
	return (
		<div>
			<Head>
				<title>{props.data.mtitle} </title>
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
				<meta property="og:url" content={"https://texsasbd.com/brands/"+props.data.name} />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={props.data.mtitle} />
					<meta name = "keywords" content = {"Texsas, Texsas Engineering,Textile Machines Bangladesh,Textile Bangladesh,Textile Machines BD,Texsas BD,Texsas Bangladesh,"+props.data.keyword} />
				<meta property="og:description" content={props.data.sdescription} />
				<meta
					property="og:image"
					content={imageUrlFor(props.data.cardImage.asset)}
				/>
			</Head>
			<Container maxWidth="xl" className={styles.hero1}>
				<Grid container spacing={6} direction="row">
					<Grid
						item
						xs={12}
						sm={5}
						md={4}
						lg={4}
						xl={4}
						className={styles.left}
					>
						<img
							src={imageUrlFor(props.data.cardImage.asset)}
							alt=""
							className={styles.img}
						/>
					</Grid>
					<Grid item xs={12} sm={7} md={8} lg={8} xl={8}>
						<Typography variant="h1" color="black.dark">
							{props.data.name}
						</Typography>
						<Link href={props.data.website} passHref>
							<Typography
								variant="body1"
								color="blue.light"
								style={{ display: "flex", cursor: "pointer" }}
							>
								<span>
									<img src="/web.svg" alt="icon" style={{ height: "24px" }} />
								</span>{" "}
								<span style={{  paddingLeft: "2px" }}>
									{props.data.website}
								</span>
							</Typography>
						</Link>

						<Typography
							variant="body1"
							color="black.dark"
							style={{ display: "flex" }}
						>
							<span>
								<img src="/origin.svg" alt="icon" style={{ height: "24px" }} />
							</span>{" "}
							<span style={{  paddingLeft: "2px" }}>
								{props.data.origin}
							</span>
						</Typography>
						<Typography
							variant="body1"
							color="black.dark"
							style={{ display: "flex" }}
						>
							<span>
								<img
									src="/category.svg"
									alt="icon"
									style={{ height: "24px" }}
								/>
							</span>{" "}
							<span style={{ paddingTop: "2px", paddingLeft: "2px" }}>
								{" "}
								{props.data.category}
							</span>
						</Typography>

						<Typography variant="h3" color="black.dark" className={styles.pd1}>
							Description
						</Typography>
						<div className={more?'':'texthides'}>
						<PortableText value={props.data.description}  />
					

						</div>
						{more?<p style={{color:'#526899',cursor:'pointer'}} onClick={()=>{setmore(false) &&  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })}}>See Less</p>:<p style={{color:'#526899',cursor:'pointer'}} onClick={()=>{setmore(true)}}>See More</p>}

						
					</Grid>
				</Grid>
			</Container>
			<Container maxWidth="xl" className={styles.hero11}>
				<Grid >
					<Typography variant="h2" color="black.dark" className={styles.pd1}>
						Products By The Brand
					</Typography>
					<div>
						<Slider ref={sliders} {...settingss}>
							{props.card.map((e) => {
								return (
									<ProductCard
										image={e.mainImage}
										key={e.model}
										title={e.model}
										description={e.sdescription}
										logo={e.brand.logo}
										slug={e.slug.current}
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
		</div>
	);
}

export async function getStaticProps(context) {
	const id = context.params.slug;
	const karma = `*[_type=="brand" && name=="${id}"]`;
    const product =`*[_type=="product" &&  brand._ref in *[_type=="brand" && name=="${id}"]._id ]{...}{...,brand->}`
    const products =await sanity.fetch(product);
	const blogs = await sanity.fetch(karma);
	return {
		props: { data: blogs[0] ,card:products},
		revalidate: 100, // In seconds
	};
}
export async function getStaticPaths() {
	const blogs = await sanity.fetch(blog);
	const paths = blogs.map((post) => ({ params: { slug: post.name } }));

	return { paths, fallback: "blocking" };
}

export default Brands;
