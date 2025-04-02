import React, { useState } from "react";
import axios from "axios";

interface Book {
  id: number;
  title: string;
  author: string;
  genre?: string;
  year_published?: number;
  checked_in: number;
}

function SearchBooks() {
  const [searchParams, setSearchParams] = useState({
    id: "",
    title: "",
    author: "",
    genre: "",
    year: "",
  });
  const [results, setResults] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/books/search", {
        params: searchParams,
      });
      setResults(response.data);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h4 className="mb-3">🔍 Search Books</h4>

      {/* Search Fields */}
      <div className="row g-2 mb-3">
        <div className="col-md">
          <input
            name="id"
            type="number"
            className="form-control"
            placeholder="Book ID"
            value={searchParams.id}
            onChange={handleChange}
          />
        </div>
        <div className="col-md">
          <input
            name="title"
            type="text"
            className="form-control"
            placeholder="Title"
            value={searchParams.title}
            onChange={handleChange}
          />
        </div>
        <div className="col-md">
          <input
            name="author"
            type="text"
            className="form-control"
            placeholder="Author"
            value={searchParams.author}
            onChange={handleChange}
          />
        </div>
        <div className="col-md">
          <input
            name="genre"
            type="text"
            className="form-control"
            placeholder="Genre"
            value={searchParams.genre}
            onChange={handleChange}
          />
        </div>
        <div className="col-md">
          <input
            name="year"
            type="number"
            className="form-control"
            placeholder="Year Published"
            value={searchParams.year}
            onChange={handleChange}
          />
        </div>
      </div>

      <button className="btn btn-primary mb-3" onClick={handleSearch}>
        Search
      </button>

      {/* Results */}
      {loading ? (
        <p>Searching...</p>
      ) : (
        <ul className="list-group">
          {results.length === 0 ? (
            <li className="list-group-item text-muted">No books found.</li>
          ) : (
            results.map((book) => (
              <li
                key={book.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>
                  <strong>{book.title}</strong> by {book.author}
                  <br />
                  <small>
                    Genre: {book.genre || "N/A"} | Year:{" "}
                    {book.year_published || "N/A"} |{" "}
                    {book.checked_in ? "✅ Checked In" : "📤 Checked Out"}
                  </small>
                </span>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default SearchBooks;
