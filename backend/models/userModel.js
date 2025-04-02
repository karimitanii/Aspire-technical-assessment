import db from "../config/db.js";


// Find user by email
export const findUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
        if (err) reject(err);
        resolve(results[0]); // Return the first user
      });
    });
  };
  
  // Compare plain text passwords (For testing purposes only)
  export const comparePassword = async (enteredPassword, storedPassword) => {
    return enteredPassword === storedPassword; // Direct comparison
  };