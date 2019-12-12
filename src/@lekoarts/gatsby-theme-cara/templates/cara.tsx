import React from "react";
import { Parallax } from "react-spring/renderprops-addons.cjs";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";

const Cara = () => (
  <Layout>
    <Parallax pages={10}>
      <Hero offset={0} />
      <Projects offset={2} />
      <About offset={6} />
      <Contact offset={9} />
    </Parallax>
  </Layout>
);

export default Cara;
