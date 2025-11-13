import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <Highlights />
      <Contact />
    </main>
  );
}
