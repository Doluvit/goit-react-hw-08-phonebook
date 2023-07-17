import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { LayoutContainer } from 'pages/Pages.styled';

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
