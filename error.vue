<template>
    <div class="fixed inset-0 bg-zinc-900 flex flex-col items-center justify-center z-50" role="alert"
        aria-live="polite">
        <div class="error-container flex flex-col items-center text-center px-4">
            <!-- Error Icon with Animation -->
            <svg class="w-20 h-20 mb-6 animate-spin-slow" viewBox="0 0 100 100" role="presentation">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#8b5cf6" stroke-width="8" stroke-linecap="round" />
                <path d="M50 10 L50 30" stroke="#ec4899" stroke-width="8" stroke-linecap="round" />
                <path d="M50 70 L50 90" stroke="#10b981" stroke-width="8" stroke-linecap="round" />
            </svg>

            <!-- Error Message -->
            <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">Oops! Something Went Wrong</h1>
            <p class="text-lg text-gray-300 mb-6 max-w-md">
                {{ error?.statusCode }} - {{ error?.message || "We couldn't find the page you're looking for." }}
            </p>

            <!-- Back Button -->
            <button
                class="mt-4 px-6 py-3 text-white rounded-lg transition-colors duration-300 shadow-lg hover:bg-red-700 hover:shadow-red-500/50 bg-gradient-to-r from-red-500 to-red-600"
                @click="$router.back()">
                Return Back
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    error: {
        statusCode?: number
        message?: string
    }
}>()

onMounted(() => {
    console.error("Error page displayed")
})
</script>

<style scoped>
.animate-spin-slow {
    animation: spin 6s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>