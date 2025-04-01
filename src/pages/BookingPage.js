import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;

  if (!movie) {
    return (
      <Container className="text-center mt-5">
        <h3>No movie selected!</h3>
        <Button onClick={() => navigate("/movies")} variant="primary">
          Back to Movies
        </Button>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Card className="text-center p-4">
        <Card.Title>🎟 Book Tickets for {movie.name}</Card.Title>
        <Card.Body>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Release Date:</strong> {movie.releaseDate}</p>
          <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
          <p><strong>Price:</strong> ₹{movie.price}</p>
          <Button 
            variant="success" 
            onClick={() => navigate("/payment", { state: { movie } })}
          >
            Proceed to Payment
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default BookingPage;
