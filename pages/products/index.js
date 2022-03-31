import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Link from "next/link";
import { useState, useCallback, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import styles from "../../styles/Brands.module.scss";
import ProductCard from "../../Components/ProductCard";
import sanity from "../../lib/sanity";
const product = '*[_type=="product"]{...,brand->}';


function Products({products}){
  const data =[... Object.values(products)]
console.log(data)
return(
<div>
    <div className="brandHero">
<Container maxWidth="xl">
<Typography variant="h3" color="secondary.dark" className={styles.hero}>
Products
</Typography>
</Container>

    </div>
    <Container maxWidth="xl" className={styles.hero1}>
<Grid

  container 
  spacing={1}
  direction="row"
>
  {/* {Object.values(products).map((e)=>{
    return(
<ProductCard image={e.mainImage} key={e.title} title={e.model} description={e.description} logo={e.brand.logo}/>
    )
  })} */}


</Grid>

</Container>
</div>
)
}
export const getStaticProps = async () => {
	const products = await sanity.fetch(product);

	return {
		props: { products },
	};
};
export default Products