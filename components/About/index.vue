<template>
  <section id="about" class="py-24 px-4 sm:px-6 lg:px-12 bg-[#0e1020]">
    <div class="section-container">

      <!-- Section header -->
      <div class="mb-16" data-aos="fade-up">
        <p class="section-eyebrow">About me</p>
        <h2 class="section-title">Turning ideas into<br class="hidden sm:block"/> real web products.</h2>
        <div class="section-line"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        <!-- Left: Bio + personal info -->
        <div class="space-y-8">

          <div data-aos="fade-right" data-aos-delay="80">
            <p class="text-gray-300 text-base leading-relaxed mb-4">
              I'm <span class="text-white font-semibold">Khun Kimhong</span>, a Full Stack Developer born in Takeo Province, Cambodia.
              I studied Software Engineering at the
              <span class="text-primary-300 font-medium">Institute of Technology of Cambodia (ITC)</span>
              and graduated in 2024 with hands-on expertise across modern web stacks.
            </p>
            <p class="text-gray-400 text-base leading-relaxed">
              I care deeply about writing clean, maintainable code and creating interfaces that feel natural.
              Currently building fintech solutions at
              <span class="text-white font-medium">Bongloy Payments PLC</span> — and always open to exciting new challenges.
            </p>
          </div>

          <!-- Info cards -->
          <div class="grid grid-cols-3 gap-3" data-aos="fade-right" data-aos-delay="140">
            <div class="card card-hover text-center">
              <p class="text-[10px] uppercase tracking-wider text-gray-500 mb-2">Nationality</p>
              <p class="text-sm font-semibold text-white">Cambodian</p>
            </div>
            <div class="card card-hover text-center">
              <p class="text-[10px] uppercase tracking-wider text-gray-500 mb-2">Birth</p>
              <p class="text-sm font-semibold text-white">14 Apr 2001</p>
            </div>
            <div class="card card-hover text-center">
              <p class="text-[10px] uppercase tracking-wider text-gray-500 mb-2">Location</p>
              <p class="text-sm font-semibold text-white">Phnom Penh</p>
            </div>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4" data-aos="fade-right" data-aos-delay="200">
            <div v-for="stat in stats" :key="stat.label" class="card card-hover text-center">
              <p class="text-2xl font-black text-primary-400 mb-1">{{ stat.value }}</p>
              <p class="text-xs text-gray-500">{{ stat.label }}</p>
            </div>
          </div>

          <!-- CTA -->
          <div class="flex flex-wrap gap-3" data-aos="fade-right" data-aos-delay="260">
            <a href="#contact" class="btn-primary">
              Let's work together
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
            <a href="#project" class="btn-outline">View projects</a>
          </div>
        </div>

        <!-- Right: Experience card + status -->
        <div class="space-y-5" data-aos="fade-left" data-aos-delay="100">

          <!-- Big XP card -->
          <div class="rounded-2xl bg-gradient-to-br from-primary-600/80 to-violet-700/80 p-10 text-center relative overflow-hidden">
            <div class="absolute inset-0 opacity-10"
              style="background-image: radial-gradient(circle at 70% 30%, white 0%, transparent 60%);">
            </div>
            <p class="text-[6rem] font-black text-white leading-none">2+</p>
            <p class="text-xl font-semibold text-white/90 mt-2">Years of Experience</p>
            <p class="text-sm text-white/60 mt-1">Web Development</p>
          </div>

          <!-- Education & status -->
          <div class="grid grid-cols-2 gap-4">
            <div class="card card-hover flex flex-col items-center text-center gap-3 py-6">
              <div class="w-11 h-11 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                </svg>
              </div>
              <p class="text-sm font-semibold text-white">ITC Graduate</p>
              <p class="text-xs text-gray-500">2024</p>
            </div>

            <div class="card card-hover flex flex-col items-center text-center gap-3 py-6">
              <div class="relative w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <div class="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 animate-pulse border-2 border-[#0e1020]"></div>
                <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <p class="text-sm font-semibold text-white">Available</p>
              <p class="text-xs text-gray-500">For hire</p>
            </div>
          </div>

          <!-- Current role -->
          <div class="card card-hover flex items-center gap-4">
            <div class="w-11 h-11 flex-shrink-0 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
              <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <div>
              <p class="text-xs text-gray-500 mb-0.5">Currently at</p>
              <p class="text-sm font-semibold text-white">Bongloy Payments PLC</p>
              <p class="text-xs text-primary-400">Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '5+',   label: 'Projects'     },
  { value: '10+',  label: 'Technologies' },
  { value: '100%', label: 'Dedication'   },
  { value: '24/7', label: 'Committed'    },
];
</script>
