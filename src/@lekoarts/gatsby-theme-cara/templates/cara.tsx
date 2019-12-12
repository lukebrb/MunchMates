import React from "react";
import { Parallax } from "react-spring/renderprops-addons.cjs";
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout";
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero";
import Projects from "@lekoarts/gatsby-theme-cara/src/components/projects";
import About from "@lekoarts/gatsby-theme-cara/src/components/about";
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact";

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
