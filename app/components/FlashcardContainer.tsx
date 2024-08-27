"use client";

import React, { Fragment, useCallback } from "react";
import { useState, useEffect } from "react";
import Flashcard from "./Flashcard";
import FlashcardForm from "./FlashcardForm";
import Popup from "./Popup";

interface Flashcard {
  title: string;
  body: string;
}

const FlashcardContainer = () => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [formState, setFormState] = useState({ title: "", body: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

  const storeData = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { title, body } = formState;

      if (title.trimEnd() && body.trim()) {
        const newCard = { title, body };
        const updatedFlashcards = [...flashcards, newCard];

        setFlashcards(updatedFlashcards);
        // Store flashcards in local storage
        localStorage.setItem("cards", JSON.stringify(updatedFlashcards));

        // Clean formState
        setFormState({ title: "", body: "" });
      }
    },
    [formState, flashcards]
  );

  useEffect(() => {
    // Get cards stored in local storage
    const storedCards = localStorage.getItem("cards");

    if (storedCards) {
      setFlashcards(JSON.parse(storedCards));
    } else {
      setMessage("No cards found");
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (flashcards.length > 0) {
      setMessage("");
    }
  }, [flashcards]);

  return (
    <>
      <FlashcardForm
        title={formState.title}
        body={formState.body}
        setTitle={(value) =>
          setFormState((prev) => ({ ...prev, title: value }))
        }
        setBody={(value) => setFormState((prev) => ({ ...prev, body: value }))}
        storeData={storeData}
        isLoading={isLoading}
        message={message}
      />

      {!isLoading && !message && flashcards.length > 0 && (
        <div className="flex items-center justify-center gap-4 w-5/6 overflow-hidden flex-wrap">
          {flashcards.map((card, idx) => (
            <Fragment key={idx}>
              <Flashcard title={card.title} body={card.body} />
            </Fragment>
          ))}

          {/* <Popup /> */}
        </div>
      )}
    </>
  );
};

export default FlashcardContainer;
