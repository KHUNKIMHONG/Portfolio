<template>
  <section id="experience" class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-16 relative">
    <div class="container mx-auto max-w-6xl">
      <!-- Faded "EXPERIENCE" Text in Background -->
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-red-600 text-center opacity-20 tracking-wider mb-2 lg:mb-8"
          data-aos="fade-down" data-aos-delay="100"
          v-text="'EXPERIENCE'">
      </h1>

      <!-- Main Title -->
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center lg:text-left mb-2 lg:mb-8 relative"
          v-text="'Professional Journey'"
          data-aos="fade-up" data-aos-delay="200">
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-4 relative">
        <!-- Left Section: Introduction & Achievements -->
        <div class="space-y-6 text-start">
          <p class="text-base sm:text-lg text-gray-300 leading-relaxed"
             data-aos="fade-up" data-aos-delay="300">
            My career as a web developer has been shaped by diverse roles that honed my skills in frontend, backend, and full-stack development. From internships to freelance projects, each experience has strengthened my ability to deliver innovative, user-focused solutions.
          </p>
          <p class="text-base sm:text-lg text-gray-300 leading-relaxed"
             data-aos="fade-up" data-aos-delay="400">
            Below, explore my professional milestones and key achievements that demonstrate my commitment to excellence in web development. Let’s connect to discuss how I can contribute to your next project!
          </p>
          <!-- Key Achievements -->
          <div class="mt-6" data-aos="fade-up" data-aos-delay="500">
            <h3 class="text-xl sm:text-2xl font-semibold text-white mb-4">Key Achievements</h3>
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
               Connect for Projects
            </a>
          </div>
        </div>

        <!-- Right Section: Job Cards -->
        <div class="w-full space-y-6">
          <div v-for="(job, index) in experience" :key="job.company"
               class="bg-zinc-900 p-6 rounded-md border border-red-500 shadow-lg hover:bg-gray-850 hover:shadow-red-500/50 transition-all duration-300"
               data-aos="fade-left" :data-aos-delay="700 + index * 100">
            <div class="flex justify-between items-center mb-4">
              <div class="text-xl sm:text-2xl font-semibold text-red-500 text-3d-effect">{{ job.position }}</div>
              <div class="text-gray-400 text-sm">{{ job.duration }}</div>
            </div>
            <div class="flex items-center space-x-3 text-gray-300 mb-4">
              <img :src="job.logo" alt="Company Logo" class="w-10 h-10 object-contain rounded-full" />
              <div class="font-medium">{{ job.company }}</div>
            </div>
            <!-- Short Description -->
            <p class="text-gray-300 text-sm sm:text-base leading-relaxed transition-all duration-300">
              {{ expandedJob === index ? job.shortDescription : truncatedText(job.shortDescription) }}
            </p>
            <!-- Expandable Details -->
            <div v-if="expandedJob === index" class="mt-4">
              <ul class="list-none space-y-3 text-gray-300">
                <li v-for="(item, idx) in job.description" :key="idx" class="flex items-start">
                  <span class="flex items-center justify-center w-4 h-4 mt-1 rounded-full bg-red-500 text-white flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span class="ml-3 text-sm sm:text-base leading-relaxed">{{ item }}</span>
                </li>
              </ul>
            </div>
            <!-- Show More / Show Less Button -->
            <button @click="toggleExpand(index)"
                    class="flex items-center text-red-400 mt-4 hover:text-red-500 transition-all duration-300"
                    data-aos="fade-up" :data-aos-delay="800 + index * 100" data-aos-duration="600" data-aos-once="true">
              <span class="mr-1">{{ expandedJob === index ? 'Show Less' : 'Show More' }}</span>
              <svg v-if="expandedJob === index" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const expandedJob = ref(null);

const experience = ref([
  {
    position: "Frontend Developer Intern",
    logo: "/Experience/FinTech.png",
    company: "FinTech Center",
    duration: "2023",
    shortDescription: "Developed a responsive bilingual website with Nuxt.js, integrated APIs, and collaborated with the team to enhance user experience.",
    description: [
      "Designed and developed a dynamic, responsive website using Nuxt.js and JavaScript with support for Khmer and English languages.",
      "Integrated RESTful APIs to display real-time news, events, and legal updates.",
      "Collaborated closely with UI/UX designers and backend developers to deliver a seamless and user-friendly bilingual interface.",
      "Strengthened skills in front-end development, multi-language support, API integration, and responsive web design best practices."
    ]
  },
  {
    position: "Full Stack Developer Intern",
    logo: "/Experience/ITC.png",
    company: "ITC",
    duration: "2024",
    shortDescription: "Built a fully functional e-commerce platform using Laravel, Tailwind CSS, MySQL, and Docker, with CI/CD integration via GitLab pipelines.",
    description: [
      "Designed and developed a responsive e-commerce website using Laravel for the backend and Tailwind CSS with Ajax for the frontend.",
      "Implemented MySQL for database management and integrated Docker to streamline deployment across environments.",
      "Handled the entire development lifecycle, including system design, coding, testing, deployment, and maintenance.",
      "Set up GitLab CI/CD pipelines to automate testing and deployment processes.",
      "Enhanced project management, problem-solving, and full-stack development skills through hands-on experience."
    ]
  },
  {
    position: "Web Developer",
    logo: "/Experience/Freelancer.png",
    company: "Freelancer",
    duration: "Present",
    shortDescription: "Working on various freelance web development projects, building scalable and maintainable applications with modern technologies while collaborating directly with clients.",
    description: [
      "Developed custom websites and web applications tailored to clients' needs using modern technologies like Nuxt.js, Vue.js, Laravel, and Tailwind CSS.",
      "Collaborated directly with clients to gather requirements, propose solutions, and deliver high-quality results on time.",
      "Integrated third-party APIs and created backend services to support dynamic content and user interactions.",
      "Ensured responsive design, SEO best practices, and performance optimization across different devices and browsers.",
      "Managed deployment, hosting, and ongoing maintenance of freelance projects."
    ]
  }
]);

const achievements = ref([
  "Successfully launched a bilingual website for FinTech Center, improving user engagement by 30%.",
  "Built an e-commerce platform with automated deployment.",
  "Delivered 5+ projects, achieving 100% client satisfaction with responsive and SEO-optimized websites."
]);

function toggleExpand(index) {
  expandedJob.value = expandedJob.value === index ? null : index;
}

const truncatedText = (text) => {
  const maxLength = 130;
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};
</script>

<style scoped>
h2 {
  background: linear-gradient(to right, #ffffff, #ef4444);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>