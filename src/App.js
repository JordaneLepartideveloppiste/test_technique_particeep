import "./App.scss";
import { useState } from "react";
import CardPerPage from "./components/CardPerPage";
import Pagination from "./components/Pagination";
import SortCategory from "./components/SortCategory";
import { useSelector } from "react-redux";
import Like from "./components/Like";
import logo from "./assets/img/film-reel.png"

function App() {


  const movies = useSelector((state) => state.moviesReducer);
  
  
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [moviesByCategory, setMoviesByCategory] = useState(false);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = movies.slice(indexOfFirstCard, indexOfLastCard);
  
  const categoriesList = [];
  for (let i = 0; i < movies.length; i++) {
    categoriesList.indexOf(movies[i].category) === -1 && categoriesList.push(movies[i].category);
  }
 

  const selectedCards = [];
  for (let i = 0; i < movies.length; i++) {
    movies[i].category === selectedCategory &&
      selectedCards.push(movies[i]);
  }

  
  return (
    <div className="App">
      <div className="header">
        <img id="logo" src={logo} alt="logo" />
        <h1>My To-See-List</h1>
      </div>
      <div className="sub-header">
        <SortCategory
          categoriesList={categoriesList}
          moviesByCategory={moviesByCategory}
          setMoviesByCategory={setMoviesByCategory}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <CardPerPage
          movies={movies}
          cardsPerPage={cardsPerPage}
          setCardsPerPage={setCardsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <div className="movies-list">
        <div className="main-content">
          {moviesByCategory
            ? selectedCards.map((movie) => {
                return (
                  <div className="card-movie" key={movie.id}>
                    <div className="card-movie-picture">
                      <img src={movie.picture} alt="movie_picture" />
                      <h6>{movie.category}</h6>
                    </div>
                    <div className="card-movie-content">
                      <h3>{movie.title}</h3>
                      <Like movie={movie} />
                    </div>
                  </div>
                );
              })
            : currentCards.map((movie) => {
                return (
                  <div className="card-movie" key={movie.id}>
                    <div className="card-movie-picture">
                      <img src={movie.picture} alt="movie_picture" />
                      <h6>{movie.category}</h6>
                    </div>
                    <div className="card-movie-content">
                      <h3>{movie.title}</h3>
                      <Like movie={movie} />
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
      <Pagination
        movies={movies}
        cardsPerPage={cardsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
