import React, { useState } from "react";

interface Book {
  id: number;
  title: string;
  author: string;
  checkedIn: boolean;
}

const initialBooks: Book[] = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho", checkedIn: false },
  { id: 2, title: "1984", author: "George Orwell", checkedIn: false },
  { id: 3, title: "Sapiens", author: "Yuval Noah Harari", checkedIn: true },
];

const CheckInBook = () => {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCheckIn = (id: number) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, checkedIn: true } : book
      )
    );
    alert(`Book ID ${id} has been checked in.`);
    // Add backend update call here if needed
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          placeholder="Search book to check in..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ul className="list-group">
        {filteredBooks.map((book) => (
          <li
            key={book.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{book.title}</strong> — <em>{book.author}</em>
              <span
                className={`badge ms-2 ${
                  book.checkedIn ? "bg-success" : "bg-secondary"
                }`}
              >
                {book.checkedIn ? "Checked In" : "Not Checked In"}
              </span>
            </div>
            <button
              className="btn btn-outline-success btn-sm"
              disabled={book.checkedIn}
              onClick={() => handleCheckIn(book.id)}
            >
              ✅ Check In
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckInBook;
