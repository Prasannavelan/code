import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ProjectsPage from './components/projects/ProjectsPage';
import InternshipPage from './components/internships/InternshipPage';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ProjectsPage />
        <InternshipPage />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;