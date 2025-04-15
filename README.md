# CMPPL - Vehicle Tracking and Document Management System

This project is a web application for vehicle tracking and document management. It includes both a frontend (React/HTML) and a backend (Node.js/Express).

---

## Features

- Admin authentication
- Vehicle tracking with real-time location updates
- File upload and management for documents
- Responsive design for web usage

---

## Project Structure

```
CMPPL/
├── backend/
├── frontend/
├── .gitignore
├── README.md
```

### Backend

- Routes for authentication, vehicle tracking, and document management.
- MongoDB as the database.

### Frontend

- HTML/CSS/JavaScript frontend with dynamic functionality for interacting with the backend.

---

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/CMPPL.git
   cd CMPPL
   ```

2. Set up the backend:
   ```bash
   cd backend
   npm install
   ```

3. Set up the frontend:
   ```bash
   cd frontend
   npm install
   npm run build
   ```

4. Create a `.env` file in the `backend` folder:
   ```plaintext
   MONGO_URI=<your-mongodb-connection-string>
   PORT=5000
   SECRET_KEY=your-secret-key
   ```

5. Start the backend server:
   ```bash
   cd backend
   node index.js
   ```

6. Access the app locally at `http://localhost:5000`.

---

## Deployment on Render

1. Push this project to GitHub.
2. Go to [Render](https://render.com/) and create a new **Web Service**.
3. Link your GitHub repository.
4. Configure the backend service:
   - **Build Command**: `npm install`
   - **Start Command**: `node index.js`
   - Add the environment variables from your `.env` file in the Render dashboard.
5. Deploy the frontend (if using React):
   - Build the frontend with `npm run build`.
   - Set up a **Static Site** on Render, pointing to the `frontend/build` folder.

Your app will now be live!