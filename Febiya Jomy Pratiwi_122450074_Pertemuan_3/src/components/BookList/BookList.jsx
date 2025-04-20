import { useState } from "react";
import PropTypes from "prop-types";
import BookForm from "../BookForm/BookForm";



const statusTranslations = {
  owned: "Dimiliki",
  reading: "Sedang Dibaca",
  wishlist: "Ingin Dibeli",
};

const BookList = ({ books, onEdit, onDelete }) => {
  const [editingBook, setEditingBook] = useState(null);

  const handleEditSubmit = (updatedBook) => {
    onEdit(editingBook.id, updatedBook);
    setEditingBook(null);
  };

  return (
    <div className="book-list">
      {books.length === 0 ? (
        <p>Tidak ada buku yang ditemukan</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id} className="book-item">
              
              {editingBook?.id === book.id ? (
                <div className="edit-form">
                  <h3>Edit Buku</h3>
                  <BookForm onSubmit={handleEditSubmit} initialData={book} />
                  <button
                    onClick={() => setEditingBook(null)}
                    className="cancel-btn"
                  >
                    Batal
                  </button>
                </div>
              ) : (
                <>
               
                  <div className="book-info">
                    <h3>{book.title}</h3>
                    <p>Penulis: {book.author}</p>
                    <p>
                      Status: {statusTranslations[book.status] || book.status}
                    </p>
                  </div>
                  <div className="book-actions">
                    <button
                      onClick={() => setEditingBook(book)}
                      className="edit-btn"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(book.id)}
                      className="delete-btn"
                    >
                      Hapus
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
