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
import AOS from 'aos';
const brand = '*[_type=="brand"]';
function Home({ brands }) {
	const sliders = useRef(null);
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
				breakpoint: 600,
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
	useEffect(() => {
		AOS.init();
	  }, []);

	return (
		<div>
			<Head>
				<link
					rel="preload"
					as="video"
					type="video/mp4"
					href="https://firebasestorage.googleapis.com/v0/b/texaswebsite-13a01.appspot.com/o/promo.mp4?alt=media&token=3b5eafba-be60-46c9-a43c-35ba844f9283"
				/>
				<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
			</Head>
			<Container maxWidth="xl" style={{ paddingBottom: "100px" }}>
				<Grid container spacing={0}>
					<Grid item xs={12} md={8} lg={8} xl={8}>
						<Typography variant="h3" color="black.dark" className={styles.hero +' '+'animate__animated animate__bounceInLeft'}>
							One Stop Textile Solutions And Services in Bangladesh
						</Typography>
						<Typography variant="h6" color="black.dark" className='animate__animated animate__bounceInLeft'>
							One Stop Textile Solutions And Services in Bangladesh
						</Typography>
					</Grid>
					<Grid
						item
						xs={12}
						md={4}
						lg={4}
						xl={4}
						container
						direction="column"
						className={styles.herobtn}
					>
						<span className={"button1" + " " + styles.padd100}>
							<Link href="#">Get In Touch</Link>
						</span>
					</Grid>
				</Grid>
			</Container>
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
										src="https://firebasestorage.googleapis.com/v0/b/texaswebsite-13a01.appspot.com/o/promo.mp4?alt=media&token=3b5eafba-be60-46c9-a43c-35ba844f9283"
										type="video/mp4"
									/>
									Your browser does not support the video tag.
								</video>
							</div>
						</Grid>
					</Grid>
				</Container>
			</div>
			<Container maxWidth="xl" style={{paddingBottom:'40px',paddingTop:'40px'}}>
				<Marquee
					duration={3000}
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
							<img
								src={imageUrlFor(e.logo)}
								alt=""
								key={e.name}
								className={styles.brandLogo}
							/>
						);
					})}
				</Marquee>
			</Container>
			<div className="hero3">
				<Container maxWidth="xl">
					<Grid container spacing={2}>
						<Grid
							item
							xs={12}
							md={6}
							lg={6}
							xl={6}
							
						>
							<div data-aos="fade-right" data-aos-duration="2000">
							<Typography variant="h6" color="secondary.dark" className={styles.padding100}>
								OUR VALUES
							</Typography>
							<Typography
								variant="h3"
								color="secondary.dark"
								style={{ marginBottom: "28px" }}
							>
								We creeate value from shipment to servicing.
							</Typography>
							<span className="button1">
								<Link href="#">Learn More</Link>
							</span>
							</div>

			
				
						</Grid>
						<Grid
							item
							xs={12}
							md={6}
							lg={6}
							xl={6}

						>
							<div data-aos="fade-left" data-aos-duration="2000">
							<Typography variant="h4" color="secondary.dark" className={styles.padding100}>
								Affordable Textile Solutions
							</Typography>
							<Typography variant="body1" color="secondary.light" style={{paddingBottom:'40px'}}>
								We promise to provide the best value for money among Textile
								Solutions in Bangladesh.
							</Typography>

              <Typography variant="h4" color="secondary.dark">
              Top Notch Service
							</Typography>
							<Typography variant="body1" color="secondary.light" style={{paddingBottom:'40px'}}>
              Our team of professionals are standby to support you with world class service for your Textile machinaries.
							</Typography>

              <Typography variant="h4" color="secondary.dark">
              Commitment and Dedication
							</Typography>
							<Typography variant="body1" color="secondary.light" style={{paddingBottom:'100px'}}>
              We are commited and dedicated to our clients throughout their experience with us and beyond. 
							</Typography>
							</div>
						
						</Grid>
					</Grid>
				</Container>
			</div>
      <div className="hero4">
      <Container maxWidth="xl">
      <Grid container spacing={0}>
      <Grid
							item
							xs={12}
							md={6}
							lg={6}
							xl={6}
							
						>
<div data-aos="fade-right" data-aos-duration="2000">
<Typography variant="h6" color="secondary.dark" className={styles.padding100}>
			TESTIMONIALS
							</Typography>
							<Typography
								variant="h3"
								color="secondary.dark"
							>
					We are a reknowned name in the industry
							</Typography>
							<Typography
								variant="h6"
								color="secondary.dark"
								style={{ marginBottom: "28px" }}
							>
Connecting you to the world’s leading Textile Solutions with top class service.
							</Typography>
</div>
						</Grid>
            <Grid
							item
							xs={12}
							md={12}
							lg={12}
							xl={12}
							
						>
	<div data-aos="fade-right" data-aos-duration="2000">
	<Slider ref={sliders} {...settingss}>
										<CardR />
										<CardR />
										<CardR />
										<CardR />
									</Slider>
									<div style={{ marginTop: "16px" ,paddingBottom:'100px'}} className="none">
										<span onClick={() => sliders?.current?.slickPrev()}>
											<img src='/arrowL.svg' alt="" />
										</span>
										<span onClick={() => sliders?.current?.slickNext()}>
											<img src='/arrowR.svg' alt="" />
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

	return {
		props: { brands },
	};
};
export default Home;
