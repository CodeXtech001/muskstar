import CardsSection from "@/components/CardsSection";
import HeroSection from "@/components/HeroSection";
import NavLogArea from "@/components/NavLogArea";

export default function Home() {
  return (
  <div className="space-y-12 lg:space-y-0">
  <NavLogArea/>
  <HeroSection/>
  <CardsSection/>
  </div>  
  );
}
