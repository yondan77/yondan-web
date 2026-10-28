import SiteHeader from "./components/SiteHeader";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import WorkSection from "./components/WorkSection";
import ContactSection from "./components/ContactSection";
import SiteFooter from "./components/SiteFooter";
import FeedbackTeam from "./components/FeedbackTeam";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <SiteFooter />
    </main>
  );
}
