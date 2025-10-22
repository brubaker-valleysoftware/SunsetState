import Nav from "../components/Nav";
import Header from "../components/Header";
import About from "../components/About";
import Contact from "../components/Contact";
import Reviews from "../components/Reviews";
import QuickContact from "../components/QuickContact";
import WhatWeDo from "../components/WhatWeDo";
import Services from "../components/Services";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <div id="home">
        <Header />
      </div>
      <div id="quick-contact">
        <QuickContact />
      </div>
      <div id="reviews">
        <Reviews />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <WhatWeDo />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="cta">
        <CTA />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
