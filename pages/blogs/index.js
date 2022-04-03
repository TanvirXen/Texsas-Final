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
	console.log(newData);
	return (
		<div>
			<Head></Head>
			{isBreakpoint ? (
 <div className="brandHero">
 <Container maxWidth="xl">
 <Typography variant="h2" color="secondary.dark" className={styles.hero+' '+'animate__animated animate__bounceInLeft'}>
Blogs
 </Typography>
 </Container>
 
	 </div>
				) : (
	<div></div>
				)}
			<Container maxWidth="xl" className={styles.hero1}>
				{isBreakpoint ? (
					<BlogCard
						image={data[0].images[0].asset}
						date={data[0].date}
						title={data[0].title}
						description={data[0].description[0].children[0].text}
					/>
				) : (
					<BLogCard
						image={data[0].images[0].asset}
						date={data[0].date}
						title={data[0].title}
						description={data[0].description[0].children[0].text}
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
	};
};
export default Products;
