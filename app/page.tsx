import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Events from "@/components/Events";
import Ministries from "@/components/Ministries";
import SermonsPreview from "@/components/SermonsPreview";
import GalleryPreview from "@/components/GalleryPreview";
import GiveTeaser from "@/components/GiveTeaser";
import Prayer from "@/components/Prayer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Events />
      <Ministries />
      <SermonsPreview />
      <GalleryPreview />
      <GiveTeaser />
      <Prayer />
      <Contact />
    </main>
  );
}