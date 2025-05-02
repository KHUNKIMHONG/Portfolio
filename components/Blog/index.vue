<template>
    <section id="blog" class="min-h-screen py-16 px-4 sm:px-6 lg:px-12 relative">
        <div class="container mx-auto max-w-6xl">
            <!-- Faded "BLOG POST" Text in Background -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-red-600 text-center opacity-20 tracking-widest mb-2 lg:mb-8"
                data-aos="fade-down" data-aos-delay="100" v-text="'BLOG POST'">
            </h1>

            <!-- Main Title -->
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center lg:text-start mb-2 lg:mb-6"
                data-aos="fade-up" data-aos-delay="200" v-text="'Latest Blog Posts'">
            </h2>

            <!-- Introduction -->
            <p class="text-base sm:text-lg text-gray-300 text-center lg:text-left mb-4 lg:mb-10" data-aos="fade-up"
                data-aos-delay="300">
                Dive into my insights on web development, featuring tutorials, tips, and deep dives into Vue, Nuxt,
                Laravel, and more. Whether you're a beginner or a seasoned developer, my posts offer practical knowledge
                to elevate your skills.
            </p>

            <!-- Category Filters -->
            <div class="mb-8" data-aos="fade-up" data-aos-delay="400">
                <div class="flex overflow-x-auto space-x-2 pb-2 hide-scrollbar">
                    <button @click="selectedCategory = ''" :class="{
                        'bg-red-500 text-gray-200': selectedCategory === '',
                        'bg-gray-800 text-white': selectedCategory !== '',
                        'hover:bg-gray-300': selectedCategory !== ''
                    }" class="px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap"
                        :aria-selected="selectedCategory === ''" aria-label="Show all categories">
                        All
                    </button>
                    <button v-for="(category, idx) in allCategories" :key="idx" @click="selectedCategory = category"
                        :class="{
                            'bg-red-500 text-gray-200': selectedCategory === category,
                            'bg-gray-800 text-white': selectedCategory !== category,
                            'hover:bg-gray-300': selectedCategory !== category
                        }" class="px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap"
                        :aria-selected="selectedCategory === category" :aria-label="`Show ${category} category`">
                        {{ category }}
                    </button>
                </div>
            </div>

            <!-- Blog Posts Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="(post, index) in filteredPosts" :key="index" data-aos="fade-up"
                    :data-aos-delay="500 + index * 100">
                    <img :src="post.image" :alt="post.title"
                        class="w-full h-60 rounded-lg object-cover hover:scale-105 transition-all duration-300" />
                    <div class="p-2">
                        <h3 class="text-lg font-semibold text-red-400 line-clamp-1">{{ post.title }}</h3>
                        <div class="flex flex-wrap gap-2 mt-2">
                            <span v-for="(category, idx) in post.categories" :key="idx"
                                class="bg-red-600 text-white text-xs px-2 py-1 rounded-md hover:bg-red-700 transition-all duration-300">
                                {{ category }}
                            </span>
                        </div>
                        <p class="text-gray-200 text-sm mt-2 line-clamp-2">{{ post.summary }}</p>
                        <div class="mt-3 flex justify-between items-center">
                            <button @click="openPost(post)"
                                class="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                <span>Read More</span>
                            </button>
                            <span class="text-xs text-gray-400">{{ formatDate(post.date) }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Full Blog Post Modal -->
            <div v-if="selectedPost"
                class="fixed inset-0 bg-zinc-900/70 backdrop-blur-sm z-50 p-2 md:p-8 overflow-y-auto"
                @click.self="selectedPost = null" data-aos="zoom-in" data-aos-delay="100">
                <div class="max-w-4xl w-full mx-auto bg-zinc-900 rounded-xl shadow-2xl relative overflow-hidden"
                    data-aos="zoom-in" data-aos-duration="600">
                    <!-- Modal Header -->
                    <div class="relative">
                        <img :src="selectedPost.image" :alt="selectedPost.title"
                            class="w-full h-64 md:h-80 object-cover rounded-t-xl" data-aos="fade-up"
                            data-aos-delay="100" />
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent rounded-t-xl">
                        </div>
                        <div class="absolute bottom-6 left-6">
                            <h3 class="text-2xl md:text-3xl font-bold text-white drop-shadow-lg" data-aos="fade-right"
                                data-aos-delay="200">
                                {{ selectedPost.title }}
                            </h3>
                        </div>
                    </div>

                    <!-- Modal Content -->
                    <div class="p-6 md:p-8 space-y-6">
                        <!-- Summary -->
                        <div data-aos="fade-up" data-aos-delay="300">
                            <h4 class="text-xl font-semibold text-red-400 mb-2">Overview</h4>
                            <p class="text-gray-200 text-sm md:text-base leading-relaxed">{{ selectedPost.summary }}</p>
                        </div>

                        <!-- Categories and Date -->
                        <div class="flex flex-wrap justify-between items-center gap-4 border-b border-gray-700 pb-4"
                            data-aos="fade-up" data-aos-delay="400">
                            <div class="flex flex-wrap gap-2">
                                <span v-for="(category, idx) in selectedPost.categories" :key="idx"
                                    class="bg-red-600 text-white text-xs px-3 py-1 rounded-md hover:bg-red-700 transition-all duration-300">
                                    {{ category }}
                                </span>
                            </div>
                            <span class="text-sm text-gray-400 flex items-center gap-2">
                                Published on
                                {{ formatDate(selectedPost.date) }}
                            </span>
                        </div>

                        <!-- Blog Post Content -->
                        <div class="space-y-6">
                            <!-- Main Content -->
                            <div data-aos="fade-up" data-aos-delay="500">
                                <h4 class="text-xl font-semibold text-red-400 mb-2">Introduction</h4>
                                <p class="text-gray-200 text-sm md:text-base leading-relaxed">{{ selectedPost.content }}
                                </p>
                            </div>

                            <!-- Key Points -->
                            <div v-for="(point, idx) in selectedPost.description" :key="idx" data-aos="fade-up"
                                :data-aos-delay="600 + idx * 100">
                                <h5 v-if="typeof point === 'object'" class="text-md font-semibold text-white mb-2">
                                    {{ point.title }}
                                </h5>
                                <ul class="list-none space-y-3 ml-2">
                                    <li v-for="(item, index) in (typeof point === 'object' ? point.points : [])"
                                        :key="index" class="flex items-start gap-3" data-aos="fade-left"
                                        :data-aos-delay="700 + index * 100">
                                        <span
                                            class="flex items-center justify-center w-4 h-4 mt-1 rounded-full bg-red-500 text-white flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span class="text-gray-200 text-sm md:text-base leading-relaxed">{{ item
                                        }}</span>
                                    </li>
                                </ul>
                            </div>

                            <!-- Conclusion -->
                            <div data-aos="fade-up" :data-aos-delay="800">
                                <h4 class="text-xl font-semibold text-red-400 mb-2">Conclusion</h4>
                                <p class="text-gray-200 text-sm md:text-base leading-relaxed">
                                    {{ selectedPost.conclusion || 'Explore this topic further and apply these insights to your blog post!' }}
                                </p>
                            </div>
                        </div>

                        <!-- Close Button -->
                        <div class="flex justify-center mt-8" data-aos="fade-up" data-aos-delay="600">
                            <button @click="selectedPost = null"
                                class="group relative flex items-center bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white rounded-full shadow-lg transition-all duration-300 overflow-hidden w-14 h-14 hover:w-56 p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                                aria-label="Close Modal">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                                <span
                                    class="absolute left-16 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap text-base font-medium">
                                    Close Blog Post
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { blogPosts } from "@/stores/Blog/blog";

// Function to format the date
const formatDate = (dateString: string | undefined): string => {
    if (!dateString) return "Unknown Date";
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

// Define types
interface BlogPost {
    title: string;
    summary: string;
    content: string;
    image: string;
    categories: string[];
    description?: { title: string; points: string[] }[];
    date?: string;
    conclusion?: string;
}

const selectedPost = ref<BlogPost | null>(null);
const selectedCategory = ref<string>('');

// Get unique categories from all posts
const allCategories = computed<string[]>(() => {
    const categories = new Set<string>();
    blogPosts.value.forEach((post: BlogPost) => {
        post.categories.forEach((cat: string) => categories.add(cat));
    });
    return Array.from(categories);
});

// Filtered posts based on selected category
const filteredPosts = computed<BlogPost[]>(() => {
    if (!selectedCategory.value) {
        return blogPosts.value;
    }
    return blogPosts.value.filter((post: BlogPost) => post.categories.includes(selectedCategory.value));
});

// Open post in full view
const openPost = (post: BlogPost) => {
    selectedPost.value = post;
};
</script>


<style scoped>
/* Hide scrollbar for category filters and modals */
.hide-scrollbar::-webkit-scrollbar,
.overflow-y-auto::-webkit-scrollbar {
    display: none;
}

.hide-scrollbar,
.overflow-y-auto {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

h2 {
    background: linear-gradient(to right, #ffffff, #ef4444);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.line-clamp-1 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
