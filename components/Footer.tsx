export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 px-6 sm:px-8 py-12 pb-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        
        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-accentOrange transition">Mission</a>
            </li>
            <li>
              <a href="#highlights" className="hover:text-accentOrange transition">Why Us</a>
            </li>
            <li>
              <a href="#careers" className="hover:text-accentOrange transition">Careers</a>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-white font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#products" className="hover:text-accentOrange transition">Capabilities</a>
            </li>
            <li>
              <a href="#specs" className="hover:text-accentOrange transition">Specifications</a>
            </li>
            <li>
              <a href="#case-studies" className="hover:text-accentOrange transition">Case Studies</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#contact" className="hover:text-accentOrange transition">Contact</a>
            </li>
            <li>
              <a href="#faqs" className="hover:text-accentOrange transition">FAQs</a>
            </li>
          </ul>
        </div>

        {/* Legal / Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Legal & Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#privacy" className="hover:text-accentOrange transition">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms" className="hover:text-accentOrange transition">Terms of Service</a>
            </li>
            <li>Email: info@placeHolder.com</li>
            <li>Phone: +91 00000-00000</li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} VyomGarud. All rights reserved.
      </div>
    </footer>
  );
}
