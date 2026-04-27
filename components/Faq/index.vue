<template>
  <section id="faq" class="py-24 px-4 sm:px-6 lg:px-12 bg-[#0b0d17]">
    <div class="section-container">

      <!-- Centered header -->
      <div class="text-center mb-14" data-aos="fade-up">
        <p class="section-eyebrow">FAQ</p>
        <h2 class="section-title">Common questions.</h2>
        <div class="section-line mx-auto"></div>
        <p class="section-subtitle max-w-xl mx-auto">
          Answers to the most frequently asked questions about working with me.
        </p>
      </div>

      <div class="max-w-3xl mx-auto space-y-3">
        <article
          v-for="(faq, i) in faqs"
          :key="i"
          class="card card-hover overflow-hidden"
          data-aos="fade-up"
          :data-aos-delay="60 + i * 40"
        >
          <button
            @click="toggleFaq(i)"
            class="w-full flex items-start justify-between gap-4 text-left"
            :aria-expanded="activeFaq === i"
          >
            <div class="flex items-start gap-3 min-w-0">
              <span class="text-xs font-mono text-gray-600 mt-0.5 flex-shrink-0">{{ String(i + 1).padStart(2, "0") }}</span>
              <h3
                class="text-sm font-semibold leading-snug transition-colors duration-200"
                :class="activeFaq === i ? 'text-primary-300' : 'text-white'"
              >
                {{ faq.question }}
              </h3>
            </div>
            <div
              class="flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-200 mt-0.5"
              :class="activeFaq === i ? 'bg-primary-500/15 border border-primary-500/30' : 'bg-white/[0.04] border border-white/10'"
            >
              <svg
                class="w-3 h-3 transition-transform duration-300"
                :class="activeFaq === i ? 'rotate-180 text-primary-400' : 'text-gray-500'"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </button>

          <div
            class="faq-body"
            :class="activeFaq === i ? 'faq-open' : 'faq-closed'"
          >
            <div class="overflow-hidden">
              <p class="text-sm text-gray-400 leading-relaxed pt-4 pl-6 border-t border-white/[0.06] mt-4">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </article>
      </div>

      <!-- CTA -->
      <div class="mt-12 max-w-3xl mx-auto" data-aos="fade-up">
        <div class="rounded-2xl bg-gradient-to-br from-primary-600/15 to-violet-600/10 border border-primary-500/20 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 class="text-base font-semibold text-white mb-1">Still have questions?</h3>
            <p class="text-sm text-gray-400">I'm happy to chat. Reach out anytime and I'll get back to you.</p>
          </div>
          <a href="#contact" class="btn-primary flex-shrink-0">
            Get in touch
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { FAQ } from "@/interface/faq_interface";
import { FAQ_DATA } from "@/data/faq_data";

const faqs      = ref<FAQ[]>(FAQ_DATA);
const activeFaq = ref(-1);
const toggleFaq = (i: number) => { activeFaq.value = activeFaq.value === i ? -1 : i; };
</script>

<style scoped>
.faq-body {
  display: grid;
  transition: grid-template-rows 0.3s ease;
}
.faq-open  { grid-template-rows: 1fr; }
.faq-closed { grid-template-rows: 0fr; }
</style>
