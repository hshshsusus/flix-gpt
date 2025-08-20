export const API_Options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer'+process.env.REACT_APP_TMDB_API_KEY,
  }
};
// console.log("key", process.env.REACT_APP_TMDB_API_KEY)
export const Poster_PATH = "https://image.tmdb.org/t/p/w500";

export const BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/9a924b36-8e85-4f2a-baac-ce2872ee8163/web/IN-en-20250714-TRIFECTA-perspective_dfbf09de-9182-41e1-a9c6-cd7b1a6d84d6_small.jpg";

export const API_KEY = process.env.REACT_APP_AI_API_KEY;