import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Link from "next/link";
import { useState, useCallback, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import styles from "../../styles/Brands.module.scss";
import sanity from "../../lib/sanity";
import Head from "next/head";
import BLogCard from "../../Components/BlogCard";
import BlogCard from "../../Components/Blog";
const blog = '*[_type=="blog"]| order(date desc)';
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

function Products({ blogs }) {
	const isBreakpoint = useMediaQuery(900);
	let data = Object.values(blogs);
	let newData = Object.values(blogs);
	newData.shift();
	return (
		<div>
<Head>
				<title>TEXSAS- Blogs </title>
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
				<meta property="og:url" content="https://www.texsasbd.com/blogs" />
				<meta name = "keywords" content = "Texsas, Texsas Engineering,Textile Machines Bangladesh,Textile Bangladesh,Textile Machines BD,Texsas BD,Texsas Bangladesh,Digital Printing Machine,Homer Digital Printing,Sublimation Printing,Digital Printing video, Reactive Digital Printing,Dosun Laser Engraving Machine,Laser Engraving Machine,Rotary Laser engraver Machine,Flatebed Laser engraving machine,3D laser engraving machine,Inkjet Engraver Machine,Found Washing Machine,Reactive washing machine,Knit fabrics washing machine,Knit fabrics continous bleaching machine,Continous washing machine, Flatebed printing machine,Rotary printing machine ,Huisheng flatbed printing machine,Neostampa RIP Software,Textile Machines bd" />
				<meta property="og:title" content="TEXSAS- Blogs" />
				<meta
					property="og:description"
					content="Connecting you to the world’s leading Textile Solutions with top class service."
				/>
				<meta property="og:image" content='/meta.png' />
			</Head>
	
 <div className="brandHero">
 <Container maxWidth="xl">
 <Typography variant="h2" color="secondary.dark" className={styles.hero+' '+'animate__animated animate__bounceInLeft'}>
Blogs
 </Typography>
 </Container>
 
	 </div>
				
			<Container maxWidth="xl" className={styles.hero1}>
				{isBreakpoint ? (
					<BlogCard
						image={data[0].images[0].asset}
						date={data[0].date}
						title={data[0].title}
						description={data[0].description[0].children[0].text}
						slug={data[0].slug.current}
					/>
				) : (
					<BLogCard
						image={data[0].images[0].asset}
						date={data[0].date}
						title={data[0].title}
						description={data[0].description[0].children[0].text}
						slug={data[0].slug.current}
					/>
				)}
			</Container>
			<Container maxWidth="xl" className={styles.padd}>
				<Grid container spacing={1} direction="row">
					{newData.map((e) => {
						return (
							<BlogCard
								image={e.images[0].asset}
								date={e.date}
								title={e.title}
								description={e.description[0].children[0].text}
								key={e.title}
								slug={e.slug.current}
							/>
						);
					})}
				</Grid>
			</Container>
		</div>
	);
}
export const getStaticProps = async () => {
	const blogs = await sanity.fetch(blog);

	return {
		props: { blogs },
		revalidate: 100, // In seconds
	};
};
export default Products;
