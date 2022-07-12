import HeaderBar from 'components/HeaderBar/HeaderBar';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import MoviesPage from '../../pages/MoviesPage';
import { Container } from './App.styled';

const App = () => {
  return (
    <Container>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
      </Routes>
    </Container>
  );
};

export default App;
