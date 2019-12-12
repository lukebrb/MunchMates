import React from "react";
import { Parallax } from "react-spring/renderprops-addons.cjs";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";

const Cara = () => (
  <Layout>
    <Parallax pages={8}>
      <Hero offset={1} />
      <Projects offset={2.2} />
      <About offset={4} />
      <Contact offset={8} />
    </Parallax>
  </Layout>
);

export default Cara;
