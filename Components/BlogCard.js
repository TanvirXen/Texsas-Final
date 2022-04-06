import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from "@mui/material/Grid";
import imageUrlFor from "../utils/imageUrlFor.js";
import Link from "next/link";

export default function BLogCard({image,title,description,date,slug}) {
  return (
    <Link href={'/blogs/'+slug} passHref>
    <Grid container spacing={1} direction="row" className='ccder'>
				    <Grid
    item
    xs={12}
    sm={12}
    md={5}
    lg={7}
    xl={7}
  >
  <img src={imageUrlFor(image)} alt="Blog Image" style={{width:'100%',height:'auto'}} />

    </Grid>
    <Grid
    item
    xs={12}
    sm={12}
    md={7}
    lg={5}
    xl={5}
  >
<div className='topPad'>
<Typography variant="body2" color="black.light">{date}</Typography>
  <Typography variant="h1" color="black.dark">{title}</Typography>
  <Typography variant="body1" color="black.light" className='texthide'>{description}</Typography>
</div>
    </Grid>
    </Grid>
</Link>
  );
}