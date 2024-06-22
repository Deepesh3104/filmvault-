import Moviecard from "./Moviecard";
import axios from "axios";
import { useEffect, useState } from "react";
const Movies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
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
        <Moviecard movies={movies} />
      </div>
    </div>
  );
};
export default Movies;
