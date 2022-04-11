// import { useEffect, useState } from 'react';
import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
// import axios from 'axios';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import { getMoviesByName } from '../../service/apiService';

import { ListItem } from './MoviesPage.styled';

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  // const [inputValue, setInputValue] = useState('');
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentQuery = searchParams.get('query');

  console.log('searchParams.get("query"):', searchParams.get('query'));

  // console.log('location MoviesPage', location);

  useEffect(() => {
    if (!currentQuery) {
      // ==== NOTIFY ====
      console.log('=== No currentQuery, nothing to fetch');
      // toast.warn('Wow so easy !');
    } else {
      console.log(
        '=== Exist currentQuery:',
        currentQuery,
        ', lets fetch movie'
      );
      // fetch
      getMoviesByName(currentQuery)
        .then(response => response.results)
        .then(setMovies);
    }
  }, [currentQuery]);

  useEffect(() => {
    if (movies && movies.length === 0) {
      toast.warn('Nothing was found!');
    }
  }, [movies]);

  const onSubmit = evt => {
    evt.preventDefault();
    const q = evt.currentTarget.elements.inputValue.value;
    console.log('onSubmit  = ', q);

    // for empty query
    if (q.trim() === '') {
      toast.warn('Please, enter your query');
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

  console.log('Movies Array from State:', movies);

  return (
    <div>
      {/* <h1>MoviesPage</h1> */}

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
          {movies.length > 0 && (
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
          )}
          {movies.length === 0 && <p>Nothing was found</p>}
        </>
      )}
    </div>
  );
}
