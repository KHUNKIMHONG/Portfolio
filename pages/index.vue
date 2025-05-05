<template>
  <div>
    <Header />
    <Banner />
    <Link />
    <Service />
    <About />
    <Skills />
    <Experience />
    <Education />
    <Project />
    <WorkFlow />
    <Blog />
    <Contact />
    <Faq />
    <Quote />
    <Footer />
  </div>
</template>

<script setup>
import Header from "~/layouts/Header.vue";
import Footer from "~/layouts/Footer.vue";
import Banner from "~/components/Banner";
import Link from "~/components/Link";
import Service from "~/components/Service";
import About from "~/components/About";
import Skills from "~/components/Skill"; 
import Education from "~/components/Education";
import Experience from "~/components/Experience";
import Contact from "~/components/Contact";
import WorkFlow from "~/components/Workflow";
import Project  from "~/components/Project";
import Faq from "~/components/Faq";
import Quote from "~/components/Quote";
import Blog from "~/components/Blog";
</script>
