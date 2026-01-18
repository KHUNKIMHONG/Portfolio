<template>
  <section 
    id="interest" 
    class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-16 relative overflow-hidden">
    <div class="container mx-auto max-w-6xl relative z-10">
      
      <!-- Header Section -->
      <div class="text-center mb-16">
        <!-- Background Title -->
        <div 
          class="text-6xl sm:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400/20 to-rose-400/20 mb-4 tracking-widest select-none"
          data-aos="fade-down" 
          data-aos-delay="100"
          aria-hidden="true">
          INTERESTS
        </div>
        
        <!-- Main Title -->
        <h2 
          class="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-rose-200 mb-6"
          data-aos="fade-up" 
          data-aos-delay="200">
          Literary & Creative Pursuits
        </h2>
        
        <!-- Decorative Line -->
        <div 
          class="w-24 h-1 bg-gradient-to-r from-red-500 to-rose-500 mx-auto rounded-full" 
          data-aos="zoom-in" 
          data-aos-delay="300"
          aria-hidden="true">
        </div>
      </div>

      <!-- Introduction Text -->
      <p 
        class="text-base sm:text-lg text-gray-300 leading-relaxed text-center lg:text-left mb-12 max-w-4xl mx-auto" 
        data-aos="fade-up" 
        data-aos-delay="300">
        When I'm not coding or designing, I immerse myself in activities that fuel my creativity and broaden my horizons. Here are some of my favorite hobbies that keep me inspired and balanced:
      </p>

      <!-- Interest Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        
        <!-- Reading Tech Blogs Card -->
        <article 
          class="group bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-6 shadow-lg hover:shadow-red-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-700/50 hover:border-red-500/50" 
          data-aos="fade-up" 
          data-aos-delay="400">
          <!-- Icon Container -->
          <div 
            class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full mb-5 mx-auto shadow-lg group-hover:shadow-red-500/50 group-hover:scale-110 transition-all duration-300">
            <svg 
              class="w-8 h-8 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
          </div>
          <!-- Card Title -->
          <h3 class="text-xl font-semibold text-white text-center mb-3 group-hover:text-red-400 transition-colors duration-300">
            Reading Tech Blogs
          </h3>
          <!-- Card Description -->
          <p class="text-gray-400 text-center text-sm leading-relaxed">
            I actively follow industry leaders and publications to stay updated on the latest <strong class="text-gray-300">framework releases</strong>, <strong class="text-gray-300">performance best practices</strong>, and <strong class="text-gray-300">emerging architectural patterns</strong> in modern web development.
          </p>
        </article>

        <!-- Watching Tutorials Card -->
        <article 
          class="group bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-6 shadow-lg hover:shadow-red-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-700/50 hover:border-red-500/50" 
          data-aos="fade-up" 
          data-aos-delay="500">
          <!-- Icon Container -->
          <div 
            class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full mb-5 mx-auto shadow-lg group-hover:shadow-red-500/50 group-hover:scale-110 transition-all duration-300">
            <svg 
              class="w-8 h-8 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <!-- Card Title -->
          <h3 class="text-xl font-semibold text-white text-center mb-3 group-hover:text-red-400 transition-colors duration-300">
            Watching Tutorials
          </h3>
          <!-- Card Description -->
          <p class="text-gray-400 text-center text-sm leading-relaxed">
            This is my hands-on learning method. I use video guides to acquire specific skills quickly, especially in areas like <strong class="text-gray-300">Docker configuration</strong>, <strong class="text-gray-300">advanced Vue/Nuxt features</strong>, or <strong class="text-gray-300">state management techniques</strong>.
          </p>
        </article>

        <!-- Side Projects Card -->
        <article 
          class="group bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-6 shadow-lg hover:shadow-red-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-700/50 hover:border-red-500/50" 
          data-aos="fade-up" 
          data-aos-delay="600">
          <!-- Icon Container -->
          <div 
            class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full mb-5 mx-auto shadow-lg group-hover:shadow-red-500/50 group-hover:scale-110 transition-all duration-300">
            <svg 
              class="w-8 h-8 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
          </div>
          <!-- Card Title -->
          <h3 class="text-xl font-semibold text-white text-center mb-3 group-hover:text-red-400 transition-colors duration-300">
            Side Projects
          </h3>
          <!-- Card Description -->
          <p class="text-gray-400 text-center text-sm leading-relaxed">
            The best way to solidify skills. I build small applications to practice <strong class="text-gray-300">end-to-end deployment</strong>, integrate new technologies like <strong class="text-gray-300">Elixir Phoenix</strong>, or focus on solving real-world utility problems.
          </p>
        </article>

        <!-- Community Engagement Card -->
        <article 
          class="group bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-6 shadow-lg hover:shadow-red-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-700/50 hover:border-red-500/50" 
          data-aos="fade-up" 
          data-aos-delay="700">
          <!-- Icon Container -->
          <div 
            class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full mb-5 mx-auto shadow-lg group-hover:shadow-red-500/50 group-hover:scale-110 transition-all duration-300">
            <svg 
              class="w-8 h-8 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </div>
          <!-- Card Title -->
          <h3 class="text-xl font-semibold text-white text-center mb-3 group-hover:text-red-400 transition-colors duration-300">
            Community Engagement
          </h3>
          <!-- Card Description -->
          <p class="text-gray-400 text-center text-sm leading-relaxed">
            Engaging with the local <strong class="text-gray-300">Cambodian tech community</strong> and online forums (e.g., GitHub, Stack Overflow) to share knowledge, <strong class="text-gray-300">collaboratively debug problems</strong>, and build my professional network.
          </p>
        </article>

        <!-- UI/UX Design Card -->
        <article 
          class="group bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-6 shadow-lg hover:shadow-red-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-700/50 hover:border-red-500/50" 
          data-aos="fade-up" 
          data-aos-delay="800">
          <!-- Icon Container -->
          <div 
            class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full mb-5 mx-auto shadow-lg group-hover:shadow-red-500/50 group-hover:scale-110 transition-all duration-300">
            <svg 
              class="w-8 h-8 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
          </div>
          <!-- Card Title -->
          <h3 class="text-xl font-semibold text-white text-center mb-3 group-hover:text-red-400 transition-colors duration-300">
            UI/UX Design
          </h3>
          <!-- Card Description -->
          <p class="text-gray-400 text-center text-sm leading-relaxed">
            I dive into design tools like <strong class="text-gray-300">Figma</strong> to better understand <strong class="text-gray-300">user flows</strong>, <strong class="text-gray-300">accessibility</strong>, and aesthetic balance. This ensures my frontend code results in truly intuitive and beautiful user interfaces.
          </p>
        </article>

        <!-- Exploring Cambodia Card -->
        <article 
          class="group bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-6 shadow-lg hover:shadow-red-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-700/50 hover:border-red-500/50" 
          data-aos="fade-up" 
          data-aos-delay="900">
          <!-- Icon Container -->
          <div 
            class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full mb-5 mx-auto shadow-lg group-hover:shadow-red-500/50 group-hover:scale-110 transition-all duration-300">
            <svg 
              class="w-8 h-8 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <!-- Card Title -->
          <h3 class="text-xl font-semibold text-white text-center mb-3 group-hover:text-red-400 transition-colors duration-300">
            Exploring Cambodia 🇰🇭
          </h3>
          <!-- Card Description -->
          <p class="text-gray-400 text-center text-sm leading-relaxed">
            Traveling locally provides essential <strong class="text-gray-300">mental breaks</strong> and encourages <strong class="text-gray-300">creative problem-solving</strong> by exposing me to new perspectives, which I bring back to my coding and design work.
          </p>
        </article>

      </div>
    </div>

    <!-- Decorative Background Elements -->
    <div 
      class="absolute top-10 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl -z-0" 
      aria-hidden="true">
    </div>
    <div 
      class="absolute bottom-10 right-10 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl -z-0" 
      aria-hidden="true">
    </div>
    <div 
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/3 rounded-full blur-3xl -z-0" 
      aria-hidden="true">
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Interest Section Component
 * 
 * Displays personal interests and hobbies in a visually appealing card grid layout.
 * Each card features an icon, title, and description with hover animations.
 * 
 * @component
 * @example
 * <InterestSection />
 * 
 * Features:
 * - Responsive grid layout (1 column on mobile, 2 on tablet, 3 on desktop)
 * - Animated cards with hover effects (scale, translate, shadow)
 * - AOS (Animate On Scroll) integration for entrance animations
 * - Semantic HTML structure with proper ARIA labels
 * - Gradient backgrounds and modern styling
 * 
 * @author Khun Kimhong
 */

/**
 * Interest Cards Data Structure
 * 
 * Each card contains:
 * - Icon: SVG graphic representing the interest
 * - Title: Brief heading for the interest
 * - Description: Detailed explanation with highlighted keywords
 * 
 * Keywords are wrapped in <strong> tags for visual emphasis
 */
</script>

<style scoped>
/**
 * Main Heading Gradient
 * Creates a smooth white-to-red gradient effect on the h2 element
 */
h2 {
  background: linear-gradient(to right, #ffffff, #fecaca, #ef4444);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/**
 * Smooth Transitions
 * Ensures all hover effects are smooth and consistent
 */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/**
 * Card Hover Effects
 * Creates depth and interactivity through scaling and shadows
 */
article:hover {
  transform: translateY(-0.5rem) scale(1.05);
}

/**
 * Icon Container Animations
 * Icons scale and glow on hover for enhanced interactivity
 */
article:hover .w-16 {
  transform: scale(1.1);
  box-shadow: 0 10px 25px -5px rgba(239, 68, 68, 0.5);
}

/**
 * Text Emphasis
 * Strong tags within descriptions have subtle color enhancement
 */
strong {
  font-weight: 600;
  color: #e5e7eb;
  transition: color 0.3s ease;
}

article:hover strong {
  color: #fca5a5;
}

/**
 * Responsive Typography
 * Ensures text remains readable across all screen sizes
 */
@media (max-width: 640px) {
  h2 {
    font-size: 2rem;
    line-height: 1.2;
  }
  
  h3 {
    font-size: 1.125rem;
  }
}

/**
 * Border Animation
 * Smooth transition for card borders on hover
 */
article {
  border-width: 1px;
  border-style: solid;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

/**
 * Accessibility: Focus States
 * Ensures keyboard navigation is visible and clear
 */
article:focus-within {
  outline: 2px solid #ef4444;
  outline-offset: 2px;
}

/**
 * Performance Optimization
 * Uses GPU acceleration for smoother animations
 */
article,
.w-16 {
  will-change: transform;
}

/**
 * Custom Scrollbar (optional - for webkit browsers)
 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1f2937;
}

::-webkit-scrollbar-thumb {
  background: #ef4444;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #dc2626;
}
</style>