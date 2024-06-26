import { useState } from "react";
const Moviecard = ({ movies, handlewatchlist, deletewatchlist, watchlist }) => {
  const [search, setSearch] = useState("");
  const handleClick = (movie) => {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movie.id) {
        return true;
      }
    }
    return false;
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <div className="p-4 flex justify-center mb-6">
        <input
          onChange={handleSearch}
          placeholder="Search Your Movie"
          className="outline-none bg-gray-300 p-3 w-[250px] rounded-lg"
          value={search}
        />
      </div>
      <div className="p-4 hover:p-4 flex flex-wrap justify-around gap-8">
        {movies
          .filter((movie) => {
            return movie.original_title
              .toLowerCase()
              .includes(search.toLowerCase());
          })
          .map((movie, index) => (
            <div
              key={index}
              className="relative h-[40vh] w-[200px] bg-center bg-cover flex items-end hover:scale-110 duration-300 hover:cursor-pointer rounded-xl"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
              }}
            >
              {handleClick(movie) ? (
                <div
                  onClick={() => deletewatchlist(movie)}
                  className="absolute top-2 right-2 bg-black bg-opacity-50 p-1 rounded-full"
                >
                  ❌
                </div>
              ) : (
                <div>
                  <div
                    onClick={() => handlewatchlist(movie)}
                    className="absolute top-2 right-2 bg-black bg-opacity-50 p-1 rounded-full"
                  >
                    😍
                  </div>
                </div>
              )}

              <div className="text-white text-lg bg-gray-900/60 w-full text-center p-2 font-serif">
                {movie.original_title}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Moviecard;
