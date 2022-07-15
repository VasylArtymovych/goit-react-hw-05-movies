import PropTypes from 'prop-types';
const axios = require('axios').default;

const baseURL = 'https://api.themoviedb.org/3/';
const api_key = '9c009c00402fb866baf05bd346a2d01d';

export const fetchTrending = async () => {
  const response = await axios.get(
    baseURL +
      'trending/all/day?' +
      new URLSearchParams({
        api_key,
      })
  );

  const data = response.data;
  return data.results;
};

export const searchMovie = async query => {
  const response = await axios.get(
    baseURL +
      `search/movie?` +
      new URLSearchParams({
        api_key,
        query,
        language: 'en-US',
        page: 1,
        include_adult: false,
      })
  );

  const data = response.data;
  return data.results;
};

export const fetchMovieById = async id => {
  const response = await axios.get(
    baseURL +
      `movie/${id}?` +
      new URLSearchParams({
        api_key,
        language: 'en-US',
      })
  );

  const data = response.data;
  return data;
};

export const fetchMovieCast = async id => {
  const response = await axios.get(
    baseURL +
      `movie/${id}/credits?` +
      new URLSearchParams({
        api_key,
        language: 'en-US',
      })
  );

  const data = response.data;
  return data;
};

export const fetchMovieReviews = async id => {
  const response = await axios.get(
    baseURL +
      `movie/${id}/reviews?` +
      new URLSearchParams({
        api_key,
        language: 'en-US',
        page: 1,
      })
  );

  const data = response.data;
  return data;
};

searchMovie.propTypes = {
  query: PropTypes.string.isRequired,
};

fetchMovieById.propTypes = {
  id: PropTypes.string.isRequired,
};

fetchMovieCast.propTypes = {
  id: PropTypes.string.isRequired,
};

fetchMovieReviews.propTypes = {
  id: PropTypes.string.isRequired,
};
