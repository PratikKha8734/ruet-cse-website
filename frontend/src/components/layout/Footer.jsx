export default function Footer() {
  return (
    <footer className="mt-16 bg-secondary py-10 text-white">
      <div className="container-padded grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold">RUET Academic Portal</h3>
          <p className="mt-3 text-sm text-slate-200">Department academic resources, routines, curriculum and official updates in one place.</p>
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
          <p className="mt-3 text-sm text-slate-200">Department Office, RUET Campus, Rajshahi, Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
