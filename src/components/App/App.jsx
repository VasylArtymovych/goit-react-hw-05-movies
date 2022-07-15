import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Container } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeaderBar from 'components/HeaderBar/HeaderBar';
import Loader from 'components/Loader/Loader';
const HomePage = lazy(() => import('../../pages/HomePage.jsx'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage.jsx'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage.jsx'));
const Cast = lazy(() => import('components/Cast/Cast.jsx'));
const Reviews = lazy(() => import('components/Reviews/Reviews.jsx'));

const App = () => {
  return (
    <Container>
      <ToastContainer
        autoClose={1500}
        theme={'dark'}
        icon={true}
        pauseOnFocusLoss
      />
      <HeaderBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<p>Error page</p>} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
