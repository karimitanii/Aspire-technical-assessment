import React, { useState } from "react";

const EditBook = () => {
  const [bookId, setBookId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Edited Book ID: ${bookId}, Title: ${title}, Author: ${author}`);
    // Send PUT request here to update the book in DB
  };

  return (
    <div>
      <h4 className="mb-4">✏️ Edit Book</h4>
      <form onSubmit={handleEdit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Book ID"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="New Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="New Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-warning w-100">
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
