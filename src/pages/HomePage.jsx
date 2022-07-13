import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { fetchTrending } from 'components/ServerAPI/ServerApi';
import Title from 'components/Title/Title';
import MoviesList from 'components/MoviesList/MoviesList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const movies = await fetchTrending(616037);
      setMovies(movies);
    })();
  }, []);

  return (
    <div>
      <Title>Trending Today</Title>
      <MoviesList moviesArr={movies} />
    </div>
  );
}
