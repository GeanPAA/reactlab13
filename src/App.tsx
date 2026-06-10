import { Layout } from "./components/layouts/Layout";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <Layout>
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-4xl font-bold">
          Bienvenido a CineSpoilerS 🎬
        </h2>

        <Button className="border border-white/60 bg-transparent hover:bg-white hover:text-black">
          Ver películas
        </Button>
      </div>
    </Layout>
  );
}