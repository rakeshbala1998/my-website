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
import CurrentProjects from "./(projects)/currentproject";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Hero Section */}
      <section id="hero" className="pb-8">  {/* Add padding-bottom */}
        <Hero />
      </section>

      {/* Skills Section */}
      <section id="skills" className="mt-8">  {/* Add margin-top */}
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="CurrentProjects" className="mt-8">
        <CurrentProjects/>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-8">
        <Projects />
      </section>

      {/* Work Section */}
      <section id="work" className="mt-8">
        <Work />
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-8">
        <Contact />
      </section>

      {/* Footer Section */}
      <section id="footer" className="mt-8">
        <Footer />
      </section>
    </>
  );
};

export default Home;
