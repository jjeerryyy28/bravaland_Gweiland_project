import React from 'react';
import { Carousel } from 'react-bootstrap';
import { CarouselItem, CarouselCaption } from 'react-bootstrap';
import './semiCircularSlideShow.css';
import image1 from "../../assets/b_img1.png"
import image2 from "../../assets/b_img2.png"
import image3 from "../../assets/b_img3.png"
import image4 from "../../assets/b_img4.png"
import image5 from "../../assets/b_img5.png"
import image6 from "../../assets/b_img6.png"


function Brands() {
    return (
        <div className='brand-card-container'>
            <div className='slider-cont'>
                <div style={{ background: "rgb(35, 107, 211)" }} className='brand-card'>
                    <img src={image1}/>
                    <h4>$hosky</h4>
                    <a>shop now</a>
                </div>
                <div style={{ background: "rgb(162, 82, 208)" }} className='brand-card'>
                    <img src={image2} />
                    <h4>danketsu</h4>
                    <a>shop now</a>
                </div>
                <div style={{ background: "rgb(9, 31, 44)" }} className='brand-card'>
                    <img src={image3} />
                    <h4>bitfins</h4>
                    <a>shop now</a>
                </div>
                <div style={{ background: "rgb(162, 82, 208)" }} className='brand-card'>
                    <img src={image4} />
                    <h4>danketsu</h4>
                    <a>shop now</a>
                </div>
                <div style={{ background: "rgb(9, 31, 44)" }} className='brand-card'>
                    <img src={image5} />
                    <h4>bitfins</h4>
                    <a>shop now</a>
                </div> 
                <div style={{ background: "rgb(35, 107, 211)" }} className='brand-card'>
                    <img src={image6}/>
                    <h4>$hosky</h4>
                    <a>shop now</a>
                </div>            
            </div>
        </div>
    )
}
export default Brands