import React from 'react';
import axios from 'axios';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FavoriteCard } from '../favorite-card/favorite-card';
import '../profile-view/profile-view.scss';

export const ProfileView = (props) => {
  const { favoriteMovies, goBack, movies, handleFavorite } = props;
  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');
  const birthday = localStorage.getItem('birthday');
  const token = localStorage.getItem('token');

  const deleteAccount = () => {
    axios
      .delete(`https://top-flix.herokuapp.com/users/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        alert(`Your user account was deleted.`);
        localStorage.clear();
        window.open('/', '_self');
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container className="mt-4" style={{ width: '80%' }}>
      <h1>My Profile</h1>
      <Button className="mb-4" variant="warning" onClick={goBack}>
        « Back
      </Button>
      <h2 className="subtitle">
        User: <span className="text-info fw-bold ml-3">{username}</span>
      </h2>
      <h2 className="subtitle">
        Email: <span className="text-info fw-bold ml-1">{email}</span>
      </h2>
      <h2 className="subtitle">
        Birthday (mm-dd-yyyy):{' '}
        <span className="text-info fw-bold">{`${birthday.slice(
          5,
          7
        )}-${birthday.slice(8, 10)}-${birthday.slice(0, 4)}`}</span>
      </h2>
      <h2 className="subtitle mt-5">LIST OF ♥️ MOVIES:</h2>
      {favoriteMovies.length !== 0 ? (
        <Row className="justify-content-center mt-3">
          {favoriteMovies.map((movieId) => {
            let movie = movies.find((m) => m._id === movieId);
            return (
              <FavoriteCard
                key={movieId}
                movie={movie}
                handleFavorite={handleFavorite}
              >
                {movie.title}
              </FavoriteCard>
            );
          })}
        </Row>
      ) : (
        <h2 className="subtitle">
          <span className="text-danger">
            You didn't select any favorite movie yet.
          </span>
        </h2>
      )}
    </Container>
  );
};
