import { useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import { searchMovie } from '../ServerAPI/ServerApi';
import MoviesList from 'components/MoviesList/MoviesList';
import { toast } from 'react-toastify';
export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  const onSubmitForm = async name => {
    try {
      const data = await searchMovie(name);
      if (data.length === 0) {
        toast.info(`Movie with name: ${name} not found!`);
        return;
      }
      setMovies(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <SearchForm onSubmit={onSubmitForm} />
      <MoviesList moviesArr={movies} />
    </div>
  );
}
