import "./App.css";
import api from "./api/axiosConfig";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/home/Home";
import Trailer from "./components/tailer/Trailer";
import Reviews from "./components/reviews/Reviews";
import Header from "./components/header/Header";
import NotFound from "./components/notFound/NotFound";

function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");

      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);

      const singleMovie = response.data;

      setMovie(singleMovie);

      setReviews(singleMovie.reviewIds);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home movies={movies} />}></Route>
            <Route path="/Trailer/:ytTrailerId" element={<Trailer />}></Route>
            <Route
              path="/Reviews/:movieId"
              element={
                <Reviews
                  getMovieData={getMovieData}
                  movie={movie}
                  reviews={reviews}
                  setReviews={setReviews}
                />
              }
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
