<template>
  <section id="workflow" class="py-24 px-4 sm:px-6 lg:px-12 bg-[#0e1020]">
    <div class="section-container">

      <div class="mb-14" data-aos="fade-up">
        <p class="section-eyebrow">Workflow</p>
        <h2 class="section-title">How I work.</h2>
        <div class="section-line"></div>
        <p class="section-subtitle max-w-2xl">
          A clear, repeatable process I follow on every project — from first conversation to final delivery.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

        <!-- Left: why this workflow -->
        <div class="space-y-5" data-aos="fade-right" data-aos-delay="80">
          <div class="card card-hover">
            <h3 class="text-sm font-semibold text-white mb-2">Why this process works</h3>
            <p class="text-sm text-gray-400 leading-relaxed mb-4">
              Structure helps me focus on what matters — delivering quality, on time, without surprises. Every step exists to keep you informed and the project on track.
            </p>
            <a href="#contact" class="btn-primary !text-xs !py-2 !px-4">Start a project</a>
          </div>

          <div class="card card-hover">
            <h3 class="text-sm font-semibold text-white mb-4">What you get</h3>
            <ul class="space-y-3">
              <li v-for="(b, i) in benefits" :key="i" class="flex items-start gap-2.5 text-sm text-gray-400">
                <svg class="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
                {{ b }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Right: steps list (2 col) -->
        <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div
            v-for="(step, i) in steps"
            :key="i"
            class="card card-hover flex gap-4"
            data-aos="fade-up"
            :data-aos-delay="120 + i * 60"
          >
            <!-- Step number + icon -->
            <div class="flex flex-col items-center gap-2 flex-shrink-0">
              <div class="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <svg class="w-5 h-5 text-primary-400" :viewBox="step.svg.viewBox" fill="none" stroke="currentColor">
                  <path :d="step.svg.path" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
              </div>
              <span class="text-xs font-mono text-gray-600">{{ String(i + 1).padStart(2, "0") }}</span>
            </div>
            <div>
              <h3 class="text-sm font-semibold text-white mb-1">{{ step.title }}</h3>
              <p class="text-xs text-gray-500 leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Step } from "@/interface/workflow_interface";
import { STEPS_DATA, BENEFITS_DATA } from "@/data/workflow_data";

const steps    = ref<Step[]>(STEPS_DATA);
const benefits = ref<string[]>(BENEFITS_DATA);
</script>
