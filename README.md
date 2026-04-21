# 🚀 MERN CRUD Task Manager App

A full-stack **CRUD (Create, Read, Update, Delete)** application built using the **MERN Stack** — React, Express.js, and MongoDB.

This project demonstrates how a real-world application works with a frontend interacting with a backend API and database.

---

## 📌 Features

* ✅ Create new tasks
* ✅ View all tasks
* ✅ Delete tasks
* ⚡ REST API integration
* ⚡ Clean and simple UI
* ⚡ Organized project structure (MVC pattern in backend)

---

## 🧩 Tech Stack

### Frontend

* React
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

---

## 📁 Project Structure

```
mern-crud-app/
│
├── backend/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.jsx
```

---

## ⚙️ Installation & Setup

### 🔹 1. Clone the Repository

```
git clone https://github.com/your-username/mern-crud-app.git
cd mern-crud-app
```

---

### 🔹 2. Setup Backend

```
cd backend
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/crudApp
```

Run backend:

```
npm run dev
```

---

### 🔹 3. Setup Frontend

```
cd frontend
npm install
npm start
```

---

## 🔌 API Endpoints

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| POST   | `/api/tasks`     | Create task   |
| GET    | `/api/tasks`     | Get all tasks |
| DELETE | `/api/tasks/:id` | Delete task   |

---

## 🧠 How It Works

1. User enters a task in the frontend
2. React sends request using Axios
3. Express API handles the request
4. MongoDB stores/retrieves data
5. Response is sent back to frontend
6. UI updates automatically

---

## 🚀 Future Improvements

* ✏️ Edit (Update) task feature
* 🔐 Authentication (Login/Register)
* 🎨 Improved UI (Tailwind / Material UI)
* 🌐 Deployment (Vercel + Render)
* 🔍 Search & Filter tasks

---

## 📸 Screenshot (Optional)

*Add your project screenshot here*

---

## 🙌 Author

**Ashok Sam**
Aspiring MERN Stack Developer 🚀

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
