"use client";

import React, { Fragment, useCallback } from "react";
import { useState, useEffect } from "react";
import Flashcard from "./Flashcard";
import FlashcardForm from "./FlashcardForm";

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

  const handleDelete = (id: number) => {
    const remainingCards = flashcards.filter((_, index) => index !== id);
    setFlashcards(remainingCards);
    localStorage.setItem("cards", JSON.stringify(remainingCards));
  };

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
    } else {
      setMessage("No cards found");
    }
  }, [flashcards]);

  return (
    <>
      {/* Form to create flashcard */}
      <FlashcardForm
        formState={formState}
        setTitle={(value) =>
          setFormState((prev) => ({ ...prev, title: value }))
        }
        setBody={(value) => setFormState((prev) => ({ ...prev, body: value }))}
        storeData={storeData}
        isLoading={isLoading}
        message={message}
      />

      {/* Flashcard list */}
      {!isLoading && !message && flashcards.length > 0 && (
        <FlashcardList flashcards={flashcards} handleDelete={handleDelete} />
      )}
    </>
  );
};

const FlashcardList = ({
  flashcards,
  handleDelete,
}: {
  flashcards: Flashcard[];
  handleDelete: (id: number) => void;
}) => {
  return (
    <div className="flex items-center justify-center gap-4 w-5/6 overflow-hidden flex-wrap">
      {flashcards.map(({ title, body }, idx) => (
        <Fragment key={idx}>
          <Flashcard
            title={title}
            body={body}
            id={idx}
            deleteCard={handleDelete}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default FlashcardContainer;
