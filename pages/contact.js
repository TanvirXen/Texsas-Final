import { InlineWidget } from "react-calendly";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import styles from "../styles/Brands.module.scss";
export default function Contact (){

    return(
        <div>
						<Head>
				<title>Texas- Contact </title>
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
				<meta property="og:url" content="https://www.texsasbd.com/" />
				<meta property="og:title" content="Texas- Contact" />
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
				Contact
							</Typography>

						</Grid>
					</Grid>
				</Container>
			</div>
				<Container maxWidth="xl">
					<Grid container spacing={4} direction="row">
						<Grid item xs={12} md={6} lg={6} xl={6}>
                        <InlineWidget url="https://calendly.com/tanvirishtiaq/meeting-1" styles={{
  height: '600px',paddingBottom:'100px',paddingTop:'100px'
}}  />
                        </Grid>
						<Grid item xs={12} md={6} lg={6} xl={6}>
                        <Typography
								variant="h2"
								color="black.dark"
						className={styles.heross}
							>
			TEXSAS Headquaters, Dhaka
							</Typography>
                            <Typography
								variant="body2"
								color="black.dark"
						
							>
         <a href="mailto: hello@texsasbd.com"  style={{color:'#002169',textDecoration:'underline'}}>hello@texsasbd.com</a>
							</Typography>
                            <Typography
								variant="body2"
								color="black.dark"
						
							>
        <a href="tel:+8801713129762"  style={{color:'#002169',textDecoration:'underline'}}>+8801713129762</a>
							</Typography>
                            <Typography
								variant="body2"
								color="black.dark"
						
							>
          HOUSE # 23, LEVEL 1A, <br /> SECTOR 4, UTTARA, <br /> DHAKA-1230, <br />
BANGLADESH
							</Typography>
                   
                        </Grid>
                        </Grid>
			</Container>
        </div>
    )
}