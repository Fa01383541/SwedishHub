
export default function Home() {
  return (
  <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Navbar Amarilla */}
      <nav className="bg-yellow-500 p-4">
        <div className="container mx-auto flex justify-end">
          <button className="text-black mx-2">Español</button>
        </div>
      </nav>

      {/* Navbar Azul */}
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between">
          <div className="text-white">Logo</div>
          <div className="flex space-x-4">
            <a href="/blog" className="text-white">Blog</a>
            <a href="/learnguide" className="text-white">Learning Guide </a>
            <a href="/myroad" className="text-white">My Road</a>
            <a href="/resources" className="text-white">Resources</a>
          </div>
        </div>
      </nav>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center       min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-black dark:text-white text-4xl font-bold">The Swedish Hub</h1>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started with the swedishub de Fa{" "}
          </li>
          <li>Se vienen cositas</li>
        </ol>
      </main>
    </div>
  </div>
  );
}
