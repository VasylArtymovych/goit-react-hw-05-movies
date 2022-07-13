import { Routes, Route } from 'react-router-dom';
import { Container } from './App.styled';
import HeaderBar from 'components/HeaderBar/HeaderBar';
import HomePage from '../../pages/HomePage';
import MoviesPage from '../../pages/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const App = () => {
  return (
    <Container>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<p>Error page</p>} />
      </Routes>
    </Container>
  );
};

export default App;
