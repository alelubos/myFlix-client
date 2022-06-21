import React from 'react';
import axios from 'axios';
import MovieCard from '../movie-card/movie-card';
import MovieView from '../movie-view/movie-view';

export default class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
    };
  }

  componentDidMount() {
    axios
      .get('https://top-flix.herokuapp.com/movies')
      .then((response) => {
        this.setState({
          movies: response.data,
        });
        console.log(response.data[0]);
      })
      .catch((err) => console.log('Error: ' + err));
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
          // function to set or re-set (to null) selectedMovie
          setSelectedMovie={this.setSelectedMovie}
          // genre & director are NESTED OBJECTS (not allowed in React Child Components):
          // their 'name' properties must be passed as a flat props variable
          genreName={selectedMovie.genre.name}
          directorName={selectedMovie.director.name}
        />
      );

    if (!movies)
      return (
        <div className="main-view">The list is empty. Loading info...</div>
      );

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
}
