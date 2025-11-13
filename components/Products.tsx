import ProductCard from "./ProductCard";

export default function Products() {
  const products = [
    { title: "Recon Drone", description: "High-altitude surveillance with AI navigation." },
    { title: "Attack Drone", description: "Precision strike with stealth and agility." },
    { title: "Logistics Drone", description: "Heavy payload transport in hostile terrain." },
  ];

  return (
    <section className="px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, idx) => (
            <ProductCard key={idx} title={p.title} description={p.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
