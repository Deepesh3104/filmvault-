import { FcAudioFile } from "react-icons/fc";
import { Link } from "react-router-dom";
const NavBar = () => {
  const Clicked = () => {
    console.log("Watch List clicked");
  };
  return (
    <div className="flex items-center space-x-8 border p-3 ">
      <FcAudioFile size={40} className="rounded-full hover:cursor-pointer" />
      <Link
        to="/"
        className="text-blue-600 font-bold text-xl hover:bg-gray-200 p-2 rounded-md font-serif"
      >
        Home
      </Link>
      <Link
        onClick={Clicked}
        to="/watchlist"
        className="text-blue-600 font-bold text-xl hover:bg-gray-200  p-2 rounded-md font-serif"
      >
        Watchlist
      </Link>
    </div>
  );
};
export default NavBar;
