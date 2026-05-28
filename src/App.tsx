import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Values } from './components/Values';
import { Workshops } from './components/Workshops';
import { PublicSection } from './components/PublicSection';
import { Modalites } from './components/Modalites';
import { Presse } from './components/Presse';
import { Trust } from './components/Trust';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-creme-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Values />
        <Workshops />
        <PublicSection />
        <Modalites />
        <Presse />
        <Trust />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
