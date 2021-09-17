// Should be stored in {process.env.API_KEY}
const API_KEY = "4fedda73b271d8e451c2ed88aca9374c";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-Us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
  fetchCommedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
  fetchRommanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`
};

export default requests;
