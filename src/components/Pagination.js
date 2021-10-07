import { useState } from "react";
import next from "../assets/img/next.png";
import nextHover from "../assets/img/next_hover.png";
import previous from "../assets/img/previous.png";
import previousHover from "../assets/img/previous_hover.png";


const Pagination = ({movies, currentPage, setCurrentPage, cardsPerPage}) => {

    const [previousBtn, setPreviousBtn] = useState(previous);
    const [nextBtn, setNextBtn] = useState(next);

    const prevPage = currentPage > 1 && currentPage - 1;
    const lastPage = Math.ceil(movies.length / cardsPerPage);
    const nextPage = lastPage === currentPage ? currentPage : currentPage + 1;

    const handleClickPrev = (e) => {
    e.preventDefault();
    setCurrentPage(prevPage);
    };
    const handleClickNext = (e) => {
    e.preventDefault();
    setCurrentPage(nextPage);
    };

    return (
        <div className="pages">
        <button
        onClick={handleClickPrev}
        className="prev-page btn"
        onMouseEnter={() => setPreviousBtn(previousHover)}
        onMouseLeave={() => setPreviousBtn(previous)}
        disabled={currentPage === 1 && true}
      >
        <img src={previousBtn} alt="go_to_previous_page" />
      </button>
      <div className="current-page">- Page {currentPage} -</div>
      <button
        onClick={handleClickNext}
        className="next-page btn"
        onMouseEnter={() => setNextBtn(nextHover)}
        onMouseLeave={() => setNextBtn(next)}
        disabled={currentPage === lastPage && true}
      >
        <img src={nextBtn} alt="go_to_next_page" />
      </button>
      </div>
    );
};

export default Pagination;