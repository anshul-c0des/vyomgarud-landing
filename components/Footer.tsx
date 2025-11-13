export default function Footer() {
  return (
    <footer className="bg-charcoal/95 text-gray-300 px-8 py-12">
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} VyomGarud. All rights reserved.
      </div>
    </footer>
  );
}
