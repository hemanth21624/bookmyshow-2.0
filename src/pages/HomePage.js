import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <Container className="mt-4">
      {}
      <Row className="mb-4">
        <Col>
          <Carousel>
            {["hero1.jpg", "hero2.jpg", "hero3.jpg"].map((image, index) => (
              <Carousel.Item key={index} interval={3000}>
                <div 
                  className="hero-banner text-white text-center p-5" 
                  style={{ 
                    backgroundImage: `url(/images/${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '15px'
                  }}
                >
                  <h1>{index === 0 ? "ONLINE TICKETS.COM" : index === 1 ? "🎤 Experience Live Events" : "⚽ Don't Miss the Action!"}</h1>
                  <p>{index === 0 ? "Discover the latest movies, events, and sports matches near you!" : index === 1 ? "From concerts to comedy shows, find your next event!" : "Get the latest sports events and book your tickets!"}</p>
                  <Button variant="danger" as={Link} to={index === 0 ? "/movies" : index === 1 ? "/events" : "/sports"}>
                    {index === 0 ? "Browse Movies" : index === 1 ? "View Events" : "Book Sports Tickets"}
                  </Button>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>

      {}
      <Row>
        <Col>
          <h2>🔥 Trending Movies</h2>
        </Col>
      </Row>
      <Row>
        {["INCEPTION", "INTERSTELLAR", "AVENGER:ENDGAME"].map((movie, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <div style={{ overflow: "hidden", height: "250px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Card.Img variant="top" src={`/images/movie${index + 1}.jpg`} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
              </div>
              <Card.Body className="text-center">
                <Card.Title>{movie}</Card.Title>
                <Button variant="danger" as={Link} to="/movies">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {}
      <Row>
        <Col>
          <h2>🎉 Upcoming Events</h2>
        </Col>
      </Row>
      <Row>
        {["Concert", "Comedy Show", "Sports Match"].map((event, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <div style={{ overflow: "hidden", height: "250px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Card.Img variant="top" src={`/images/${event.toLowerCase().replace(" ", "")}.jpg`} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
              </div>
              <Card.Body className="text-center">
                <Card.Title>{event}</Card.Title>
                <Button variant="danger" as={Link} to="/events">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
