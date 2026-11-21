import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SermonsPreview from "@/components/SermonsPreview";
import HomeCards from "@/components/HomeCards";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SermonsPreview />
      <HomeCards />
      <Contact />
    </main>
  );
}