export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="font-roboto text-2xl">Texto com Roboto</h1>
        <h2 className="font-baloo text-xl">Texto com Baloo 2</h2>
        <p className="font-roboto text-base">Parágrafo com fonte Roboto.</p>
      </main>
    </div>
  );
}
