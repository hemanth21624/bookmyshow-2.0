import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function SportsPage() {
  const sportsEvents = [
    { name: "Football Championship", image: "/images/football.jpg" },
    { name: "Cricket League", image: "/images/crickett.jpg" },
    { name: "Basketball Tournament", image: "/images/basketball.jpg" }
  ];

  return (
    <Container className="mt-4">
      <h1 className="text-center">🏆 Sports Events</h1>
      <p className="text-center">Stay updated with the latest sports action!</p>
      <Row>
        {sportsEvents.map((event, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={event.image} />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Button variant="danger">Book Tickets</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SportsPage;
