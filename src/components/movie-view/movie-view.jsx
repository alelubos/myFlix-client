import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './movie-view.scss';

class MovieView extends Component {
  render() {
    const { movie, genreName, directorName, setSelectedMovie } = this.props;
    if (!movie) return <div></div>;
    return (
      <Container className="fluid m-0 mt-2">
        <Row>
          <Col sm={12} md={7} lg={{ span: 6, offset: 1 }}>
            <img
              className="image"
              src={movie.imageURL}
              alt="Poster from the movie"
            />
          </Col>
          <Col md={5}>
            <Container>
              <div className="display-4">{movie.title}</div>

              <div className="mt-3">
                <span className="label">Director</span>
                <span className="value">: {directorName}</span>
              </div>

              <div className="mt-2">
                <span className="label">Rated</span>
                <span className="value">: {movie.rating}</span>
                <span>⭐</span>
              </div>
              <div className="mt-2">
                <span className="label">Released</span>
                <span className="value">: {movie.releaseYear}</span>
              </div>

              <div className="mt-2">
                <span className="label">Genre</span>
                <span className="value">: {genreName}</span>
              </div>

              <div className="mt-2">
                <span className="label">Description</span>
                <span className="value">: {movie.description}</span>
              </div>
              <Button
                className="my-3"
                variant="outline-primary"
                onClick={() => setSelectedMovie(null)}
              >
                Back to Movies
              </Button>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    imageURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    rating: PropTypes.number,
    description: PropTypes.string.isRequired,
  }).isRequired,
  genreName: PropTypes.string.isRequired,
  directorName: PropTypes.string.isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
};

export default MovieView;
