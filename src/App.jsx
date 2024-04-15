import "./App.css";
import ContactMe from "./pages/Contact/ContactMe";
import Footer from "./pages/Footer/Footer";
import Hero from "./pages/Home/Hero";
import Navigation from "./pages/Navbar/Navbar";
import Projects from "./pages/Projects";
import About from "./pages/About/About";
function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
