import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import ProjectsSection from '@/sections/ProjectsSection';
import ServicesSection from '@/sections/ServicesSection';
import ExperienceSection from '@/sections/ExperienceSection';
import ContactSection from '@/sections/ContactSection';

export default function App() {
  return (
    <>
      <Header />
      <main className="relative flex flex-col overflow-hidden pt-[72px]">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
