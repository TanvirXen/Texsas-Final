import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from "@mui/material/Grid";
import imageUrlFor from "../utils/imageUrlFor.js";
import Link from "next/link";
export default function BrandCard({image,title,category,origin}) {
  return (
    <Grid
    item
    xs={12}
    sm={6}
    md={4}
    lg={3}
    xl={3}
  >
        <Link href={'/brands/'+title} passHref>
    <Card sx={{ maxWidth: 345 }} style={{ border: "none" ,borderRadius:'0px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={imageUrlFor(image)}
          alt="brand logo"
        style={{boxShadow:'0px 1px 0px #CDCDCD'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
           {title}
          </Typography>
          <Typography variant="body1" color="black.dark"  style={{display:'flex'}} >
<span><img src="/origin.svg" alt="icon" style={{height:'24px'}} /></span> <span style={{paddingLeft:'2px'}} >{origin}</span>
          </Typography>
          <Typography variant="body1" color="black.dark" style={{display:'flex'}} >
<span><img src="/category.svg" alt="icon" style={{height:'24px'}} /></span> <span style={{paddingLeft:'2px'}} > {category}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
    </Grid>
  );
}