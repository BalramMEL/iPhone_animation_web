import Hero from "@/components/Hero";
import Highlight from "@/components/Highlight";
import Model from "@/components/Model";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
    </main>
  );
}
