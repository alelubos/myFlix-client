import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import MovieCard from '../movie-card/movie-card';
import MovieView from '../movie-view/movie-view';

import './main-view.scss';

export default class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
      isRegistered: true,
    };
  }

  componentDidMount() {
    axios
      .get('https://top-flix.herokuapp.com/movies')
      .then((response) => {
        this.setState({
          movies: response.data,
        });
      })
      .catch((err) => console.log('Error: ' + err));
  }

  setSelectedMovie = (movie) => {
    this.setState({ selectedMovie: movie });
  };

  onLoggedIn = (user) => {
    this.setState({ user });
  };

  setRegistered = (value) => {
    this.setState({ isRegistered: value });
  };

  render() {
    const { movies, selectedMovie, user, isRegistered } = this.state;

    // If user is not registered, render RegistrationView
    if (!isRegistered)
      return (
        <RegistrationView
          onLoggedIn={(user) => this.onLoggedIn(user)}
          setRegistered={this.setRegistered}
        />
      );

    // If there's no user, the LoginView is rendered.
    // If there's a user logged in, the user details are passed as a prop to LoginView
    if (!user)
      return (
        <LoginView
          onLoggedIn={(user) => this.onLoggedIn(user)}
          setRegistered={this.setRegistered}
        />
      );

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
      <Container fluid>
        <Row className="row-width mx-auto justify-content-center">
          {movies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              setSelectedMovie={this.setSelectedMovie}
            >
              {movie.title}
            </MovieCard>
          ))}
        </Row>
      </Container>
    );
  }
}
