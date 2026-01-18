<template>
    <div v-if="showButton" class="fixed bottom-20 right-2 z-30 flex flex-col items-end">
        <!-- Social Links Container -->
        <transition name="social-menu">
            <div v-if="isOpen" class="mb-4 flex flex-col items-end space-y-3">
                <!-- Facebook -->
                <a href="https://www.facebook.com/maprox69/" target="_blank" class="social-link group"
                    data-aos="fade-left" data-aos-delay="100">
                    <span class="social-label">Facebook</span>
                    <div
                        class="social-icon bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </div>
                </a>

                <!-- Telegram -->
                <a href="https://t.me/khun_kimhong365" target="_blank" class="social-link group" data-aos="fade-left"
                    data-aos-delay="150">
                    <span class="social-label">Telegram</span>
                    <div
                        class="social-icon bg-gradient-to-br from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M21.945 2.765a1.552 1.552 0 0 0-1.572-.244L2.456 9.754a1.543 1.543 0 0 0 .078 2.884L6.4 13.98l2.095 6.926c.004.014.017.023.023.036a.486.486 0 0 0 .093.15a.49.49 0 0 0 .226.143c.01.004.017.013.027.015h.006l.003.001a.448.448 0 0 0 .233-.012c.008-.002.016-.002.025-.005a.495.495 0 0 0 .191-.122c.006-.007.016-.008.022-.014l3.013-3.326l4.397 3.405c.267.209.596.322.935.322c.734 0 1.367-.514 1.518-1.231L22.469 4.25a1.533 1.533 0 0 0-.524-1.486zM9.588 15.295l-.707 3.437l-1.475-4.878l7.315-3.81l-4.997 4.998a.498.498 0 0 0-.136.253zm8.639 4.772a.54.54 0 0 1-.347.399a.525.525 0 0 1-.514-.078l-4.763-3.689a.5.5 0 0 0-.676.06L9.83 19.07l.706-3.427l7.189-7.19a.5.5 0 0 0-.584-.797L6.778 13.054l-3.917-1.362A.526.526 0 0 1 2.5 11.2a.532.532 0 0 1 .334-.518l17.914-7.233a.536.536 0 0 1 .558.086a.523.523 0 0 1 .182.518l-3.261 16.015z" />
                        </svg>
                    </div>
                </a>

                <!-- TikTok -->
                <a href="https://www.tiktok.com/@khunkimhong" target="_blank" class="social-link group"
                    data-aos="fade-left" data-aos-delay="200">
                    <span class="social-label">TikTok</span>
                    <div
                        class="social-icon bg-gradient-to-br from-gray-900 to-black hover:from-black hover:to-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 293768 333327" class="h-5 w-5"
                            fill="currentColor" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                            image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd">
                            <path
                                d="M206590 11578c5369 45832 30910 73164 75333 76015v51528c-25770 2539-48321-5945-74600-21748v96320c206 125717-135035 135283-173673 72939-25688-41449-16376-141089 76383-155862v52323c-21666 3569-33412 10224-39846 22528-39762 76035 98926 121273 89342-1225V11577l47060 1z"
                                fill="#ffffff" />
                        </svg>
                    </div>
                </a>

                <!-- Email -->
                <a href="mailto:khunkimhong039@gmail.com" class="social-link group" data-aos="fade-left"
                    data-aos-delay="250">
                    <span class="social-label">Email</span>
                    <div
                        class="social-icon bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                    </div>
                </a>

                <!-- GitHub -->
                <a href="https://github.com/khunkimhong" target="_blank" class="social-link group" data-aos="fade-left"
                    data-aos-delay="300">
                    <span class="social-label">GitHub</span>
                    <div
                        class="social-icon bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </div>
                </a>
            </div>
        </transition>

        <!-- Main Toggle Button -->
        <button @click="toggleMenu" class="main-toggle-button group" :class="{ 'active': isOpen }">

            <div
                class="relative bg-gradient-to-br from-red-600 to-red-700 rounded-full p-4 shadow-2xl shadow-red-500/50 group-hover:shadow-red-500/70 transition-all duration-300 group-hover:scale-110">

                <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-white transition-transform duration-300" viewBox="0 0 24 24"
                    fill="currentColor">
                    <path
                        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 4c-.552 0-1 .448-1 1v4H7c-.552 0-1 .448-1 1s.448 1 1 1h4v4c0 .552.448 1 1 1s1-.448 1-1v-4h4c.552 0 1-.448 1-1s-.448-1-1-1h-4V7c0-.552-.448-1-1-1z" />
                </svg>

                <svg v-else xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-white transition-transform duration-300" viewBox="0 0 24 24"
                    fill="currentColor">
                    <path
                        d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7a1 1 0 00-1.41 1.42L10.59 12l-4.89 4.89a1 1 0 101.41 1.42L12 13.41l4.89 4.89a1 1 0 001.41-1.42L13.41 12l4.89-4.89a1 1 0 000-1.4z" />
                </svg>
            </div>

            <!-- Notification Badge (optional - shows number of social links) -->
            <div v-if="!isOpen"
                class="absolute -top-1 -right-1 bg-white text-red-600 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg border-2 border-red-600">
                5
            </div>
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

/**
 * Floating Social Media Menu Component
 * 
 * A modern, animated floating action button (FAB) that reveals social media links.
 * 
 * Features:
 * - Appears after scrolling 200px
 * - Smooth animations for opening/closing
 * - Hover effects on all social links
 * - Labels that appear on hover
 * - Gradient backgrounds matching the red theme
 * - Staggered animations using AOS
 * 
 * @component
 */

/**
 * Controls the open/close state of the social menu
 */
const isOpen = ref < boolean > (false);

/**
 * Controls visibility based on scroll position
 * Only shows button after user scrolls past 200px
 */
const showButton = ref < boolean > (false);

/**
 * Toggle the social menu open/closed state
 */
const toggleMenu = (): void => {
    isOpen.value = !isOpen.value;
};

/**
 * Handle scroll event to show/hide the button
 * Shows button when user scrolls down 200px or more
 */
const handleScroll = (): void => {
    showButton.value = window.scrollY > 200;

    // Auto-close menu when scrolling
    if (isOpen.value && window.scrollY > 300) {
        // Optional: uncomment to auto-close on scroll
        isOpen.value = false;
    }
};

/**
 * Lifecycle Hooks
 */
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/**
 * Social Link Container
 * Base styling for each social media link
 */
.social-link {
    @apply flex items-center gap-3 transition-all duration-300;
}

/**
 * Social Icon Button
 * Circular button with icon for each social platform
 */
.social-icon {
    @apply w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-2xl border-2 border-white/20;
}

/**
 * Social Label
 * Text label that appears on hover
 * Hidden by default, slides in from right
 */
.social-label {
    @apply bg-gradient-to-r from-zinc-900 to-zinc-800 text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm whitespace-nowrap border border-zinc-700 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none;
}

/**
 * Main Toggle Button
 * The primary FAB button that opens/closes the menu
 */
.main-toggle-button {
    @apply relative cursor-pointer transition-all duration-300 transform hover:scale-105 active:scale-95;
}

/**
 * Active state for toggle button
 * Rotates the button when menu is open
 */
.main-toggle-button.active {
    @apply rotate-45;
}

/**
 * Social Menu Animation
 * Slide and fade in effect for the social links container
 */
.social-menu-enter-active,
.social-menu-leave-active {
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.social-menu-enter-from {
    opacity: 0;
    transform: translateY(20px) scale(0.8);
}

.social-menu-leave-to {
    opacity: 0;
    transform: translateY(20px) scale(0.8);
}

/**
 * Individual social link animation
 * Each link slides in with a stagger effect
 */
.social-link {
    animation: slideInRight 0.3s ease-out backwards;
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(20px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/**
 * Pulse animation for notification badge
 */
.main-toggle-button .absolute.bg-white {
    animation: pulse-badge 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse-badge {

    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.8;
        transform: scale(1.05);
    }
}

/**
 * Glow effect for social icons on hover
 */
.social-icon:hover {
    box-shadow: 0 0 20px currentColor;
}

/**
 * Smooth transition for all elements
 */
* {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>