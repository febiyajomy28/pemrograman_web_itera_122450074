import { useState } from "react";
import PropTypes from "prop-types";

const BookForm = ({ onSubmit, initialData = {} }) => {
  const [book, setBook] = useState({
    title: initialData.title || "",
    author: initialData.author || "",
    status: initialData.status || "owned",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(book);
      }}
      className="book-form"
    >
      <div className="form-group">
        <label>Judul Buku</label>
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          placeholder="Masukkan judul buku"
          required
        />
      </div>
      <div className="form-group">
        <label>Penulis</label>
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="Masukkan nama penulis"
          required
        />
      </div>
      <div className="form-group">
        <label>Status</label>
        <select name="status" value={book.status} onChange={handleChange}>
          <option value="owned">Dimiliki</option>
          <option value="reading">Sedang Dibaca</option>
          <option value="wishlist">Ingin Dibeli</option>
        </select>
      </div>
      <button type="submit" className="submit-btn">
        {initialData.id ? "Update Buku" : "Tambah Buku"}
      </button>
    </form>
  );
};

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.object,
};

export default BookForm;
