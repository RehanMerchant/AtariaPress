import DetailedSection from "@/components/DetailedSection";
import FeaturedBook from "@/components/FeaturedBook";
import HeroSection from "@/components/HeroSection";
import LPageHeader from "@/components/LPageHeader";
import SubHeroSection from "@/components/SubHeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <LPageHeader />
      <HeroSection />
      <SubHeroSection />
      <FeaturedBook />
      <DetailedSection/>
    </div>
  );
}
