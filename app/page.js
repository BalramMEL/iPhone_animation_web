import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Highlight from "@/components/Highlight";
import HowItWorks from "@/components/HowItWorks";

import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main >
      <Navbar />
      <Hero />
      <Highlight />
      {/* <Model /> */}
      <Features />
      <HowItWorks />
    </main>
  );
}
