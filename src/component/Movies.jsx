import Moviecard from "./Moviecard";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import { useEffect, useState } from "react";
const Movies = ({ handlewatchlist, deletewatchlist, watchlist }) => {
  const [page, setPage] = useState(1);
  const [clicked, setClicked] = useState(false);
  const [textcolor, setTextcolor] = useState("text-blue-600");
  const [movies, setMovies] = useState([]);

  const handledleftArrow = () => {
    // setClicked(true);
    setPage(page > 1 ? page - 1 : 1);
    setTextcolor(textcolor === "text-black" ? "text-white" : "text-black");
  };
  const handleRightArrow = () => {
    // setClicked(true);
    setPage(page + 1);
    setTextcolor(textcolor === "text-black" ? "text-white" : "text-black");
  };

  useEffect(() => {
    const FetchPopularmovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=4c7f85723f75dacb5b6f981762968ffa&language=en-US&page=${page}`,
        );
        // console.log(response.data.results);
        setMovies(response.data.results);
        response.data.results.map((movie) => console.log(movie.original_title));
      } catch {
        console.log("Error in Finding the data from the api");
      }
    };
    FetchPopularmovies();
  }, [page]);
  return (
    <div>
      <div className="p-6 text-center text-2xl font-bold font-serif">
        Trending Movies
      </div>
      <div className="">
        <Moviecard
          handlewatchlist={handlewatchlist}
          deletewatchlist={deletewatchlist}
          movies={movies}
          watchlist={watchlist}
        />
      </div>
      <div className="gap-8 mb-4 flex items-center bg-gray-900/60 p-4 justify-center cursor-pointer">
        <FaArrowLeft onClick={handledleftArrow} values={page} />
        <div className="font-bold">{page}</div>
        <FaArrowRight onClick={handleRightArrow} values={page} />
      </div>
    </div>
  );
};
export default Movies;
