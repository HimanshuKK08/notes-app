Simple Notes App

A lightweight, file-based note-taking application built with Node.js and Express. 
This project provides a simple interface to **create**, **view**, and **delete** plain text notes, using the local filesystem as a storage mechanism. 
It's ideal for learning server-side rendering with EJS and practicing file I/O operations in Node.js.

---

Features

-  Create new notes with a custom title and content
-  View a list of all existing notes
-  Open and read the content of individual notes
-  Delete notes with a single click
- 💡Server-side rendering using EJS templating engine
-  File-based data storage (no database dependency)

---

Project Structure

simple-notes-app/
├── index.js       # Main file having all the routing and nodejs logic
├── package.json   # Project details and dependencies
├── views/         # EJS templates for rendering HTML
│ ├── index.ejs    # Homepage showing all notes
│ └── data.ejs     # Page for viewing individual notes
├── Public/        # Static files (CSS, JS, etc.)
├── Notes/         # Directory where text notes are saved

---

You can try it too, just follow the steps below: 

Installation & Setup
1. Clone the Repository
  git clone https://github.com/yourusername/simple-notes-app.git
  cd simple-notes-app
2. Install Dependencies
  npm install
3. Start the Server
  node index.js
----------------

The application will be running at:
-- http://localhost:3030
