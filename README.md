# RUET Academic Portal — Complete CRUD Version

Full-stack academic portal inspired by a RUET department-style website.

## What is included
- Public pages for Programs, Curriculum, Syllabus, Academic Calendar, Class Routine, Exam Routine, CT Routine, Notices and Events
- MongoDB-backed CRUD API
- Administrator login with protected create, update and delete routes
- File upload support for PDFs and images
- Admin dashboard with add, edit and delete controls
- Seed script for demo content and default admin login

## Default admin login
After running the seed command:
- Email: `admin@ruet.ac.bd`
- Password: `admin123`

## Run locally

### 1) Backend
```bash
cd backend
cp .env.example .env
npm install
npm run seed
npm run dev
```

### 2) Frontend
```bash
cd frontend
npm install
npm run dev
```

## Local URLs
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`
- Admin login: `http://localhost:5173/admin/login`

## Notes
- Make sure MongoDB is running locally before starting the backend.
- Uploaded files are stored in `backend/src/uploads/documents`.
- If you already have old collections with `_NAME` suffixes from the earlier version, this updated project uses clean collection names.
