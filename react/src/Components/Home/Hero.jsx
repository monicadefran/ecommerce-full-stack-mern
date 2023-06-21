import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box } from "@mui/system";

import home1 from '../../Assets/home1.jpg';
import home2 from '../../Assets/home2.jpg';
import home3 from '../../Assets/home3.jpg';


function Hero() {
   return (
    <Box sx={{ maxWidth: 360, padding: 5, margin: "0 auto" }}>
      <Carousel>
          <div>
            <img src={home1} alt="sneaker1" />
          </div>
         <div>
            <img src={home2} alt="sneaker2" />
         </div>
         <div>
            <img src={home3} alt="sneaker3" />
         </div>  
    </Carousel>
   </Box>
   )
}

export default Hero;