import React from "react";
import { FlashcardFormProps } from "../types";

const FlashcardForm = ({
  formState,
  setTitle,
  setBody,
  storeData,
  isLoading,
  message,
}: FlashcardFormProps) => {
  return (
    <>
      <form
        className="border border-gray-900 rounded-lg p-2.5 min-w-80"
        onSubmit={(e) => storeData(e)}
      >
        <input
          className="text-sm block p-2.5 text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-lg focus:outline-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2 w-full"
          placeholder="Title"
          name="title"
          value={formState.title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <textarea
          name="body"
          placeholder="Body"
          rows={4}
          className="text-sm block p-2.5 text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-lg focus:outline-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full mb-2"
          value={formState.body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <input
          type="submit"
          value="Create"
          className="text-xs border border-gray-500 rounded-lg py-2 px-4 hover:bg-gray-900 hover:text-white cursor-pointer"
        />
      </form>

      <small>{isLoading && "Loading..."}</small>

      <small>{message}</small>
    </>
  );
};

export default FlashcardForm;
