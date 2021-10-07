
import { movies$ } from "../movies";

export const GET_MOVIES = "GET_MOVIES";
export const LIKE_MOVIE = "LIKE_MOVIE";
export const DISLIKE_MOVIE = "DISLIKE_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";

export const getMovies = () => {
    return(dispatch) => {
        return movies$
        .then((res) => {
            
            dispatch({type: GET_MOVIES, payload: res})
        })
        .catch((err) => console.log(err))
    }
}

export const likeMovie = (data) => {
    return(dispatch) => {
        return movies$
        .then((res) => {
            
            dispatch({type: LIKE_MOVIE, payload: {...data}})
        })
        .catch((err) => console.log(err))
    }
}

export const dislikeMovie = (data) => {
    return(dispatch) => {
        return movies$
        .then((res) => {
            
            dispatch({type: DISLIKE_MOVIE, payload: {...data}})
        })
        .catch((err) => console.log(err))
    }
}

export const deleteMovie = (movieId) => {
    return(dispatch) => {
        return movies$
        .then((res) => {
            
            dispatch({type: DELETE_MOVIE, payload: {movieId}})
        })
        .catch((err) => console.log(err))
    }
}