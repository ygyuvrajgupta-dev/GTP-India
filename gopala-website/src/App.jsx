import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <div className="bg-slate-50 overflow-x-hidden">

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Company */}
      <About />

      {/* Statistics */}
      <Stats />

      {/* Products */}
      <Products />

      {/* Services */}
      <Services />

      {/* Clients */}
      <Clients />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating Buttons */}
      <WhatsAppButton />
      <ScrollTop />

    </div>
  );
}

export default App;