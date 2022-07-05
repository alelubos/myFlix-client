import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './movie-view.scss';

export class MovieView extends Component {
  render() {
    const { movie, goBack } = this.props;
    if (!movie) return <div></div>;
    return (
      <Row className="justify-content-center">
        <Col
          className="container p-3 justify-content-center"
          md={9}
          lg={7}
          xl={6}
        >
          <Row className="justify-content-start">
            <Col sm={6}>
              <img
                crossOrigin="anonymous"
                className="poster"
                src={movie.imageURL}
                alt="Poster from the movie"
              />
            </Col>
            <Col sm={6}>
              <div className="mt-2">
                <div className="title">{movie.title} </div>

                <div className="specs mt-2 bg-info">
                  <span className="mx-2">{movie.releaseYear}</span>
                  <span className="mx-2">|</span>
                  <span className="value rating"> {movie.rating}</span>{' '}
                  <span>⭐</span>
                </div>

                <div className="mt-3">
                  <span className="fw-bold">Genre: </span>
                  <Link to={`/genres/${movie.genre.name}`}>
                    <Button
                      variant="outline-dark"
                      className="ml-4 value text-uppercase"
                    >
                      {movie.genre.name}{' '}
                    </Button>
                  </Link>
                </div>

                <div className="mt-2">
                  <span className="fw-bold">Director: </span>
                  <Link to={`/directors/${movie.director.name}`}>
                    <Button variant="outline-dark" className="value ml-2">
                      {movie.director.name}
                    </Button>
                  </Link>
                </div>

                <div className="mt-2">
                  <span className="fw-bold">Overview</span>
                  <span className="value">: {movie.description}</span>
                </div>

                <Button className="my-4" variant="warning" onClick={goBack}>
                  « Back
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
  // genreName: PropTypes.string.isRequired,
  // directorName: PropTypes.string.isRequired,
  // setSelectedMovie: PropTypes.func.isRequired,
};
