export default function AboutActivity() {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold">Activity</h2>
      <div className="mt-4 grid gap-6 sm:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-zinc-500">Last Played</p>
          <p className="mt-1">Ngising karo konco</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-zinc-500">Reading</p>
          <p className="mt-1">Cara Sukses dalam 2 Hari!!!!!</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-zinc-500">Last Watched</p>
          <p className="mt-1">Solo Karir</p>
        </div>
      </div>
    </section>
  );
}
