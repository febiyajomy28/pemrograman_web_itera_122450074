import { useState } from "react";
import { useBooks } from "../../context/BookContext";
import BookForm from "../../components/BookForm/BookForm";
import BookList from "../../components/BookList/BookList";
import BookFilter from "../../components/BookFilter/BookFilter";

const Home = () => {
  const { books, addBook, editBook, removeBook } = useBooks();
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingBook, setEditingBook] = useState(null);

  const filteredBooks = books.filter((book) => {
    const matchesFilter = filter === "all" || book.status === filter;
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleSubmit = (bookData) => {
    if (editingBook) {
      editBook(editingBook.id, bookData);
      setEditingBook(null);
    } else {
      addBook(bookData);
    }
    setShowForm(false);
  };

  return (
    <div className="home-page">
      {showForm || editingBook ? (
        <section className="book-form-section">
          <h2>{editingBook ? "Edit Buku" : "Tambah Buku Baru"}</h2>
          <BookForm onSubmit={handleSubmit} initialData={editingBook || {}} />
          <button
            onClick={() => {
              setShowForm(false);
              setEditingBook(null);
            }}
            className="cancel-btn"
          >
            Batal
          </button>
        </section>
      ) : (
        <button onClick={() => setShowForm(true)} className="add-book-btn">
          Tambah Buku Baru
        </button>
      )}

      <div className="book-controls">
        <BookFilter onFilter={setFilter} onSearch={setSearchQuery} />
      </div>

      <section className="book-list-section">
        <h3>Semua Buku</h3>
        <BookList
          books={filteredBooks}
          onEdit={setEditingBook}
          onDelete={removeBook}
        />
      </section>
    </div>
  );
};

export default Home;
