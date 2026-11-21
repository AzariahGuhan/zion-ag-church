import Navbar from "@/components/Navbar";
import HomeHero from "@/components/HomeHero";
import SermonsPreview from "@/components/SermonsPreview";
import HomeCards from "@/components/HomeCards";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeHero />
      <SermonsPreview />
      <HomeCards />
      <Contact />
    </main>
  );
}