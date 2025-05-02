<template>
  <section id="education" class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-16 relative">
    <div class="container mx-auto max-w-6xl">
      <!-- Faded "EDUCATION" Text in Background -->
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-red-600 text-center opacity-20 tracking-wider mb-2 lg:mb-8"
          data-aos="fade-down" data-aos-delay="100"
          v-text="'EDUCATION'">
      </h1>

      <!-- Main Title -->
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center lg:text-left mb-2 lg:mb-8 relative"
          v-text="'Educational Background'"
          data-aos="fade-up" data-aos-delay="200">
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-4 relative">
        <!-- Left Section: Introduction & Achievements -->
        <div class="space-y-6 text-start">
          <p class="text-base sm:text-lg text-gray-300 leading-relaxed"
             data-aos="fade-up" data-aos-delay="300">
            My academic path has been a cornerstone of my growth as a web developer, from foundational learning in primary school to advanced studies in Software Engineering at the Institute of Technology of Cambodia (ITC). Each step has equipped me with the knowledge and skills to excel in technology.
          </p>
          <p class="text-base sm:text-lg text-gray-300 leading-relaxed"
             data-aos="fade-up" data-aos-delay="400">
            Below, explore my educational milestones and key achievements that highlight my dedication to learning and innovation. Let’s connect to bring my expertise to your projects!
          </p>
          <!-- Key Academic Achievements -->
          <div class="mt-6" data-aos="fade-up" data-aos-delay="500">
            <h3 class="text-xl sm:text-2xl font-semibold text-white mb-4">Key Academic Achievements</h3>
            <ul class="space-y-3 text-gray-300">
              <li v-for="(achievement, idx) in achievements" :key="idx" class="flex items-start">
                <span class="flex items-center justify-center w-4 h-4 mt-1 rounded-full bg-red-500 text-white flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span class="ml-3 text-sm sm:text-base leading-relaxed">{{ achievement }}</span>
              </li>
            </ul>
          </div>
          <!-- Call-to-Action Button -->
          <div class="mt-6" data-aos="fade-up" data-aos-delay="600">
            <a href="#contact"
               class="inline-block bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
              Explore Collaboration
            </a>
          </div>
        </div>

        <!-- Right Section: Education Cards -->
        <div class="w-full space-y-6">
          <div v-for="(degree, index) in education" :key="degree.institution"
               class="hover:shadow-red-600/40 transition-all duration-300 hover:-translate-y-1"
               data-aos="fade-left" :data-aos-delay="700 + index * 100">
            <div class="flex justify-between items-center mb-4">
              <div class="text-xl sm:text-2xl font-semibold text-red-500 text-3d-effect">{{ degree.degree }}</div>
              <div class="text-gray-400 text-sm">{{ degree.year }}</div>
            </div>
            <div class="flex items-center space-x-3 text-gray-200 mb-4">
              <img :src="degree.logo" alt="Institution Logo" class="w-12 h-12 object-contain" />
              <div class="font-medium">{{ degree.institution }}</div>
            </div>
            <p class="text-gray-200 text-sm sm:text-base leading-relaxed">{{ degree.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const education = ref([
  {
    degree: "Bachelor of Information and Communication Engineering",
    logo: "/Education/ITC.png",
    institution: "Institute of Technology of Cambodia (ITC)",
    year: "2019 - 2024",
    description:
      "Gained expertise in software development, algorithms, and system design. Worked on various academic projects related to web applications and software engineering principles.",
  },
  {
    degree: "High School Diploma",
    logo: "/Education/HighSchool.png",
    institution: "Hansen Thnout Choum High School",
    year: "2007 - 2019",
    description:
      "Focused on mathematics, science, and technology subjects, building a strong foundation for engineering and computer science studies.",
  },
  {
    degree: "Primary School",
    logo: "/Education/HighSchool.png",
    institution: "Trang Pang Anderk Primary School",
    year: "2007 - 2012",
    description:
      "Completed primary education with a strong emphasis on fundamental subjects, including mathematics, language, and science.",
  },
]);

const achievements = ref([
  "Achieved a Grade C in the 2019 national high school exam, securing admission to ITC.",
  "Completed multiple web development projects at ITC, including a full-stack application showcased in final-year assessments.",
  "Recognized for academic excellence in mathematics and science during high school.",
]);
</script>

<style scoped>
/* Enhanced styling for education cards */
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, #1f2937, #2d3748);
}

.border-red-600\/20 {
  border-color: rgba(220, 38, 38, 0.2);
}

.rounded-xl {
  border-radius: 0.75rem;
}

.shadow-xl {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

.hover:shadow-2xl:hover {
  box-shadow: 0 15px 25px rgba(220, 38, 38, 0.3);
}

.hover:scale-105:hover {
  transform: scale(1.05);
}

.transition-all {
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
}

/* Ensure text readability and spacing */
.text-gray-300 {
  color: #d1d5db;
}

.text-gray-400 {
  color: #9ca3af;
}

.font-medium {
  font-weight: 500;
}

/* Optional: Add a subtle glow effect on hover for cards */
.bg-gradient-to-br:hover {
  box-shadow: 0 0 15px rgba(220, 38, 38, 0.1);
}

h2 {
  background: linear-gradient(to right, #ffffff, #ef4444);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>