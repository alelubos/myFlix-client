import React, { Component } from 'react';
import PropTypes from 'prop-types';
class MovieCard extends Component {
  // state = {  }
  render() {
    const { movie, setSelectedMovie } = this.props;
    return (
      <div className="movie-card" onClick={() => setSelectedMovie(movie)}>
        <span>▻ </span>
        {movie.title} ({movie.releaseYear})
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
  }).isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
};

export default MovieCard;
