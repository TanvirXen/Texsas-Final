
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from '@mui/material/Typography';
export default function CardR({description,logo}){
    return(
        <Card  variant="outlined" style={{backgroundColor:'#fff'}} className='rCard'>
        <CardContent>
        <img src="/testimonial.svg" alt="" style={{paddingTop:'18px',paddingBottom:'18px'}} />
            <Typography variant="body1" style={{paddingBottom:'10px'}} className='textArea'>
{description}
            </Typography>

        <div className="logoArea">    <img src={logo} alt="" style={{paddingTop:'18px',height:'auto',width:'auto',paddingBottom:'18px'}} /></div>
        </CardContent>
        </Card>
    )
}