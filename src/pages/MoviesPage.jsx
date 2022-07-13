import { useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import { searchMovie } from 'components/ServerAPI/ServerApi';
import MoviesList from 'components/MoviesList/MoviesList';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const fetchMoviesByName = async name => {
    const data = await searchMovie(name);
    setMovies(data);
    console.log(data);
  };

  return (
    <div>
      <SearchForm onSubmit={fetchMoviesByName} />
      <MoviesList moviesArr={movies} />
    </div>
  );
}
