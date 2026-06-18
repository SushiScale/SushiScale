import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Problem from "./components/Problem";
import Results from "./components/Results";
import Booking from "./components/Booking";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import StickyMobileCTA from "./components/StickyMobileCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Booking />
      <Services />
      {/* <Problem /> */}
      {/* <Results /> */}
      <FAQ />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}