import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './componentes/Navbar';
import Container from './componentes/Container';
import Footer from './componentes/Footer';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState(''); // Estado para el título

  useEffect(() => {
    const fetchMovie = async () => {
      if (title.trim()) {
        try {
          const response = await axios.get(`http://www.omdbapi.com/`, {
            params: {
              apikey: '5d1b649d',
              t: title.trim(),
            },
          });
          const data = response.data;
          if (data.Response === "True") {
            const newMovie = {
              year: data.Year,
              director: data.Director,
              poster: data.Poster,
              title: data.Title,
            };

            setMovies((prevMovies) => {
              // Evitar duplicados
              if (prevMovies.some((movie) => movie.title === newMovie.title)) {
                return prevMovies;
              }
              return [...prevMovies, newMovie];
            });
          } else {
            alert('Película no encontrada.');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          alert('Ocurrió un error al buscar la película.');
        }
      }
    };

    fetchMovie();
  }, [title]); // Ejecuta la búsqueda cada vez que el título cambia

   // Eliminar una película
   const removeMovie = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`); // Realizar la solicitud DELETE
      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id)); // Actualizar estado
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  return (
    <div className="App">
      <Navbar setTitle={setTitle} /> {/* Pasamos setTitle como prop */}
      <Container movies={movies} />
      <Footer />
    </div>
  );
}

export default App;
