import React from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';

import './main-view.scss';
export default class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      user: null,
    };
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user'),
      });
      this.getMovies(accessToken);
    }
  }

  getMovies(token) {
    axios
      .get('https://top-flix.herokuapp.com/movies', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({
          movies: response.data,
        });
      })
      .catch((err) => console.log('Error: ' + err));
  }

  onLoggedIn = (authData) => {
    this.setState({ user: authData.user.username });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.username);

    this.getMovies(authData.token);
  };

  render() {
    const { movies, user } = this.state;

    // If there's no user, the LoginView is rendered.
    // If there's a user logged in, the user details are passed as a prop to LoginView

    if (!movies)
      return (
        <div className="main-view">The list is empty. Loading info...</div>
      );

    // Display List of Movies
    return (
      <Router>
        <Container fluid>
          <Route
            exact
            path="/"
            render={() => {
              if (!user) {
                return <LoginView onLoggedIn={this.onLoggedIn} />;
              }
              return (
                <Row className="main-view-width mx-auto justify-content-center mt-3">
                  {movies.map((movie) => (
                    <MovieCard key={movie._id} movie={movie}>
                      {movie.title}
                    </MovieCard>
                  ))}
                </Row>
              );
            }}
          />

          <Route
            path="/register"
            render={() => {
              return <RegistrationView />;
            }}
          />
          <Route
            path="/movies/:movieId"
            render={({ match, history }) => (
              <MovieView
                movie={movies.find((m) => m._id === match.params.movieId)}
                goBack={history.goBack}
              />
            )}
          />

          <Route
            path="/directors/:directorName"
            render={({ match, history }) => (
              <DirectorView
                director={
                  movies.find(
                    (m) => m.director.name === match.params.directorName
                  ).director
                }
                directorMovies={movies.filter(
                  (m) => m.director.name === match.params.directorName
                )}
                goBack={history.goBack}
              />
            )}
          />

          <Route
            path="/genres/:genreName"
            render={({ match, history }) => (
              <GenreView
                genreMovies={movies.filter(
                  (movie) => movie.genre.name === match.params.genreName
                )}
                genre={
                  movies.find(
                    (movie) => movie.genre.name === match.params.genreName
                  ).genre
                }
                goBack={history.goBack}
              />
            )}
          />

          <Route
            path="/users/:username"
            render={({ match, history }) => (
              <ProfileView
                username={movies.filter(
                  (movie) => movie.genre.name === match.params.genreName
                )}
                genre={
                  movies.find(
                    (movie) => movie.genre.name === match.params.genreName
                  ).genre
                }
                goBack={history.goBack}
              />
            )}
          />
        </Container>
      </Router>
    );
  }
}
