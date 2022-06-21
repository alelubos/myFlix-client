import React, { Component } from 'react';
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

export default MovieCard;
