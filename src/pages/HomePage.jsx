import {
  fetchTrending,
  fetchMovieCredits,
  fetchMovieReviews,
} from 'components/ServerAPI/ServerApi';
import { useState } from 'react';

export default function HomePage() {
  // const [movies, setMovies] = useState([]);
  fetchMovieReviews(560057).then(console.log);

  return <div>Home</div>;
}
