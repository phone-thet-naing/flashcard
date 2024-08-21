"use client";

import React from "react";
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
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

  const storeData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.trim() !== "" && body.trim() !== "") {
      const form = e.target as HTMLFormElement;
      let cards = [];

      const title = form.elements.namedItem("title") as HTMLInputElement;
      const body = form.elements.namedItem("body") as HTMLInputElement;

      const cardObject = { title: title.value, body: body.value };
      setFlashcards([...flashcards, cardObject]);
      console.log(flashcards);
      cards = [...flashcards, cardObject];
      const jsonedCards = JSON.stringify(cards);

      console.log("Normal cards: " + cards);
      console.log("JSON object: " + jsonedCards);

      // Store cards in local storage (later use a db)
      localStorage.setItem("cards", jsonedCards);

      setTitle("");
      setBody("");
    }
  };

  useEffect(() => {
    // Get cards stored in local storage
    const cards = localStorage.getItem("cards");

    if (cards) {
      console.log(JSON.parse(cards));
      setFlashcards(JSON.parse(cards));
      setIsLoading(false);
    } else {
      setMessage("No cards found");
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <FlashcardForm
        title={title}
        body={body}
        setTitle={setTitle}
        setBody={setBody}
        storeData={storeData}
        isLoading={isLoading}
        message={message}
      />

      {!isLoading && !message && (
        <div className="flex items-center justify-center  w-5/6 overflow-hidden flex-wrap">
          {flashcards.map((card, idx) => (
            <span key={idx}>
              <Flashcard title={card.title} body={card.body} />
            </span>
          ))}

          {/* <Popup /> */}
        </div>
      )}
    </>
  );
};

export default FlashcardContainer;
