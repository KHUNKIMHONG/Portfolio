<template>
    <section id="blog"
        class="min-h-screen py-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black">

        <!-- Animated Background Elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div
                class="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl animate-float">
            </div>
            <div
                class="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-3xl animate-float-delayed">
            </div>
            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/5 rounded-full blur-3xl animate-pulse-slow">
            </div>
        </div>

        <div class="container mx-auto max-w-7xl relative">

            <!-- Header Section with Enhanced Typography -->
            <div class="text-center mb-20">
                <!-- Background Title with Glow Effect -->
                <div class="relative text-7xl sm:text-8xl lg:text-9xl font-black mb-6" data-aos="fade-down"
                    data-aos-delay="100">
                    <span
                        class="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-red-500/30 to-rose-500/30 blur-sm">
                        BLOG POST
                    </span>
                    <span
                        class="relative text-transparent bg-clip-text bg-gradient-to-r from-red-500/20 to-rose-500/20 tracking-widest select-none">
                        BLOG POST
                    </span>
                </div>

                <!-- Main Title with Enhanced Gradient -->
                <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 relative inline-block" data-aos="fade-up"
                    data-aos-delay="200">
                    <span class="bg-gradient-to-r from-white via-red-100 to-rose-100 bg-clip-text text-transparent">
                        Latest Blog Posts
                    </span>
                </h2>

                <!-- Animated Decorative Line -->
                <div class="flex items-center justify-center gap-2 mb-8" data-aos="zoom-in" data-aos-delay="300">
                    <div class="w-8 h-0.5 bg-gradient-to-r from-transparent to-red-500 rounded-full"></div>
                    <div
                        class="w-24 h-1 bg-gradient-to-r from-red-500 via-rose-500 to-red-500 rounded-full shadow-lg shadow-red-500/50">
                    </div>
                    <div class="w-8 h-0.5 bg-gradient-to-l from-transparent to-red-500 rounded-full"></div>
                </div>

                <!-- Introduction -->
                <p class="text-gray-400 text-lg text-center max-w-4xl mx-auto leading-relaxed" data-aos="fade-up"
                    data-aos-delay="400">
                    Dive into my insights on web development, featuring tutorials, tips, and deep dives into Vue, Nuxt,
                    Laravel, and more. Whether you're a beginner or a seasoned developer, my posts offer practical
                    knowledge
                    to elevate your skills.
                </p>
            </div>

            <!-- Category Filters with Enhanced Design -->
            <div class="mb-12" data-aos="fade-up" data-aos-delay="500">
                <div class="flex items-center gap-3 mb-4">
                    <div
                        class="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20">
                        <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-white">Filter by Category</h3>
                </div>

                <div class="flex overflow-x-auto gap-3 pb-2 hide-scrollbar">
                    <button @click="selectedCategory = ''; currentPage = 1" :class="{
                        'bg-gradient-to-r from-red-600 to-rose-600 text-white border-red-500/50 shadow-lg shadow-red-500/30': selectedCategory === '',
                        'bg-zinc-800/80 text-gray-300 border-zinc-700/50 hover:border-red-500/30 hover:bg-zinc-800': selectedCategory !== ''
                    }" class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap border backdrop-blur-sm hover:scale-105"
                        :aria-selected="selectedCategory === ''" aria-label="Show all categories">
                        All Posts
                    </button>
                    <button v-for="(category, idx) in allCategories" :key="idx" @click="selectedCategory = category; currentPage = 1"
                        :class="{
                            'bg-gradient-to-r from-red-600 to-rose-600 text-white border-red-500/50 shadow-lg shadow-red-500/30': selectedCategory === category,
                            'bg-zinc-800/80 text-gray-300 border-zinc-700/50 hover:border-red-500/30 hover:bg-zinc-800': selectedCategory !== category
                        }"
                        class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap border backdrop-blur-sm hover:scale-105"
                        :aria-selected="selectedCategory === category" :aria-label="`Show ${category} category`">
                        {{ category }}
                    </button>
                </div>
            </div>

            <!-- Posts Count Display -->
            <div class="mb-6 text-gray-400 text-sm" data-aos="fade-up" data-aos-delay="550">
                Showing {{ displayedCount }} of {{ filteredPosts.length }} posts
            </div>

            <!-- Blog Posts Grid with Enhanced Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div v-for="(post, index) in paginatedPosts" :key="index"
                    class="group relative transition-all duration-500 hover:-translate-y-2" data-aos="fade-up"
                    :data-aos-delay="600 + (index % 8) * 100">

                    <!-- Gradient Overlay on Hover -->
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>

                    <!-- Number Badge -->
                    <div
                        class="absolute top-4 right-4 w-10 h-10 rounded-xl bg-gradient-to-br from-red-600/90 to-rose-600/90 backdrop-blur-sm border border-red-500/30 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-red-500/30 z-10 group-hover:scale-110 transition-transform duration-300">
                        {{ ((currentPage - 1) * postsPerPage) + index + 1 }}
                    </div>

                    <!-- Image with Overlay -->
                    <div class="relative rounded-xl overflow-hidden">
                        <img :src="post.image" :alt="post.title"
                            class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent">
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="p-2 relative z-10">
                        <h3
                            class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 leading-tight mb-3 line-clamp-2 group-hover:from-red-300 group-hover:to-rose-300 transition-all">
                            {{ post.title }}
                        </h3>

                        <!-- Categories -->
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span v-for="(category, idx) in post.categories.slice(0, 3)" :key="idx"
                                class="bg-zinc-800/80 backdrop-blur-sm text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg border border-zinc-700/50 hover:bg-red-600 hover:border-red-500/50 hover:text-white transition-all duration-300">
                                {{ category }}
                            </span>
                        </div>

                        <p
                            class="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4 group-hover:text-gray-300 transition-colors">
                            {{ post.summary }}
                        </p>

                        <!-- Actions -->
                        <div class="flex justify-between items-center pt-4 border-t border-zinc-800/50">
                            <button @click="openPost(post)"
                                class="flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 border border-red-500/20">
                                <span>Read More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                            <span class="text-xs text-gray-500 flex items-center gap-1.5">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {{ formatDate(post.date) }}
                            </span>
                        </div>
                    </div>

                    <!-- Bottom Accent Line -->
                    <div
                        class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>
                </div>
            </div>

            <!-- Pagination Controls -->
            <div v-if="totalPages > 1" class="flex items-center justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="700">
                <button @click="previousPage" :disabled="currentPage === 1"
                    class="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border"
                    :class="{
                        'bg-gradient-to-r from-red-600 to-rose-600 text-white border-red-500/50 hover:shadow-lg hover:shadow-red-500/30 hover:scale-105': currentPage !== 1,
                        'bg-zinc-800/50 text-gray-500 border-zinc-700/50 cursor-not-allowed opacity-50': currentPage === 1
                    }">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                </button>

                <div class="flex gap-2">
                    <button v-for="page in totalPages" :key="page" @click="currentPage = page"
                        :class="{
                            'bg-gradient-to-r from-red-600 to-rose-600 text-white border-red-500/50 shadow-lg shadow-red-500/30': currentPage === page,
                            'bg-zinc-800/80 text-gray-300 border-zinc-700/50 hover:border-red-500/30 hover:bg-zinc-800': currentPage !== page
                        }"
                        class="w-10 h-10 rounded-lg text-sm font-semibold transition-all duration-300 border hover:scale-105">
                        {{ page }}
                    </button>
                </div>

                <button @click="nextPage" :disabled="currentPage === totalPages"
                    class="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border"
                    :class="{
                        'bg-gradient-to-r from-red-600 to-rose-600 text-white border-red-500/50 hover:shadow-lg hover:shadow-red-500/30 hover:scale-105': currentPage !== totalPages,
                        'bg-zinc-800/50 text-gray-500 border-zinc-700/50 cursor-not-allowed opacity-50': currentPage === totalPages
                    }">
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <!-- Full Blog Post Modal with Enhanced Design -->
            <div v-if="showModal && selectedPost" @click.self="closeModal"
                class="fixed inset-0 bg-zinc-900/70 backdrop-blur-sm z-50 md:p-4 overflow-y-auto" data-aos="zoom-in"
                data-aos-delay="100">

                <div class="max-w-4xl w-full mx-auto bg-zinc-900 rounded-xl shadow-2xl relative overflow-hidden"
                    data-aos="zoom-in" data-aos-duration="600">

                    <!-- Modal Header with Image -->
                    <div class="relative h-80">
                        <img :src="selectedPost.image" :alt="selectedPost.title" class="w-full h-full object-cover" />
                        <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/70 to-transparent">
                        </div>
                        <div class="absolute bottom-8 left-8 right-8">
                            <h3
                                class="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 leading-tight mb-2">
                                {{ selectedPost.title }}
                            </h3>
                        </div>
                    </div>

                    <!-- Close Button -->
                    <button @click="closeModal"
                        class="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-zinc-800/80 backdrop-blur-sm hover:bg-red-600 text-gray-400 hover:text-white transition-all duration-300 flex items-center justify-center border border-zinc-700/50 hover:border-red-500/50 group transform hover:scale-110 hover:rotate-12">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <!-- Modal Content -->
                    <div class="p-8 md:p-10 space-y-8">

                        <!-- Categories and Date -->
                        <div class="flex flex-wrap justify-between items-center gap-4 pb-6 border-b border-zinc-800/50">
                            <div class="flex flex-wrap gap-2">
                                <span v-for="(category, idx) in selectedPost.categories" :key="idx"
                                    class="bg-zinc-800/80 backdrop-blur-sm text-gray-300 text-sm font-medium px-4 py-2 rounded-lg border border-zinc-700/50 hover:bg-red-600 hover:border-red-500/50 hover:text-white transition-all duration-300">
                                    {{ category }}
                                </span>
                            </div>
                            <span class="text-sm text-gray-400 flex items-center gap-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {{ formatDate(selectedPost.date) }}
                            </span>
                        </div>

                        <!-- Overview -->
                        <div>
                            <div class="flex items-center gap-3 mb-4">
                                <div
                                    class="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20">
                                    <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 class="text-2xl font-bold text-white">Overview</h4>
                            </div>
                            <p class="text-gray-300 text-base leading-relaxed pl-13">{{ selectedPost.summary }}</p>
                        </div>

                        <!-- Introduction -->
                        <div>
                            <div class="flex items-center gap-3 mb-4">
                                <div
                                    class="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20">
                                    <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h4 class="text-2xl font-bold text-white">Introduction</h4>
                            </div>
                            <p class="text-gray-300 text-base leading-relaxed pl-13">{{ selectedPost.content }}</p>
                        </div>

                        <!-- Key Points -->
                        <div v-for="(point, idx) in selectedPost.description" :key="idx">
                            <div class="flex items-center gap-3 mb-4">
                                <div
                                    class="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20">
                                    <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                                <h5 v-if="typeof point === 'object'" class="text-xl font-bold text-white">
                                    {{ point.title }}
                                </h5>
                            </div>
                            <ul class="space-y-3 pl-13">
                                <li v-for="(item, index) in (typeof point === 'object' ? point.points : [])"
                                    :key="index" class="flex items-start gap-3">
                                    <span
                                        class="flex-shrink-0 w-6 h-6 mt-0.5 rounded-lg bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-red-400"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span class="text-gray-300 text-base leading-relaxed">{{ item }}</span>
                                </li>
                            </ul>
                        </div>

                        <!-- Conclusion -->
                        <div>
                            <div class="flex items-center gap-3 mb-4">
                                <div
                                    class="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center border border-red-500/20">
                                    <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 class="text-2xl font-bold text-white">Conclusion</h4>
                            </div>
                            <p class="text-gray-300 text-base leading-relaxed pl-13">
                                {{ selectedPost.conclusion || 'Explore this topic further and apply these insights to your projects!' }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
/**
 * Enhanced Blog Section Component with Pagination
 * 
 * Premium blog showcase with modern glassmorphism design,
 * category filtering, pagination, and detailed modal views.
 * 
 * @component
 * @example
 * <BlogSection />
 * 
 * Features:
 * - Glassmorphism card design for all posts
 * - Enhanced category filter with icons
 * - Numbered badges on posts
 * - Pagination controls (8 posts per page)
 * - Detailed modal with sections
 * - Smooth transitions and animations
 * - Fully responsive grid layout (4 columns on desktop)
 * - AOS animation integration
 * - Floating background elements
 * 
 * @author Khun Kimhong
 */

import { ref, computed } from "vue";
import type { BlogPost } from "@/interface/blog_interface";
import { BLOGPOTS } from "@/data/blog_data";

const formatDate = (dateString: string | undefined): string => {
    if (!dateString) return "Unknown Date";
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const showModal = ref<boolean>(false);
const selectedPost = ref<BlogPost | null>(null);
const selectedCategory = ref<string>('');
const currentPage = ref<number>(1);
const postsPerPage = 6;

const allCategories = computed<string[]>(() => {
    const categories = new Set<string>();
    Array.from(BLOGPOTS.values()).forEach((post: BlogPost) => {
        post.categories.forEach((cat: string) => categories.add(cat));
    });
    return Array.from(categories);
});

const filteredPosts = computed<BlogPost[]>(() => {
    if (!selectedCategory.value) {
        return BLOGPOTS;
    }
    return BLOGPOTS.filter((post: BlogPost) => post.categories.includes(selectedCategory.value));
});

const totalPages = computed<number>(() => {
    return Math.ceil(filteredPosts.value.length / postsPerPage);
});

const paginatedPosts = computed<BlogPost[]>(() => {
    const start = (currentPage.value - 1) * postsPerPage;
    const end = start + postsPerPage;
    return filteredPosts.value.slice(start, end);
});

const displayedCount = computed<number>(() => {
    return Math.min(currentPage.value * postsPerPage, filteredPosts.value.length);
});

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
        scrollToTop();
    }
};

const previousPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
        scrollToTop();
    }
};

const scrollToTop = () => {
    const blogSection = document.getElementById('blog');
    if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

const openPost = (post: BlogPost) => {
    selectedPost.value = post;
    showModal.value = true;
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    showModal.value = false;
    selectedPost.value = null;
    document.body.style.overflow = 'auto';
};
</script>

<style scoped>
/**
 * Floating Animation for Background Elements
 */
@keyframes float {

    0%,
    100% {
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

    0%,
    100% {
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

    0%,
    100% {
        opacity: 0.3;
        transform: scale(1);
    }

    50% {
        opacity: 0.5;
        transform: scale(1.05);
    }
}
.animate-pulse-slow {
    animation: pulse-slow 15s ease-in-out infinite;
}
</style>