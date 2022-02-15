// import { Outlet, useParams, Link } from 'react-router-dom';
import { Outlet, useParams, useLocation } from 'react-router-dom';

import { useEffect, useState } from 'react';
// import axios from 'axios';

import { getMovieById } from '../../service/apiService';

import {
  MovieWrapper,
  MovieDetails,
  MovieTitle,
  DetailName,
  AdditionalInfoList,
  LinkItem,
  GoBackBtn,
  NoPoster,
} from './MovieDetailsPage.styled';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  // console.log('params - movieId:', movieId);
  const [movie, setMovie] = useState(null);
  // const [conf, setConf] = useState(null);

  // ======= it works local ===============
  // const getMovieById = async movieId => {
  //   const response = await axios.get(
  //     `https://api.themoviedb.org/3/movie/${movieId}?api_key=a3ec7c1621ade0b1491e66cd43b88745`
  //   );
  //   console.log('getMovieById response:', response.data);
  //   return response.data;
  // };

  const location = useLocation();

  // console.log('location in Movie details:', location);

  // const getConfig = async () => {
  //   const response = await axios.get(
  //     `https://api.themoviedb.org/3/configuration?api_key=a3ec7c1621ade0b1491e66cd43b88745`
  //   );
  //   return response.data;
  // };

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
    // getConfig().then(setConf);
  }, [movieId]);

  return (
    <MovieWrapper>
      <h2>Movie details</h2>
      {/* {console.log('movie:', movie)} */}
      {/* {console.log('Config:', conf)} */}

      <GoBackBtn to={location?.state?.from ?? '/'}>Go back</GoBackBtn>

      {movie && (
        <MovieDetails>
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          )}
          {!movie.poster_path && <NoPoster>No poster</NoPoster>}

          <div>
            <MovieTitle>{movie.title}</MovieTitle>
            <p>User score: {movie.vote_average * 10}%</p>

            <DetailName>Overview</DetailName>
            <p>{movie.overview}</p>

            <DetailName>Genres</DetailName>
            <p>
              {movie.genres.map(genre => (
                <span key={genre.id}>{genre.name} </span>
              ))}
            </p>

            <DetailName>Release date</DetailName>
            <p>{movie.release_date}</p>
          </div>
        </MovieDetails>
      )}

      <AdditionalInfoList>
        <p>Additional information</p>
        <ul>
          <li>
            {/* передаём в линки state со старым адресом для кнопки Go back */}
            <LinkItem to="cast" state={{ from: location?.state?.from ?? '/' }}>
              Cast
            </LinkItem>
          </li>
          <li>
            <LinkItem
              to="reviews"
              state={{ from: location?.state?.from ?? '/' }}
            >
              Reviews
            </LinkItem>
          </li>
        </ul>
      </AdditionalInfoList>

      <Outlet />
    </MovieWrapper>
  );
}
