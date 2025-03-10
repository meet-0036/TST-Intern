import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className="mx-8 my-auto text-center">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
