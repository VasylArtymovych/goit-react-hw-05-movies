import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import routePaths from 'RouteSettings/Settings';
import SharedLayout from 'components/SharedLayout/SharedLayout.jsx';

const HomePage = lazy(() => import('../../pages/HomePage.jsx'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage.jsx'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage.jsx'));
const Cast = lazy(() => import('components/Cast/Cast.jsx'));
const Reviews = lazy(() => import('components/Reviews/Reviews.jsx'));

const App = () => {
  return (
    <Routes>
      <Route path={routePaths.home} element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path={routePaths.movies} element={<MoviesPage />}></Route>
        <Route path={routePaths.movie} element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<Navigate to={routePaths.home} replace />} />
      </Route>
    </Routes>
  );
};

export default App;
