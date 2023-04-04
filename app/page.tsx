"use client";
import Contact from "./Contact";
import Hero from "./Hero";
import Skills from "./skills";
import Work from "./(work)/Work";
import Projects from "./(projects)/Projects";
import NavBar from "./(navbar)/Navbar";
import Footer from "./Footer";
import SideBar from "./(navbar)/Sidebar";
import { useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <section id="hero">
        <Hero />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </>
  );
};

export default Home;
