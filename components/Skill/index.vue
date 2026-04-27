<template>
  <section id="skill" class="py-24 px-4 sm:px-6 lg:px-12 bg-[#0b0d17]">
    <div class="section-container">

      <div class="mb-14" data-aos="fade-up">
        <p class="section-eyebrow">Skills</p>
        <h2 class="section-title">My developer toolkit.</h2>
        <div class="section-line"></div>
        <p class="section-subtitle max-w-2xl">
          A practical overview of the technologies and tools I use daily — spanning frontend, backend, databases, and DevOps.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7">

        <!-- Left col: intro + stats -->
        <div class="space-y-5" data-aos="fade-right" data-aos-delay="80">
          <div class="card card-hover">
            <h3 class="text-base font-semibold text-white mb-3">Technical overview</h3>
            <p class="text-sm text-gray-400 leading-relaxed mb-4">
              As a full stack developer, I work across the entire product from UI to database. I enjoy both sides of the stack and stay current with modern tooling.
            </p>
            <a href="#contact" class="btn-primary !text-xs !py-2 !px-4">Let's collaborate</a>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div v-for="stat in statCards" :key="stat.label" class="card card-hover text-center">
              <p class="text-2xl font-black text-primary-400 mb-1">{{ stat.value }}</p>
              <p class="text-xs text-gray-500">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <!-- Right: skill categories (2 cols) -->
        <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div
            v-for="(category, idx) in skills"
            :key="idx"
            class="card card-hover"
            data-aos="fade-up"
            :data-aos-delay="120 + idx * 60"
          >
            <div class="flex items-center gap-3 mb-4">
              <div class="w-9 h-9 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 flex-shrink-0" v-html="category.svgIcon"></div>
              <div>
                <h3 class="text-sm font-semibold text-white">{{ category.category }}</h3>
                <p class="text-xs text-gray-500">{{ category.description }}</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in category.skills" :key="skill" class="skill-tag">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { SkillCategory } from "@/interface/skills_interface";
import { SKILLS_DATA } from "@/data/skills_data";

const skills = ref<SkillCategory[]>(SKILLS_DATA);
const statCards = [
  { value: "10+", label: "Frontend skills" },
  { value: "5+",  label: "Backend skills"  },
  { value: "3+",  label: "Databases"       },
  { value: "9+",  label: "Dev tools"       },
];
</script>

<style scoped>
.skill-tag {
  font-size: 0.7rem;
  padding: 0.2rem 0.6rem;
  border-radius: 0.375rem;
  border: 1px solid rgba(255,255,255,0.1);
  color: #cbd5e1;
  background-color: rgba(255,255,255,0.04);
  transition: border-color 0.2s, background-color 0.2s, color 0.2s;
}
.skill-tag:hover {
  border-color: var(--color-primary-500);
  background-color: var(--color-primary-600);
  color: #fff;
}
</style>
