import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, Row } from 'react-bootstrap';
import { FavoriteCard } from '../favorite-card/favorite-card';
import { UpdateForm } from '../update-form/update-form';
import { connect } from 'react-redux';
import './profile-view.scss';

// Redux Actions
import { updateUser, deleteUser } from '../../actions/actions';

function ProfileView(props) {
  let [showForm, setShowForm] = useState(false);
  const { handleFavorite, goBack, movies, updateUser, user } = props;
  const { username, email, birthday, favoriteMovies } = user;

  const handleDeleteUser = () => {
    const accessToken = localStorage.getItem('token');
    if (username && accessToken) {
      let sure = confirm(
        'Are you sure? This action is irreversible and will ERASE your account.'
      );
      if (!sure) return;
      // request to Delete user from webserver
      axios
        .delete(`https://top-flix.herokuapp.com/users/${email}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((res) => {
          // Clear Token from local storage
          localStorage.clear();
          alert('Your user account was deleted.');
          deleteUser({});
          window.open('/', '_self');
        })
        .catch((err) => console.log(err));
    }
  };

  const handleUpdateUser = (updatedUser, token) => {
    console.log('Updated user from handleUpdateUser: ', updatedUser);
    const { username } = updatedUser;
    if (username && updatedUser && token) {
      // Update user data in webserver
      axios
        .put(
          `https://top-flix.herokuapp.com/users/${username}`,
          { ...updatedUser },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          const data = response.data;
          console.log('response data from axios in handleUpdateUser: ', data);
          // Dispatch action to update store.user
          updateUser({ ...updatedUser, favoriteMovies });
          console.log('after updatUser action, user: ', user);
          alert(
            'User info updated. Please Login again with your new credentials.'
          );
          window.open(`/`, '_self');
        })
        .catch((err) => {
          console.log('error updating the user:', err);
        });
    }
  };

  return (
    <Container className='mt-4'>
      <h1>
        Profile of <span className='text-info'>{username}</span>
      </h1>
      <div className='d-flex'>
        <Button className='mb-4' variant='warning' onClick={goBack}>
          « Back
        </Button>
        <Button
          className='mb-4 ml-2'
          variant='info'
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          {!showForm ? 'UPDATE Profile' : 'SHOW Profile'}
        </Button>
        <Button
          className='mb-4 ml-2'
          variant='danger'
          onClick={handleDeleteUser}
        >
          DELETE Profile
        </Button>
      </div>
      {!showForm ? (
        <>
          <h3>
            Email: <span className='text-info fw-bold ml-4'>{email}</span>
          </h3>
          <h3>
            Birthday:{' '}
            <span className='text-info fw-bold'>{`${birthday.slice(
              5,
              7
            )}-${birthday.slice(8, 10)}-${birthday.slice(0, 4)}`}</span>
            <span id='mini' className='ml-2'>
              (mm-dd-yyyy)
            </span>
          </h3>
        </>
      ) : (
        <UpdateForm user={user} handleUpdateUser={handleUpdateUser} />
      )}

      <h2 className='subtitle mt-4'>LIST OF ♥️ MOVIES:</h2>
      {favoriteMovies.length !== 0 ? (
        <Row className='justify-content-center mt-3'>
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
        <h2 className='subtitle'>
          <span className='text-danger'>
            You don't have movies in your favorite movies list.
          </span>
        </h2>
      )}
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    user: state.user,
  };
};

export default connect(mapStateToProps, { deleteUser, updateUser })(
  ProfileView
);
