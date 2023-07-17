import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LayoutContainer } from 'pages/pages.styled/Pages.styled';

export const Layout = () => {
  return (
    <LayoutContainer>
      <ToastContainer position="top-right" reverseOrder={false} />
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </LayoutContainer>
  );
};
