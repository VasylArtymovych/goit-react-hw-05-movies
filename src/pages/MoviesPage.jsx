import { useEffect, useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import { searchMovie } from '../ServerAPI/ServerApi';
import MoviesList from 'components/MoviesList/MoviesList';
import { toast } from 'react-toastify';
import Pagination from 'components/Pagination';
import usePagination from 'hooks/usePagination';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [queryName, setQueryName] = useState('');
  const { currentPage, totalPages, setTotalPages, onBtnClick } =
    usePagination();

  useEffect(() => {
    async function fetchMovesByName() {
      try {
        const { results, totalPages } = await searchMovie(
          queryName,
          currentPage
        );
        if (results.length === 0) {
          toast.info(`Movie with name: ${queryName} not found!`);
          setMovies([]);
          return;
        }
        setMovies(results);
        setTotalPages(totalPages);
      } catch (error) {
        toast.error(error.message);
      }
    }
    if (!queryName) {
      return;
    }
    fetchMovesByName();
  }, [currentPage, queryName, setTotalPages]);

  const onSubmitForm = name => {
    setQueryName(name);
  };

  return (
    <div>
      <SearchForm onSubmit={onSubmitForm} />
      <MoviesList moviesArr={movies} />
      {movies.length > 0 && (
        <Pagination
          page={currentPage}
          totalPages={totalPages}
          onClick={onBtnClick}
        />
      )}
    </div>
  );
}
