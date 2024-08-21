import React from "react";

const Popup = () => {
  return (
    <div className="absolute top-0 bg-gray-950 w-full h-full bg-opacity-35">
      <div className="relative w-96 h-4/5 mx-auto my-10 bg-gray-600 opacity-100 z-10 flex flex-col items-center justify-center rounded-lg">
      <span className="absolute right-2 top-1">Quit</span>
        <h1>Hi Mom</h1>
      </div>
    </div>
  );
};

export default Popup;
