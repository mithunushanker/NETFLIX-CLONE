//api 815dc76237d3517692bbd2bcdab99efe

const API_KEY = '815dc76237d3517692bbd2bcdab99efe';

const requests = {
	fetchTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=815dc76237d3517692bbd2bcdab99efe`,
	fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=815dc76237d3517692bbd2bcdab99efe&language=en-US&page=1`,
	fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=815dc76237d3517692bbd2bcdab99efe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`,
	fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=815dc76237d3517692bbd2bcdab99efe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`,
	fetchHorrorMovies: `
	https://api.themoviedb.org/3/discover/movie?api_key=815dc76237d3517692bbd2bcdab99efe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate`,
	fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=815dc76237d3517692bbd2bcdab99efe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_watch_monetization_types=flatrate`,
	fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=815dc76237d3517692bbd2bcdab99efe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99&with_watch_monetization_types=flatrate`,
	fetchAnimation: 'https://api.themoviedb.org/3/discover/movie?api_key=815dc76237d3517692bbd2bcdab99efe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate',
	fetchSciencefiction: 'https://api.themoviedb.org/3/discover/movie?api_key=815dc76237d3517692bbd2bcdab99efe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878&with_watch_monetization_types=flatrate',
	fetchThriller: 'https://api.themoviedb.org/3/discover/movie?api_key=815dc76237d3517692bbd2bcdab99efe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53&with_watch_monetization_types=flatrate'

};

export default requests;