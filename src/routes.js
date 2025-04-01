import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import EventsPage from './pages/EventsPage'; 
import SportsPage from './pages/SportsPage';
import LoginPage from './pages/LoginPage';   

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
