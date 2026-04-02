import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

export default function NotFound() {
  return (
    <MainLayout>
      <section className="container-padded py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">404</p>
        <h2 className="mt-4 text-4xl font-black text-secondary">Page not found</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600">
          The requested page is not available in this academic portal route map.
        </p>
        <Link to="/" className="btn-primary mt-8">Return Home</Link>
      </section>
    </MainLayout>
  );
}
