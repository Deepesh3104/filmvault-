import { useState } from "react";
import Movietag from "./Movietag";
const Watchlist = ({ watchlist, deletewatchlist }) => {
  const [search, setSearch] = useState("");
  const handlesearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <Movietag />
      <div className="flex p-4 justify-center mt-6">
        <input
          onChange={handlesearch}
          className="bg-gray-300 outline-none rounded-lg text-start p-3 w-[200px] "
          placeholder="Search for the movies"
          value={search}
        />
      </div>
      <div className="border border-gray-200 rounded-lg m-8">
        <table className="w-full text-gray-500 text-center ">
          <thead className="border-b-2 ">
            <tr>
              <th className="p-4 ">Name</th>
              <th className="p-4">Rating</th>
              <th className="p-4">Popularity</th>
              <th className="p-4">Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movie) => {
                return movie.original_title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movie, index) => (
                <tr key={index} className="border-b-2">
                  <td className="flex items-center">
                    <img
                      className="h-[15vh] w-[20vh] p-4"
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt="ladki"
                    />
                    <div className="ml-4 font-bold">{movie.original_title}</div>
                  </td>
                  <td>{movie.vote_average}</td>
                  <td>{movie.popularity}</td>
                  <td>Action</td>
                  <td>
                    <button
                      onClick={() => deletewatchlist(movie)}
                      className="text-red-500 underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Watchlist;
