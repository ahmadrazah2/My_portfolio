import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
