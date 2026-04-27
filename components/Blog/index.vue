<template>
  <section id="blog" class="py-24 px-4 sm:px-6 lg:px-12 bg-[#0b0d17]">
    <div class="section-container">

      <div class="mb-10" data-aos="fade-up">
        <p class="section-eyebrow">Blog</p>
        <h2 class="section-title">Writing & insights.</h2>
        <div class="section-line"></div>
        <p class="section-subtitle max-w-2xl">
          Notes on web development, tools, and things I've learned building real products.
        </p>
      </div>

      <!-- Category filter -->
      <div class="flex flex-wrap gap-2 mb-8" data-aos="fade-up" data-aos-delay="60">
        <button
          @click="selectedCategory = ''; currentPage = 1"
          :class="selectedCategory === '' ? 'bg-primary-600 text-white border-primary-500/40' : 'text-gray-400 border-white/10 hover:text-white hover:border-primary-500/30'"
          class="text-xs font-medium px-3.5 py-1.5 rounded-lg border transition-all duration-200"
        >
          All posts
        </button>
        <button
          v-for="cat in allCategories"
          :key="cat"
          @click="selectedCategory = cat; currentPage = 1"
          :class="selectedCategory === cat ? 'bg-primary-600 text-white border-primary-500/40' : 'text-gray-400 border-white/10 hover:text-white hover:border-primary-500/30'"
          class="text-xs font-medium px-3.5 py-1.5 rounded-lg border transition-all duration-200"
        >
          {{ cat }}
        </button>
      </div>

      <p class="text-xs text-gray-600 mb-6">Showing {{ displayedCount }} of {{ filteredPosts.length }}</p>

      <!-- Posts grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <article
          v-for="(post, index) in paginatedPosts"
          :key="index"
          class="group flex flex-col rounded-2xl border border-white/[0.07] bg-white/[0.03] overflow-hidden cursor-pointer transition-all duration-300 hover:border-primary-500/30 hover:bg-white/[0.05]"
          @click="openPost(post)"
          data-aos="fade-up"
          :data-aos-delay="80 + (index % 6) * 60"
        >
          <div class="relative h-44 overflow-hidden bg-zinc-800/40 flex-shrink-0">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
            <div class="absolute inset-0 bg-gradient-to-t from-[#0b0d17]/70 to-transparent"></div>
            <div class="absolute top-3 left-3 flex flex-wrap gap-1">
              <span v-for="cat in post.categories.slice(0,2)" :key="cat" class="text-[10px] px-2 py-0.5 rounded-full bg-primary-600/80 text-white font-medium">{{ cat }}</span>
            </div>
          </div>

          <div class="flex flex-col flex-1 p-4 gap-2">
            <p class="text-[10px] text-gray-500">{{ formatDate(post.date) }}</p>
            <h3 class="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-primary-300 transition-colors">{{ post.title }}</h3>
            <p class="text-xs text-gray-500 leading-relaxed line-clamp-2 flex-1">{{ post.summary }}</p>
            <span class="text-xs text-primary-400 font-medium mt-1">Read more →</span>
          </div>
        </article>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="flex items-center justify-center gap-2">
        <button
          @click="previousPage"
          :disabled="currentPage === 1"
          class="btn-outline !py-2 !px-4 !text-xs disabled:opacity-30 disabled:cursor-not-allowed"
        >← Prev</button>
        <span class="text-xs text-gray-500">{{ currentPage }} / {{ totalPages }}</span>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="btn-outline !py-2 !px-4 !text-xs disabled:opacity-30 disabled:cursor-not-allowed"
        >Next →</button>
      </div>

      <!-- Modal -->
      <Transition name="modal">
        <div
          v-if="showModal && selectedPost"
          class="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4 overflow-y-auto"
          @click.self="closeModal"
        >
          <div class="relative w-full max-w-2xl bg-[#0f1123] border border-white/[0.08] rounded-2xl overflow-hidden my-4">
            <div class="relative h-48 sm:h-60">
              <img :src="selectedPost.image" :alt="selectedPost.title" class="w-full h-full object-cover"/>
              <div class="absolute inset-0 bg-gradient-to-t from-[#0f1123] to-transparent/50"></div>
              <button @click="closeModal" class="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>

            <div class="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              <div class="flex flex-wrap gap-1.5">
                <span v-for="cat in selectedPost.categories" :key="cat" class="tag">{{ cat }}</span>
              </div>
              <h3 class="text-lg font-bold text-white leading-snug">{{ selectedPost.title }}</h3>
              <p class="text-xs text-gray-500">{{ formatDate(selectedPost.date) }}</p>
              <p class="text-sm text-gray-400 leading-relaxed">{{ selectedPost.summary }}</p>

              <!-- Structured description sections -->
              <div v-if="selectedPost.description?.length" class="space-y-5 border-t border-white/[0.06] pt-5">
                <div v-for="(section, si) in selectedPost.description" :key="si">
                  <h4 class="text-xs font-semibold text-primary-400 uppercase tracking-wider mb-2">{{ section.title }}</h4>
                  <ul class="space-y-1.5">
                    <li v-for="(point, pi) in section.points" :key="pi" class="flex items-start gap-2 text-xs text-gray-400 leading-relaxed">
                      <span class="w-1 h-1 rounded-full bg-primary-500 mt-1.5 flex-shrink-0"></span>
                      {{ point }}
                    </li>
                  </ul>
                </div>
              </div>

              <div v-if="selectedPost.conclusion" class="text-sm text-gray-400 leading-relaxed border-t border-white/[0.06] pt-4 italic">
                {{ selectedPost.conclusion }}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { BlogPost } from "@/interface/blog_interface";
import { BLOGPOSTS } from "@/data/blog_data";

const showModal        = ref(false);
const selectedPost     = ref<BlogPost | null>(null);
const selectedCategory = ref("");
const currentPage      = ref(1);
const postsPerPage     = 6;

const formatDate = (d?: string) =>
  d ? new Date(d).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }) : "";

const allCategories = computed<string[]>(() => {
  const s = new Set<string>();
  BLOGPOSTS.forEach((p: BlogPost) => p.categories.forEach((c: string) => s.add(c)));
  return Array.from(s);
});

const filteredPosts = computed<BlogPost[]>(() =>
  selectedCategory.value ? BLOGPOSTS.filter((p: BlogPost) => p.categories.includes(selectedCategory.value)) : BLOGPOSTS
);

const totalPages    = computed(() => Math.ceil(filteredPosts.value.length / postsPerPage));
const paginatedPosts = computed<BlogPost[]>(() => filteredPosts.value.slice((currentPage.value - 1) * postsPerPage, currentPage.value * postsPerPage));
const displayedCount = computed(() => Math.min(currentPage.value * postsPerPage, filteredPosts.value.length));

const nextPage     = () => { if (currentPage.value < totalPages.value) { currentPage.value++; scrollTop(); } };
const previousPage = () => { if (currentPage.value > 1) { currentPage.value--; scrollTop(); } };
const scrollTop    = () => document.getElementById("blog")?.scrollIntoView({ behavior: "smooth", block: "start" });

const openPost     = (p: BlogPost) => { selectedPost.value = p; showModal.value = true; document.body.style.overflow = "hidden"; };
const closeModal   = () => { showModal.value = false; selectedPost.value = null; document.body.style.overflow = "auto"; };
</script>

<style scoped>
.modal-enter-active, .modal-leave-active { transition: opacity 0.25s ease; }
.modal-enter-from, .modal-leave-to       { opacity: 0; }
</style>
