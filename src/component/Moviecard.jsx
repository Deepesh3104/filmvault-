const Moviecard = ({ movies }) => {
  return (
    <div className="p-4 hover:p-4 flex flex-wrap justify-around gap-8">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="h-[40vh] w-[200px] bg-center bg-cover  flex items-end hover:scale-110 duration-300 hover:cursor-pointer rounded-xl   "
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
          }}
        >
          <div className="text-white text-lg bg-gray-900/60 w-full text-center p-2 font-serif">
            {movie.original_title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Moviecard;
