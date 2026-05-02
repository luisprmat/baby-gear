export type Product = {
  name: string;
  category: string;
  price: string;
  description: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 flex aspect-4/3 items-end rounded-xl bg-slate-100 p-4">
        <div className="h-16 w-full rounded-lg bg-linear-to-r from-teal-700 via-rose-300 to-amber-300" />
      </div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
        {product.category}
      </p>
      <div className="mt-2 flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold text-slate-950">{product.name}</h3>
        <p className="shrink-0 text-sm font-semibold text-slate-700">
          {product.price}
        </p>
      </div>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
        {product.description}
      </p>
    </article>
  );
}
