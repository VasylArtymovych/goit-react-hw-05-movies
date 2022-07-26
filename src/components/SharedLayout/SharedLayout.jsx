import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Container } from './SharedLayout.styled';
import HeaderBar from 'components/HeaderBar/HeaderBar';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
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
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
