import AboutSection from "@/components/HeroSection/AboutSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import Wrapper from "@/layout/wrapper/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <HeroSection />
      <AboutSection />
    </Wrapper>
  );
}
