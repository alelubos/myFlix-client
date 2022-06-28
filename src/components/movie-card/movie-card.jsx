import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Badge, Card, Col } from 'react-bootstrap';
import './movie-card.scss';

class MovieCard extends Component {
  // state = {  }
  render() {
    const { movie, setSelectedMovie } = this.props;
    return (
      <Col xs={{ span: 10, offset: 2 }} sm={{ span: 5, offset: 0 }} lg={4}>
        <Card
          className="my-2 movie-card"
          style={{ maxWidth: '16rem', minHeight: '16rem' }}
          onClick={() => setSelectedMovie(movie)}
        >
          <Card.Img
            crossOrigin="anonymous"
            src={movie.imageURL}
            className="poster position-relative"
          />
          <Card.ImgOverlay>
            <Badge
              className="top-right-position"
              pill
              bg="info"
              text="light"
              style={{ fontSize: '.9rem', fontWeight: '500' }}
            >
              {movie.rating}⭐
            </Badge>
          </Card.ImgOverlay>
          <Card.Body>
            <span className="card-title">{movie.title} </span>
            <span className="card-year">({movie.releaseYear})</span>
          </Card.Body>
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
  setSelectedMovie: PropTypes.func.isRequired,
};

export default MovieCard;
