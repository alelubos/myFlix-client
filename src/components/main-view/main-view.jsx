// Utilities imports
import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Redux Actions
import {
  setMovies,
  setUser,
  addFavorite,
  deleteFavorite,
} from '../../actions/actions';

// Components imports
import { Container } from 'react-bootstrap';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { LoginView } from '../login-view/login-view';
import { MovieView } from '../movie-view/movie-view';
import { NavBar } from '../nav-bar/nav-bar';
import { RegistrationView } from '../registration-view/registration-view';
import MoviesList from '../movies-list/movies-list';
import ProfileView from '../profile-view/profile-view';

// Styles
import './main-view.scss';

class MainView extends React.Component {
  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
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
    const { user } = this.props;
    const { username } = user;
    const accessToken = localStorage.getItem('token');

    if (accessToken !== null && username !== null) {
      // Add MovieID to favoriteMovies (in store & webserver)
      if (action === 'add') {
        this.props.addFavorite(movieId);
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
      } else if (action === 'delete') {
        this.props.deleteFavorite(movieId);
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
    this.props.setUser(authData.user);
    localStorage.setItem('token', authData.token);
    this.getMovies(authData.token);
  };

  render() {
    const { user, movies } = this.props;
    const { username, favoriteMovies } = user;

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
                  handleFavorite={this.handleFavorite}
                  goBack={history.goBack}
                />
              );
            }}
          />
        </Container>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    user: state.user,
  };
};

export default connect(mapStateToProps, {
  setMovies,
  setUser,
  addFavorite,
  deleteFavorite,
})(MainView);
