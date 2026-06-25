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
    <div className="bg-slate-50 overflow-x-hidden" style={{ minHeight: '100vh' }}>
      {/* <h1 className="text-4xl font-bold text-[#0B3B8C] p-10">TEST - Website is working!</h1> */}
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Products />
      <Services />
      <Clients />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollTop />
    </div>
  );
}

export default App;