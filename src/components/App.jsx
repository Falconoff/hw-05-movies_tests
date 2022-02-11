import { Routes, Route } from 'react-router-dom';

import Contacts from '../views/Contacts/Contacts';
import HomePage from '../views/HomePage';
import MoviesPage from '../views/MoviesPage';
// import NotFound from '../views/NotFound/NotFound';
import Params from '../views/Params';
import Single from '../views/Single';
import Layout from '../components/Layout';
import MovieDetailsPage from '../views/MovieDetailsPage';
import Cast from '../views/Cast';
import Reviews from '../views/Reviews';

import { AppBody } from './App.styled';

export const App = () => {
  return (
    <AppBody>
      {/* <h2>React homework template</h2> */}
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="movies">movies</Link>
        <Link to="contacts">Contacts</Link>
        <Link to="not">Not</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <MainWrapper> */}
          {/* trends */}
          <Route index element={<HomePage />} />

          {/* search form */}
          <Route path="movies" element={<MoviesPage />} />
          {/* single movie page */}
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="contacts" element={<Contacts />} />
          <Route path="params" element={<Params />} />
          <Route path="contacts/:id" element={<Single />} />

          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="*" element={<HomePage />} />
          {/* </MainWrapper> */}
        </Route>
      </Routes>
    </AppBody>
  );
};
