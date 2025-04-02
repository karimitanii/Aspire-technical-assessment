# Aspire-technical-assessment
Aspire-technical-assessment - done by karim itani on april 2 , 2025

## 📘 Project Name: Bookie – Mini Library Management System
👋 Overview:
Bookie is a dynamic and interactive web application designed to help library administrators manage books seamlessly. It integrates essential features like book management (add, edit, delete), check-in/check-out tracking, and advanced search filtering. 

## Additionally, Bookie leverages Google Gemini AI to assist admins with real-time book recommendations and support through an integrated chatbot.

## 📊 Data Visualization with Charts
The system includes integrated chart components (Pie, Bar, Line, Area, Doughnut, Radar, and Polar charts) to visually represent the book data. These charts help administrators understand genre distribution, publication trends, and other insights at a glance. This makes managing the library both interactive and data-driven.

🔑 Key Features:
1. Get Started Page

Clean and modern intro page.

Showcases core features of the system in a visually appealing layout.

Includes dynamic typing effect and floating feature cards for engagement.

2. Login Page

Simple and secure login for library admins.

Once authenticated, users are redirected to the Library Dashboard.

3. Library Dashboard

Central control panel for managing the entire system.

Displays the logged-in admin's username.

Contains a chatbot icon (bottom right) for quick AI interaction.

Features a vertical sidebar with all main operations:

Add Book

Edit Book

Delete Book

Check In

Check Out

Search Books

4. Dynamic Component Loading

Clicking each sidebar button loads the corresponding feature/component in the main dashboard area without reloading the page.

Components are modular and easy to maintain.

5. Add Book

Form to input title, author, genre, publication year, and status (e.g., checked-in).

6. Edit Book

Admin can search for a book by ID and update its metadata.

Inputs are prefilled with current book data.

7. Delete Book

Admin can search/filter through books.

Checkbox to select one or multiple books for deletion.

Visual feedback (e.g., red highlight) when selecting items to delete.

8. Check In / Check Out

Toggle the checked_in status of a book.

Useful for tracking which books are available or borrowed.

9. Search Books

Filter/search functionality based on:

Book ID

Title

Author

Genre

Year Published

Results update dynamically as the user types.

10. Gemini AI Chatbot

Powered by Google AI Studio’s Gemini model.

Assists admins in:

Finding book recommendations

Suggesting popular genres

Answering questions related to book management

Located as a floating button on every page, with a pop-up chat window.

🛠️ Technologies Used:
Frontend:

React with TypeScript (via Vite)

Bootstrap 5 for UI

Axios for API communication

Backend:

Node.js with Express.js

MySQL for database storage

dotenv for secure environment variable management

AI Integration:

Google Gemini API for conversational chatbot assistance
