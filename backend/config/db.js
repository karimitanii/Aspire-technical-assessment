import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // Change if you have a different MySQL username
  password: "", // Set your MySQL password
  database: "Bookie", // Change to your actual database name
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database.");
});

export default connection;