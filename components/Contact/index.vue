<template>
  <section id="contact" class="py-24 px-4 sm:px-6 lg:px-12 bg-[#0e1020]">
    <div class="section-container">

      <div class="mb-14" data-aos="fade-up">
        <p class="section-eyebrow">Contact</p>
        <h2 class="section-title">Let's work together.</h2>
        <div class="section-line"></div>
        <p class="section-subtitle max-w-xl">
          I'm open to new opportunities, freelance projects, and interesting collaborations. Reach out anytime.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

        <!-- Left: contact info -->
        <div class="space-y-4" data-aos="fade-right" data-aos-delay="80">
          <div v-for="item in contactItems" :key="item.label" class="card card-hover flex items-center gap-4">
            <div class="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
              <svg class="w-4.5 h-4.5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="item.iconPath" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></svg>
            </div>
            <div>
              <p class="text-[10px] uppercase tracking-wider text-gray-500 mb-0.5">{{ item.label }}</p>
              <component
                :is="item.href ? 'a' : 'p'"
                :href="item.href"
                class="text-sm font-medium text-white"
                :class="item.href ? 'hover:text-primary-400 transition-colors' : ''"
              >{{ item.value }}</component>
            </div>
          </div>
        </div>

        <!-- Right: social media + CTA -->
        <div class="space-y-6" data-aos="fade-left" data-aos-delay="120">
          <div class="card">
            <p class="text-xs uppercase tracking-wider text-gray-500 mb-4">Find me on</p>
            <div class="flex flex-wrap gap-3">
              <div v-for="social in socialMedia" :key="social.name" class="relative group">
                <a
                  :href="social.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="social.name"
                  class="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/40 transition-all duration-200"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" v-html="social.svg" aria-hidden="true"></svg>
                </a>
                <!-- Tooltip -->
                <span class="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#0f1123] border border-white/10 text-white text-[10px] font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 translate-y-1 group-hover:translate-y-0 shadow-lg">
                  {{ social.name }}
                  <!-- Arrow -->
                  <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0f1123] border-r border-b border-white/10 rotate-45"></span>
                </span>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <div class="rounded-2xl bg-gradient-to-br from-primary-600/80 to-violet-700/70 p-8 relative overflow-hidden">
            <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 70% 20%, white, transparent 60%)"></div>
            <h3 class="text-lg font-bold text-white mb-2 relative z-10">Ready to start something?</h3>
            <p class="text-sm text-white/70 mb-5 relative z-10">Drop me an email and let's talk about your project.</p>
            <a href="mailto:khunkimhong039@gmail.com" class="relative z-10 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-xl border border-white/20 transition-all duration-200">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Send an email
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { socialMedia } from "~/stores/SocialMedia/socialMedia";

const contactItems = [
  {
    label: "Email",
    value: "khunkimhong039@gmail.com",
    href:  "mailto:khunkimhong039@gmail.com",
    iconPath: '<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>',
  },
  {
    label: "Phone",
    value: "+855 964 674 365",
    href:  "tel:+855964674365",
    iconPath: '<path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>',
  },
  {
    label: "Location",
    value: "Phnom Penh, Cambodia",
    href:  null,
    iconPath: '<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>',
  },
];
</script>
