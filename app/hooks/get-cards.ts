import { useEffect, useState } from "react";
import { Flashcard } from "../types";

const getStoredCards = () => {
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    
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
};

export default getStoredCards