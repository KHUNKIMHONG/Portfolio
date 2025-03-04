<template>
  <section
    id="education"
    class="min-h-screen flex items-center justify-center px-6 lg:px-24 py-12 relative"
  >
    <div class="container mx-auto max-w-5xl">
      <!-- Faded "EDUCATION" Text in Background -->
      <h1
        class="text-[30px] md:text-[50px] lg:text-[60px] font-extrabold text-red-500 opacity-10 absolute top-5 md:top-10 left-1/2 transform -translate-x-1/2"
      >
        EDUCATION
      </h1>

      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start mt-12 relative"
      >
        <!-- Left Section: Brief Description -->
        <div class="space-y-6 md:space-y-8 text-left">
          <h2
            class="text-3xl text-center lg:text-left md:text-4xl lg:text-5xl font-bold text-white tracking-wide"
          >
            My Academic Journey
          </h2>
          <p class="text-gray-300 text-lg md:text-xl">
            From Primary School to High School, and now pursuing a Bachelor's in
            Software Engineering, here’s a snapshot of my educational path.
          </p>
        </div>

        <!-- Right Section: Education Cards (Updated Styling) -->
        <div class="w-full mx-auto space-y-8">
          <div v-for="degree in education" :key="degree.institution">
            <div class="flex justify-between items-center mb-4">
              <div class="text-2xl font-semibold text-red-500">
                {{ degree.degree }}
              </div>
              <div class="text-gray-400 text-sm">{{ degree.year }}</div>
            </div>
            <div class="text-gray-300 mb-2 font-medium">
              {{ degree.institution }}
            </div>
            <p class="text-gray-400">{{ degree.description }}</p>
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
    degree: "Bachelor of Software Engineering",
    institution: "Institute of Technology of Cambodia (ITC)",
    year: "2019 - 2024",
    description:
      "Gained expertise in software development, algorithms, and system design. Worked on various academic projects related to web applications and software engineering principles.",
  },
  {
    degree: "High School Diploma",
    institution: "Hansen Thnout Choum High School",
    year: "2007 - 2019",
    description:
      "Focused on mathematics, science, and technology subjects, building a strong foundation for engineering and computer science studies.",
  },
  {
    degree: "Primary School",
    institution: "Trang Pang Anderk Primary School",
    year: "2007 - 2012",
    description:
      "Completed primary education with a strong emphasis on fundamental subjects, including mathematics, language, and science.",
  },
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