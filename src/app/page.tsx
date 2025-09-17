import Nav from "../components/Nav";
import Header from "../components/Header";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <div id="home">
        <Header />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      
    </main>
  );
}
