import React from 'react';
import {Carousel} from 'react-bootstrap';
import './Slider.css';
import slider1 from '../../img/sunnah.png'
import slider2 from '../../img/quran.png'
import slider3 from '../../img/hadith.png'
const Slider=() => {
    return (
        <div className='container mb-5'>
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider1}
      alt="First slide"
    />
    <Carousel.Caption className='carousel1-text'>
      <h3 className='carousel1-title'> Build Your lifestyle With<span id='sunnah'> True Sunnah </span></h3>
      <p className='carousel1-p'>Our Hadith Courses will dramatically change your lifestyle to the sunnah and peace.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider2}
      alt="Second slide"
    />

    <Carousel.Caption className='carousel2-text'>
      <h3 className='carousel2-title'>Learn <span id='quran'>Quran</span>  Totally Free </h3>
      <p className='carousel2-p'>As a Muslim it's our duty to explore Allah's words. We made this path free for you. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider3}
      alt="Third slide"
    />
    <Carousel.Caption className='carousel3-text'>
      <h3 className='carousel3-title'>Build you for Hadith<span id='exam'> competetions </span></h3>
      <p className='carousel3-p'>You can participate any competetive hadith exam around the world after finishing specific course perfectly.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </div>
    );
};

export default Slider;