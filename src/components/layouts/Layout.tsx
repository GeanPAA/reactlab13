import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-black text-white">
      <Navbar />

      <main className="flex-1 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}