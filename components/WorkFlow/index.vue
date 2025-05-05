<template>
    <section id="workflow" class="w-full py-20 px-6 sm:px-8 lg:px-16 relative overflow-hidden">
        <div class="container mx-auto max-w-6xl">

            <!-- Background "WORKFLOW" Text -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-red-600 text-center opacity-10 tracking-widest mb-2 lg:mb-8"
                data-aos="fade-down" data-aos-delay="100">
                WORKFLOW
            </h1>

            <!-- Main Title -->
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center lg:text-start mb-2 lg:mb-6"
                data-aos="fade-up" data-aos-delay="200">
                Development Approach
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                <!-- Left: Overview -->
                <div class="space-y-8 text-center md:text-left">

                    <!-- Intro Text -->
                    <p class="text-base sm:text-lg text-gray-300 mb-4 leading-relaxed" data-aos="fade-up"
                        data-aos-delay="300">
                        My workflow is a clear, client-centric process designed to turn ideas into high-quality web
                        solutions.
                        Every step ensures precision, collaboration, and results tailored to your vision.
                    </p>

                    <!-- Why Workflow -->
                    <div class="text-start"
                        data-aos="fade-up" data-aos-delay="400">
                        <h3 class="text-2xl font-semibold text-white mb-4">Why This Workflow?</h3>
                        <ul class="space-y-5">
                            <li v-for="(benefit, idx) in benefits" :key="idx" class="flex items-start">
                                <span
                                    class="flex items-center justify-center w-6 h-6 mt-1 rounded-full bg-red-500 text-white flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span class="ml-4 text-gray-300 text-base">{{ benefit }}</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Step List -->
                    <div class="text-start"
                         data-aos="fade-up" data-aos-delay="500">
                        <p class="text-gray-200 font-medium mb-4">The journey to deliver your project:</p>
                        <ul class="space-y-3">
                            <li v-for="(step, index) in steps" :key="index"
                                class="text-red-400 font-semibold text-sm sm:text-base">
                                {{ index + 1 }}. {{ step.title }}
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Right: Detailed Steps -->
                <div class="space-y-6 lg:space-y-10">
                    <div v-for="(step, index) in steps" :key="index" data-aos="fade-left"
                        :data-aos-delay="600 + index * 100" class="flex items-start space-x-5 group">
                        <div class="flex-shrink-0">
                            <div
                                class="bg-red-500 p-4 rounded-full text-white transition-transform transform group-hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" :viewBox="step.svg.viewBox"
                                    fill="none" stroke="currentColor">
                                    <path :d="step.svg.path" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h4
                                class="text-lg sm:text-xl font-semibold text-white mb-1 group-hover:text-red-400 transition-colors">
                                {{ index + 1 }}. {{ step.title }}
                            </h4>
                            <p class="text-gray-400 text-sm sm:text-base leading-relaxed">
                                {{ step.description }}
                            </p>
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
        description: "Collaborate with clients to outline project goals, scope, and timelines, ensuring a clear roadmap for success.",
        svg: {
            viewBox: "0 0 24 24",
            path: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        }
    },
    {
        title: "Design & Development",
        description: "Create intuitive UI/UX and robust codebases using modern frameworks to build user-centric web solutions.",
        svg: {
            viewBox: "0 0 24 24",
            path: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536l-12 12a2 2 0 01-1.414.586H5a1 1 0 01-1-1v-3.293a2 2 0 01.586-1.414l12-12z"
        }
    },
    {
        title: "Testing & Refinement",
        description: "Conduct thorough testing for performance, usability, and responsiveness, refining the product based on feedback.",
        svg: {
            viewBox: "0 0 24 24",
            path: "M12 6v6m0 0v6m0-6h6m-6 0H6"
        }
    },
    {
        title: "Deployment",
        description: "Seamlessly launch the finalized product into production, ensuring it meets all expectations and requirements.",
        svg: {
            viewBox: "0 0 24 24",
            path: "M5 20h14M12 3v13m0 0l-4-4m4 4l4-4"
        }
    },
    {
        title: "Support & Evolution",
        description: "Provide ongoing maintenance, performance monitoring, and updates to keep your solution optimized and evolving.",
        svg: {
            viewBox: "0 0 24 24",
            path: "M4 4v6h6M20 20v-6h-6M5 19a9 9 0 0014-7h-1m-3-6a9 9 0 00-14 7h1"
        }
    }
]);

const benefits = ref([
    "Fosters clear communication and client alignment from day one.",
    "Ensures high-quality, user-focused solutions through iterative testing.",
    "Delivers scalable, maintainable products with ongoing support for future growth."
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