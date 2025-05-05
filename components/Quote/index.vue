<template>
  <section
    class="py-20 px-6 text-center relative overflow-hidden bg-cover bg-center bg-no-repeat"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div
      class="container relative z-10 max-w-4xl mx-auto p-8 rounded-lg shadow-lg bg-gray-900 bg-opacity-70 backdrop-blur-md"
      style="background-image: url('/Quote/image.png');"
    >
      <!-- Content Container -->
      <h2
        class="text-2xl text-gray-300 md:text-4xl font-extrabold mb-8 tracking-tight"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
        v-text="'Quote for inspiration'"
      ></h2>

      <div class="relative flex items-start justify-center">
        <!-- Quote Text -->
        <p
          class="text-xl md:text-2xl italic font-light leading-relaxed mx-auto max-w-2xl text-gray-100 px-6 md:px-8"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="800"
          v-text="`'If you want something done right, do it yourself.'`"
        ></p>
      </div>

      <p
        class="mt-6 text-lg md:text-xl font-semibold text-zinc-400"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="800"
        v-text="`– Charles-Guillaume Étienne`"
      ></p>
    </div>
  </section>
</template>


