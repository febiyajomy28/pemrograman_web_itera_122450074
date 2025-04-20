import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  // Menggunakan useLocalStorage untuk menyimpan data buku
  const [books, setBooks] = useLocalStorage("books", []);

  // Fungsi untuk menambah buku baru dengan ID unik
  const addBook = (book) => {
    const newBook = { ...book, id: Date.now().toString() }; // Pastikan ID sebagai string
    setBooks([...books, newBook]);
  };

  // Fungsi untuk menghapus buku berdasarkan ID
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => useContext(BookContext);
