import { useState, useEffect } from 'react';
import { fetchTrending } from 'components/ServerAPI/ServerApi';
import Title from 'components/Title/Title';
import MoviesList from 'components/MoviesList/MoviesList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const movies = await fetchTrending(616037);
        setMovies(movies);
      } catch (error) {
        console.log(error);
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
