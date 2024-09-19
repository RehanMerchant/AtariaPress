import BlogsDetails from "@/components/BlogsDetails";
import BlogsSection from "@/components/BlogsSection";
import Bookscard from "@/components/Bookscard";
import DetailedSection from "@/components/DetailedSection";
import FeaturedBook from "@/components/FeaturedBook";
import HeroSection from "@/components/HeroSection";
import LPageHeader from "@/components/LPageHeader";
import Playsection from "@/components/Playsection";
import SubHeroSection from "@/components/SubHeroSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <LPageHeader />
      <HeroSection />
      <FeaturedBook />
      <SubHeroSection />
      <DetailedSection/>
      <BlogsSection/>
      <Playsection/>
      <Bookscard/>
      <BlogsDetails/>
    </div>
  );
}
