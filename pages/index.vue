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
import { useHead } from '#imports';

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
import Project from "~/components/Project";
import Faq from "~/components/Faq";
import Quote from "~/components/Quote";
import Blog from "~/components/Blog";

// This is the useHead composable with your SEO metadata
useHead({
  title: 'KHUN KIMHONG - Portfolio',
  meta: [
    { name: 'description', content: 'Explore the professional portfolio of KHUN KIMHONG, a web developer and designer showcasing expertise in creative projects, and innovative solutions.' },
    { name: 'keywords', content: 'Khun Kimhong, portfolio, web developer, designer, JavaScript, Vue.js, Nuxt, CSS, HTML, projects' },
    { property: 'og:title', content: 'KHUN KIMHONG - Portfolio' },
    { property: 'og:description', content: 'Explore the professional portfolio of KHUN KIMHONG, a web developer and designer showcasing expertise in creative projects, and innovative solutions.' },
    { property: 'og:image', content: 'https://khunkimhong.github.io/Portfolio/ower/ownPhoto.jpg' },
    { property: 'og:url', content: 'https://khunkimhong.github.io/Portfolio/' },
  ],
  link: [
    { rel: 'canonical', href: 'https://khunkimhong.github.io/Portfolio/' }
  ]
})
</script>
