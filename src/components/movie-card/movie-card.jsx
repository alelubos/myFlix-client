import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './movie-card.scss';

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <Col
        xs={9}
        sm={{ span: 9, offset: 2 }}
        md={{ span: 5, offset: 0 }}
        lg={4}
        xl={3}
        className="mb-3"
      >
        <Card className="my-1 movie-card">
          <Link to={`/movies/${movie._id}`}>
            <Card.Img
              crossOrigin="anonymous"
              src={movie.imageURL}
              className="poster position-relative"
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
