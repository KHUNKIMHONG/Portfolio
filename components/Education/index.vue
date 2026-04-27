<template>
  <section id="education" class="py-24 px-4 sm:px-6 lg:px-12 bg-[#0b0d17]">
    <div class="section-container">

      <div class="mb-14" data-aos="fade-up">
        <p class="section-eyebrow">Education</p>
        <h2 class="section-title">Academic foundation.</h2>
        <div class="section-line"></div>
        <p class="section-subtitle max-w-2xl">
          A five-year Software Engineering program that gave me the fundamentals and drive to build things that matter.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">

        <!-- Left: overview + achievements -->
        <div class="space-y-5" data-aos="fade-right" data-aos-delay="80">
          <div class="card card-hover">
            <h3 class="text-sm font-semibold text-white mb-2">My learning path</h3>
            <p class="text-sm text-gray-400 leading-relaxed">
              From high school in Takeo Province to a Software Engineering degree from ITC, education has been the foundation of every project I build.
            </p>
          </div>

          <div class="card card-hover">
            <h3 class="text-sm font-semibold text-white mb-4">Academic highlights</h3>
            <ul class="space-y-3">
              <li v-for="(a, i) in achievements" :key="i" class="flex items-start gap-2.5 text-sm text-gray-400">
                <svg class="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
                {{ a }}
              </li>
            </ul>
          </div>

          <a href="#contact" class="btn-primary w-full justify-center">Get in touch</a>
        </div>

        <!-- Right: education cards -->
        <div class="lg:col-span-2 space-y-5">
          <div
            v-for="(degree, index) in education"
            :key="degree.institution"
            class="card card-hover"
            data-aos="fade-up"
            :data-aos-delay="120 + index * 80"
          >
            <div class="flex items-start justify-between gap-4 mb-4">
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-12 h-12 bg-white rounded-xl p-2 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <img :src="degree.logo" :alt="degree.institution" class="w-full h-full object-contain"/>
                </div>
                <div class="min-w-0">
                  <h3 class="text-base font-semibold text-white leading-snug">{{ degree.degree }}</h3>
                  <p class="text-sm text-primary-400">{{ degree.institution }}</p>
                </div>
              </div>
              <span class="text-xs text-gray-500 whitespace-nowrap border border-white/[0.08] rounded-lg px-2.5 py-1 flex-shrink-0">
                {{ degree.year }}
              </span>
            </div>
            <p class="text-sm text-gray-400 leading-relaxed">{{ degree.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { EDUCATION_DATA, ACHIEVEMENTS_DATA } from "@/data/education_data";
import type { Education } from "@/interface/education_interface";

const education    = ref<Education[]>(EDUCATION_DATA);
const achievements = ref<string[]>(ACHIEVEMENTS_DATA);
</script>
