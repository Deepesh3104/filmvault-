const Completemovie = ()=>{
  return(
    <>
      <div>
        <div className="p-6 text-center text-2xl font-bold font-serif">
          Trending Movies
        </div>
        <div className="">
          <Moviecard movies={movies} />
        </div>
        <div className="gap-8 mb-4 flex items-center bg-gray-900/60 p-4 justify-center cursor-pointer">
          <FaArrowLeft onClick={handledleftArrow} values={page} />
          <div className="font-bold">{page}</div>
          <FaArrowRight onClick={handleRightArrow} values={page} />
        </div>
      </div>
    </>
  )
}
export default Completemovie