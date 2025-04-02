import express from "express";
import {
  addBook,
  editBook,
  deleteBooks,
  checkInBook,
  checkOutBook,
  searchBooks,
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/add", addBook);
router.put("/edit/:id", editBook);
router.delete("/delete", deleteBooks);
router.put("/checkin/:id", checkInBook);
router.put("/checkout/:id", checkOutBook);
router.get("/search", searchBooks);

export default router;
