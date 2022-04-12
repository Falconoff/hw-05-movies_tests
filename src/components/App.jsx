import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// import Contacts from '../views/Contacts/Contacts';
// import HomePage from '../views/HomePage';
// import MoviesPage from '../views/MoviesPage';
import NotFound from '../views/NotFound/NotFound';
import Params from '../views/Params';
import Single from '../views/Single';
import Layout from '../components/Layout';
// import MovieDetailsPage from '../views/MovieDetailsPage';
import Cast from '../views/Cast';
import Reviews from '../views/Reviews';

import Test from '../views/Test';
import Pink from '../views/Test/Pink/Pink';
import Green from '../views/Test/Green/Green';

import { AppBody } from './App.styled';

const Contacts = lazy(() => import('../views/Contacts/Contacts'));
const HomePage = lazy(() => import('../views/HomePage'));
const MoviesPage = lazy(() => import('../views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../views/MovieDetailsPage'));

// console.log(Contacts);

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, itaque explicabo. Libero ab cumque atque perferendis numquam fugiat neque similique, necessitatibus odio praesentium fuga minus facere quam accusamus. Excepturi, ipsum.';

export const App = () => {
  return (
    <AppBody>
      <ToastContainer />
      {/* <Suspense fallback={<div>Загрузка...</div>}> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <MainWrapper> */}

          {/* trends */}
          <Route index element={<HomePage />} />

          {/* search form */}
          <Route path="movies" element={<MoviesPage />} />

          {/* single movie page with sub-pages */}
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="contacts" element={<Contacts />} />
          <Route path="params" element={<Params />} />
          <Route path="contacts/:id" element={<Single />} />

          <Route path="test" element={<Test />}>
            <Route path="pink" element={<Pink />} />
            <Route path="green-1" element={<Green />} />
            <Route path="green-2" element={<Green text={lorem} />} />
            <Route
              index
              element={
                <main
                  style={{
                    padding: '10px',
                    marginTop: '10px',
                    outline: '3px solid gold',
                  }}
                >
                  <p>INDEX</p>
                </main>
              }
            />
          </Route>

          <Route path="*" element={<NotFound />} />
          {/* <Route path="*" element={<HomePage />} /> */}
          {/* </MainWrapper> */}
        </Route>
      </Routes>
      {/* </Suspense> */}
    </AppBody>
  );
};
