import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { EducationCerts } from "@/components/portfolio/EducationCerts";
import { GitHubSection } from "@/components/portfolio/GitHub";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kaveesha Maharambage — Frontend Developer & UI/UX Designer" },
      { name: "description", content: "Portfolio of Kaveesha Maharambage, undergraduate IT student at SLIIT. Frontend developer and UI/UX designer based in Sri Lanka." },
      { property: "og:title", content: "Kaveesha Maharambage — Portfolio" },
      { property: "og:description", content: "Frontend Developer & UI/UX Designer based in Sri Lanka." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <EducationCerts />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
