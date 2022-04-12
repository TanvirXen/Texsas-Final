import Footer from "./Footer";
import Navbar from "./Navbar";
import { Container } from '@mui/material';
export default function Layout({children}){
return(
  <div>

      <Navbar/>
    <div style={{paddingTop:'100px'}}>{children}  </div>
    <Footer/>


  </div>

  
)
}