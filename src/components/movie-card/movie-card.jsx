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
          className="my-2"
          style={{ maxWidth: '16rem', minHeight: '18rem' }}
          onClick={() => setSelectedMovie(movie)}
        >
          <Card.Img src={movie.imageURL} className="fluid position-relative" />
          <Card.ImgOverlay>
            <Badge
              className="top-right-position"
              pill
              bg="primary"
              text="light"
            >
              {movie.rating}⭐
            </Badge>
          </Card.ImgOverlay>
          <Card.Body>
            <Card.Title className="text-bolder">{movie.title}</Card.Title>
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
