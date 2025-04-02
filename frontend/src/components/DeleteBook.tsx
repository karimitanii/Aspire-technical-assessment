import React, { useState } from "react";

interface Book {
  id: number;
  title: string;
  author: string;
}

const sampleBooks: Book[] = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "Sapiens", author: "Yuval Noah Harari" },
];

const DeleteBook = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState<Book[]>(sampleBooks);
  const [selectedBooks, setSelectedBooks] = useState<number[]>([]);

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSelect = (id: number) => {
    setSelectedBooks((prev) =>
      prev.includes(id) ? prev.filter((bookId) => bookId !== id) : [...prev, id]
    );
  };

  const handleDelete = () => {
    const updated = books.filter((book) => !selectedBooks.includes(book.id));
    setBooks(updated);
    setSelectedBooks([]);
    alert(`Deleted books: ${selectedBooks.join(", ")}`);
    // You'd call your backend DELETE API here
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button className="btn btn-danger" onClick={handleDelete} disabled={selectedBooks.length === 0}>
          🗑️ Delete Selected
        </button>
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search books..."
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
            </div>
            <input
              type="checkbox"
              className="form-check-input"
              style={{
                transform: "scale(1.5)",
                accentColor: selectedBooks.includes(book.id) ? "red" : undefined,
              }}
              checked={selectedBooks.includes(book.id)}
              onChange={() => toggleSelect(book.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteBook;
