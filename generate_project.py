from pathlib import Path
root = Path('/mnt/data/ruet-academic-portal')
files = {}
files['README.md'] = r'''# RUET Academic Portal

Full-stack academic department portal inspired by the RUET CSE departmental style.

## Features

- Programs, Curriculum, Syllabus
- Academic Calendar
- Class Routine, Examination Routine, CT Routine
- Notice + Events preview on home page
- Admin dashboard for CRUD operations
- File upload ready backend using Multer
- MongoDB + Express + React + Tailwind CSS

## Tech Stack

- Frontend: React, Vite, React Router, Axios, Tailwind CSS
- Backend: Node.js, Express, MongoDB, Mongoose, Multer

## Run locally

### 1) Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### 2) Frontend

```bash
cd frontend
npm install
npm run dev
```

## Environment variables

### backend/.env

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/ruet_academic_portal
JWT_SECRET=change_this_secret
CLIENT_URL=http://localhost:5173
```

## API overview

- `GET /api/notices`
- `GET /api/events`
- `GET /api/programs`
- `GET /api/curriculums`
- `GET /api/syllabi`
- `GET /api/calendars`
- `GET /api/routines?type=class|exam|ct`
- `POST /api/<resource>` for create
- `PATCH /api/<resource>/:id` for update
- `DELETE /api/<resource>/:id` for delete

## Notes

- Upload endpoint accepts `file` field through `multipart/form-data`.
- To keep implementation simple, admin authentication is included as a starter JWT module but the dashboard uses open CRUD calls by default. You can protect routes later with the provided middleware.
'''

# Frontend package files
files['frontend/package.json'] = r'''{
  "name": "ruet-academic-portal-frontend",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.7.9",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.30.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.16",
    "vite": "^5.4.11"
  }
}'''
files['frontend/vite.config.js'] = r'''
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
});
'''
files['frontend/index.html'] = r'''<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>RUET Academic Portal</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
'''
files['frontend/postcss.config.js'] = r'''
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
'''
files['frontend/tailwind.config.js'] = r'''
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f3d91',
        secondary: '#153f74',
        accent: '#f59e0b',
        soft: '#f5f7fb',
      },
      boxShadow: {
        card: '0 8px 24px rgba(15, 61, 145, 0.08)',
      },
    },
  },
  plugins: [],
};
'''
files['frontend/src/main.jsx'] = r'''
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
'''
files['frontend/src/index.css'] = r'''
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-soft text-slate-800 antialiased;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.container-padded {
  @apply mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8;
}

.card {
  @apply rounded-2xl bg-white p-5 shadow-card;
}

.section-title {
  @apply text-2xl font-bold text-secondary sm:text-3xl;
}

.section-subtitle {
  @apply mt-2 max-w-2xl text-sm text-slate-600 sm:text-base;
}

.btn-primary {
  @apply inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 font-semibold text-white transition hover:bg-secondary;
}

.btn-outline {
  @apply inline-flex items-center justify-center rounded-xl border border-primary px-4 py-2 font-semibold text-primary transition hover:bg-primary hover:text-white;
}
'''
files['frontend/src/App.jsx'] = r'''
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return <AppRoutes />;
}
'''
files['frontend/src/services/api.js'] = r'''
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
});

export const fetchCollection = async (endpoint, params = {}) => {
  const { data } = await api.get(endpoint, { params });
  return data;
};

export const createItem = async (endpoint, payload, isMultipart = false) => {
  const { data } = await api.post(endpoint, payload, {
    headers: isMultipart ? { 'Content-Type': 'multipart/form-data' } : {},
  });
  return data;
};

export const updateItem = async (endpoint, id, payload, isMultipart = false) => {
  const { data } = await api.patch(`${endpoint}/${id}`, payload, {
    headers: isMultipart ? { 'Content-Type': 'multipart/form-data' } : {},
  });
  return data;
};

export const deleteItem = async (endpoint, id) => {
  const { data } = await api.delete(`${endpoint}/${id}`);
  return data;
};

export default api;
'''
files['frontend/src/data/navItems.js'] = r'''
export const quickMenuItems = [
  { label: 'Programs', path: '/programs' },
  { label: 'Curriculum', path: '/curriculum' },
  { label: 'Syllabus', path: '/syllabus' },
  { label: 'Academic Calendar', path: '/academic-calendar' },
  { label: 'Class Routine', path: '/class-routine' },
  { label: 'Examination Routine', path: '/examination-routine' },
  { label: 'CT Routine', path: '/ct-routine' },
  { label: 'Notice', path: '/notices' },
  { label: 'News & Events', path: '/news-events' },
  { label: 'Admin', path: '/admin' },
];
'''
files['frontend/src/components/layout/Header.jsx'] = r'''
import { Link, NavLink } from 'react-router-dom';
import { quickMenuItems } from '../../data/navItems';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-padded flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
              R
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">Department Portal</p>
              <h1 className="text-lg font-bold text-secondary sm:text-xl">RUET Academic Portal</h1>
            </div>
          </Link>
        </div>

        <nav className="flex flex-wrap gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-primary text-white' : 'text-slate-700 hover:bg-slate-100'}`
            }
          >
            Home
          </NavLink>
          {quickMenuItems.slice(0, 9).map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-primary text-white' : 'text-slate-700 hover:bg-slate-100'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
'''
files['frontend/src/components/layout/Footer.jsx'] = r'''
export default function Footer() {
  return (
    <footer className="mt-16 bg-secondary py-10 text-white">
      <div className="container-padded grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold">RUET Academic Portal</h3>
          <p className="mt-3 text-sm text-slate-200">
            A department website for academic resources, schedules, curriculum, and official updates.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Access</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li>Programs & Curriculum</li>
            <li>Syllabus & Calendar</li>
            <li>Class, Exam and CT Routine</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-3 text-sm text-slate-200">
            Department Office, RUET Campus, Rajshahi, Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
'''
files['frontend/src/components/layout/MainLayout.jsx'] = r'''
import Header from './Header';
import Footer from './Footer';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
'''
files['frontend/src/components/common/SectionHeader.jsx'] = r'''
export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
}
'''
files['frontend/src/components/common/DocumentCard.jsx'] = r'''
export default function DocumentCard({ item }) {
  const link = item.fileUrl || item.pdfUrl || item.link;
  return (
    <article className="card flex h-full flex-col justify-between">
      <div>
        <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
          {item.category || item.type || 'Document'}
        </span>
        <h3 className="mt-4 text-xl font-semibold text-secondary">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{item.description || 'No description available.'}</p>
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        {link ? (
          <a className="btn-primary" href={link} target="_blank" rel="noreferrer">
            View / Download
          </a>
        ) : null}
        {item.publishedAt ? (
          <span className="inline-flex items-center rounded-xl bg-amber-50 px-3 py-2 text-sm text-amber-700">
            {new Date(item.publishedAt).toLocaleDateString()}
          </span>
        ) : null}
      </div>
    </article>
  );
}
'''
files['frontend/src/components/common/InfoCard.jsx'] = r'''
export default function InfoCard({ title, description, meta }) {
  return (
    <article className="card h-full">
      <h3 className="text-xl font-semibold text-secondary">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      {meta ? <p className="mt-4 text-sm font-medium text-primary">{meta}</p> : null}
    </article>
  );
}
'''
files['frontend/src/components/common/LoadingState.jsx'] = r'''
export default function LoadingState() {
  return <div className="card text-center text-slate-500">Loading...</div>;
}
'''
files['frontend/src/components/common/EmptyState.jsx'] = r'''
export default function EmptyState({ text = 'No data found.' }) {
  return <div className="card text-center text-slate-500">{text}</div>;
}
'''
files['frontend/src/components/home/Hero.jsx'] = r'''
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary via-secondary to-slate-900 py-20 text-white">
      <div className="container-padded grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
            Department academic information system
          </p>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
            Programs, curriculum, syllabus and all academic routines in one place.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200">
            Built in a RUET-style departmental layout with quick access to notices, events, class routine,
            examination routine, CT schedule, and downloadable academic documents.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/academic-calendar" className="btn-primary bg-white text-secondary hover:bg-slate-100">
              View Academic Calendar
            </Link>
            <Link to="/class-routine" className="btn-outline border-white text-white hover:bg-white hover:text-secondary">
              View Class Routine
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ['Programs', 'BSc, MSc and academic structure'],
            ['Curriculum', 'Semester-wise course planning'],
            ['Syllabus', 'Course outlines and PDFs'],
            ['Routines', 'Class, exam and CT updates'],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-200">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
'''
files['frontend/src/components/home/NoticePreview.jsx'] = r'''
import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';
import DocumentCard from '../common/DocumentCard';
import LoadingState from '../common/LoadingState';
import EmptyState from '../common/EmptyState';

export default function NoticePreview({ notices, loading }) {
  return (
    <section className="container-padded py-16">
      <div className="flex items-end justify-between gap-4">
        <SectionHeader title="Latest Notices" subtitle="Important departmental notices and document updates." />
        <Link to="/notices" className="btn-outline whitespace-nowrap">See all</Link>
      </div>
      {loading ? (
        <LoadingState />
      ) : notices.length ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {notices.slice(0, 3).map((notice) => (
            <DocumentCard key={notice._id} item={notice} />
          ))}
        </div>
      ) : (
        <EmptyState text="No notices available yet." />
      )}
    </section>
  );
}
'''
files['frontend/src/components/home/EventSection.jsx'] = r'''
import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';
import InfoCard from '../common/InfoCard';
import LoadingState from '../common/LoadingState';
import EmptyState from '../common/EmptyState';

export default function EventSection({ events, loading }) {
  return (
    <section className="container-padded pb-16">
      <div className="flex items-end justify-between gap-4">
        <SectionHeader title="News & Events" subtitle="Seminars, workshops and departmental activities." />
        <Link to="/news-events" className="btn-outline whitespace-nowrap">See all</Link>
      </div>
      {loading ? (
        <LoadingState />
      ) : events.length ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.slice(0, 3).map((event) => (
            <InfoCard key={event._id} title={event.title} description={event.description} meta={event.eventDate ? new Date(event.eventDate).toLocaleDateString() : ''} />
          ))}
        </div>
      ) : (
        <EmptyState text="No events available yet." />
      )}
    </section>
  );
}
'''
files['frontend/src/pages/Home.jsx'] = r'''
import { useEffect, useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import Hero from '../components/home/Hero';
import NoticePreview from '../components/home/NoticePreview';
import EventSection from '../components/home/EventSection';
import { fetchCollection } from '../services/api';

export default function Home() {
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [noticeData, eventData] = await Promise.all([
          fetchCollection('/notices'),
          fetchCollection('/events'),
        ]);
        setNotices(noticeData.data || []);
        setEvents(eventData.data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <MainLayout>
      <Hero />
      <NoticePreview notices={notices} loading={loading} />
      <EventSection events={events} loading={loading} />
    </MainLayout>
  );
}
'''

def page_component(name, endpoint, title, subtitle, card='DocumentCard', params=''):
    return f'''
import {{ useEffect, useState }} from 'react';
import MainLayout from '../../components/layout/MainLayout';
import SectionHeader from '../../components/common/SectionHeader';
import LoadingState from '../../components/common/LoadingState';
import EmptyState from '../../components/common/EmptyState';
import {card} from '../../components/common/{card}';
import {{ fetchCollection }} from '../../services/api';

export default function {name}() {{
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {{
    const load = async () => {{
      try {{
        const res = await fetchCollection('{endpoint}'{params});
        setItems(res.data || []);
      }} catch (error) {{
        console.error(error);
      }} finally {{
        setLoading(false);
      }}
    }};
    load();
  }}, []);

  return (
    <MainLayout>
      <section className="container-padded py-16">
        <SectionHeader title="{title}" subtitle="{subtitle}" />
        {{loading ? (
          <LoadingState />
        ) : items.length ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {{items.map((item) => (
              <{card} key={{item._id}} item={{item}} {{...( '{card}' === 'InfoCard' and {{'title':'item.title','description':'item.description','meta':'item.meta'}} or {{}} )}} />
            ))}}
          </div>
        ) : (
          <EmptyState />
        )}}
      </section>
    </MainLayout>
  );
}}
'''
