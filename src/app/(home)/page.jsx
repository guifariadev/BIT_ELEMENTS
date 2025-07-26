import { SquareBackground } from "@/components/ui/Square-background.jsx";
import Navbar from "@/components/navs/Navbar";
import HeroSection from "@/components/landing/HeroSection.jsx";
import About from "@/components/landing/About";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <SquareBackground className="h-full w-full">
        <HeroSection />
      </SquareBackground>
      <About />
      <Footer />
    </main>
  );
}
