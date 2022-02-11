import { Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import {
  MovieWrapper,
  MovieDetails,
  MovieTitle,
  DetailName,
  AdditionalInfoList,
  Link,
} from './MovieDetailsPage.styled';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  // console.log('params - movieId:', movieId);
  const [movie, setMovie] = useState(null);
  // const [conf, setConf] = useState(null);

  const getMoviesById = async movieId => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=a3ec7c1621ade0b1491e66cd43b88745`
    );
    return response.data;
  };

  // const getConfig = async () => {
  //   const response = await axios.get(
  //     `https://api.themoviedb.org/3/configuration?api_key=a3ec7c1621ade0b1491e66cd43b88745`
  //   );
  //   return response.data;
  // };

  useEffect(() => {
    getMoviesById(movieId).then(setMovie);
    // getConfig().then(setConf);
  }, [movieId]);

  return (
    <MovieWrapper>
      <h2>Movie details</h2>
      {/* {console.log('movie:', movie)} */}
      {/* {console.log('Config:', conf)} */}

      {movie && (
        <MovieDetails>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
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
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </AdditionalInfoList>

      <Outlet />
    </MovieWrapper>
  );
}
