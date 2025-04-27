import { useBooks } from "../context/BookContext";

export const useBookStats = () => {
  const { books } = useBooks();
  // Menghitung statistik buku berdasarkan status
  return books.reduce(
    (acc, book) => {
      if (book.status === "owned") acc.owned++;
      if (book.status === "reading") acc.reading++;
      if (book.status === "wishlist") acc.wishlist++;
      return acc;
    },
    { owned: 0, reading: 0, wishlist: 0 }
  );
};
