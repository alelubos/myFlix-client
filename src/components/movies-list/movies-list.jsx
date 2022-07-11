import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import { MovieCard } from '../movie-card/movie-card';
import VisibilityFilterInput from '../visibility-input-filter/visibility-input-filter';

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function MoviesList(props) {
  const { movies, visibilityFilter } = props;
  // For the case were visibilityFilter is an empty string
  let filteredMovies = movies;

  if (visibilityFilter !== '') {
    filteredMovies = movies.filter((m) =>
      m.title.toLowerCase().includes(visibilityFilter.toLowerCase())
    );
  }
  if (!movies) return <div className="main-view"></div>;

  return (
    <>
      <Row className="justify-content-center movie-view-width mx-auto">
        <Col sm={12} xl={11} className="mt-3">
          <Container fluid>
            <VisibilityFilterInput visibilityFilter={visibilityFilter} />
          </Container>
        </Col>
      </Row>
      <Row className="justify-content-center movie-view-width mx-auto px-4">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </Row>
    </>
  );
}

export default connect(mapStateToProps)(MoviesList);
