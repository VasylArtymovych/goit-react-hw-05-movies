import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchTrending } from 'components/ServerAPI/ServerApi';
import Title from 'components/Title/Title';
import MoviesList from 'components/MoviesList/MoviesList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const movies = await fetchTrending();
        setMovies(movies);
      } catch (error) {
        toast.error(error.message);
      }
    })();
  }, []);

  return (
    <div>
      <Title>Trending Today</Title>
      <MoviesList moviesArr={movies} />
    </div>
  );
}
