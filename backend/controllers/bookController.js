import db from "../config/db.js";

// ✅ Add Book
export const addBook = (req, res) => {
  const { title, author, genre, year_published } = req.body;

  if (!title || !author) {
    return res.status(400).json({ message: "Title and Author are required." });
  }

  const query = "INSERT INTO books (title, author, genre, year_published) VALUES (?, ?, ?, ?)";
  db.query(query, [title, author, genre, year_published], (err, result) => {
    if (err) return res.status(500).json({ message: "Database error", error: err });
    res.status(201).json({ message: "Book added successfully", bookId: result.insertId });
  });
};

// ✅ Edit Book
export const editBook = (req, res) => {
  const { id } = req.params;
  const { title, author, genre, year_published } = req.body;

  const query = `
    UPDATE books 
    SET title = ?, author = ?, genre = ?, year_published = ?
    WHERE id = ?
  `;
  db.query(query, [title, author, genre, year_published, id], (err, result) => {
    if (err) return res.status(500).json({ message: "Database error", error: err });
    res.json({ message: "Book updated successfully" });
  });
};

// ✅ Delete Books (multiple by ID)
export const deleteBooks = (req, res) => {
  const { ids } = req.body; // Expecting: { ids: [1, 2, 3] }

  if (!Array.isArray(ids) || ids.length === 0) {
    return res.status(400).json({ message: "No book IDs provided." });
  }

  const placeholders = ids.map(() => "?").join(",");
  const query = `DELETE FROM books WHERE id IN (${placeholders})`;

  db.query(query, ids, (err, result) => {
    if (err) return res.status(500).json({ message: "Database error", error: err });
    res.json({ message: "Books deleted successfully" });
  });
};

// ✅ Check In Book
export const checkInBook = (req, res) => {
  const { id } = req.params;

  const query = "UPDATE books SET checked_in = 1 WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ message: "Database error", error: err });
    res.json({ message: "Book checked in" });
  });
};

// ✅ Check Out Book
export const checkOutBook = (req, res) => {
  const { id } = req.params;

  const query = "UPDATE books SET checked_in = 0 WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ message: "Database error", error: err });
    res.json({ message: "Book checked out" });
  });
};

// ✅ Search Books with Filters
export const searchBooks = (req, res) => {
  const { id, title, author, genre, year_published } = req.query;

  let conditions = [];
  let values = [];

  if (id) {
    conditions.push("id = ?");
    values.push(id);
  }
  if (title) {
    conditions.push("title LIKE ?");
    values.push(`%${title}%`);
  }
  if (author) {
    conditions.push("author LIKE ?");
    values.push(`%${author}%`);
  }
  if (genre) {
    conditions.push("genre LIKE ?");
    values.push(`%${genre}%`);
  }
  if (year_published) {
    conditions.push("year_published = ?");
    values.push(year_published);
  }

  let query = "SELECT * FROM books";
  if (conditions.length > 0) {
    query += " WHERE " + conditions.join(" AND ");
  }

  db.query(query, values, (err, results) => {
    if (err) return res.status(500).json({ message: "Database error", error: err });
    res.json(results);
  });
};
