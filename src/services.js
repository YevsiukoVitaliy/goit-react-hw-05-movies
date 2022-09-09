export const CastFetch = id =>
  fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=d8a03c709b4adc0e172e0837e1f73c29&language=en-US`
  );

export const HomeFetch = () =>
  fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=d8a03c709b4adc0e172e0837e1f73c29`
  );

export const MoviesFetch = query =>
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=d8a03c709b4adc0e172e0837e1f73c29&language=en-US&query=${query}&page=1&include_adult=false`
  );

export const MovieDetailsFetch = id =>
  fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=d8a03c709b4adc0e172e0837e1f73c29&language=en-US`
  );
export const ReviewsFetch = id =>
  fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=d8a03c709b4adc0e172e0837e1f73c29&language=en-US&page=1`
  );
