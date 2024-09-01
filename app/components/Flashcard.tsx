import React, { Fragment, useRef, useState } from "react";

type Face = "front" | "back";

const Flashcard = ({
  id,
  title,
  body,
  deleteCard,
}: {
  id: number;
  title: string;
  body: string;
  deleteCard: (id: number) => void;
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState(false);
  const [hoverState, setHoverState] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className={`card-container`} onMouseOver={() => setHoverState(true)}>
        <span className="" onClick={() => setShowMenu(!showMenu)}>...</span>
        <div className={`flex flex-col ${showMenu ? "" : "hidden"}`}>
          <button
            onClick={() => deleteCard(id)}
            className="text-sm text-left hover:bg-slate-700 hover:text-white"
          >
            Delete
          </button>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-sm text-left hover:bg-slate-700 hover:text-white"
          >
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
