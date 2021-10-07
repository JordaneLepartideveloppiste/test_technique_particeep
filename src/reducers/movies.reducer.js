import {
  GET_MOVIES,
  LIKE_MOVIE,
  DISLIKE_MOVIE,
  DELETE_MOVIE,
} from "../actions/movies.actions";

const initialState = [];

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return action.payload;
      
    case LIKE_MOVIE:
      return state.map((movie) => {
        if (movie.id === action.payload.id) {
          return {
            ...movie,
            likes: [action.payload.likes],
          };
        }
        return movie;
      });

    case DISLIKE_MOVIE:
      return state.map((movie) => {
            if (movie.id === action.payload.id) {
                return {
                  ...movie,
                  likes: [action.payload.likes],
                  dislikes: [action.payload.dislikes],
                };
            }
            return movie;

        });       

    case DELETE_MOVIE:
      return state.filter((movie) => movie.id !== action.payload.movieId);

    default:
      return state;
  }
}
