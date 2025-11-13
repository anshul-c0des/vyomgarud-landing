export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-8 py-2">
      <div className="text-center text-gray-500 text-sm flex items-center justify-center ">
        © {new Date().getFullYear()} VyomGarud. All rights reserved.
      </div>
    </footer>
  );
}
