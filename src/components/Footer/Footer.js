import {faFacebook, faGoogle, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <h2 id='footer-tag'>Taqwa Islamic Center</h2>
            <h6>Contact Us: razon1494@gmail.com</h6>
            <p>Mobile: 01744941494</p>
            <FontAwesomeIcon className='footer-icon' icon={faTwitter} />
           <FontAwesomeIcon className='footer-icon' icon={faFacebook} />
           <FontAwesomeIcon className='footer-icon' icon={faYoutube} />
            <FontAwesomeIcon className='footer-icon' icon={faGoogle} />
        </div>
    );
};

export default Footer;