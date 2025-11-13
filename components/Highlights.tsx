import Highlight from "./Highlight";

export default function Highlights() {
  const bullets = [
    "Built for Extremes |	Unrivaled Reliability",
    "Secure Link |	Unbreakable Communication",
    "Pinpoint Accuracy |	Absolute Positioning",
  ];

  return (
    <section id="highlights" className="px-8 py-24 bg-charcoal/95">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Why Choose Us</h2>
        <div className="space-y-4">
          {bullets.map((b, idx) => (
            <Highlight key={idx} text={b} />
          ))}
        </div>
      </div>
    </section>
  );
}
