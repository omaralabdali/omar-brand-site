import CursorGlow from "@/components/CursorGlow";
import ScanlineOverlay from "@/components/ScanlineOverlay";
import Nav from "@/components/Nav";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import VideosSection from "@/components/sections/VideosSection";
import BlogSection from "@/components/sections/BlogSection";
import StackSection from "@/components/sections/StackSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <ScanlineOverlay />
      <Nav />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <VideosSection />
        <BlogSection />
        <StackSection />
        <NewsletterSection />
        <ContactSection />
      </main>
    </>
  );
}
