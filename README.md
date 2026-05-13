# 📝 Note Taking App — MERN Stack
 
A full-stack note taking app built with the **MERN stack** (MongoDB, Express, React, Node.js). Create, read, update, and delete notes with a clean UI and persistent storage.
 
---
 
## ✨ Features
 
- 📋 Create, edit, and delete notes
- 💾 Persistent storage with MongoDB
- 🔗 REST API with Express & Node.js
- ⚡ React frontend with Vite
- 🌐 Full-stack — frontend + backend in one repo
---
 
## 🖥️ Tech Stack
 
| Technology | Purpose |
|---|---|
| React + Vite | Frontend UI |
| Node.js + Express | Backend REST API |
| MongoDB + Mongoose | Database |
| Tailwind CSS | Styling |
 
---
 
## 🚀 Getting Started
 
### Prerequisites
- Node.js v18+
- MongoDB Atlas account (or local MongoDB)
- npm
### Installation
 
```bash
# Clone the repo
git clone https://github.com/Mohan-K10/Note_Taking-MERN-.git
 
cd Note_Taking-MERN-
```
 
**Backend setup:**
```bash
cd backend
npm install
```
 
Create a `.env` file in the `backend` folder:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
 
```bash
npm start
```
 
**Frontend setup:**
```bash
cd ../frontend
npm install
npm run dev
```
 
Frontend runs on [http://localhost:5173](http://localhost:5173) and backend on [http://localhost:5000](http://localhost:5000).
 
---
 
## 📁 Project Structure
 
```
├── backend/
│   ├── models/        # Mongoose schemas
│   ├── routes/        # Express API routes
│   └── server.js      # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   └── App.jsx
└── .gitignore
```
 
---
 
## 🔌 API Endpoints
 
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| POST | `/api/notes` | Create a note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |
 
---
 
## 📸 Preview
 
> _Add a screenshot here_
 
---
 
## 📄 License
 
This project is open source under the [MIT License](LICENSE).
 
---
 
> Built by [Mohan](https://github.com/Mohan-K10) — first full-stack MERN project 🚀
