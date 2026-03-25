import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ChannelsSection from "@/components/ChannelsSection";
import CrmSection from "@/components/CrmSection";
import MissionSection from "@/components/MissionSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ChannelsSection />
      <CrmSection />
      <MissionSection />
      <FooterSection />
    </main>
  );
};

export default Index;
