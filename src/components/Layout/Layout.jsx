import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { Outlet } from 'react-router-dom';

//import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthManu';

import { Header } from 'components/Header/Header';

export const Layout = () => {
  const token = useSelector(selectToken);

  return (
    <>
      <header>
        <Header />

        {/* <Navigation /> */}
        {token ? <UserAuthMenu /> : <AuthNavigation />}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
