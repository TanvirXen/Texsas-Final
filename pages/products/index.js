import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Link from "next/link";
import { useState, useCallback, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import styles from "../../styles/Brands.module.scss";
import ProductCard from "../../Components/ProductCard";
import sanity from "../../lib/sanity";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Head from "next/head";


const product = '*[_type=="product"]{...,brand->}';


function Products({products}){
  let data =Object.values(products)

return(
<div>
<Head>

			</Head>
    <div className="brandHero">
<Container maxWidth="xl">
<Typography variant="h3" color="secondary.dark" className={styles.hero+' '+'animate__animated animate__bounceInLeft'}>
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
<Grid
  xs={12}
  sm={12}
  md={4}
  lg={3}
  xl={3}
>
<Accordion style={{marginRight:'10px',marginBottom:'10px',border: "none", boxShadow: "none" ,borderRadius:'0px'}}  elevation={0}         sx={{
            '&:before': {
                display: 'none',
            }
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#0BBA60'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{borderBottom:'2px solid #D0D0D0',boxShadow: "none"}}
        >
          <Typography variant='h5'>Sort By Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  color="primary.main" variant='h6' style={{boxShadow:' 0px 2px 0px #D0D0D0',paddingBottom:'3px' ,paddingTop:'3px'}}>
        Found
          </Typography>
          <Typography color="primary.main" variant='h6' style={{boxShadow:' 0px 2px 0px #D0D0D0' ,paddingBottom:'3px' ,paddingTop:'3px'}}>
        Homer
          </Typography>
        </AccordionDetails>

      </Accordion>
      <Accordion style={{marginRight:'10px',marginBottom:'10px',border: "none", boxShadow: "none" ,borderRadius:'0px',marginTop:'10px'}}  elevation={0}         sx={{
            '&:before': {
                display: 'none',
            }
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#0BBA60'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{borderBottom:'2px solid #D0D0D0',boxShadow: "none"}}
        >
          <Typography variant='h5'>Sort By Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  color="primary.main" variant='h6' style={{boxShadow:' 0px 2px 0px #D0D0D0',paddingBottom:'3px' ,paddingTop:'3px'}}>
        Printing Machines
          </Typography>
          <Typography color="primary.main" variant='h6' style={{boxShadow:' 0px 2px 0px #D0D0D0' ,paddingBottom:'3px' ,paddingTop:'3px'}}>
        Photoshop
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>
      <Grid

  container 
  spacing={1}
  direction="row"
  xs={12}
  sm={12}
  md={8}
  lg={9}
  xl={9}
>
  {data.map((e)=>{
    return(
<ProductCard image={e.mainImage} key={e.model} title={e.model} description={e.description[0].children[0].text} logo={e.brand.logo}/>
    )
  })}


</Grid>
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