import avenger from "../assets/avenger.jpg";

const Banner = () => {
  return (
    <div
      className=" h-[20vh] md:h-[75vh] bg-cover bg-center bg-no-repeat flex items-end"
      style={{
        backgroundImage: `url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)`,
      }}
    >
      <div className="text-white text-2xl bg-gray-900/60 w-full text-center p-4 font-serif">
        Deepesh
      </div>
    </div>
  );
};

export default Banner;
