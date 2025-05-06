import PropTypes from "prop-types";

const BookFilter = ({ onFilter, onSearch }) => {
  return (
    <div className="book-filter">
      <div className="filter-controls">
        <select
          onChange={(e) => onFilter(e.target.value)}
          defaultValue="all"
          className="filter-select"
        >
          <option value="all">Semua Buku</option>
          <option value="owned">Dimiliki</option>
          <option value="reading">Sedang Dibaca</option>
          <option value="wishlist">Ingin Dibeli</option>
        </select>
        <input
          type="text"
          placeholder="Cari buku atau penulis..."
          onChange={(e) => onSearch(e.target.value)}
          className="search-input"
        />
      </div>
    </div>
  );
};

BookFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default BookFilter;
