import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Badge from "./components/Badge";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="p-14 flex flex-col gap-28">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Badge />
      <Projects />
      <Contact />
    </main>
  );
}
