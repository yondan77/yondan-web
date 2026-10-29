import SiteHeader from "../components/SiteHeader";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import WorkSection from "../components/WorkSection";
import ContactSection from "../components/ContactSection";
import SiteFooter from "../components/SiteFooter";
import FeedbackTeam from "../components/FeedbackTeam";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <FeedbackTeam />
      <SiteFooter />
    </main>
  );
}
