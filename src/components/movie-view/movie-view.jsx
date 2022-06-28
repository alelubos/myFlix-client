import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './movie-view.scss';

class MovieView extends Component {
  render() {
    const { movie, genreName, directorName, setSelectedMovie } = this.props;
    if (!movie) return <div></div>;
    return (
      <Row className="m-1 justify-content-center view-background">
        <Col
          className="container p-3 justify-content-center"
          md={9}
          lg={7}
          xl={6}
        >
          <Row className="justify-content-start">
            <Col sm={'auto'} className="">
              <img
                crossOrigin="anonymous"
                className="poster"
                src={movie.imageURL}
                alt="Poster from the movie"
              />
            </Col>
            <Col>
              <div className="mt-2">
                <div className="title">
                  {movie.title}{' '}
                  <span className="year">({movie.releaseYear})</span>
                </div>

                <div className="specs mt-2 bg-info">
                  <span className="value ml-2">{genreName} </span>
                  <span className="mx-2">|</span>
                  <span className="value"> {movie.rating}</span> <span>⭐</span>
                </div>

                <div className="mt-3">
                  <span className="fw-bold">Director</span>
                  <span className="value">: {directorName}</span>
                </div>

                <div className="mt-2">
                  <span className="fw-bold">Overview</span>
                  <span className="value">: {movie.description}</span>
                </div>
                <Button
                  className="my-3 mb-0"
                  variant="outline-primary"
                  onClick={() => setSelectedMovie(null)}
                >
                  Back to Movies
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
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
