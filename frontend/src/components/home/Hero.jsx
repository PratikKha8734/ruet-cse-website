import { Link } from 'react-router-dom';

const featureCards = [
  ['Programs & Degrees', 'BSc, MSc, credit structure and admission-ready academic information.'],
  ['Curriculum & Syllabus', 'Semester-wise course lists, outlines and downloadable PDFs.'],
  ['Academic Calendar', 'Important dates, registration windows and semester timelines.'],
  ['Routine Service', 'Class, exam and CT routines with quick access for students.'],
];

const highlights = [
  { label: 'Academic Services', value: '7+' },
  { label: 'Routine Categories', value: '3' },
  { label: 'Quick Download Access', value: '24/7' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-primary to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.16),transparent_20%)]" />
      <div className="container-padded relative grid gap-10 py-16 lg:grid-cols-[1.25fr_0.95fr] lg:py-20">
        <div>
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
            Department website inspired academic portal design
          </p>
          <h2 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            One official place for programs, syllabus, calendar and all academic routines.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
            A RUET-style departmental website with a structured homepage, quick menu shortcuts, notice board,
            event updates, routine downloads and admin-side content management for academic operations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/programs" className="btn-primary bg-white text-secondary hover:bg-slate-100">
              Explore Programs
            </Link>
            <Link to="/academic-calendar" className="btn-outline border-white text-white hover:bg-white hover:text-secondary">
              Open Academic Calendar
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-3xl font-black text-white">{item.value}</p>
                <p className="mt-2 text-sm text-slate-200">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {featureCards.map(([title, description], index) => (
            <article
              key={title}
              className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur transition hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-base font-black text-primary">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-bold">{title}</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-200">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
