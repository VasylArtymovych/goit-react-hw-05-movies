import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import MovieCard from 'components/MovieCard/MovieCard';
import { fetchMovieById } from 'components/ServerAPI/ServerApi';
import Loader from 'components/Loader/Loader';
import Box from 'components/Box';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const movieData = await fetchMovieById(movieId);
        setMovie(movieData);
      } catch (error) {
        toast.error(error.message);
      }
    })();
  }, [movieId]);

  return (
    <>
      {movie && <MovieCard movie={movie} />}

      <Title>Additional information</Title>
      <Box pb={20}>
        <StyledLink to="cast">Cast</StyledLink>
        <StyledLink to="reviews">Reviews</StyledLink>
      </Box>

      <Suspense fallback={<Loader />}>
        <Outlet context={movieId} />
      </Suspense>
    </>
  );
}

const Title = styled('h3')`
  padding: 5px 10px;
  margin-top: 0;
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  background: linear-gradient(to top left, rgb(16, 15, 60), rgb(85, 204, 225));
  border-bottom: 1px solid ${p => p.theme.colors.accent};
`;

const StyledLink = styled(NavLink)`
  display: block;
  margin: 5px 20px;
  color: ${p => p.color || p.theme.colors.white};

  &.active {
    color: ${p => p.theme.colors.accent};
  }
`;
