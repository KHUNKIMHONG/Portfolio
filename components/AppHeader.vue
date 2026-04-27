<template>
  <header
    class="fixed top-0 w-full z-20 transition-all duration-300"
    :class="isScrolled ? 'bg-[#0b0d17]/95 backdrop-blur-md border-b border-white/[0.06] shadow-lg' : 'bg-transparent'">

    <nav ref="menuRef" class="section-container py-4">
      <div class="flex items-center justify-between">

        <!-- Logo -->
        <a href="#top" @click="updateActiveSection('top')" class="flex items-center gap-3 group">
          <img
            src="/ower/ownPhoto.jpg"
            alt="Khun Kimhong"
            class="h-9 w-9 rounded-full object-cover border border-primary-500/30 group-hover:border-primary-500/70 transition-all"
          />
          <div class="flex flex-col leading-none">
            <span class="text-sm font-bold text-white group-hover:text-primary-300 transition-colors">KHUN KIMHONG</span>
            <span class="flex items-center gap-1.5 text-[10px] text-gray-500 mt-0.5">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for work
            </span>
          </div>
        </a>

        <!-- Desktop nav -->
        <ul class="hidden lg:flex items-center gap-1">
          <li v-for="(section, index) in sections" :key="index">
            <a
              :href="'#' + section"
              @click="updateActiveSection(section)"
              class="relative px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              :class="activeSection === section
                ? 'text-white bg-white/[0.06]'
                : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'"
            >
              {{ navLabel(section) }}
              <span
                v-if="activeSection === section"
                class="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-primary-500 rounded-full">
              </span>
            </a>
          </li>
        </ul>

        <!-- Contact CTA + mobile toggle -->
        <div class="flex items-center gap-3">
          <a href="#contact" class="hidden lg:inline-flex btn-primary !py-2 !px-4 !text-sm">
            Hire me
          </a>

          <!-- Hamburger -->
          <button
            @click.stop="toggleMenu"
            class="lg:hidden p-2 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-primary-500/30 transition-all"
            :class="{ 'border-primary-500/40 text-white': isMenuOpen }"
            aria-label="Toggle menu"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <div
        v-if="isMenuOpen"
        class="lg:hidden fixed left-0 right-0 top-[65px] bottom-0 bg-[#0b0d17]/98 backdrop-blur-xl overflow-y-auto"
      >
        <div class="section-container py-8 space-y-1">
          <a
            v-for="(section, index) in sections"
            :key="index"
            :href="'#' + section"
            @click.prevent="handleMobileClick(section)"
            class="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200"
            :class="activeSection === section
              ? 'bg-primary-600/15 text-white border border-primary-500/20'
              : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'"
          >
            <div class="flex items-center gap-4">
              <span class="text-xs font-mono text-gray-600">{{ String(index + 1).padStart(2, '0') }}</span>
              <span>{{ navLabel(section) }}</span>
            </div>
            <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>

          <div class="pt-6">
            <a
              href="#contact"
              @click.prevent="handleMobileClick('contact')"
              class="btn-primary w-full justify-center"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const menuRef      = ref<HTMLElement | null>(null);
const isMenuOpen   = ref(false);
const isScrolled   = ref(false);
const activeSection = ref("top");

const sections = [
  "top", "services", "about", "skill", "experience",
  "education", "project", "workflow", "blog", "contact", "faq",
];

const navLabels: Record<string, string> = {
  top: "Home", services: "Services", about: "About", skill: "Skills",
  experience: "Experience", education: "Education", project: "Projects",
  workflow: "Workflow", blog: "Blog", contact: "Contact", faq: "FAQ",
};

const navLabel = (s: string) => navLabels[s] ?? s.charAt(0).toUpperCase() + s.slice(1);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? "hidden" : "auto";
};

const updateActiveSection = (s: string) => { activeSection.value = s; };

const handleMobileClick = (s: string) => {
  updateActiveSection(s);
  isMenuOpen.value = false;
  document.body.style.overflow = "auto";
  document.getElementById(s)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const handleScroll = () => { isScrolled.value = window.scrollY > 40; };

const closeOnOutside = (e: MouseEvent) => {
  if (isMenuOpen.value && menuRef.value && !menuRef.value.contains(e.target as Node)) {
    isMenuOpen.value = false;
    document.body.style.overflow = "auto";
  }
};

const observeSections = () => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => e.isIntersecting && (activeSection.value = e.target.id)),
    { rootMargin: "-20% 0px -60% 0px" }
  );
  sections.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
};

onMounted(() => {
  document.addEventListener("click", closeOnOutside);
  window.addEventListener("scroll", handleScroll);
  observeSections();
});
onUnmounted(() => {
  document.removeEventListener("click", closeOnOutside);
  window.removeEventListener("scroll", handleScroll);
  document.body.style.overflow = "auto";
});
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.mobile-menu-enter-from,
.mobile-menu-leave-to     { opacity: 0; transform: translateY(-8px); }
</style>
