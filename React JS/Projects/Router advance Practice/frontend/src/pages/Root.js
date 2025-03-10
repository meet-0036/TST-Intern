import { Outlet } from 'react-router-dom';
// import { useNavigation } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

function RootLayout() {

  // 1. way of handle loading Status
  // navigation.state with idle , loading , submitting
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>Loading... Rootl</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
