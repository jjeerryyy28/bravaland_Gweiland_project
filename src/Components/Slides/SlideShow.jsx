// Slideshow.js
import React, { useState, useEffect } from 'react';
import './Slideshow.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SlideShow = ({ slides, slideInterval }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, slideInterval);

    return () => clearInterval(intervalId);
  }, [slides.length, slideInterval]);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow-container">
      <FaArrowLeft className="arrow left" onClick={prevSlide} />
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`mySlides fade ${index === slideIndex ? 'active' : ''}`}
        >
          <img src={slide.image} alt={`Slide ${index + 1}`} />
          <div className={`slide-content ${slide.position}`}>
            <h1 className="slide-title" dangerouslySetInnerHTML={{ __html: Array.isArray(slide.title) ? slide.title.join('<br/>') : slide.title }} />
            <button className="slide-button">shop now</button>
          </div>
        </div>
      ))}
      <FaArrowRight className="arrow right" onClick={nextSlide} />
    </div>
  );
};

export default SlideShow;