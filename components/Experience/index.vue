<template>
  <section id="experience" class="py-24 px-4 sm:px-6 lg:px-12 bg-[#0e1020]">
    <div class="section-container">

      <div class="mb-14" data-aos="fade-up">
        <p class="section-eyebrow">Experience</p>
        <h2 class="section-title">Professional journey.</h2>
        <div class="section-line"></div>
        <p class="section-subtitle max-w-2xl">
          Each role has sharpened my skills and deepened my understanding of building real products for real users.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">

        <!-- Left: overview + achievements -->
        <div class="space-y-5" data-aos="fade-right" data-aos-delay="80">
          <div class="card card-hover">
            <h3 class="text-sm font-semibold text-white mb-2">Career overview</h3>
            <p class="text-sm text-gray-400 leading-relaxed">
              My career spans frontend, backend, and full-stack work. I've grown from freelancing to building fintech infrastructure at a payments company.
            </p>
          </div>

          <div class="card card-hover">
            <h3 class="text-sm font-semibold text-white mb-4">Key achievements</h3>
            <ul class="space-y-3">
              <li v-for="(a, i) in achievements" :key="i" class="flex items-start gap-2.5 text-sm text-gray-400">
                <svg class="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
                {{ a }}
              </li>
            </ul>
          </div>

          <a href="#contact" class="btn-primary w-full justify-center">
            Let's connect
          </a>
        </div>

        <!-- Right: timeline -->
        <div class="lg:col-span-2 space-y-5">
          <div
            v-for="(job, index) in experience"
            :key="job.company"
            class="card card-hover"
            data-aos="fade-up"
            :data-aos-delay="120 + index * 80"
          >
            <!-- Header row -->
            <div class="flex items-start justify-between gap-4 mb-4">
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-12 h-12 bg-white rounded-xl p-2 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <img :src="job.logo" :alt="job.company" class="w-full h-full object-contain"/>
                </div>
                <div class="min-w-0">
                  <h3 class="text-base font-semibold text-white truncate">{{ job.position }}</h3>
                  <p class="text-sm text-primary-400">{{ job.company }}</p>
                </div>
              </div>
              <span class="text-xs text-gray-500 whitespace-nowrap border border-white/[0.08] rounded-lg px-2.5 py-1 flex-shrink-0">
                {{ job.duration }}
              </span>
            </div>

            <!-- Description -->
            <p class="text-sm text-gray-400 leading-relaxed mb-4">
              {{ expandedJob === index ? job.shortDescription : truncate(job.shortDescription) }}
            </p>

            <!-- Expanded responsibilities -->
            <Transition name="expand">
              <ul v-if="expandedJob === index" class="space-y-2 mb-4 border-t border-white/[0.06] pt-4">
                <li v-for="(item, i) in job.description" :key="i" class="flex items-start gap-2 text-sm text-gray-400">
                  <span class="w-1 h-1 rounded-full bg-primary-500 mt-2 flex-shrink-0"></span>
                  {{ item }}
                </li>
              </ul>
            </Transition>

            <button
              @click="toggleExpand(index)"
              class="text-xs text-primary-400 font-medium flex items-center gap-1.5 hover:text-primary-300 transition-colors"
            >
              {{ expandedJob === index ? 'Show less' : 'Show responsibilities' }}
              <svg class="w-3.5 h-3.5 transition-transform duration-200" :class="expandedJob === index ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { EXPERIENCE_DATA, ACHIEVEMENTS_DATA } from "@/data/experience_data";
import type { Job } from "~/interface/experience_interface";

const expandedJob  = ref<number | null>(null);
const experience   = ref<Job[]>(EXPERIENCE_DATA);
const achievements = ref<string[]>(ACHIEVEMENTS_DATA);

const toggleExpand = (i: number) => { expandedJob.value = expandedJob.value === i ? null : i; };
const truncate     = (t: string, n = 130) => t.length > n ? t.slice(0, n) + "…" : t;
</script>

<style scoped>
.expand-enter-active, .expand-leave-active { transition: opacity 0.2s, transform 0.2s; }
.expand-enter-from, .expand-leave-to       { opacity: 0; transform: translateY(-6px); }
</style>
