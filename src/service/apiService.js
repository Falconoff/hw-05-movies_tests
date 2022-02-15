import axios from 'axios';
// import PropTypes from 'prop-types';

/*
const API_KEY = '24083416-1e00017d670d2bdb130fa2702';
axios.defaults.baseURL = 'https://pixabay.com/api/';

async function fetchImgs(query, page, perPage) {
  const options = new URLSearchParams({
    key: API_KEY,
    q: query,
    page: page,
    per_page: perPage,
    image_type: 'photo',
    orientation: 'horizontal',
  });

  try {
    const response = await axios.get(`?${options}`);
    return response.data;
  } catch (error) {
    return Promise.reject(new Error(error.message));
  }
}

const api = { fetchImgs };
export default api;

fetchImgs.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
*/

/*
const getMoviesByTrend = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/week?api_key=a3ec7c1621ade0b1491e66cd43b88745'
  );
  return response.data.results;
};
*/

// строки запросов:
// https://api.themoviedb.org/3/ trending/movie/week?         api_key=000 - все в тренде недельном          // response.data.results
// https://api.themoviedb.org/3/ search/movie?query=${query}& api_key=000 - поиск всех фильмов по названию  // response.data.results
// https://api.themoviedb.org/3/ movie/${movieId}?            api_key=000 - 1 фильм по id                   // response.data
// https://api.themoviedb.org/3/ movie/${movieId}/credits?    api_key=000 - актёры в фильме                 // response.data.cast
// https://api.themoviedb.org/3/ movie/${movieId}/reviews?    api_key=000 - отзывы о фильме                 // response.data.results
/*
const API_KEY = 'a3ec7c1621ade0b1491e66cd43b88745';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

async function fetchMoviesApiData(searchParams,query) {
  const options = new URLSearchParams({
    key: API_KEY,
    q: query,
  });

  try {
    const response = await axios.get(`${searchParams}?${options}`);
    return response.data;
  } catch (error) {
    // return Promise.reject(new Error(error.message));
    console.error(error);
  } finally{}
}
export const getMoviesByTrend = () => {
  fetchMoviesApiData("trending/movie/week")
}
*/

const API_KEY = 'a3ec7c1621ade0b1491e66cd43b88745';
const BaseURL = 'https://api.themoviedb.org/3/';

export function getMoviesByName(query){
  return fetchMoviesApiData(`${BaseURL}search/movie?query=${query}&api_key=${API_KEY}`)
}

export function getMoviesByTrend(){
  return fetchMoviesApiData(`${BaseURL}trending/movie/week?api_key=${API_KEY}`)
}

export function getMovieById(movieId){
  return fetchMoviesApiData(`${BaseURL}movie/${movieId}?api_key=${API_KEY}`)
}

export function getActors(movieId){
  return fetchMoviesApiData(`${BaseURL}movie/${movieId}/credits?api_key=${API_KEY}`)
}

export function getReviews(movieId){
  return fetchMoviesApiData(`${BaseURL}movie/${movieId}/reviews?api_key=${API_KEY}`)
}

// ------- Common Fetch Function -------
export const fetchMoviesApiData = async queryString => {
  console.log('fetch start');
  console.log('queryString is: ', queryString);
  
  try {
    const response = await axios.get(
      // `${BaseURL}search/movie?query=${query}&api_key=${API_KEY}`
      `${queryString}`
    );
    console.log('fetch end');
    return response.data;
  } catch (error) {
    // return Promise.reject(new Error(error.message));
    // ============= NOTIFY =================
    console.error('Error!!! Something went wrong:', error.message);
    // console.error(error);
  } finally {
    console.log('finally fetch end');
  }
};



/*
export const getPublicationById = async id => {
  const response = await axios.get(`/publications/${id}`);
  return response.data;
};
*/