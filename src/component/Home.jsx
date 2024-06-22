import NavBar from "./NavBar";
import Moives from "./Movies";
import Watchlist from "./Watchlist";
import Movies from "./Movies";
import Banner from "./Banner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Home = () => {
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
                <Moives />
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
