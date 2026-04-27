<template>
  <section id="services" class="py-20 px-4 sm:px-6 lg:px-12">
    <div class="container mx-auto max-w-6xl">
      <div class="max-w-3xl mb-14">
        <p class="text-sm uppercase tracking-[0.2em] text-primary-400 font-semibold mb-4" data-aos="fade-up">Services</p>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5" data-aos="fade-up" data-aos-delay="80">
          Clean digital products built for real people.
        </h2>
        <p class="text-gray-400 text-base sm:text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="140">
          I focus on practical web solutions that are fast, maintainable, and easy to use.
          From design-ready interfaces to reliable backend systems, each service is delivered with clear communication.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
        <article
          v-for="(service, index) in services"
          :key="service.title"
          class="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-colors duration-300 hover:border-primary-500/40"
          data-aos="fade-up"
          :data-aos-delay="220 + index * 90"
        >
          <div class="flex items-start justify-between mb-5">
            <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-500/10 text-primary-400 border border-primary-500/20">
              <div v-html="service.icon" class="w-6 h-6"></div>
            </div>
            <span class="text-xs font-medium text-zinc-500">{{ formatIndex(index) }}</span>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3">{{ service.title }}</h3>
          <p class="text-sm text-gray-400 leading-relaxed mb-5">{{ service.description }}</p>

          <ul class="flex flex-wrap gap-2 mb-6">
            <li
              v-for="tech in service.technologies"
              :key="tech"
              class="text-xs px-2.5 py-1 rounded-md border border-zinc-700 text-gray-300"
            >
              {{ tech }}
            </li>
          </ul>

          <p class="text-sm text-primary-300 font-medium">{{ service.tagline }}</p>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Enhanced Services Section Component
 * 
 * Premium services showcase with modern glassmorphism design,
 * animated cards, and enhanced visual hierarchy.
 * 
 * @component
 * @example
 * <ServicesSection />
 * 
 * Features:
 * - Glassmorphism card design for all services
 * - Enhanced icon containers with better styling
 * - Numbered badges for easy reference
 * - Technology tags with hover effects
 * - Animated decorative elements
 * - Premium call-to-action section
 * - Fully responsive grid layout
 * - AOS animation integration
 * - Floating background elements
 * - Smooth hover transitions
 * 
 * @author Khun Kimhong
 */

import { ref } from 'vue';
import { servicesData } from '@/data/services_data';
import type { Service } from '@/interface/service_interface';

const services = ref<Service[]>(servicesData.services);

const formatIndex = (index: number): string => String(index + 1).padStart(2, '0');
</script>

<style scoped>
@media (max-width: 640px) {
  h2 {
    font-size: 2rem;
    line-height: 1.2;
  }
}
</style>