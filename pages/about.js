import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { useState, useCallback, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import styles from "../styles/Brands.module.scss";
import Image from "next/image";
import AOS from 'aos';
export default function About() {
    useEffect(() => {
		AOS.init();
	  }, []);

	return (
		<div>
									<Head>
				<title>TEXSAS- About </title>
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
				<meta property="og:url" content="https://www.texsasbd.com/about" />
				<meta name = "keywords" content = "Texsas, Texsas Engineering,Textile Machines Bangladesh,Textile Bangladesh,Textile Machines BD,Texsas BD,Texsas Bangladesh" />
				<meta property="og:title" content="TEXSAS- About" />
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
									styles.heroo + " " + "animate__animated animate__bounceInLeft"
								}
							>
								We are a One Stop Textile Solutions and Service provider in
								Bangladesh
							</Typography>
							<Typography
								variant="body2"
								color="secondary.dark"
								className={
									styles.heros + " " + "animate__animated animate__bounceInLeft"
								}
							>
								From finding the best Textile solution for you, to servicing of
								products; TEXSAS aims to be the one place you need to come for
								all your needs!
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</div>
			<Container maxWidth="xl" className={styles.hero1}>
				<Grid container spacing={4} direction="row">
					<Grid item xs={12} md={6} lg={6} xl={6} container>
              <img src="/image1.png" alt="" style={{width:'100%',height:'auto'}} />
					</Grid>
                    <Grid item xs={12} md={6} lg={6} xl={6}>
                    <Typography
								variant="body1"
								color="primary.main"
								className={
									styles.heross 
								}
							>
					ABOUT US
							</Typography>
                    <Typography
								variant="h2"
								color="black.dark"
					
							>
						We are a Textile Printing Company supporting the Garments industry in Bangladesh
							</Typography>
                            <Typography
								variant="body2"
								color="blue.light"
								style={{marginTop:'8px'}}
					
							>
					We are a professional Trading Company for Supplying dyeing, printing and finishing machinery along with all type of printing auxiliary materials.
							</Typography>
					</Grid>
				</Grid>
			</Container>
            <div className="brandHeros">
				<Container maxWidth="xl">
					<Grid container spacing={3} direction="row">
                    <Grid item xs={12} md={12} lg={12} xl={12}>
                    <Typography
								variant="body1"
								color="primary.main"
								className={
									styles.her 
								}
							>
					OUR MISSION
							</Typography>
                    <Typography
								variant="h2"
								color="black.dark"
								className={
									"animate__animated animate__bounceInLeft"
								}
								style={{paddingBottom:'40px'}}
							>
					We are consistent on our mission to bring you the best Textile Solutions and Services.
							</Typography>

					</Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} >
                    <Typography
								variant="h3"
								color="black.dark"
				
							>
				Client Value Creation
							</Typography>
                    <Typography
								variant="body2"
								color="black.dark"
				
							>
				OUR BIGGEST PRIORITY AS AN INTERNATIONAL TRADING ORGANIZATION AS WELL AS A 
BUSINESS & FINANCIAL CONSULTANT IS TO BRING FORTH VALUE TO OUR CLIENTS IN TERMS OF NEGOTIATION, PRODUCT QUALITY AND PRICING. 
WE BELIEVE THAT VALUE CREATION IS AN ESSENTIAL PART TO CLIENT SATISFACTION 
AND BUSINESS SUCCESS.
							</Typography>

					</Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Typography
								variant="h3"
								color="black.dark"
			
							>
		Trustworthiness & Transparency
							</Typography>
                    <Typography
								variant="body2"
								color="black.dark"
			
							>
	COMMUNICATING HONESTLY AND CREATING RELATIONSHIPS IS A BIG PART OF WHO WE 
ARE. WE BELIEVE THAT TRUSTWORTHINESS AND TRANSPARENCY ARE VITAL ELEMENTS 
IN RETAINING AND CREATING SUCCESSFUL FUTURE BUSINESS RELATIONSHIPS.
							</Typography>

					</Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Typography
								variant="h3"
								color="black.dark"
			
							>
	Integrity
							</Typography>
                    <Typography
								variant="body2"
								color="black.dark"
				
							>
		WE ABIDE BY THE RULES AND REGULATIONS OF BUSINESS SOCIETY. WE BELIEVE THAT 
COMMUNICATING ETHICALLY AND MORALLY TOWARDS OUR CUSTOMERS IS ESSENTIAL 
TO CORPORATE GROWTH AND STRENGTH. 
							</Typography>

					</Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Typography
								variant="h3"
								color="black.dark"
					
							>
		Innovation
							</Typography>
                    <Typography
								variant="body2"
								color="black.dark"
					
							>
RESPONDING INNOVATIVELY TO DIFFICULT SOLUTIONS IS WHAT SETS US APART FROM 
OUR COMPETITORS. WE BELIEVE THAT THIS HELPS US GAIN A FRESH NEW PERSPECTIVE 
TO PROBLEM SOLVING.
							</Typography>

					</Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Typography
								variant="h3"
								color="black.dark"
				
							>
	Success
							</Typography>
                    <Typography
								variant="body2"
								color="black.dark"
								className={styles.ber
								}
							>
	NOW WE ARE CO-OPERATING WITH MORE THAN 100 COMPANIES WHO ARE DIRECTLY USE 
OUR MACHINES AND PROVIDING AFTER SALES SERVICE SUCESSFULLY.
							</Typography>

					</Grid>

					</Grid>
				</Container>
			</div>
            <Container maxWidth="xl" className={styles.hero1}>
				<Grid container spacing={4} direction="row">
					<Grid item xs={12} md={6} lg={6} xl={6} container>
                        <div data-aos="fade-left" data-aos-duration="2000">
                        <img src="/image2.png" alt="" style={{width:'100%',height:'auto'}} />
                        </div>
         
					</Grid>
                    <Grid item xs={12} md={6} lg={6} xl={6}>
                        <div  data-aos="fade-left" data-aos-duration="2000">

                        <Typography
								variant="body1"
								color="primary.main"
								className={
									styles.heross 
								}
							>
				HISTORY
							</Typography>
                    <Typography
								variant="h2"
								color="black.dark"
			
							>
						We are a Textile Printing Company supporting the Garments industry in Bangladesh
							</Typography>
                            <Typography
								variant="body2"
								color="blue.light"
                                className={styles.ber}
								style={{marginTop:'8px'}}
							>
				We are a professional Trading Company for Supplying dyeing, printing and finishing machinery along with all type of printing auxiliary materials.
							</Typography>
                        </div>
  
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
