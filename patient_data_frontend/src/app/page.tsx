import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold mb-6 text-primary">Patient Data Management</h1>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Click the button below to add a new patient and fill in demographics.
          </li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            href="/add-patient"
            className="rounded-full border border-solid border-primary bg-primary hover:bg-primary/90 transition-colors flex items-center justify-center text-white gap-2 text-base font-semibold h-12 px-6 sm:min-w-44 shadow"
          >
            Add New Patient
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-4 flex-wrap items-center justify-center">
        <span className="text-gray-400 text-xs">&copy; 2024 Patient Data App</span>
        <span className="text-gray-400 text-xs">Powered by Next.js</span>
      </footer>
    </div>
  );
}
