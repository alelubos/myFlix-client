import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './movie-card.scss';

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <Col xs="auto" className="mb-3 mx-auto justify-content-center">
        <Card className="my-1 movie-card">
          <Link to={`/movies/${movie._id}`}>
            <Card.Img
              crossOrigin="anonymous"
              src={movie.imageURL}
              className="poster"
            />{' '}
            <Card.Body>
              <p className="card-title mb-2">{movie.title} </p>
              <span className="card-year">({movie.releaseYear})</span>
            </Card.Body>
          </Link>
        </Card>
      </Col>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
  }).isRequired,
};
