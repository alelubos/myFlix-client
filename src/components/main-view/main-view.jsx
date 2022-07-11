// Utilities imports
import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Redux Actions
import { setMovies } from '../../actions/actions';

// Components imports
import { Container, Row } from 'react-bootstrap';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { LoginView } from '../login-view/login-view';
//import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { NavBar } from '../nav-bar/nav-bar';
import { ProfileView } from '../profile-view/profile-view';
import { RegistrationView } from '../registration-view/registration-view';
import MoviesList from '../movies-list/movies-list';

// Styles
import './main-view.scss';

class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      username: null,
      favoriteMovies: [],
    };
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        username: localStorage.getItem('username'),
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
        this.props.setMovies(response.data);
      })
      .catch((err) => console.log('Error: ' + err));
  }

  handleFavorite = (movieId, action) => {
    const { username, favoriteMovies } = this.state;
    const accessToken = localStorage.getItem('token');
    if (accessToken !== null && username !== null) {
      // Add MovieID to Favorites (local state & webserver)
      if (action === 'add') {
        this.setState({ favoriteMovies: [...favoriteMovies, movieId] });
        axios
          .post(
            `https://top-flix.herokuapp.com/users/${username}/favorites/${movieId}`,
            {},
            {
              headers: { Authorization: `Bearer ${accessToken}` },
            }
          )
          .then((res) => {
            console.log(`Movie added to ${username} Favorite movies`);
          })
          .catch((err) => {
            console.log(err);
          });

        // Remove MovieID from Favorites (local state & webserver)
      } else if (action === 'remove') {
        this.setState({
          favoriteMovies: favoriteMovies.filter((id) => id !== movieId),
        });
        axios
          .delete(
            `https://top-flix.herokuapp.com/users/${username}/favorites/${movieId}`,
            {
              headers: { Authorization: `Bearer ${accessToken}` },
            }
          )
          .then((res) => {
            console.log(`Movie removed from ${username} Favorite movies`);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  onLoggedIn = (authData) => {
    const { username, email, birthday, favoriteMovies } = authData.user;
    this.setState({ username, favoriteMovies: favoriteMovies || [] });
    localStorage.setItem('token', authData.token);
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('birthday', birthday);
    this.getMovies(authData.token);
  };

  render() {
    const { username, favoriteMovies } = this.state;
    const { movies } = this.props;

    if (!movies)
      return (
        <div className="main-view">The list is empty. Loading info...</div>
      );

    return (
      <Router>
        <NavBar user={username} />
        <Container>
          <Route
            exact
            path="/"
            render={() => {
              // If there's no user, the LoginView is rendered.
              if (!username) {
                return <LoginView onLoggedIn={this.onLoggedIn} />;
              }
              // If a user is logged the Movies are rendered as MovieCards
              return <MoviesList movies={movies} />;
            }}
          />

          <Route
            path="/register"
            render={() => {
              if (username) return <Redirect to="/" />;
              return <RegistrationView />;
            }}
          />

          <Route
            path="/movies/:movieId"
            render={({ match, history }) => (
              <MovieView
                movie={movies.find((m) => m._id === match.params.movieId)}
                isFavorite={favoriteMovies.includes(match.params.movieId)}
                goBack={history.goBack}
                handleFavorite={this.handleFavorite}
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
            path={`/users/${username}`}
            render={({ history }) => {
              if (!username) return <Redirect to="/" />;
              return (
                <ProfileView
                  movies={movies}
                  goBack={history.goBack}
                  favoriteMovies={favoriteMovies || []}
                  handleFavorite={this.handleFavorite}
                />
              );
            }}
          />
        </Container>
      </Router>
    );
  }
}

let mapStateToProps = (state) => {
  return { movies: state.movies };
};

export default connect(mapStateToProps, { setMovies })(MainView);
