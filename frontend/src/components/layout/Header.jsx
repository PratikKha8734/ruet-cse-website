import { Link, NavLink } from 'react-router-dom';
import { quickMenuItems } from '../../data/navItems';
import { getStoredToken } from '../../services/api';

const primaryNav = quickMenuItems.filter((item) => item.path !== '/admin' && item.path !== '/admin/login').slice(0, 8);

export default function Header() {
  const hasToken = !!getStoredToken();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="bg-secondary text-white">
        <div className="container-padded flex flex-wrap items-center justify-between gap-3 py-2 text-xs sm:text-sm">
          <p className="font-medium tracking-wide">Rajshahi University of Engineering & Technology • Department Academic Portal</p>
          <div className="flex flex-wrap items-center gap-3 text-slate-200">
            <span>Programs</span>
            <span>Routine</span>
            <span>Notices</span>
            <span>Downloads</span>
          </div>
        </div>
      </div>

      <div className="container-padded py-4">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <Link to="/" className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-xl font-extrabold text-white shadow-card">
              R
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Official academic information</p>
              <h1 className="text-xl font-extrabold text-secondary sm:text-2xl">RUET Academic Portal</h1>
              <p className="text-sm text-slate-500">Programs, syllabus, calendars and routine management</p>
            </div>
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <Link to="/notices" className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary md:inline-flex">
              Latest Notices
            </Link>
            <Link to={hasToken ? '/admin' : '/admin/login'} className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:opacity-90">
              {hasToken ? 'Admin Dashboard' : 'Admin Login'}
            </Link>
          </div>
        </div>

        <nav className="mt-5 flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-2">
          {[{ label: 'Home', path: '/' }, ...primaryNav].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  isActive ? 'bg-primary text-white shadow-card' : 'text-slate-700 hover:bg-white hover:text-primary'
                }`
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
