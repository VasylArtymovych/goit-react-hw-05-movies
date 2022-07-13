import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieCard from 'components/MovieCard/MovieCard';
import {
  fetchMovieById,
  fetchMovieCredits,
  fetchMovieReviews,
} from 'components/ServerAPI/ServerApi';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const [movieData, credits, reviews] = await Promise.all([
          fetchMovieById(movieId),
          fetchMovieCredits(movieId),
          fetchMovieReviews(movieId),
        ]);
        setMovie(movieData);
        setCast(credits.cast);
        setReviews(reviews);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [movieId]);

  return (
    <>
      {movie && <MovieCard movie={movie} />}
      <hr />
      <p>Additional information</p>
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      <Outlet context={{ cast, reviews }} />
    </>
  );
}
