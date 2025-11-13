import "./globals.css";
import { Poppins } from "next/font/google";


const poppins = Poppins({ subsets: ["latin"], weight: ["400","600","700"] });

export const metadata = {
  title: "VyomGarud - Military-Grade UAV Systems",
  description: "Futuristic, high-tech drone systems",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-charcoal text-white`}>

        {children}

      </body>
    </html>
  );
}
