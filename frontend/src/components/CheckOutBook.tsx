import React, { useEffect, useState } from "react";
import axios from "axios";

interface Book {
  id: number;
  title: string;
  author: string;
  checked_in: number;
}

function CheckOutBook() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch all books that are currently checked in
  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/books/checked-in");
      setBooks(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching books:", error);
      setLoading(false);
    }
  };

  const handleCheckOut = async (id: number) => {
    try {
      await axios.put(`http://localhost:5000/api/books/checkout/${id}`);
      setBooks((prev) => prev.filter((book) => book.id !== id));
    } catch (error) {
      console.error("Error checking out book:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h4 className="mb-3">📤 Check Out Books</h4>
      {loading ? (
        <p>Loading books...</p>
      ) : books.length === 0 ? (
        <p className="text-muted">No books available for checkout.</p>
      ) : (
        <ul className="list-group">
          {books.map((book) => (
            <li
              key={book.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>
                <strong>{book.title}</strong> by {book.author}
              </span>
              <button
                className="btn btn-warning btn-sm"
                onClick={() => handleCheckOut(book.id)}
              >
                Check Out
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CheckOutBook;
