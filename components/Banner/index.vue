<template>
  <section id="top" class="relative min-h-screen flex items-center overflow-hidden bg-[#0b0d17]">

    <!-- Background -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <!-- Dot grid -->
      <div class="absolute inset-0"
        style="background-image: radial-gradient(rgba(99,102,241,0.18) 1px, transparent 1px); background-size: 32px 32px; opacity: 0.35;">
      </div>
      <!-- Blobs -->
      <div class="absolute top-1/3 -left-48 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-3xl animate-float-delayed"></div>
      <!-- Accent lines -->
      <div class="absolute top-0 right-0 w-px h-[45%] bg-gradient-to-b from-transparent via-primary-500/25 to-transparent"></div>
      <div class="absolute bottom-0 left-0 w-[40%] h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>

      <!-- Floating code snippet -->
      <div class="absolute bottom-28 right-10 hidden xl:block opacity-[0.07] select-none font-mono text-xs text-primary-300 leading-6 text-left rotate-3">
        <div>const dev = {</div>
        <div>&nbsp;&nbsp;name: "Khun Kimhong",</div>
        <div>&nbsp;&nbsp;stack: ["Next.js", "Elixir"],</div>
        <div>&nbsp;&nbsp;available: true,</div>
        <div>}</div>
      </div>
    </div>

    <div class="section-container relative z-10 w-full py-28 lg:py-0 min-h-screen flex items-center">
      <div class="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 w-full">

        <!-- ── Left ── -->
        <div class="flex flex-col text-center lg:text-left lg:w-[54%] gap-5">

          <!-- Greeting -->
          <div data-aos="fade-up" data-aos-delay="0" class="flex justify-center lg:justify-start">
            <span class="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">Hello, I'm</span>
          </div>

          <!-- Name -->
          <div data-aos="fade-up" data-aos-delay="60">
            <h1 class="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.8rem] font-black tracking-tight leading-none">
              <span class="text-white">Khun</span><br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-violet-400">Kimhong</span>
            </h1>
          </div>

          <!-- Typewriter role -->
          <div class="min-h-[2.25rem] flex items-center justify-center lg:justify-start gap-2" data-aos="fade-up" data-aos-delay="120">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
            <p v-if="isClient" class="text-lg md:text-xl font-semibold text-gray-200 transition-opacity duration-300" :class="isFading ? 'opacity-0' : 'opacity-100'">
              {{ currentTitle }}<span class="text-primary-500 animate-pulse ml-0.5">|</span>
            </p>
          </div>

          <!-- Bio -->
          <p class="text-gray-400 text-base leading-relaxed max-w-lg mx-auto lg:mx-0" data-aos="fade-up" data-aos-delay="160">
            Full Stack Developer at
            <span class="text-white font-semibold">Bongloy Payments PLC</span>,
            building fast and reliable web products with
            <span class="text-primary-300">Next.js</span>,
            <span class="text-primary-300">Nuxt.js</span>, and
            <span class="text-primary-300">Elixir</span>.
          </p>

          <!-- Tech stack pills -->
          <div class="flex flex-wrap justify-center lg:justify-start gap-2" data-aos="fade-up" data-aos-delay="200">
            <span v-for="tech in techStack" :key="tech"
              class="text-[11px] px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-gray-500 font-medium hover:border-primary-500/30 hover:text-primary-300 transition-colors duration-200 cursor-default">
              {{ tech }}
            </span>
          </div>

          <!-- CTA buttons -->
          <div class="flex flex-wrap justify-center lg:justify-start gap-3" data-aos="fade-up" data-aos-delay="240">
            <a href="#contact" class="btn-primary">
              Get in touch
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
            <a href="#project" class="btn-outline">View my work</a>
          </div>

          <!-- Divider -->
          <div class="w-full h-px bg-white/[0.05] max-w-lg mx-auto lg:mx-0" data-aos="fade-up" data-aos-delay="280"></div>

          <!-- Social + stats row -->
          <div class="flex flex-col sm:flex-row items-center lg:items-start gap-6" data-aos="fade-up" data-aos-delay="300">
            <!-- Social -->
            <div class="flex items-center gap-2">
              <div v-for="social in socialMedia" :key="social.name" class="relative group">
                <a
                  :href="social.link" target="_blank" rel="noopener noreferrer"
                  :aria-label="`${social.name} profile`"
                  class="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-gray-500 hover:text-primary-400 hover:border-primary-500/40 transition-all duration-200">
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" v-html="social.svg" aria-hidden="true"></svg>
                </a>
                <!-- Tooltip -->
                <span class="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#0f1123] border border-white/10 text-white text-[10px] font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 translate-y-1 group-hover:translate-y-0 shadow-lg z-20">
                  {{ social.name }}
                  <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0f1123] border-r border-b border-white/10 rotate-45"></span>
                </span>
              </div>
            </div>

            <div class="hidden sm:block w-px h-8 bg-white/[0.07]"></div>

            <!-- Animated stat counters -->
            <div class="flex items-center gap-5">
              <div v-for="stat in stats" :key="stat.label" class="text-center">
                <p class="text-xl font-black text-white tabular-nums">
                  <span>{{ stat.displayed }}</span><span class="text-primary-500">+</span>
                </p>
                <p class="text-[10px] text-gray-600 mt-0.5 uppercase tracking-wider">{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- ── Right — avatar ── -->
        <div class="flex justify-center lg:justify-end lg:w-[44%]" data-aos="fade-left" data-aos-delay="80">
          <div class="relative">

            <!-- Spinning ring -->
            <div class="absolute -inset-6 rounded-full border border-dashed border-primary-500/20" style="animation: spin 32s linear infinite;"></div>
            <!-- Second ring counter-spin -->
            <div class="absolute -inset-12 rounded-full border border-dotted border-violet-500/10" style="animation: spin 55s linear infinite reverse;"></div>

            <!-- Glow -->
            <div class="absolute inset-4 rounded-full bg-gradient-to-br from-primary-600/20 to-violet-600/15 blur-3xl"></div>

            <!-- Corner brackets -->
            <div class="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-primary-500/50 rounded-tl-sm"></div>
            <div class="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-primary-500/50 rounded-tr-sm"></div>
            <div class="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-primary-500/50 rounded-bl-sm"></div>
            <div class="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-primary-500/50 rounded-br-sm"></div>

            <!-- Photo -->
            <img
              src="/ower/khun_kimhong.png"
              alt="Khun Kimhong — Full Stack Developer"
              class="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-[340px] lg:h-[340px] rounded-full object-cover border-2 border-primary-500/30"
              loading="eager"
            />

            <!-- Name card -->
            <div class="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2.5 bg-[#0f1123]/95 border border-white/10 text-white text-xs font-semibold px-5 py-2.5 rounded-xl whitespace-nowrap shadow-xl backdrop-blur-sm">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Full Stack Developer
              <span class="text-gray-600">·</span>
              <span class="text-gray-400 font-normal">Phnom Penh</span>
            </div>

            <!-- Floating: currently building -->
            <div class="absolute -right-20 -top-4 hidden lg:flex flex-col gap-1 bg-[#0f1123]/95 border border-white/10 rounded-xl px-4 py-3 shadow-xl backdrop-blur-sm animate-float-delayed min-w-[160px]">
              <p class="text-[9px] uppercase tracking-wider text-gray-600">Currently building</p>
              <p class="text-xs font-semibold text-white">Bongloy Payments</p>
              <p class="text-[10px] text-primary-400">Fintech · Full Stack</p>
            </div>

            <!-- Floating skill chips -->
            <div class="absolute -left-20 top-12 px-3 py-2 bg-[#0f1123]/90 border border-primary-500/25 rounded-xl text-xs font-semibold text-primary-300 shadow-lg backdrop-blur-sm hidden lg:flex items-center gap-2 animate-float">
              <span class="w-1.5 h-1.5 rounded-full bg-primary-400"></span> Next
            </div>
            <div class="absolute -left-16 bottom-20 px-3 py-2 bg-[#0f1123]/90 border border-violet-500/25 rounded-xl text-xs font-semibold text-violet-300 shadow-lg backdrop-blur-sm hidden lg:flex items-center gap-2 animate-float-delayed">
              <span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span> Elixir
            </div>
            <div class="absolute -right-16 bottom-24 px-3 py-2 bg-[#0f1123]/90 border border-emerald-500/20 rounded-xl text-xs font-semibold text-emerald-300 shadow-lg backdrop-blur-sm hidden lg:flex items-center gap-2 animate-float">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Nuxt
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll hint -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
      <span class="text-[10px] uppercase tracking-widest text-gray-700">Scroll</span>
      <div class="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent"></div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import { socialMedia } from "~/stores/SocialMedia/socialMedia";

const titles = ref<string[]>([
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer"
]);

const techStack = ["Nuxt.js", "Next.js", "Elixir", "Laravel", "TypeScript", "Tailwind CSS"];

// ── Animated stat counters ──
const stats = ref([
  { target: 5,  displayed: 0, label: "Projects"     },
  { target: 2,  displayed: 0, label: "Years exp"     },
  { target: 10, displayed: 0, label: "Technologies"  },
]);

function animateCounters() {
  stats.value.forEach((stat) => {
    const duration = 1200;
    const steps    = 40;
    const increment = stat.target / steps;
    let current    = 0;
    const interval = setInterval(() => {
      current += increment;
      stat.displayed = Math.min(Math.round(current), stat.target);
      if (stat.displayed >= stat.target) clearInterval(interval);
    }, duration / steps);
  });
}

// ── Typewriter ──
const currentIndex  = ref(0);
const displayedText = ref("");
const isDeleting    = ref(false);
const typingSpeed   = ref(100);
const isClient      = ref(false);
const isFading      = ref(false);

const currentTitle = computed(() => displayedText.value);

onMounted(() => {
  isClient.value = true;
  typeEffect();
  setTimeout(animateCounters, 600);
});

function typeEffect(): void {
  const fullText = titles.value[currentIndex.value] ?? "";

  if (isDeleting.value && displayedText.value === fullText) isFading.value = true;
  else if (!isDeleting.value && displayedText.value === "") isFading.value = false;

  displayedText.value = isDeleting.value
    ? fullText.substring(0, displayedText.value.length - 1)
    : fullText.substring(0, displayedText.value.length + 1);

  let speed = typingSpeed.value;
  if (!isDeleting.value && displayedText.value === fullText) {
    speed = 2200;
    isDeleting.value = true;
  } else if (isDeleting.value && displayedText.value === "") {
    isDeleting.value = false;
    currentIndex.value = (currentIndex.value + 1) % titles.value.length;
    speed = 500;
  } else if (isDeleting.value) {
    speed = 45;
  }

  setTimeout(typeEffect, speed);
}
</script>

<style scoped>
@media (max-width: 640px) {
  h1 { font-size: 3rem; }
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
</style>
