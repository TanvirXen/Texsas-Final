import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Link from "next/link";
import { useState, useCallback, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import styles from "../../styles/Brands.module.scss";
import BrandCard from "../../Components/BrandCard";
import sanity from "../../lib/sanity";
import Head from "next/head";
const brand = '*[_type=="brand"]';
function Brands({brands}){
return(
<div>
<Head>
				<title>TEXSAS- Brands </title>
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
				<meta property="og:url" content="https://www.texsasbd.com/brands" />
				<meta property="og:title" content="TEXSAS- Brands" />
				<meta name = "keywords" content = "Texsas, Texsas Engineering,Textile Machines Bangladesh,Textile Bangladesh,Textile Machines BD,Texsas BD,Texsas Bangladesh" />
				<meta
					property="og:description"
					content="Connecting you to the world’s leading Textile Solutions with top class service."
				/>
				<meta property="og:image" content='/meta.png' />
			</Head>
    <div className="brandHero">
<Container maxWidth="xl">
<Typography variant="h2" color="secondary.dark" className={styles.hero+' '+'animate__animated animate__bounceInLeft'}>
Brands
</Typography>
</Container>

    </div>
    <Container maxWidth="xl" className={styles.hero1} style={{paddingBottom:'40px'}}>
<Grid

  container 
  spacing={1}
  direction="row"
>
  {brands.map((e)=>{
    return(
<BrandCard image={e.cardImage} key={e.title} title={e.name} origin={e.origin} category={e.category} />
    )
  })}


</Grid>

</Container>
</div>
)
}
export const getStaticProps = async () => {
	const brands = await sanity.fetch(brand);

	return {
		props: { brands },
		revalidate: 100, // In seconds
	};
};
export default Brands