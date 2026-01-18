<template>
    <section id="workflow" class="w-full min-h-screen py-20 px-6 sm:px-8 lg:px-16 relative overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black flex items-center">
        
        <!-- Animated Background Elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl animate-float"></div>
            <div class="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-3xl animate-float-delayed"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/5 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div class="container mx-auto max-w-7xl relative z-10">

            <!-- Header Section with Enhanced Typography -->
            <div class="text-center mb-20">
                <!-- Background Title with Glow Effect -->
                <div class="relative text-7xl sm:text-8xl lg:text-9xl font-black mb-6" data-aos="fade-down" data-aos-delay="100">
                    <span class="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-red-500/30 to-pink-500/30 blur-sm">
                        WORKFLOW
                    </span>
                    <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-red-500/20 to-pink-500/20 tracking-widest select-none">
                        WORKFLOW
                    </span>
                </div>

                <!-- Main Title with Enhanced Gradient -->
                <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 relative inline-block" data-aos="fade-up" data-aos-delay="200">
                    <span class="bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
                        Development Approach
                    </span>
                </h2>

                <!-- Animated Decorative Line -->
                <div class="flex items-center justify-center gap-2 mb-8" data-aos="zoom-in" data-aos-delay="300">
                    <div class="w-8 h-0.5 bg-gradient-to-r from-transparent to-red-500 rounded-full"></div>
                    <div class="w-24 h-1 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 rounded-full shadow-lg shadow-red-500/50"></div>
                    <div class="w-8 h-0.5 bg-gradient-to-l from-transparent to-red-500 rounded-full"></div>
                </div>

                <!-- Introduction Text -->
                <p class="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="400">
                    My workflow is a clear, client-centric process designed to turn ideas into high-quality web solutions. Every step ensures precision, collaboration, and results tailored to your vision.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                <!-- Left: Overview Section with Enhanced Cards -->
                <div class="space-y-8">

                    <!-- Why Workflow Card -->
                    <div class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800/50 shadow-xl hover:border-red-500/30 transition-all duration-500" data-aos="fade-right" data-aos-delay="400">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/20 to-pink-600/20 flex items-center justify-center border border-red-500/20 shadow-lg shadow-red-500/20">
                                <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-white">Why This Workflow?</h3>
                        </div>

                        <ul class="space-y-4">
                            <li v-for="(benefit, idx) in benefits" :key="idx" class="flex items-start group/benefit">
                                <span class="flex items-center justify-center w-7 h-7 mt-0.5 rounded-lg bg-gradient-to-br from-red-600/20 to-pink-600/20 text-red-400 flex-shrink-0 border border-red-500/20 group-hover/benefit:scale-110 group-hover/benefit:shadow-lg group-hover/benefit:shadow-red-500/30 transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span class="ml-4 text-gray-300 text-base leading-relaxed group-hover/benefit:text-gray-200 transition-colors">{{ benefit }}</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Step List Card -->
                    <div class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800/50 shadow-xl hover:border-red-500/30 transition-all duration-500" data-aos="fade-right" data-aos-delay="500">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/20 to-pink-600/20 flex items-center justify-center border border-red-500/20 shadow-lg shadow-red-500/20">
                                <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-white">Project Journey</h3>
                        </div>

                        <p class="text-gray-400 mb-6 text-sm">The journey to deliver your project:</p>

                        <ul class="space-y-3">
                            <li v-for="(step, index) in steps" :key="index" class="flex items-start group/step cursor-pointer hover:translate-x-2 transition-transform duration-300">
                                <span class="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-red-600/10 to-pink-600/10 border border-red-500/20 flex items-center justify-center text-red-400 font-bold text-sm mr-3 group-hover/step:bg-gradient-to-br group-hover/step:from-red-600/30 group-hover/step:to-pink-600/30 group-hover/step:scale-110 transition-all duration-300">
                                    {{ index + 1 }}
                                </span>
                                <span class="text-gray-300 font-medium text-sm sm:text-base flex-1 pt-1 group-hover/step:text-red-400 transition-colors">
                                    {{ step.title }}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Right: Detailed Steps with Enhanced Design -->
                <div class="space-y-6">
                    <div v-for="(step, index) in steps" :key="index" data-aos="fade-left" :data-aos-delay="600 + index * 100" 
                        class="relative bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-2xl p-6 border border-zinc-800/50 shadow-xl hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 group overflow-hidden">
                        
                        <!-- Gradient Overlay on Hover -->
                        <div class="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                        <!-- Number Badge -->
                        <div class="absolute top-4 right-4 w-10 h-10 rounded-xl bg-gradient-to-br from-red-600/20 to-pink-600/20 border border-red-500/20 flex items-center justify-center text-red-400 font-bold text-lg shadow-lg shadow-red-500/20 group-hover:scale-110 group-hover:shadow-red-500/40 transition-all duration-300">
                            {{ index + 1 }}
                        </div>

                        <div class="flex items-start space-x-5 relative z-10">
                            <!-- Icon Container -->
                            <div class="flex-shrink-0">
                                <div class="bg-gradient-to-br from-red-600 to-pink-600 p-4 rounded-xl text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-red-500/50 border border-red-500/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" :viewBox="step.svg.viewBox" fill="none" stroke="currentColor">
                                        <path :d="step.svg.path" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    </svg>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="flex-1">
                                <h4 class="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                                    {{ step.title }}
                                </h4>
                                <p class="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {{ step.description }}
                                </p>
                            </div>
                        </div>

                        <!-- Bottom Accent Line -->
                        <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                </div>

            </div>

            <!-- Call to Action Section -->
            <div class="mt-20 text-center" data-aos="fade-up" data-aos-delay="800">
                <div class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-3xl p-10 sm:p-12 border border-zinc-800/50 shadow-2xl relative overflow-hidden group">
                    
                    <!-- Animated Background Gradient -->
                    <div class="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <!-- Decorative Corner Accents -->
                    <div class="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-transparent rounded-br-full"></div>
                    <div class="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-500/10 to-transparent rounded-tl-full"></div>
                    
                    <div class="max-w-2xl mx-auto relative z-10">
                        <div class="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600/20 to-pink-600/20 mb-8 border border-red-500/20 shadow-lg shadow-red-500/20 group-hover:scale-110 transition-transform duration-500">
                            <svg class="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        
                        <h3 class="text-3xl sm:text-4xl font-bold text-white mb-5">
                            Ready to Start Your Project?
                        </h3>
                        
                        <p class="text-gray-400 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
                            Let's bring your ideas to life with a proven workflow that delivers exceptional results.
                        </p>
                        
                        <a href="#contact" class="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 group/btn border border-red-500/20">
                            <span class="text-lg">Let's Get Started</span>
                            <svg class="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
/**
 * Enhanced Workflow Section Component
 * 
 * Premium workflow visualization with modern glassmorphism design,
 * detailed step breakdown, and enhanced visual hierarchy.
 * 
 * @component
 * @example
 * <WorkflowSection />
 * 
 * Features:
 * - Glassmorphism card design throughout
 * - Enhanced step cards with hover effects
 * - Numbered badges for easy reference
 * - Two-column layout: overview and detailed steps
 * - Call-to-action section at the bottom
 * - Fully responsive and accessible
 * - AOS animation integration
 * - Floating background elements
 * 
 * @author Khun Kimhong
 */

import { ref } from "vue"
import type { Step } from "@/interface/workflow_interface"
import { STEPS_DATA, BENEFITS_DATA } from "@/data/workflow_data"

const steps = ref<Step[]>(STEPS_DATA)
const benefits = ref<string[]>(BENEFITS_DATA)
</script>

<style scoped>
/**
 * Floating Animation for Background Elements
 */
@keyframes float {
    0%, 100% {
        transform: translateY(0) translateX(0);
    }
    33% {
        transform: translateY(-30px) translateX(20px);
    }
    66% {
        transform: translateY(15px) translateX(-15px);
    }
}

@keyframes float-delayed {
    0%, 100% {
        transform: translateY(0) translateX(0);
    }
    33% {
        transform: translateY(20px) translateX(-20px);
    }
    66% {
        transform: translateY(-15px) translateX(15px);
    }
}

.animate-float {
    animation: float 10s ease-in-out infinite;
}

.animate-float-delayed {
    animation: float-delayed 12s ease-in-out infinite;
    animation-delay: 1.5s;
}

/**
 * Slow Pulse Animation
 */
@keyframes pulse-slow {
    0%, 100% {
        opacity: 0.3;
        transform: scale(1);
    }
    50% {
        opacity: 0.5;
        transform: scale(1.05);
    }
}

.animate-pulse-slow {
    animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/**
 * Custom Scrollbar
 */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #09090b;
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #dc2626, #ec4899);
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #b91c1c, #be185d);
}

/**
 * Performance Optimization
 */
.group {
    will-change: transform, border-color;
}

/**
 * Responsive Typography
 */
@media (max-width: 640px) {
    h2 {
        font-size: 2rem;
        line-height: 1.2;
    }
}
</style>