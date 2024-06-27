import NavBar from "./NavBar";
import Movies from "./Movies";
import { useEffect, useState } from "react";
import Watchlist from "./Watchlist";
import Banner from "./Banner";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = () => {
  const [watchlist, setWatchlist] = useState([]);

  const handlewatchlist = (movie) => {
    // if (!watchlist.some((item) => item.id === movie.id)) {
    //   setWatchlist((prevMovies) => [...prevMovies, movie]);

    //   console.log(watchlist);
    // }
    // or
    let mowatch = [...watchlist, movie];
    // save the data into locol storage of browser so that during it will not removed
    localStorage.setItem("moviesApp", JSON.stringify(mowatch));
    setWatchlist(mowatch);
    // console.log(mowatch);
  };
  const deletewatchlist = (movie) => {
    setWatchlist((prevWatch) =>
      prevWatch.filter((item) => item.id !== movie.id),
    );
  };
  useEffect(() => {
    let localStoragemov = localStorage.getItem("moviesApp");
    if (!localStoragemov) {
      return;
    }
    setWatchlist(JSON.parse(localStoragemov));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  handlewatchlist={handlewatchlist}
                  deletewatchlist={deletewatchlist}
                  watchlist={watchlist}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <Watchlist
                watchlist={watchlist}
                deletewatchlist={deletewatchlist}
                setWatchlist={setWatchlist}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
