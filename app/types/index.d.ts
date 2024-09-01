import React from "react"

export interface FlashcardFormProps {
    setTitle: (title) => void
    setBody: (body) => void
    storeData: (e: React.FormEvent<HTMLFormElement>) => void
    isLoading: boolean
    message: string
    formState: Flashcard
}

export interface Flashcard {
    title: string;
    body: string;
}