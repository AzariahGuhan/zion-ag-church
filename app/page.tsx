import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Ministries from "@/components/Ministries";
import Sermons from "@/components/Sermons";
import Give from "@/components/Give";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Ministries />
      <Sermons />
      <Give />
      <Contact />
    </main>
  );
}