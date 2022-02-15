import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

import { getMoviesByTrend } from '../../service/apiService';

import { ListItem } from './HomePage.styled';

export default function HomePage() {
  const [moviesArr, setMoviesArr] = useState([]);

  /*
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';
  const API_KEY = 'a3ec7c1621ade0b1491e66cd43b88745';

  const getApiData = query => {
    // showSpiner();
    // let langs = getFromLocalStorage('lang');
    return axios
      .get(
        `${query}&api_key=${API_KEY}&append_to_response=videos&language=${langs}`
      )
      .then(response => {
        return response.data;
      })
      .catch(onFetchError);
    // .finally(hideSpiner);

    // https://api.themoviedb.org/3/trending/movie/week?api_key=a3ec7c1621ade0b1491e66cd43b88745
  };
*/
  /*
// local works
  const getMoviesByTrend = async () => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=a3ec7c1621ade0b1491e66cd43b88745'
    );
    return response.data.results;
  };
*/

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
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </ListItem>
          );
        })}
      </ol>
    </div>
  );
}
