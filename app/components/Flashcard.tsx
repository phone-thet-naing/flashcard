import { relative } from "path";
import React, { Fragment, useState } from "react";

type Face = "front" | "back";

const Flashcard = ({ title, body }: { title: string; body: string }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className={`card-container`}>
        <span onClick={() => setShowMenu(!showMenu)}>...</span>
        <div className={`flex flex-col ${showMenu ? "" : "hidden"}`}>
          <button className="text-sm text-left hover:bg-slate-700 hover:text-white">
            Delete
          </button>
          <button className="text-sm text-left hover:bg-slate-700 hover:text-white">
            Cancel
          </button>
        </div>
        <div
          className={`card ${!isFlipped ? "flipped" : ""}`}
          onClick={handleFlip}
        >
          <div className="card-front">
            <h1 className="font-bold">{title}</h1>
            <p className="text-sm">{body}</p>
          </div>
          <div
            className="card-back"
            style={{
              transform: "rotateY(180deg)",
            }}
          >
            <h1 className="font-bold">{title}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flashcard;
