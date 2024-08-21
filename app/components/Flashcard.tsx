import React, { useState } from "react";

type Face = "front" | "back";

const Flashcard = ({ title, body }: { title: string; body: string }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className={`card-container`} onClick={handleFlip}>
        <div className={`card ${!isFlipped ? "flipped" : ""}`}>
          <div
            // className={"bg-slate-200 text-black absolute w-full h-full"}
            className="card-front"
          >
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
