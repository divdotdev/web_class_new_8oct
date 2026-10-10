# Web Class - Product Store Application

A full-stack product catalog application with an Express backend API and a React (Vite) frontend.

## Project Structure

```
web_class_new_8oct/
├── Backend/
│   ├── app.js               # Express server and routes
│   ├── data.js              # Product dataset
│   ├── .env.example         # Example environment variables
│   └── package.json
├── Frontend/
│   ├── src/
│   │   ├── App.jsx          # Main application component
│   │   ├── ProductsList.jsx # Products grid list component
│   │   └── main.jsx
│   └── package.json
└── README.md
```

## Getting Started

### 1. Backend Setup

```bash
cd Backend
npm install
npm run dev # or npm start
```

The backend server starts on `http://localhost:3000`.

#### API Endpoints
- `GET /` - Health check route
- `GET /api` - API status route
- `GET /api/products` - Returns product catalog list

### 2. Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

Open `http://localhost:5173` (or the Vite dev server URL) in your browser.
