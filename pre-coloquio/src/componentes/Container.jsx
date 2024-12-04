import React from 'react';
import './Container.css';

const Container = ({ movies, removeMovie }) => {
  return (
    <div className="container">
      <div className="cards">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="card">
              <img src={movie.poster} alt="Movie Poster" className="card-image" />
              <h3>{movie.title}</h3>
              <h4>Director: {movie.director}  |  Year: {movie.year}</h4>
              <button 
                className="remove-button" 
                onClick={() => removeMovie(movie.id)} // Usa el ID de la película
              >
                Eliminar
              </button>
            </div>
          ))
        ) : (
          <div className="inicio">
            <h1>BUSCADOR DE PELÍCULAS</h1>
            <p>Ingresa la película que quieras buscar</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Container;
