import { useVisit } from './hooks/useVisit';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Program from './components/sections/Program';
import Schedule from './components/sections/Schedule';
import Trainers from './components/sections/Trainers';
import Technologies from './components/sections/Technologies';
import Pricing from './components/sections/Pricing';
import Outcomes from './components/sections/Outcomes';
import Registration from './components/sections/Registration';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';

export default function App() {
  useVisit('/');
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Program />
        <Schedule />
        <Trainers />
        <Technologies />
        <Pricing />
        <Outcomes />
        <Registration />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
