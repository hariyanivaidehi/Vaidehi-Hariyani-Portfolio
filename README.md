# Vaidehi Hariyani | Portfolio Website

Welcome to my personal portfolio repository! This is a modern, responsive, and high-performance developer portfolio website designed to showcase my projects, skills, educational background, and internship experience. 

It is built as a full-stack web application featuring a React.js client frontend and a Node.js/Express.js backend.

## 🚀 Live Demo & Repository
* **GitHub Repository:** [Vaidehi-Hariyani-Portfolio](https://github.com/hariyanivaidehi/Vaidehi-Hariyani-Portfolio)
* **Resume Link:** [Google Drive Resume](https://drive.google.com/file/d/1V4vL-QuCKgKweWjihxPaVpTWAjEt3Vg-/view?usp=drivesdk)

---

## 🛠️ Tech Stack & Technologies

### Frontend
* **React.js (v19)** — Component-based architecture for smooth UI.
* **Vite** — Fast, modern frontend build tool.
* **Tailwind CSS & Custom CSS3** — Fully responsive, custom layouts with modern styling.
* **FontAwesome & Ionicons** — Clean, scalable vector icons.

### Backend & Database
* **Node.js & Express.js** — Lightweight server framework for handling APIs.
* **MongoDB & Mongoose** — Relational database modeling for storing contact form submissions and dynamic project details.
* **JSON Fallback** — Secure file-based local storage system for offline/local runtime capability.

### Tools & Deployment
* **Git & GitHub** — Version control and codebase hosting.
* **Nodemon** — Automatic server reload in development environment.

---

## ✨ Key Features
1. **Interactive UI / UX:** Includes custom scroll-linked animations, typing text effect, glassmorphic headers, and smooth scroll transitions.
2. **Education & Experience Timeline:** Visually details educational qualifications (BCA degree) and frontend internship experience (with certificate view).
3. **Dynamic Projects Panel:** Fetches projects dynamically from the backend API.
4. **Resilient Contact Form:** 
   * When connected to MongoDB: Automatically saves customer/recruiter messages to the database.
   * When running offline: Safely falls back to storing data locally in `data/contacts.json` so no messages are lost.

---

## 📂 Project Structure
```text
Portfolio/
├── assets/                  # Public static assets (CSS, Images, Logos)
├── data/                    # JSON data files (Projects & local Contact Fallback)
│   ├── projects.json
│   └── contacts.json
├── frontend/                # React.js Vite frontend workspace
│   ├── src/                 # React components, stylesheets, and main files
│   │   ├── components/      # Modular UI Sections (About, Contact, Skills, etc.)
│   │   ├── App.jsx          # Main application wrapper with observers
│   │   └── main.jsx
│   └── package.json         # Frontend configuration and build commands
├── server.js                # Express.js backend server entry point
├── package.json             # Root backend configuration
└── README.md                # This file (Main documentation)
```

---

## ⚙️ How to Setup and Run Locally

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Clone the Repository
```bash
git clone https://github.com/hariyanivaidehi/Vaidehi-Hariyani-Portfolio.git
cd Vaidehi-Hariyani-Portfolio
```

### 3. Setup the Backend Server
Run these commands from the root directory:
```bash
# Install backend dependencies
npm install

# Start the server (runs on http://localhost:5000 by default)
npm start
```

### 4. Setup the Frontend React Client
Open a new terminal and navigate to the `frontend` folder:
```bash
cd frontend

# Install frontend dependencies
npm install

# Start Vite development server
npm run dev
```

### 5. Build for Production
To bundle the frontend React assets for production:
```bash
cd frontend
npm run build
```
This outputs compiled assets to `frontend/dist`, which are automatically served statically by the backend server.
