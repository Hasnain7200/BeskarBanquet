import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Services></Services>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  );
}

export default App;
