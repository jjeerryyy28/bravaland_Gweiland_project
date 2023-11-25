import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem, CarouselCaption } from 'react-bootstrap';
// import img1 from "../../assets/img1.png";

function Banner() {
  return (
    <div>
      <Carousel fade>
        <CarouselItem>
          <img src="/img1.png" />          
        </CarouselItem>    
      </Carousel>
    </div>
  )
}

export default Banner