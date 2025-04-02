import React, { useState } from "react";
import axios from "axios";

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    year_published: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/books/add", formData);
      alert("Book added successfully!");
      setFormData({
        title: "",
        author: "",
        genre: "",
        year_published: "",
      });
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add book.");
    }
  };

  return (
    <div className="p-4">
      <h4 className="mb-3">➕ Add New Book</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="form-control mb-2"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          className="form-control mb-2"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          className="form-control mb-2"
          value={formData.genre}
          onChange={handleChange}
        />
        <input
          type="number"
          name="year_published"
          placeholder="Year Published"
          className="form-control mb-3"
          value={formData.year_published}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-success w-100">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
