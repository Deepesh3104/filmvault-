import { useState } from "react";

const Movietag = () => {
  const [clicked, setClicked] = useState("All Generes");

  const getActiveButton = (buttonname) => {
    setClicked(buttonname);
  };

  const getButtonClass = (buttonname) => {
    return clicked === buttonname
      ? "bg-blue-500 p-3 rounded-xl text-white font-bold h-12 w-36"
      : "bg-gray-400/50 p-3 rounded-md text-white font-bold h-12 w-36";
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
      </div>
    </>
  );
};
export default Movietag;
