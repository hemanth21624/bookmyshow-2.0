import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";

function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("/assets/events.json") 
      .then((response) => setEvents(response.data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center">🎉 Upcoming Events</h2>
      <Row>
        {events.length > 0 ? (
          events.map((event) => (
            <Col md={4} key={event.id} className="mb-4">
              <Card>
                <Card.Img variant="top" src={event.image} alt={event.name} />
                <Card.Body>
                  <Card.Title>{event.name}</Card.Title>
                  <Card.Text>
                    📅 {event.date} <br />
                    📍 {event.location} <br />
                    💰 ₹{event.price}
                  </Card.Text>
                  <Button variant="danger">🎟 Book Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col className="text-center text-muted">
            ❌ No events found!
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default EventsPage;
