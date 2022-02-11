import { Outlet } from 'react-router-dom';

import { Header, Link, Footer, MainWrapper } from './Layout.styled';

export default function Layout() {
  return (
    <>
      <Header>
        <Link to="/">Home</Link>
        <Link to="movies">Movies</Link>
        <Link to="contacts">Contacts</Link>
        <Link to="params">Params</Link>
      </Header>

      {/* <Outlet>
        <MainWrapper />
      </Outlet> */}
      <MainWrapper>
        <Outlet />
      </MainWrapper>

      <Footer>2022, GoIT Homework - Movies, Falconoff ©</Footer>
    </>
  );
}
