<template>
  <section id="project" class="py-24 px-4 sm:px-6 lg:px-12 bg-[#0e1020]">
    <div class="section-container">

      <div class="mb-14" data-aos="fade-up">
        <p class="section-eyebrow">Projects</p>
        <h2 class="section-title">Things I've built.</h2>
        <div class="section-line"></div>
        <p class="section-subtitle max-w-2xl">
          A selection of projects from e-commerce to fintech tools — each one built with care and attention to user experience.
        </p>
      </div>

      <!-- Project grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="(project, index) in projects"
          :key="index"
          class="group flex flex-col rounded-2xl border border-white/[0.07] bg-white/[0.03] overflow-hidden transition-all duration-300 hover:border-primary-500/30 hover:bg-white/[0.05]"
          data-aos="fade-up"
          :data-aos-delay="100 + index * 70"
        >
          <!-- Image -->
          <div class="relative h-48 overflow-hidden bg-zinc-800/40 flex-shrink-0">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#0e1020]/80 to-transparent"></div>
            <span class="absolute top-3 right-3 text-xs font-mono text-gray-400 bg-black/50 border border-white/10 px-2 py-0.5 rounded">
              {{ String(index + 1).padStart(2, "0") }}
            </span>
          </div>

          <!-- Content -->
          <div class="flex flex-col flex-1 p-5 gap-3">
            <h3 class="text-base font-semibold text-white leading-snug">{{ project.title }}</h3>
            <p class="text-sm text-gray-400 leading-relaxed line-clamp-2 flex-1">{{ project.description }}</p>

            <div class="flex flex-wrap gap-1.5">
              <span v-for="(tech, i) in project.technologies.slice(0, 4)" :key="i" class="tag">{{ tech }}</span>
              <span v-if="project.technologies.length > 4" class="tag">+{{ project.technologies.length - 4 }}</span>
            </div>

            <div class="flex gap-2 pt-1">
              <button
                @click="openModal(project)"
                class="flex-1 btn-primary !py-2 !text-xs justify-center"
              >
                View details
              </button>
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-outline !py-2 !px-3 !text-xs"
                aria-label="GitHub"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.839 1.24 1.839 1.24 1.07 1.835 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.3-5.466-1.333-5.466-5.931 0-1.312.469-2.382 1.235-3.221-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.485 11.485 0 0 1 3-.404c1.02.004 2.045.137 3 .404 2.29-1.552 3.295-1.23 3.295-1.23.647 1.653.242 2.873.118 3.176.77.839 1.234 1.909 1.234 3.221 0 4.609-2.807 5.628-5.479 5.921.43.372.815 1.103.815 2.222v3.293c0 .321.217.694.825.577 4.765-1.585 8.205-6.083 8.205-11.385 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>

      <!-- Modal -->
      <Transition name="modal">
        <div
          v-if="showModal && selectedProject"
          class="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 overflow-y-auto"
          @click.self="closeModal"
        >
          <div class="relative w-full max-w-3xl bg-[#0f1123] border border-white/[0.08] rounded-2xl overflow-hidden my-4">
            <!-- Header image -->
            <div class="relative h-56 sm:h-72">
              <img :src="selectedProject.image" :alt="selectedProject.title" class="w-full h-full object-cover"/>
              <div class="absolute inset-0 bg-gradient-to-t from-[#0f1123] to-transparent"></div>
              <div class="absolute bottom-5 left-6 right-16">
                <h3 class="text-xl sm:text-2xl font-bold text-white">{{ selectedProject.title }}</h3>
              </div>
              <button
                @click="closeModal"
                class="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <!-- Modal body -->
            <div class="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">

              <!-- Meta badges -->
              <div class="flex flex-wrap gap-2">
                <span class="text-[11px] px-2.5 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 font-medium">{{ selectedProject.type }}</span>
                <span class="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-gray-400 font-medium">{{ selectedProject.year }}</span>
                <span
                  class="text-[11px] px-2.5 py-1 rounded-full font-medium border"
                  :class="selectedProject.status === 'Completed'
                    ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                    : 'bg-amber-500/10 border-amber-500/20 text-amber-400'"
                >{{ selectedProject.status }}</span>
              </div>

              <!-- Overview -->
              <div>
                <p class="text-xs uppercase tracking-wider text-gray-500 mb-2">Overview</p>
                <p class="text-sm text-gray-300 leading-relaxed">{{ selectedProject.description }}</p>
              </div>

              <!-- Key features -->
              <div>
                <p class="text-xs uppercase tracking-wider text-gray-500 mb-3">Key Features</p>
                <ul class="space-y-2">
                  <li v-for="(f, i) in selectedProject.features" :key="i" class="flex items-start gap-2.5 text-sm text-gray-400">
                    <span class="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 flex-shrink-0"></span>
                    {{ f }}
                  </li>
                </ul>
              </div>

              <!-- Role + Challenges side by side on sm+ -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <p class="text-xs uppercase tracking-wider text-gray-500 mb-2">My Role</p>
                  <p class="text-sm text-gray-400 leading-relaxed">{{ selectedProject.role }}</p>
                </div>
                <div>
                  <p class="text-xs uppercase tracking-wider text-gray-500 mb-2">Challenges</p>
                  <p class="text-sm text-gray-400 leading-relaxed">{{ selectedProject.challenges }}</p>
                </div>
              </div>

              <!-- Outcome -->
              <div class="rounded-xl bg-primary-500/5 border border-primary-500/15 p-4">
                <p class="text-xs uppercase tracking-wider text-primary-400 mb-2">Outcome</p>
                <p class="text-sm text-gray-300 leading-relaxed">{{ selectedProject.outcome }}</p>
              </div>

              <!-- Technologies -->
              <div>
                <p class="text-xs uppercase tracking-wider text-gray-500 mb-3">Technologies</p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(tech, i) in selectedProject.technologies" :key="i" class="tag">{{ tech }}</span>
                </div>
              </div>

              <!-- Action buttons -->
              <div class="flex flex-wrap gap-3 pt-1">
                <a
                  v-if="selectedProject.github && selectedProject.github !== '#'"
                  :href="selectedProject.github"
                  target="_blank" rel="noopener noreferrer"
                  class="btn-primary"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.839 1.24 1.839 1.24 1.07 1.835 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.3-5.466-1.333-5.466-5.931 0-1.312.469-2.382 1.235-3.221-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.485 11.485 0 0 1 3-.404c1.02.004 2.045.137 3 .404 2.29-1.552 3.295-1.23 3.295-1.23.647 1.653.242 2.873.118 3.176.77.839 1.234 1.909 1.234 3.221 0 4.609-2.807 5.628-5.479 5.921.43.372.815 1.103.815 2.222v3.293c0 .321.217.694.825.577 4.765-1.585 8.205-6.083 8.205-11.385 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
                <a
                  v-if="selectedProject.demo"
                  :href="selectedProject.demo"
                  target="_blank" rel="noopener noreferrer"
                  class="btn-outline"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Project } from "@/interface/project_interface";
import { PROJECTS_DATA } from "@/data/projects_data";

const projects         = ref<Project[]>(PROJECTS_DATA);
const showModal        = ref(false);
const selectedProject  = ref<Project | null>(null);

const openModal = (p: Project) => { selectedProject.value = p; showModal.value = true; document.body.style.overflow = "hidden"; };
const closeModal = () => { showModal.value = false; selectedProject.value = null; document.body.style.overflow = "auto"; };
</script>

<style scoped>
.modal-enter-active, .modal-leave-active { transition: opacity 0.25s ease; }
.modal-enter-from, .modal-leave-to       { opacity: 0; }
</style>
