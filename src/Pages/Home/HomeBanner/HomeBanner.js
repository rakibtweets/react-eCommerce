import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import slider1 from '../../../Images/slider/slider1.png';
import slider2 from '../../../Images/slider/slider2.png';
import slider3 from '../../../Images/slider/slider3.png';
import slider4 from '../../../Images/slider/slider4.png';

const HomeBanner = () => {
  return (
    <Container className="mt-2">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider4} alt="Fourth slide" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default HomeBanner;
