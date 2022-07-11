import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './movie-view.scss';

export class MovieView extends Component {
  render() {
    const { movie, goBack, isFavorite, handleFavorite } = this.props;
    if (!movie) return <div></div>;
    return (
      <Row className="justify-content-center mt-5">
        <Col
          className="container justify-content-center"
          xs={12}
          md={10}
          lg={9}
          xl={8}
        >
          <Row className="justify-content-start">
            <Col sm={5}>
              <img
                crossOrigin="anonymous"
                className="poster"
                src={movie.imageURL}
                alt="Poster from the movie"
              />
            </Col>
            <Col sm={7}>
              <div className="mt-2">
                <div className="title">{movie.title} </div>

                <div className="specs mt-2 bg-info">
                  <span className="ml-2">{movie.releaseYear}</span>
                  <span className="ml-3">| ⭐ {movie.rating}</span>
                  {isFavorite && (
                    <>
                      <span className="ml-3">|</span>
                      <span className="ml-3">♥️</span>
                    </>
                  )}
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
                    <Button variant="outline-dark" className="value ml-1">
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
                {!isFavorite ? (
                  <Button
                    className="my-4 ml-2"
                    variant="outline-primary"
                    onClick={() => handleFavorite(movie._id, 'add')}
                  >
                    Add to 🤍 Movies
                  </Button>
                ) : (
                  <div />
                )}
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
