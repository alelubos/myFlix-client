import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './favorite-card.scss';

export function FavoriteCard(props) {
  const { movie, handleFavorite } = props;

  return (
    <Col
      xs={9}
      sm={{ span: 9, offset: 2 }}
      md={{ span: 5, offset: 0 }}
      lg={4}
      xl={3}
      className="mb-3"
    >
      <Card className="my-1">
        <Link to={`/movies/${movie._id}`}>
          <Card.Img
            crossOrigin="anonymous"
            src={movie.imageURL}
            className="poster position-relative"
          />
        </Link>{' '}
        <Card.Body className="d-grid gap-2">
          <p className="card-title mb-2">{movie.title} </p>
          <span className="card-year">({movie.releaseYear})</span>

          <Button
            variant="outline-danger"
            className="mt-2 ml-auto"
            style={{ width: '100%' }}
            onClick={() => handleFavorite(movie._id, 'delete')}
          >
            Remove from ♥️
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

FavoriteCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
  }).isRequired,
};
