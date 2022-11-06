import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>My portfolio</title>
      </Head>

      {/* Header Section */}
      <Header />
      {/* Hero Section */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About Section */}
      <section id="about" className=" snap-center">
        <About />
      </section>
      {/* Experience Section */}
      <section id="experience" className=" snap-center">
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id="skills" className=" snap-start">
        <Skills />
      </section>
      {/* Projects */}
      {/* Contact */}
    </div>
  );
};

export default Home;
