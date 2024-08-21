import React from "react"

export interface FlashcardFormProps {
    title: string
    body: string
    setTitle: (title) => void
    setBody: (body) => void 
    storeData: (e: React.FormEvent<HTMLFormElement>) => void 
    isLoading: boolean 
    message: string 
}