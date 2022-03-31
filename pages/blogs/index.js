import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Link from "next/link";
import { useState, useCallback, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import styles from "../../styles/Brands.module.scss";
import sanity from "../../lib/sanity";
import Head from "next/head";

const blog = '*[_type=="product"]{...,brand->}';

function Products({ blogs }) {
	let data = Object.values(blogs);

	return (
		<div>
			<Head></Head>
			<Container maxWidth="xl" className={styles.hero1}>
				<Grid container spacing={1} direction="row">

                </Grid>
			</Container>
            <Container maxWidth="xl" className={styles.hero1}>
				<Grid container spacing={1} direction="row">
                    
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
