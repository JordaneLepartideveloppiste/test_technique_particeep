
import { useDispatch } from "react-redux";
import { dislikeMovie, likeMovie, deleteMovie } from "../actions/movies.actions";
import "../assets/styles/scss/Like.scss"
import { useState } from "react";
import like from '../assets/img/like.png'
import like_hover from '../assets/img/like_hover.png'
import dislike from '../assets/img/dislike.png'
import dislike_hover from '../assets/img/dislike_hover.png'
import trash from '../assets/img/trash.png'
import trash_hover from '../assets/img/trash_hover.png'


const Like = ({movie}) => {
  const dispatch = useDispatch();

  const [toggleBtn, setToggleBtn] = useState(false);
  const [likeBtn, setLikeBtn] = useState(like);
  const [dislikeBtn, setDislikeBtn] = useState(dislike);
  const [trashBtn, setTrashBtn] = useState(trash);
    
  const totalCount = movie.likes + movie.dislikes;
  const [likePart, setLikePart] = useState((movie.likes * 100) / totalCount);
  const [dislikePart, setDislikePart] = useState((movie.dislikes * 100) / totalCount);

    const handleLike = () => {
        const movieData = {
            id: movie.id,
            title: movie.title,
            category: movie.category,
            likes: ++movie.likes,
            dislikes: movie.dislikes,
        }
        dispatch(likeMovie(movieData));
        setToggleBtn(!toggleBtn);
        const newTotalCount = movieData.likes + movieData.dislikes;
        setLikePart((movieData.likes * 100) / newTotalCount);
        setDislikePart((movieData.dislikes * 100) / newTotalCount);
    }
    const handleDisLike = () => {
        const movieData = {
            id: movie.id,
            title: movie.title,
            category: movie.category,
            likes: --movie.likes,
            dislikes: ++movie.dislikes,
        }
        dispatch(dislikeMovie(movieData));
        setToggleBtn(!toggleBtn);
        const newTotalCount = movieData.likes + movieData.dislikes;
        setLikePart((movieData.likes * 100) / newTotalCount);
        setDislikePart((movieData.dislikes * 100) / newTotalCount);
    }
    return (
      <div className="actions-part">
        <div className="feelings-part">
          <div className="like-dislike-counts">
            <div className="like-count">
              {movie.likes}
              <span>Likes</span>
            </div>
            <div className="dislike-count">
              <span>Dislikes</span>
              {movie.dislikes}
            </div>
          </div>

          <div className="counter-bar">
            <div
              className={
                movie.dislikes === 0 ? "like-part complete" : "like-part"
              }
              style={{ width: likePart + "%" }}
            >
              <span>1</span>
            </div>
            <div className="dislike-part" style={{ width: dislikePart + "%" }}>
              <span>0</span>
            </div>
          </div>
          <div className="like-dislike-btn">
            <button
              className="delete-movie-btn btn"
              onMouseOver={() => setTrashBtn(trash_hover)}
              onMouseLeave={() => setTrashBtn(trash)}
              onClick={() => dispatch(deleteMovie(movie.id))}
            >
              <img src={trashBtn} alt="trash-icon" />
            </button>
            {!toggleBtn ? (
              <button
                onClick={handleLike}
                className="like-btn btn"
                onMouseOver={() => setLikeBtn(like_hover)}
                onMouseLeave={() => setLikeBtn(like)}
              >
                <img src={likeBtn} alt="like-icon" />
              </button>
            ) : (
              <button
                className="dislike-btn btn"
                onClick={handleDisLike}
                onMouseOver={() => setDislikeBtn(dislike_hover)}
                onMouseLeave={() => setDislikeBtn(dislike)}
              >
                <img src={dislikeBtn} alt="dislike-icon" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
};

export default Like;