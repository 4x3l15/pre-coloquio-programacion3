import React, { useEffect, useState } from 'react';
import Navbar from './componentes/Navbar';
import Container from './componentes/Container';
import Footer from './componentes/Footer';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]); // Cambia el estado a una lista de películas
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (title) {
      fetch(`http://www.omdbapi.com/?apikey=5d1b649d&t=${title}`)
        .then(res => res.json())
        .then(data => {
          if (data.Response === "True") {
            const newMovie = {
              year: data.Year,
              director: data.Director,
              poster: data.Poster,
              title: data.Title,
            };
            setMovies(prevMovies => [...prevMovies, newMovie]); // Añade la nueva película a la lista existente
          } else {
            console.error('Movie not found');
          }
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [title]);

  return (
    <div className="App">
      <Navbar setTitle={setTitle} />
      <Container movies={movies} /> {/* Pasa la lista de películas a Container */}
      <Footer />
    </div>
  );
}

export default App;