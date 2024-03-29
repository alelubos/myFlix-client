import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { MovieCard } from '../movie-card/movie-card';

export class GenreView extends React.Component {
  render() {
    const { genre, genreMovies, goBack } = this.props;
    return (
      <Container className='mt-5 mx-5'>
        <h1 className='mb-1'>{genre.name}</h1>
        <Button className='mb-4' variant='warning' onClick={goBack}>
          « Back
        </Button>

        <h2 className='subtitle'>DESCRIPTION: </h2>
        <p>{genre.description}</p>
        <h2 className='subtitle'>MOVIES ON THIS GENRE: </h2>
        <Row className='justify-content-center movie-view-width'>
          {genreMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie}>
              {movie.title}
            </MovieCard>
          ))}
        </Row>
      </Container>
    );
  }
}
