// import { useEffect, useState } from 'react';
import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import axios from 'axios';

import { ListItem } from './MoviesPage.styled';

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  // const [inputValue, setInputValue] = useState('');
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentQuery = searchParams.get('query');

  // console.log('searchParams.get("query"):', searchParams.get('query'));

  console.log('location MoviesPage', location);

  useEffect(() => {
    if (!currentQuery) {
      console.log('=== No currentQuery');
      // setSearchParams({ query: 123321 });
    } else {
      console.log('=== Exist currentQuery');
      getMoviesById(currentQuery).then(setMovies);
    }
  }, [currentQuery]);

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

  const getMoviesById = async query => {
    // console.log('fetch start');

    // console.log('query is: ', query);
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=a3ec7c1621ade0b1491e66cd43b88745`
    );
    // return response.data.results;
    // console.log('fetch end');

    return response.data.results;
  };

  // const onChange = evt => {
  //   setInputValue(evt.target.value.toLowerCase());
  // };

  const onSubmit = evt => {
    evt.preventDefault();
    const q = evt.currentTarget.elements.inputValue.value;
    console.log('onSubmit  = ', q);

    // for empty query
    if (q.trim() === '') {
      // toast.warn('Please, enter your query');
      console.log('Pls, enter correct query!');
      return;
    }
    console.log('I had correct query:', q);

    // save inputValue in URL
    // setSearchParams({ query: inputValue });
    setSearchParams({ query: q });

    // getMoviesById(inputValue).then(setMovies);
    // reset Form
    // setInputValue('');
  };

  // useEffect(() => {
  //   console.log('useEffect detected!!! getMoviesById start');
  //   getMoviesById().then(setMovies);
  //   console.log('useEffect detected!!! getMoviesById end');
  // }, []);
  // console.log('movies:', movies);

  return (
    <div>
      <h1>MoviesPage</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="inputValue"
          // value={inputValue}
          // onChange={onChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>

      {movies && (
        <>
          <ul>
            {movies.map(movie => {
              return (
                <ListItem key={movie.id}>
                  <Link to={`${movie.id}`} state={{ from: location }}>
                    {movie.title}
                  </Link>
                </ListItem>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
