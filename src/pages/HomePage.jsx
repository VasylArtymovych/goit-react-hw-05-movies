import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchTrending } from '../ServerAPI/ServerApi';
import Title from 'components/Title/Title';
import MoviesList from 'components/MoviesList/MoviesList';
import Pagination from 'components/Pagination';
import usePagination from 'hooks/usePagination';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const { currentPage, totalPages, setTotalPages, onBtnClick } =
    usePagination();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const { results, totalPages } = await fetchTrending();
        setMovies(results);
        setTotalPages(totalPages);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchMovies();
  }, [setTotalPages]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const { results } = await fetchTrending(currentPage);
        setMovies(results);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchMovies();
  }, [currentPage]);

  return (
    <div>
      <Title>Trending Today</Title>
      <MoviesList moviesArr={movies} />
      <Pagination
        page={currentPage}
        totalPages={totalPages}
        onClick={onBtnClick}
      />
    </div>
  );
}
