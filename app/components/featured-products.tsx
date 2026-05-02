import ProductCard, {Product} from "./product-card";

const featuredProducts: Product[] = [
  {
    name: "Travel Stroller",
    category: "Strollers",
    price: "$12/day",
    description: "Lightweight, foldable, and ready for city walks.",
  },
  {
    name: "Infant Car Seat",
    category: "Car Seats",
    price: "$10/day",
    description: "Clean, safety-checked seating for airport pickups.",
  },
  {
    name: "Portable Crib",
    category: "Sleep",
    price: "$14/day",
    description: "A compact sleep setup for hotels and family visits.",
  },
  {
    name: "Baby Carrier",
    category: "On the Go",
    price: "$8/day",
    description: "Comfortable hands-free support for long travel days.",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto w-full">
      <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}
