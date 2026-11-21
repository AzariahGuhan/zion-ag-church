import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Events from "@/components/Events";
import Ministries from "@/components/Ministries";
import Sermons from "@/components/Sermons";
import Gallery from "@/components/Gallery";
import Give from "@/components/Give";
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
      <Sermons />
      <Gallery />
      <Give />
      <Prayer />
      <Contact />
    </main>
  );
}