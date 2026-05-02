import Navbar from "./components/navbar";
import Hero from "./components/hero";
import FeaturedProducts from "./components/featured-products";

export default async function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
      </main>
    </div>
  );
}
