import React from 'react';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faUser, faSearch, faShoppingBag } from  '@fortawesome/free-solid-svg-icons';
import brava from "../../assets/logo.png";

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Left Section */}
            <div className="navbar-left">
                <div className="brand-dropdown">
                    <div className="nav-item">brands</div>
                    <div className="dropdown-content">
                        <div className="dropdown-item">all brands</div>
                        <div className="dropdown-item">$hosky</div>
                        <div className="dropdown-item">bitfins</div>
                        <div className="dropdown-item">cardano stonerz club</div>
                        <div className="dropdown-item">cryptoraggies</div>
                        <div className="dropdown-item">danksetu</div>
                        <div className="dropdown-item">future fest</div>
                        <div className="dropdown-item">pendulum</div>
                        <div className="dropdown-item">vudu brigada</div>
                    </div>
                </div>

                <div className="shop-dropdown">
                    <div className="nav-item">shop</div>
                    <div className="dropdown-content">
                        <div className='flex'>
                            <div className='column'>
                                <h2>apparel</h2>
                                <div className="dropdown-item">unisex hoodies</div>
                                <div className="dropdown-item">unisex zip hoodies</div>
                                <div className="dropdown-item">unisex sweatshirts</div>
                                <div className="dropdown-item">unisex tees</div>
                                <div className="dropdown-item">women's tanks</div>
                                <div className="dropdown-item">unisex tanks</div>
                            </div>
                            <div className='column'>
                                <h2>home</h2>
                                <div className="dropdown-item">phoce cases</div>
                                <div className="dropdown-item">framed posters</div>
                                <div className="dropdown-item">posters</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='premium'>
                    premium
                </div>

                <div className='gift-cards'>
                    gift cards
                </div>
            </div>

            {/* Center Section */}
            <div className="navbar-center">
                <div className='logo'>
                    <img src={brava} alt="brava"/>
                </div>
            </div>

            {/* Right Section */}
            <div className="navbar-right">
                <div className="nav-item nav-right become-aff">Become an Affiliate</div>
                <div className="navbar-icons">
                    <FontAwesomeIcon icon={faTwitter}  className='icon'/>
                    <FontAwesomeIcon icon={faTiktok} className='icon'/>
                    <FontAwesomeIcon icon={faInstagram} className='icon'/>
                    <FontAwesomeIcon icon={faUser} className='icon'/>
                    <FontAwesomeIcon icon={faSearch} className='icon'/>
                    <FontAwesomeIcon icon={faShoppingBag} className='icon'/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
