export function Navbar() {
  return (
    <nav className="w-full px-8 py-5 flex items-center justify-between border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      
      <h1 className="text-2xl font-extrabold tracking-tight text-white">
        CineSpoilerS 🎬
      </h1>

      <div className="flex items-center gap-6 text-sm text-white/70">
        <a className="hover:text-white transition" href="#">
          Películas
        </a>
        <a className="hover:text-white transition" href="#">
          Carrito
        </a>

        <button className="px-4 py-2 rounded-full border border-white/30 hover:bg-white hover:text-black transition">
          Iniciar sesión
        </button>
      </div>
    </nav>
  );
}