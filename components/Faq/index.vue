<template>
  <section id="faq" class="py-16 px-6 lg:px-24">
    <div class="container mx-auto max-w-6xl">
      <!-- Section Header -->
      <h2
        class="text-4xl sm:text-5xl lg:text-6xl text-center font-extrabold text-red-600  mb-8 tracking-widest opacity-10" 
        data-aos="fade-up"
        data-aos-duration="600"
      >
        Frequently Asked Questions
      </h2>

      <!-- FAQ List -->
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="mb-8 transition-shadow duration-300"
        data-aos="fade-up"
        :data-aos-delay="100 + index * 100"
        data-aos-duration="600"
      >
        <h3 class="text-xl font-semibold text-gray-200 hover:text-red-500 mb-3">{{ faq.question }}</h3>
        <p class="text-gray-400 leading-relaxed">{{ faq.answer }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Define FAQ interface for TypeScript
interface FAQ {
  question: string;
  answer: string;
}

// Initialize FAQs with type
const faqs = ref<FAQ[]>([
  {
    question: "What experience do you have in web development?",
    answer:
      "I have several years of hands-on experience in developing websites and web applications using Vue.js, Nuxt.js, Laravel, TailwindCSS, and other modern technologies.",
  },
  {
    question: "What industries have you worked with?",
    answer:
      "I've worked on projects in industries such as e-commerce, education, portfolio websites, and corporate business platforms.",
  },
  {
    question: "How do you manage projects and deadlines?",
    answer:
      "I follow a structured workflow including planning, design, development, testing, and deployment phases, ensuring projects are delivered on time with high quality.",
  },
  {
    question: "What is your approach to designing a website?",
    answer:
      "I focus on a user-first design, ensuring the website is clean, modern, mobile-responsive, and optimized for performance and SEO.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Absolutely! I offer maintenance and update services to ensure your website stays secure, updated, and functioning properly after launch.",
  },
  {
    question: "What makes you different from other developers?",
    answer:
      "I combine technical expertise with a strong eye for design. I’m passionate about building solutions that not only work well but also look great and enhance the user experience.",
  },
]);

</script>
