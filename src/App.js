import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Slideshow from './Components/Slides/SlideShow';
import slide1 from "./assets/slide1.png";
import slide2 from "./assets/slide2.png";
import slide3 from "./assets/slide3.png";
import slide4 from "./assets/slide4.png";
import slide5 from "./assets/slide5.png";
import { Carousel } from 'react-bootstrap';
import Brands from './Components/SemiCircularSlideShow/SemiCircularSlides';

const App = () => {

  const slides = [
    {
      image: slide1,
      title: ['premium', ' zip', ' hoodies'],
      position: 'left',
    },
    {
      image: slide2,
      title: 'heritage hoodies',
      position: 'left',
    },
    {
      image: slide3,
      title: 'premium tees',
      position: 'left',
    },
    {
      image: slide4,
      title: "heritage women's tanks",
      position: 'right',
    },
    {
      image: slide5,
      title: 'heritage tees',
      position: 'right',
    },
  ]; 
  
  return (
    <div className="App">
      <NavBar />
      <Slideshow slides={slides} slideInterval={3000}/>
      <Carousel />
      <Brands/>
    </div>
  );
}

export default App;
