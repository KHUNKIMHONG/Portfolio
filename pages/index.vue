<template>
  <div>
    <a href="#top" class="skip-link">
      Skip to content
    </a>
    <AppHeader />
    <Banner />
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
    <AppFooter />
  </div>
</template>

<script setup>
import { useHead } from '#imports';

import Banner from "~/components/Banner";
import Service from "~/components/Service";
import About from "~/components/About";
import Skills from "~/components/Skill"; 
import Education from "~/components/Education";
import Experience from "~/components/Experience";
import Contact from "~/components/Contact";
import WorkFlow from "~/components/WorkFlow";
import Project from "~/components/Project";
import Faq from "~/components/Faq";
import Quote from "~/components/Quote";
import Blog from "~/components/Blog";

// This is the useHead composable with your SEO metadata
useHead({
  title: 'KHUN KIMHONG - Portfolio',
  meta: [
    { name: 'description', content: 'KHUN KIMHONG - Full Stack Developer at Bongloy Payments PLC. Portfolio showcasing Vue.js, Nuxt, Elixir, and modern web projects.' },
    { name: 'keywords', content: 'Khun Kimhong, portfolio, full stack developer, Vue.js, Nuxt, Elixir, Bongloy, JavaScript, web development, projects' },
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
