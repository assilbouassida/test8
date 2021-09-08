import { moviedata } from "./data";
import "./App.css";
import { useState } from "react";
import Filter from "./Components/Filter/Filter";
import MovieList from "./Components/MovieList/MovieList";
import AddMovie from "./Components/AddMovie/AddMovie";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [movies, setMovies] = useState(moviedata);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0);

  const ratingChanged = (newRating) => {
    // console.log(newRating);
    setRate(newRating);
  };

  const handleChange = (e) => {
    setTitle(
      e.target.value
        .split(" ")
        .map((el) => el.trim() + " ")
        .join("")
    );
  };
  const handleAdd = (newMovie) => {
    setMovies([...movies,newMovie])
  }
  

  return (
    <div className="App">
      <Filter handleChange={handleChange} title={title} ratingChanged={ratingChanged} rate={rate} />
      <MovieList
        movies={movies.filter((movie) =>
          movie.title.toUpperCase().includes(title.toUpperCase().trim()) && movie.rate >=rate
        )}
      />
      <AddMovie handleAdd={handleAdd} />
    </div>
  );
}

export default App;
