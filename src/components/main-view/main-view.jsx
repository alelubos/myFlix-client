import React from 'react';
import MovieCard from '../movie-card/movie-card';
import MovieView from '../movie-view/movie-view';

export default class MainView extends React.Component {
  state = {
    movies: [
      {
        _id: 1,
        title: 'The Best of Enemies',
        description:
          'Inspired by true events. Civil rights activist Ann Atwater faces off against C.P. Ellis, Exalted Cyclops of the Ku Klux Klan, in 1971 Durham, North Carolina over the issue of school integration.',
        genre: 'Drama',
        imageURL:
          'https://www.imdb.com/title/tt4807408/mediaviewer/rm3253104128/?ref_=tt_ov_i',
        released: 2019,
        rating: 7.4,
        director: 'Robin Bissel',
      },
      {
        _id: 2,
        title: 'The Name of the Rose',
        description:
          'Historical mystery film directed by Jean-Jacques Annaud, based on the 1980 novel of the same name by Umberto Eco. An intellectually non-conformist friar investigates a series of mysterious deaths in an isolated abbey.',
        genre: 'Mystery',
        imageURL:
          'https://www.imdb.com/title/tt0091605/mediaviewer/rm1189816576/?ref_=tt_ov_i',
        released: 1986,
        rating: 7.7,
        director: 'Jean-Jacques Annaud',
      },
      {
        _id: 3,
        title: 'The Lord of The Rings - The Fellowship of the Ring',
        description:
          "The Fellowship of the Ring is a 2001 epic fantasy adventure film directed by Peter Jackson, based on the first volume of J. R. R. Tolkien's The Lord of the Rings. The film is the first instalment in The Lord of the Rings trilogy",
        genre: 'Adventure',
        imageURL:
          'https://www.imdb.com/title/tt0120737/mediaviewer/rm3592958976/?ref_=tt_ov_i',
        released: 2001,
        rating: 8.8,
        director: 'Peter Jackson',
      },
      {
        _id: 4,
        title: 'Dune',
        description:
          "Epic science fiction film. A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
        genre: 'Adventure',
        imageURL:
          'https://www.imdb.com/title/tt1160419/mediaviewer/rm2910452737/?ref_=tt_ov_i',
        released: 2021,
        rating: 8.1,
        director: 'Denis Villeneuve',
      },
      {
        _id: 5,
        title: 'Arrival',
        description:
          'A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.',
        genre: 'Sci-Fi',
        imageURL:
          'https://en.wikipedia.org/wiki/Arrival_(film)#/media/File:Arrival,_Movie_Poster.jpg',
        released: 2016,
        rating: 7.9,
        director: 'Denis Villeneuve',
      },
      {
        title: 'Edge of Tomorrow',
        description:
          'A soldier fighting aliens gets to relive the same day over and over again, the day restarting every time he dies.',
        genre: 'Sci-Fi',
        imageURL:
          'https://upload.wikimedia.org/wikipedia/en/f/f9/Edge_of_Tomorrow_Poster.jpg',
        released: 2014,
        rating: 7.9,
        director: 'Doug Liman',
      },
    ],
    selectedMovie: null,
  };

  setSelectedMovie = (movie) => {
    this.setState({ selectedMovie: movie });
  };

  render() {
    const { movies, selectedMovie } = this.state;

    // Display MovieView OR message of empty list
    if (selectedMovie)
      return (
        <MovieView
          movie={selectedMovie}
          setSelectedMovie={this.setSelectedMovie}
        />
      );

    if (!movies) return <div className="main-view">The list is empty!</div>;

    // Display List of Movies
    return (
      <div className="main-view">
        {movies.map((movie) => (
          <MovieCard
            key={movie._id}
            movie={movie}
            setSelectedMovie={this.setSelectedMovie}
          >
            {movie.title}
          </MovieCard>
        ))}
      </div>
    );
  }
}
