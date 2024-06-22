import { useState } from "react";

const Movietag = () => {
  const [clicked, setClicked] = useState(null);

  const getActiveButton = (buttonname) => {
    setClicked(buttonname);
  };

  const getButtonClass = (buttonname) => {
    return clicked === buttonname
      ? "bg-blue-500 p-3 rounded-md text-white font-bold h-12 w-36"
      : "bg-gray-300 p-3 rounded-md text-white font-bold h-12 w-36";
    setClicked();
  };
  return (
    <>
      <div>
        <div className="flex p-4 justify-center gap-8 mt-8">
          <button
            className={getButtonClass("All Generes")}
            onClick={() => getActiveButton("All Generes")}
          >
            All Generes
          </button>
          <button
            className={getButtonClass("Action")}
            onClick={() => getActiveButton("Action")}
          >
            Action
          </button>
          <button
            className={getButtonClass("Crimes")}
            onClick={() => getActiveButton("Crimes")}
          >
            Crimes
          </button>
        </div>
        <div className="flex p-4 justify-center mt-6">
          <input
            className="bg-gray-300 outline-none rounded-md text-start p-3 w-[200px] "
            placeholder="Search for the movies"
          />
        </div>
      </div>
    </>
  );
};
export default Movietag;
