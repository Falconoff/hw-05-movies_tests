import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

import { getMoviesByTrend } from '../../service/apiService';

import { ListItem, MovieLink } from './HomePage.styled';

export default function HomePage() {
  const [moviesArr, setMoviesArr] = useState([]);

  useEffect(() => {
    getMoviesByTrend()
      .then(response => response.results)
      .then(setMoviesArr);
  }, []);

  return (
    <div>
      <h2>HomePage. Movies in trend:</h2>
      {/* {console.log(moviesArr)} */}
      <ol>
        {moviesArr.map(movie => {
          return (
            <ListItem key={movie.id}>
              <MovieLink to={`movies/${movie.id}`}>{movie.title}</MovieLink>
            </ListItem>
          );
        })}
      </ol>
    </div>
  );
}
