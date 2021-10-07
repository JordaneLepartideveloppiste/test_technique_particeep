import { useState } from "react";
import filter from "../assets/img/filter.png";
import filter_hover from "../assets/img/filter_hover.png";
import refresh from "../assets/img/refresh.png";
import refresh_hover from "../assets/img/refresh_hover.png";


const SortCategory = ({ categoriesList, moviesByCategory, setMoviesByCategory, selectedCategory, setSelectedCategory }) => {
  const [filterBtn, setFilterBtn] = useState(filter);
  const [refreshBtn, setRefreshBtn] = useState(refresh);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setMoviesByCategory(true);
  };

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleClick = () => {
      setMoviesByCategory(false);
      setSelectedCategory("");
  }

  return (
    <>
      <form id="select-form" onSubmit={handleSubmit}>
        <select
          id="select-input"
          value={selectedCategory}
          onChange={handleChange}
        >
          <option value="" disabled selected>
            Search by category
          </option>
          {categoriesList.map((category, index) => {
            return (
              <option value={category} key={index}>
                {category}
              </option>
            );
          })}
        </select>
        {moviesByCategory ? (
          <>
            <label
            className="label-refresh"
              onClick={handleClick}
              onMouseEnter={() => {
                setRefreshBtn(refresh_hover);
              }}
              onMouseLeave={() => {
                setRefreshBtn(refresh);
              }}
            >
              <img src={refreshBtn} alt="refresh" />
              <input className="form-btn refresh" type="button" />
            </label>
            <input className="form-btn filter" type="submit" value="Filter" />
          </>
        ) : (
          <label
          className="label-filter"
            onMouseEnter={() => {
              setFilterBtn(filter_hover);
            }}
            onMouseLeave={() => {
              setFilterBtn(filter);
            }}
          >
            <img src={filterBtn} alt="filter" />
            <input className="form-btn alone" type="submit" value="" />
          </label>
        )}
      </form>
    </>
  );
};

export default SortCategory;