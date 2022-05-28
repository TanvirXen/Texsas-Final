import Head from "next/head";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useCallback, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import styles from "../styles/Home.module.scss";
import Marquee from "react-easy-marquee";
import sanity from "../lib/sanity";
import imageUrlFor from "../utils/imageUrlFor.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardR from "../Components/TestimonialCard.js";
import ProductCard from "../Components/ProductCardS";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AOS from "aos";
const brand = '*[_type=="brand"]';
const product = `*[_type=="product"]{...,'category': category[]->,brand->}`;
const categorys= '*[_type=="category"]';
const testimonials =[
	{description:'We have been a client of Texsas Engineering Company for a long time and they have consistently given us amazing products and service.',logo:'/noman.svg'},
	{description:'Texsas Engineering not only did help us with their reliable service, but also enabled us to take smart decisions with their advices. It is evident that they have years of experience in the industry.”',logo:'/rahim.svg'},
	{description:'What I like the most about Texsas Engineering is the long term relationship that gets built through working with them. They have supported us with their best commitment.',logo:'/liz.svg'},
	{description:'Ever since we have started working with Texsas, they have not disappointed us in any way. Their order of work and promptness in delivery is absolutely brilliant and appreciated.”',logo:'/anwar.svg'},
	{description:'Even though we have just started working with Texsas Engineering, we are very hopeful and optimistic about our future with them. We are looking forward to do great things alongside them.',logo:'/beximco.svg'},
	{description:'Texsas Engineering not only has provided us with some machinaries from top brands, but has amazed us with their after-sales service whenever we needed them. ',logo:'/saad.svg'},
]
function Home(props) {
	const useMediaQuery = (width) => {
		const [targetReached, setTargetReached] = useState(false);
	
		const updateTarget = useCallback((e) => {
			if (e.matches) {
				setTargetReached(true);
			} else {
				setTargetReached(false);
			}
		}, []);
	

		useEffect(() => {
			AOS.init();
			const media = window.matchMedia(`(max-width: ${width}px)`);
			media.addListener(updateTarget);
	
			// Check on mount (callback is not called until a change occurs)
			if (media.matches) {
				setTargetReached(true);
			}
	
			return () => media.removeListener(updateTarget);
		}, []);
		return targetReached;
	};
	const products =props.products
	const [data, setdata] = useState(props.products)
	const [CatQ, setCatQ] = useState('init')
	const brands= props.brands
	const sliders = useRef(null);
	const slider = useRef(null);
		function sortC(e) {
			let s = [];
			products.filter((element) => {
				for (let i = 0; i < element.category.length; i++) {
					if (element.category[i].title == e) {
						s.push(element);
					}
				}
			});
		setdata(s)
		}
		var setting = {
			dots: false,
			infinite: false,
			speed: 500,
			slidesToShow: 7,
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
						slidesToShow: 5,
						slidesToScroll: 2,
						arrows: false,
						initialSlide: 5,
					},
				},
				{
					breakpoint: 850,
					settings: {
						dots: false,
						infinite: false,
						speed: 500,
						slidesToShow: 4,
						slidesToScroll: 1,
						arrows: false,
						initialSlide: 4,
					},
				},
				{
					breakpoint: 630,
					settings: {
						dots: false,
						infinite: false,
						speed: 500,
						slidesToShow: 2.9,
						slidesToScroll: 1,
						arrows: false,
						initialSlide: 2.9,
					},
				},
				{
					breakpoint: 480,
					settings: {
						dots: false,
						infinite: false,
						speed: 500,
						slidesToShow: 2.1,
						slidesToScroll: 1,
						arrows: false,
						initialSlide: 2.1,
					},
				},
			],
		};
	var settings = {
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
	var settingss = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: false,
		initialSlide: 0,
		centerMode: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					dots: false,
					infinite: false,
					speed: 500,
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 780,
				settings: {
					dots: false,
					infinite: false,
					speed: 500,
					slidesToShow: 1.6,
					slidesToScroll: 1,
					arrows: false,
					initialSlide: 1.6,
				},
			},
			{
				breakpoint: 600,
				settings: {
					dots: false,
					infinite: false,
					speed: 500,
					slidesToShow: 1.2,
					slidesToScroll: 1,
					arrows: false,
					initialSlide: 1.2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					dots: false,
					infinite: false,
					speed: 500,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					initialSlide: 1,
				},
			},
		],
	};
	const isBreakpoint = useMediaQuery(900);

	return (
		<div>
			<Head>
				<link
					rel="preload"
					as="video"
					type="video/mp4"
					href="https://firebasestorage.googleapis.com/v0/b/texaswebsite-13a01.appspot.com/o/TEXSAS%20Landing.mp4?alt=media&token=b1067d96-1bbe-4993-ba9a-f33b6cba0260"
				/>
				<link
					rel="preconnect"
					href="https://firebasestorage.googleapis.com/v0/b/texaswebsite-13a01.appspot.com/o/TEXSAS%20Landing.mp4?alt=media&token=b1067d96-1bbe-4993-ba9a-f33b6cba0260"
				/>
				<link
					href="https://unpkg.com/aos@2.3.1/dist/aos.css"
					rel="stylesheet"
				/>
				<title>TEXSAS- Home </title>

				<meta
					name="google-site-verification"
					content="NDv76VQOyFym8ToQYWj9HKlCdFr2_RQh1IiWlaWLEj4"
				/>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link
					rel="stylesheet"
					type="text/css"
					charset="UTF-8"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
				/>
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
				<meta property="og:url" content="https://www.texsasbd.com/" />
				<meta property="og:title" content="TEXSAS- Home" />
				<meta name = "keywords" content = "Texsas, Texsas Engineering,Textile ,Machines ,Textile Bangladesh,Textile Machines BD,Texsas BD,Texsas Bangladesh" />
				<meta
					property="og:description"
					content="Connecting you to the world’s leading Textile Solutions with top class service."
				/>
				<meta property="og:image" content='/meta.png' />
			</Head>
			{isBreakpoint ? 	<Container maxWidth="xl" style={{ paddingBottom: "100px" }}>
				<Grid container spacing={0}>
				<Grid
						item
						xs={12}
						md={6}
						lg={6}
						xl={6}
						container
						direction="column"
						className={styles.herobtn}
					>
						<div className="customsilde">
						<Carousel
							showStatus={false}
							swipeable={true}
							showArrows={false}
							showIndicators={false}
							emulateTouch={true}
							autoPlay={true}
							infiniteLoop={true}
							showThumbs={false}
							
						>
	<img src="demo1.png" alt="" />
	<img src="demo2.png" alt="" />
	<img src="demo3.png" alt="" />
	<img src="demo4.png" alt="" />
	<img src="demo5.png" alt="" />
	<img src="demo6.png" alt="" />

						</Carousel>
						</div>

					</Grid>
					<Grid item xs={12} md={6} lg={6} xl={6}>
						<Typography
							variant="h1"
							color="black.dark"
							className={
								styles.hero + " " + "animate__animated animate__bounceInLeft"
							}
						>
							One Stop Textile Solutions And Services in Bangladesh
						</Typography>
						<Typography
							variant="h6"
							color="black.dark"
							className="animate__animated animate__bounceInLeft"
							style={{paddingBottom:'40px'}}
						>
							Textile Solutions And Services
						</Typography>
						<span className={"button1" + " " + styles.padd100}>
							<Link href="/contact">Get In Touch</Link>
						</span>
					</Grid>

				</Grid>
			</Container> : 	<Container maxWidth="xl" style={{ paddingBottom: "100px" }}>
				<Grid container spacing={0}>
					<Grid item xs={12} md={6} lg={6} xl={6}>
						<Typography
							variant="h1"
							color="black.dark"
							className={
								styles.hero + " " + "animate__animated animate__bounceInLeft"
							}
						>
							One Stop Textile Solutions And Services in Bangladesh
						</Typography>
						<Typography
							variant="h6"
							color="black.dark"
							className="animate__animated animate__bounceInLeft"
							style={{paddingBottom:'40px'}}
						>
							Textile Solutions And Services
						</Typography>
						<span className={"button1" + " " + styles.padd100}>
							<Link href="/contact">Get In Touch</Link>
						</span>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						lg={6}
						xl={6}
						container
						direction="column"
						className={styles.herobtn}
					>
						<div className="customsilde">
						<Carousel
							showStatus={false}
							swipeable={true}
							showArrows={false}
							showIndicators={false}
							emulateTouch={true}
							autoPlay={true}
							infiniteLoop={true}
							showThumbs={false}
							
						>
	<img src="demo1.png" alt="" />
	<img src="demo2.png" alt="" />
	<img src="demo3.png" alt="" />
	<img src="demo4.png" alt="" />
	<img src="demo5.png" alt="" />
	<img src="demo6.png" alt="" />

						</Carousel>
						</div>

					</Grid>
				</Grid>
			</Container>}
			
			<div className={styles.bgs}>
				<Container maxWidth="xl">
					<Grid>
						<Grid item xs={12} md={12} lg={12} xl={12}>
							<div className={styles.vid}>
								<video
									loop
									autoPlay
									muted
									style={{ width: "100%", marginTop: "-160px" }}
								>
									<source
										src="https://firebasestorage.googleapis.com/v0/b/texaswebsite-13a01.appspot.com/o/TEXSAS%20Landing.mp4?alt=media&token=b1067d96-1bbe-4993-ba9a-f33b6cba0260"
										type="video/mp4"
									/>
									Your browser does not support the video tag.
								</video>
							</div>
						</Grid>
					</Grid>
				</Container>
			</div>
			<Container
				maxWidth="xl"
				style={{ paddingBottom: "40px", paddingTop: "40px" }}
			>
				<Marquee
					duration={9000}
					background="#ffffff"
					height="220px"
					width="100%"
					axis="X"
					align="center"
					pauseOnHover={true}
					reverse={true}
				>
					{brands.map((e) => {
						return (
							<Link 	key={e.name} href={'/brands/'+e.name} passHref>
							<img
								src={imageUrlFor(e.logo)}
								alt=""
								key={e.name}
								className={styles.brandLogo}
							/>
							</Link>
						);
					})}
				</Marquee>
			</Container>
			<div className="hero3">
				<Container maxWidth="xl">
					<Grid container spacing={5}>
						<Grid item xs={12} md={6} lg={6} xl={6}>
							<div data-aos="fade-right" data-aos-duration="2000">
								<Typography
									variant="body2"
									color="primary.main"
									className={styles.padding100}
								>
									OUR VALUES
								</Typography>
								<Typography
									variant="h2"
									color="secondary.dark"
									style={{ marginBottom: "28px" }}
								>
									We creeate value from shipment to servicing.
								</Typography>
								<span className="button1">
									<Link href="/about">Learn More</Link>
								</span>
							</div>
						</Grid>
						<Grid item xs={12} md={6} lg={6} xl={6}>
							<div data-aos="fade-left" data-aos-duration="2000">
								<Typography
									variant="h4"
									color="primary.main"
									className={styles.padding100}
								>
									Affordable Textile Solutions
								</Typography>
								<Typography
									variant="body1"
									color="secondary.light"
									style={{ paddingBottom: "40px" }}
								>
									We promise to provide the best value for money among Textile
									Solutions in Bangladesh.
								</Typography>

								<Typography variant="h4" color="primary.main">
									Top Notch Service
								</Typography>
								<Typography
									variant="body1"
									color="secondary.light"
									style={{ paddingBottom: "40px" }}
								>
									Our team of professionals are standby to support you with
									world class service for your Textile machinaries.
								</Typography>

								<Typography variant="h4" color="primary.main">
									Commitment and Dedication
								</Typography>
								<Typography
									variant="body1"
									color="secondary.light"
									style={{ paddingBottom: "100px" }}
								>
									We are commited and dedicated to our clients throughout their
									experience with us and beyond.
								</Typography>
							</div>
						</Grid>
					</Grid>
				</Container>
			</div>
			<div className="hero5">
				<Container maxWidth="xl">
					<Grid container spacing={0}>
						<Grid item xs={12} md={6} lg={6} xl={6}>
							<div data-aos="fade-right" data-aos-duration="2000">
								<Typography
									variant="body2"
									color="primary.main"
									className={styles.padding100}
								>
									OUR PRODUCTS
								</Typography>
								<Typography variant="h2" color="black.dark">
								A glance at our wide range of Textile Products
								</Typography>
								<Typography
									variant="h3"
									color="black.dark"
									style={{ marginBottom: "28px" }}
									className={styles.padding40}
								>
								Product Categories
								</Typography>


							</div>
						</Grid>
						<Grid item xs={12} md={12} lg={12} xl={12}>
						<Slider  {...setting}>
						<div
										key="2"
										className={
										 (CatQ == "init" ? "produca" : "produc")
										}
										style={{ marginTop: "16px" }}
										onClick={()=>{
											setdata(products)
											setCatQ('init')
										}}
									>
										All CATEGORIES
									</div>
							{props.category.map((e) => {
								return (
									<div
									key={e.title}
									className={
									 (CatQ == e.title ? "produca" : "produc")
									}
									style={{ marginTop: "16px" }}
									onClick={()=>{
										sortC(e.title)
										setCatQ(e.title)
									}}
								>
									{e.title.toUpperCase()}
								</div>
								);
							})}
						</Slider>

								</Grid>
						<Grid item xs={12} md={12} lg={12} xl={12}>
						<div>
						<Slider ref={slider} {...settings}>
						{data.length==0? <div>
<Typography variant="h3" color="initial" style={{paddingLeft:'30px',paddingBottom:'50px',paddingTop:'50px'}}>No Products Found</Typography>
						</div>:
					data.map((e) => {
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
					})
						
						
}
						
						</Slider>
						<div
							style={{ marginTop: "16px", paddingBottom: "100px" }}
							className="none"
						>
							<span onClick={() => slider?.current?.slickPrev()}>
								<img src="/arrowLG.svg" alt="" />
							</span>
							<span onClick={() => slider?.current?.slickNext()}>
								<img src="/arrowRG.svg" alt="" />
							</span>
						</div>
					</div>
						</Grid>
					</Grid>
				</Container>
			</div>
			<div className="hero4">
				<Container maxWidth="xl">
					<Grid container spacing={0}>
						<Grid item xs={12} md={6} lg={6} xl={6}>
							<div data-aos="fade-right" data-aos-duration="2000">
								<Typography
									variant="body2"
									color="primary.main"
									className={styles.padding100}
								>
									TESTIMONIALS
								</Typography>
								<Typography variant="h2" color="black.dark">
									We are a reknowned name in the industry
								</Typography>
								<Typography
									variant="h6"
									color="black.dark"
									style={{ marginBottom: "28px" }}
								>
									Connecting you to the world’s leading Textile Solutions with
									top class service.
								</Typography>
							</div>
						</Grid>
						<Grid item xs={12} md={12} lg={12} xl={12}>
							<div data-aos="fade-right" data-aos-duration="2000">
								<Slider ref={sliders} {...settingss}>
					{testimonials.map((e)=>{
					return(<CardR description={e.description} key={e.description} logo={e.logo}/>)
					})}
								</Slider>
								<div
									style={{ marginTop: "16px", paddingBottom: "100px" }}
									className="none"
								>
									<span onClick={() => sliders?.current?.slickPrev()}>
										<img src="/arrowL.svg" alt="" />
									</span>
									<span onClick={() => sliders?.current?.slickNext()}>
										<img src="/arrowR.svg" alt="" />
									</span>
								</div>
							</div>
						</Grid>
					</Grid>
				</Container>
			</div>
		</div>
	);
}
export const getStaticProps = async () => {
	const brands = await sanity.fetch(brand);
	const products = await sanity.fetch(product);
	const category =await sanity.fetch(categorys);
	return {
		props: { brands: brands ,products:products,category:category},
		revalidate: 100, // In seconds
	};
};
export default Home;
