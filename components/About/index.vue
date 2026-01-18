<template>
  <section id="about" class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-20 relative overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black">
    
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/5 rounded-full blur-3xl animate-pulse-slow"></div>
    </div>

    <div class="container mx-auto max-w-7xl relative z-10">
      
      <!-- Header Section with Enhanced Typography -->
      <div class="text-center mb-20">
        <!-- Background Title with Glow Effect -->
        <div class="relative text-7xl sm:text-8xl lg:text-9xl font-black mb-6" data-aos="fade-down" data-aos-delay="100">
          <span class="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-red-500/30 to-rose-500/30 blur-sm">
            ABOUT ME
          </span>
          <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-red-500/20 to-rose-500/20 tracking-widest select-none">
            ABOUT ME
          </span>
        </div>
        
        <!-- Main Title with Enhanced Gradient -->
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 relative inline-block" data-aos="fade-up" data-aos-delay="200">
          <span class="bg-gradient-to-r from-white via-red-100 to-rose-100 bg-clip-text text-transparent">
            Know Me More
          </span>
        </h2>
        
        <!-- Animated Decorative Line -->
        <div class="flex items-center justify-center gap-2 mb-8" data-aos="zoom-in" data-aos-delay="300">
          <div class="w-8 h-0.5 bg-gradient-to-r from-transparent to-red-500 rounded-full"></div>
          <div class="w-24 h-1 bg-gradient-to-r from-red-500 via-rose-500 to-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
          <div class="w-8 h-0.5 bg-gradient-to-l from-transparent to-red-500 rounded-full"></div>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        <!-- Left Section: Personal Info -->
        <div class="space-y-8">
          
          <!-- Introduction Card -->
          <div class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800/50 shadow-xl hover:border-red-500/30 transition-all duration-500" data-aos="fade-right" data-aos-delay="300">
            <h3 class="text-2xl sm:text-3xl font-bold text-gray-200 mb-4">
              I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">KHUN KIMHONG</span>, 
              a Passionate Web Developer
            </h3>

            <div class="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Born in Takeo Province, Cambodia, I embarked on my tech journey after earning a Grade C in the 2019 national
                exam. I pursued <span class="text-red-400 font-semibold">Software Engineering</span> at the Institute of Technology of Cambodia (ITC), where I honed my
                skills over five years. By 2024, I proudly graduated, equipped with expertise in building modern,
                responsive, and user-centric web solutions.
              </p>
              <p>
                My goal is to build websites and applications that are <span class="text-red-400 font-semibold">effortless to use</span> and <span class="text-red-400 font-semibold">visually captivating</span>. 
                With a passion for clean code and innovative technology, I create seamless, beautiful experiences that users love.
              </p>
            </div>
          </div>

          <!-- Personal Details Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4" data-aos="fade-right" data-aos-delay="400">
            
            <!-- Nationality Card -->
            <div class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl p-5 rounded-xl border border-zinc-800/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 group">
              <div class="flex items-center gap-2 mb-3">
                <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20">
                  <svg class="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <p class="text-gray-400 text-xs font-semibold uppercase tracking-wider">Nationality</p>
              </div>
              <p class="font-bold text-white text-lg group-hover:text-red-400 transition-colors duration-300">Cambodian</p>
            </div>

            <!-- Date of Birth Card -->
            <div class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl p-5 rounded-xl border border-zinc-800/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 group">
              <div class="flex items-center gap-2 mb-3">
                <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20">
                  <svg class="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <p class="text-gray-400 text-xs font-semibold uppercase tracking-wider">Birth Date</p>
              </div>
              <p class="font-bold text-white text-lg group-hover:text-red-400 transition-colors duration-300">14 April, 2001</p>
            </div>

            <!-- Location Card -->
            <div class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl p-5 rounded-xl border border-zinc-800/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 group">
              <div class="flex items-center gap-2 mb-3">
                <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20">
                  <svg class="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <p class="text-gray-400 text-xs font-semibold uppercase tracking-wider">Location</p>
              </div>
              <p class="font-bold text-white text-lg group-hover:text-red-400 transition-colors duration-300">Phnom Penh</p>
            </div>
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4" data-aos="fade-right" data-aos-delay="500">
            
            <div class="text-center p-5 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-xl border border-zinc-800/50 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 group">
              <p class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500 group-hover:scale-110 transition-transform duration-300">5+</p>
              <p class="text-xs text-gray-400 mt-2 font-medium">Projects</p>
            </div>
            
            <div class="text-center p-5 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-xl border border-zinc-800/50 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 group">
              <p class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500 group-hover:scale-110 transition-transform duration-300">5+</p>
              <p class="text-xs text-gray-400 mt-2 font-medium">Technologies</p>
            </div>
            
            <div class="text-center p-5 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-xl border border-zinc-800/50 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 group">
              <p class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500 group-hover:scale-110 transition-transform duration-300">100%</p>
              <p class="text-xs text-gray-400 mt-2 font-medium">Dedication</p>
            </div>
            
            <div class="text-center p-5 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-xl border border-zinc-800/50 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 group">
              <p class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500 group-hover:scale-110 transition-transform duration-300">24/7</p>
              <p class="text-xs text-gray-400 mt-2 font-medium">Support</p>
            </div>
          </div>

          <!-- Call-to-Action Buttons -->
          <div class="flex flex-wrap gap-4" data-aos="fade-right" data-aos-delay="600">
            <a 
              href="#contact"
              class="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 border border-red-500/20">
              <span class="text-lg">Let's Work Together</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
            
            <a 
              href="#project"
              class="inline-flex items-center gap-3 bg-zinc-900/80 backdrop-blur-xl text-white px-8 py-4 rounded-xl font-semibold border border-zinc-800/50 hover:border-red-500/50 hover:bg-zinc-800/80 transition-all duration-300">
              <span class="text-lg">View My Work</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Right Section: Experience Card -->
        <div class="flex flex-col gap-6 justify-center">
          
          <!-- Main Experience Card -->
          <div 
            data-aos="zoom-in" 
            data-aos-delay="400"
            class="relative bg-gradient-to-br from-red-600 to-rose-600 shadow-2xl shadow-red-500/50 rounded-3xl w-full max-w-md mx-auto text-center p-12 md:p-16 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/70 group overflow-hidden border-2 border-red-500/30">
            
            <!-- Animated background circles -->
            <div class="absolute top-0 right-0 w-40 h-40 bg-red-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <div class="absolute bottom-0 left-0 w-40 h-40 bg-rose-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <!-- Foreground Content -->
            <div class="relative z-10">
              <div class="mb-6">
                <div class="w-20 h-20 mx-auto rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                </div>
              </div>
              
              <h4 class="text-[80px] md:text-[110px] font-black text-white leading-none mb-4 group-hover:scale-110 transition-transform duration-500">
                01+
              </h4>
              <p class="text-xl md:text-2xl font-bold text-white mb-2">
                Years of Experience
              </p>
              <p class="text-base text-white/90">
                Web Development
              </p>
            </div>
          </div>

          <!-- Additional Info Cards -->
          <div class="grid grid-cols-2 gap-4 max-w-md mx-auto w-full" data-aos="fade-left" data-aos-delay="600">
            
            <!-- Education Card -->
            <div class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl p-6 rounded-xl border border-zinc-800/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 text-center group">
              <div class="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                </svg>
              </div>
              <p class="text-white font-bold text-base mb-1">ITC Graduate</p>
              <p class="text-gray-400 text-sm">2024</p>
            </div>

            <!-- Status Card -->
            <div class="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl p-6 rounded-xl border border-zinc-800/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 text-center group">
              <div class="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20 group-hover:scale-110 transition-transform duration-300 relative">
                <div class="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse border-2 border-zinc-900"></div>
                <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <p class="text-white font-bold text-base mb-1">Available</p>
              <p class="text-gray-400 text-sm">For Hire</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Enhanced About Section Component
 * 
 * Premium about section with modern glassmorphism design,
 * animated elements, and enhanced visual hierarchy.
 * 
 * @component
 * @example
 * <AboutSection />
 * 
 * Features:
 * - Glassmorphism card design throughout
 * - Enhanced personal information cards
 * - Animated quick stats with gradient text
 * - Premium experience showcase card
 * - Call-to-action buttons with hover effects
 * - Status indicators (available for hire)
 * - Fully responsive grid layout
 * - AOS animation integration
 * - Floating background elements
 * - Smooth transitions and hover states
 * 
 * @author Khun Kimhong
 */
</script>

<style scoped>
/**
 * Floating Animation for Background Elements
 */
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(-30px) translateX(20px);
  }
  66% {
    transform: translateY(15px) translateX(-15px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(20px) translateX(-20px);
  }
  66% {
    transform: translateY(-15px) translateX(15px);
  }
}

.animate-float {
  animation: float 10s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 12s ease-in-out infinite;
  animation-delay: 1.5s;
}

/**
 * Slow Pulse Animation
 */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.05);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/**
 * Custom Scrollbar Styling
 */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #09090b;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #dc2626, #f43f5e);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #b91c1c, #e11d48);
}

/**
 * Smooth Transitions
 */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/**
 * Performance Optimization
 */
.group {
  will-change: transform, border-color;
}

/**
 * Responsive Typography
 */
@media (max-width: 640px) {
  h2 {
    font-size: 2rem;
    line-height: 1.2;
  }
}
</style>