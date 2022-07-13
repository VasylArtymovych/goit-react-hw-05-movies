import { useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import { searchMovie } from 'components/ServerAPI/ServerApi';
import MoviesList from 'components/MoviesList/MoviesList';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const fetchMoviesByName = async name => {
    try {
      const data = await searchMovie(name);
      setMovies(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <SearchForm onSubmit={fetchMoviesByName} />
      <MoviesList moviesArr={movies} />
    </div>
  );
}
