export function Footer() {
  return (
    <footer className="w-full px-8 py-6 border-t border-white/10 text-center text-white/40 text-sm">
      <div className="flex flex-col gap-2">
        <p className="font-medium text-white/60">
          CineSpoilerS 🎬
        </p>

        <p>
          Hecho con React + Tailwind • Proyecto educativo
        </p>

        <p className="text-white/30">
          © {new Date().getFullYear()} Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}