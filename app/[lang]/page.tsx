import AudienceSection from "@/components/AudienceSection";
import FeatureSection from "@/components/FeatureSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import QuickLinks from "@/components/QuickLinks";
import SocialSection from "@/components/SocialSection";
import TrustSection from "@/components/TrustSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <Navbar />
      <HeroSection />
      <QuickLinks />
      <FeatureSection />
      <TrustSection />
      <SocialSection />
      <AudienceSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}