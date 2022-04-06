import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from "@mui/material/Grid";
import imageUrlFor from "../utils/imageUrlFor.js";
import Link from "next/link";
export default function BrandCard({image,title,logo,description}) {
  return (

    <Link href={'/products/'+title} passHref>
    <Card  style={{ border: "none", boxShadow: "none" ,borderRadius:'0px',cursor:'pointer',paddingLeft:'16px',paddingTop:'24px'}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={imageUrlFor(image)}
          alt="brand logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {title}
          </Typography>
          <Typography variant="body1" color="black.dark" className='texthide'  >
        {description}
          </Typography>
          <img src={imageUrlFor(logo)}alt="Brandlogo" style={{height:'40px',width:'auto'}} />
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>

  );
}