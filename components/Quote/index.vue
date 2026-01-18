<template>
  <section id="quote" class="min-h-screen flex items-center justify-center py-16 px-4 relative overflow-hidden">
    <div class="absolute inset-0"></div>
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
    </div>
    
    <div class="max-w-3xl w-full p-12 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl relative z-10 hover:bg-white/10 transition-all duration-300">
      
      <div class="mb-10">
        <svg class="w-16 h-16 text-red-400 opacity-30" fill="currentColor" viewBox="0 0 32 32">
          <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14h-4c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h8V14h-4c0-1.1.9-2 2-2V8z"/>
        </svg>
      </div>
      
      <p class="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
        If you want something done right, do it yourself.
      </p>
      
      <div class="flex flex-col pl-4 border-l-4 border-red-400">
        <p class="text-red-400 font-bold text-xl tracking-wide">
          Charles-Guillaume Étienne
        </p>
        <p class="text-gray-400 text-sm mt-1 tracking-wider uppercase">
          French Dramatist & Journalist
        </p>
      </div>

      <p class="mt-10 text-gray-300 text-lg leading-relaxed">
        This timeless quote embodies the spirit of self-reliance and dedication 
        that drives me to deliver exceptional results in every project.
      </p>
    </div>
  </section>
</template>