<template>
  <section id="Workflow" 
  class="py-16 px-6 lg:px-24 relative overflow-hidden">
    <div class="container mx-auto max-w-7xl">
      <!-- Background Title -->
      <h1
        class="text-[30px] md:text-[50px] lg:text-[60px] font-extrabold text-red-500 opacity-5 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 tracking-wider"
        v-text="'WORKFLOW'">
      </h1>

      <!-- Main Title -->
      <h2 
       class="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4 lg:mb-16 relative"
       v-text="'My Development Process'">
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Left Side: Process Overview -->
        <div class="text-left space-y-8 lg:sticky lg:top-24">
          <p class="text-gray-300 text-lg">A streamlined approach to turning ideas into reality:</p>
          <ul class="space-y-4">
            <li v-for="(step, index) in steps" :key="index" class="text-red-400 font-medium">
              {{ index + 1 }}. {{ step.title }}
            </li>
          </ul>
        </div>

        <!-- Right Side: Detailed Steps -->
        <div class="space-y-12">
          <div v-for="(step, index) in steps" :key="index" class="flex items-start space-x-6 group">
            <div class="flex-shrink-0 relative">
              <div class="bg-red-500 p-4 rounded-xl text-white transform transition-transform group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" :viewBox="step.svg.viewBox" fill="none" stroke="currentColor">
                  <path :d="step.svg.path" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
              </div>
              <div class="absolute -top-2 -left-2 w-4 h-4 bg-red-300 rounded-full opacity-0 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <div>
              <h3 class="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                {{ index + 1 }}. {{ step.title }}
              </h3>
              <p class="text-gray-200 leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const steps = ref([
  {
    title: "Discovery & Planning",
    description: "Collaborate to define project scope, objectives, and timeline while creating a strategic roadmap for success.",
    svg: {
      viewBox: "0 0 24 24",
      path: "M12 2l9 4.5v12L12 22l-9-4.5v-12L12 2zm0 4v12m-6-6h12"
    }
  },
  {
    title: "Design & Development",
    description: "Craft intuitive designs and robust code to transform concepts into functional, user-friendly solutions.",
    svg: {
      viewBox: "0 0 24 24",
      path: "M3 17l4-4 3 3 4-4 7 7M3 7h18"
    }
  },
  {
    title: "Testing & Refinement",
    description: "Rigorously test functionality, performance, and usability, making iterative improvements for optimal results.",
    svg: {
      viewBox: "0 0 24 24",
      path: "M9 12l2 2 4-4m6 4a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  },
  {
    title: "Deployment",
    description: "Launch the polished product with seamless integration, ensuring it meets all requirements and expectations.",
    svg: {
      viewBox: "0 0 24 24",
      path: "M12 2l8 8-8 8-8-8 8-8zm0 4v8"
    }
  },
  {
    title: "Support & Evolution",
    description: "Provide ongoing support, gather feedback, and implement updates to keep the product thriving.",
    svg: {
      viewBox: "0 0 24 24",
      path: "M4 12a8 8 0 0116 0m-8-8v16m-6-6h12"
    }
  }
]);
</script>

<style scoped>
h2 {
  background: linear-gradient(to right, #ffffff, #ef4444);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>







