import React from 'react';
import './Container.css';

const Container = ({ movies }) => { // Recibe la lista de películas
  return (
    <div className="container">
      <div className="cards">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <div key={index} className="card">
              <img src={movie.poster} alt="Movie Poster" className="card-image" />
              <h3>{movie.title}</h3>
              <h4>Director: {movie.director}  |  Year: {movie.year}</h4>
            </div>
          ))
        ) : (
          <div className="inicio">
            <h1>BUSCADOR DE PELICULAS</h1>
            <p>Ingresa la película que quieras buscar</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Container;