import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieView extends Component {
  render() {
    const { movie, genreName, directorName, setSelectedMovie } = this.props;
    if (!movie) return <div></div>;
    return (
      <div className="movie-view">
        <div className="movie-poster">
          <img
            src={movie.imageURL}
            crossorigin="anonymous"
            alt="Poster of current movie"
          />
        </div>

        <div className="movie-title">
          <span className="label">Title</span>
          <span className="value">: {movie.title}</span>
        </div>

        <div className="movie-director">
          <span className="label">Director</span>
          <span className="value">: {directorName}</span>
        </div>

        <div className="movie-rating">
          <span className="label">Rated</span>
          <span className="value">: {movie.rating}</span>
          <span>⭐</span>
        </div>
        <div className="movie-released">
          <span className="label">Released</span>
          <span className="value">: {movie.releaseYear}</span>
        </div>

        <div className="movie-genre">
          <span className="label">Genre</span>
          <span className="value">: {genreName}</span>
        </div>

        <div className="movie-description">
          <span className="label">Description</span>
          <span className="value">: {movie.description}</span>
        </div>

        <button onClick={() => setSelectedMovie(null)}>↩ Back to Movies</button>
      </div>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    imageURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    rating: PropTypes.number,
    description: PropTypes.string.isRequired,
  }).isRequired,
  genreName: PropTypes.string.isRequired,
  directorName: PropTypes.string.isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
};

export default MovieView;
