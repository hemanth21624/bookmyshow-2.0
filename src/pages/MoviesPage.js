import React, { useState, useEffect } from "react";
import { Table, Container, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/assets/movies.json")
      .then((response) => setMovies(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <h2 className="text-center">🎥 Now Showing</h2>
      
      <Form.Control
        type="text"
        placeholder="🔍 Search movies..."
        className="mb-3"
        onChange={(e) => setSearch(e.target.value)}
      />

      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr className="text-center">
            <th>🎬 Movie Name</th>
            <th>🎭 Genre</th>
            <th>📅 Release Date</th>
            <th>⭐ Rating</th>
            <th>💰 Price</th>
            <th>🎟 Book</th>
            <th>▶️ Trailer</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <tr key={movie.id} className="text-center">
                <td>{movie.name}</td>
                <td>{movie.genre}</td>
                <td>{movie.releaseDate}</td>
                <td>{movie.rating}</td>
                <td>₹{movie.price}</td>
                <td>
                  <Button 
                    variant="danger" 
                    onClick={() => navigate("/booking", { state: { movie } })}
                  >
                    🎟 Book Now
                  </Button>
                </td>
                <td>
                  <Button 
                    variant="info" 
                    href={movie.trailerLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    ▶ Watch Trailer
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center text-muted">
                ❌ No movies found!
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default MoviesPage;
