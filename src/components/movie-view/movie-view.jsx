import React, { Component } from 'react';

class MovieView extends Component {
  render() {
    const { movie, setSelectedMovie } = this.props;
    if (!movie) return <div></div>;
    return (
      <div className="movie-view">
        <div className="movie-poster">
          <img src={movie.imageURL} alt="Poster of current movie" />
        </div>
        <div className="movie-title">
          <span className="label">Title</span>
          <span className="value">: {movie.title}</span>
        </div>
        <div className="movie-rating">
          <span className="label">Rated</span>
          <span className="value">: {movie.rating}</span>
          <span>⭐</span>
        </div>
        <div className="movie-released">
          <span className="label">Released</span>
          <span className="value">: {movie.released}</span>
        </div>
        <div className="movie-director">
          <span className="label">Director</span>
          <span className="value">: {movie.director}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description</span>
          <span className="value">: {movie.description}</span>
        </div>
        <div className="movie-genre">
          <span className="label">Genre</span>
          <span className="value">: {movie.genre}</span>
        </div>
        <button onClick={() => setSelectedMovie(null)}>↩ Back to Movies</button>
      </div>
    );
  }
}

export default MovieView;
