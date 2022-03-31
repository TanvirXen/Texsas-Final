import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Link from "next/link";
import { useState, useCallback, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import styles from "../../styles/Brands.module.scss";
import BrandCard from "../../Components/BrandCard";
import sanity from "../../lib/sanity";
const brand = '*[_type=="brand"]';
function Brands({brands}){
return(
<div>
    <div className="brandHero">
<Container maxWidth="xl">
<Typography variant="h3" color="secondary.dark" className={styles.hero}>
Brands
</Typography>
</Container>

    </div>
    <Container maxWidth="xl" className={styles.hero1}>
<Grid

  container 
  spacing={1}
  direction="row"
>
  {brands.map((e)=>{
    return(
<BrandCard image={e.cardImage} key={e.title} title={e.title} origin={e.origin} category={e.category} />
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
	};
};
export default Brands