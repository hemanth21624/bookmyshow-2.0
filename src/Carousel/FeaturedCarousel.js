import React from 'react';
import { Carousel } from 'react-bootstrap';
import './FeaturedCarousel.css';

const slides = [
  { id: 1, title: "Avengers", img: "/assets/avengers2.jpg" },
  { id: 2, title: "inception", img: "/assets/inception.jpg" },
  { id: 3, title: "Interstellar", img: "/assets/interstellar.jpg" }
];

function FeaturedCarousel() {
  return (
    <Carousel>
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <img className="d-block w-100" src={slide.img} alt={slide.title} />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>Experience the thrill in cinemas!</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default FeaturedCarousel;
