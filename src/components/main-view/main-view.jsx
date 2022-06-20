import React from 'react';
import axios from 'axios';
import MovieCard from '../movie-card/movie-card';
import MovieView from '../movie-view/movie-view';

export default class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: nill,
    };
  }

  setSelectedMovie = (movie) => {
    this.setState({ selectedMovie: movie });
  };

  render() {
    const { movies, selectedMovie } = this.state;

    // Display MovieView OR message of empty list
    if (selectedMovie)
      return (
        <MovieView
          movie={selectedMovie}
          setSelectedMovie={this.setSelectedMovie}
        />
      );

    if (!movies) return <div className="main-view">The list is empty!</div>;

    // Display List of Movies
    return (
      <div className="main-view">
        {movies.map((movie) => (
          <MovieCard
            key={movie._id}
            movie={movie}
            setSelectedMovie={this.setSelectedMovie}
          >
            {movie.title}
          </MovieCard>
        ))}
      </div>
    );
  }

  componenDidMount() {
    axios
      .get('https://top-flix.herokuapp.com/movies')
      .then((response) => {
        this.setState({
          movies: response.data,
        });
      })
      .catch((err) => console.log('Errorr: ' + err));
  }
}
