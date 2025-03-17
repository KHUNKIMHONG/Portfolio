<template>
  <section
    id="contact"
    class="min-h-screen flex items-center justify-center px-6 lg:px-24 py-12 relative"
  >
    <div
      class="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12"
    >
      <!-- Faded "EDUCATION" Text in Background -->
      <h1
        class="text-[30px] md:text-[50px] lg:text-[60px] font-extrabold text-red-600 opacity-10 absolute top-5 md:top-10 left-1/2 transform -translate-x-1/2"
        v-text="'CONTACT'"
      >
      </h1>

      <!-- Left: Contact Form -->
      <div class="space-y-6">
        <h2 class="text-3xl text-center lg:text-left md:text-4xl lg:text-5xl font-bold text-white tracking-wide">
          Contact Information
        </h2>
        <p class="text-gray-300 text-lg md:text-xl">
          Feel free to reach out to me through the following link social media
          platforms or send me an email directly:
        </p>

        <div class="space-y-8 text-lg font-medium">
          <!-- Email Section -->
          <div class="flex items-center space-x-5">
            <span class="text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 3H3v5l9 5 9-5V3zm0 15V8l-9 5-9-5v10h18z"
                />
              </svg>
            </span>
            <a
              href="mailto:yourname@example.com"
              class="text-gray-200 hover:text-red-500 transition-colors duration-300"
            >
              khunkimhong039@gmail.com
            </a>
          </div>

          <!-- Phone Section -->
          <div class="flex items-center space-x-5">
            <span class="text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 5h2a2 2 0 012 2v10a2 2 0 01-2 2H3m6-8l3 3 3-3m-3 3V5"
                />
              </svg>
            </span>
            <a
              href="tel:+85598765432"
              class="text-gray-200 hover:text-red-500 transition-colors duration-300"
            >
              +855 964 674 365
            </a>
          </div>

          <!-- Location Section -->
          <div class="flex items-center space-x-5">
            <span class="text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 2a8 8 0 00-8 8c0 5 8 12 8 12s8-7 8-12a8 8 0 00-8-8zm0 10a2 2 0 110-4 2 2 0 010 4z"
                />
              </svg>
            </span>
            <p class="text-gray-200">Phnom Phenh, Cambodia</p>
          </div>

          <!-- Social Media Links -->
          <div
            class="flex justify-center lg:justify-start mt-2 space-x-4 items-center"
          >
            <a
              href="https://www.linkedin.com/in/khun-kimhong365"
              target="_blank"
              class="text-white p-2 rounded-full hover:bg-blue-600 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.496c0-1.28-.025-2.926-1.783-2.926-1.784 0-2.056 1.394-2.056 2.83v5.592h-3v-10h2.877v1.367h.041c.4-.759 1.378-1.559 2.838-1.559 3.036 0 3.583 2.001 3.583 4.605v5.587z"
                />
              </svg>
            </a>

            <a
              href="https://github.com/KHUNKIMHONG"
              target="_blank"
              class="text-white p-2 rounded-full hover:bg-gray-800 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.839 1.24 1.839 1.24 1.07 1.835 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.3-5.466-1.333-5.466-5.931 0-1.312.469-2.382 1.235-3.221-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.485 11.485 0 0 1 3-.404c1.02.004 2.045.137 3 .404 2.29-1.552 3.295-1.23 3.295-1.23.647 1.653.242 2.873.118 3.176.77.839 1.234 1.909 1.234 3.221 0 4.609-2.807 5.628-5.479 5.921.43.372.815 1.103.815 2.222v3.293c0 .321.217.694.825.577 4.765-1.585 8.205-6.083 8.205-11.385 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>

            <a
              href="https://t.me/khun_kimhong365"
              target="_blank"
              class="text-white p-2 rounded-full hover:bg-blue-500 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22.447 2.728c-.255-.204-.594-.289-.926-.239l-20.412 4.064c-1.042.208-1.173 1.003-.205 1.393l5.005 1.92 9.633-5.846c.394-.237.789-.32 1.15-.217.36.103.627.369.73.73.103.361.02.757-.217 1.15l-5.846 9.633 1.92 5.005c.39.968 1.185.837 1.393-.205l4.064-20.412c.051-.332-.035-.671-.239-.926z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Right: Contact Information -->
      <div 
        class="bg-gray-800 p-8 rounded-lg border border-red-400 shadow-lg space-y-6"
      >
        <h2 class="text-3xl font-semibold text-white text-center"
        v-text="'Send a Message'">
        </h2>

        <form @submit.prevent="sendEmail" class="space-y-4">
          <input
            v-model="form.name"
            type="text"
            placeholder="Your Name"
            required
            class="input-field"
          />
          <input
            v-model="form.email"
            type="email"
            placeholder="Your Email"
            required
            class="input-field"
          />
          <input
            v-model="form.subject"
            type="text"
            placeholder="Subject"
            required
            class="input-field"
          />
          <textarea
            v-model="form.message"
            placeholder="Your Message"
            rows="5"
            required
            class="input-field"
          ></textarea>

          <button
            type="submit"
            class="bg-red-600 hover:bg-red-500 text-white font-semibold py-3 px-6 rounded-lg w-full"
            v-text="'Send Message'"
          >
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import alertMessage from "sweetalert2";

interface Form {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const form = ref<Form>({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const sendEmail = (event: Event) => {
  // Prevent form reload
  event.preventDefault();

  if (
    !form.value.name ||
    !form.value.email ||
    !form.value.subject ||
    !form.value.message
  ) {
    alertMessage.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill in all fields!",
      confirmButtonColor: "#e11d48",
    });
    return;
  }

  const mailtoLink = `mailto:khunkimhong039@gmail.com?subject=${encodeURIComponent(
    form.value.subject
  )}&body=${encodeURIComponent(
    `From: ${form.value.name} (${form.value.email})\n\n${form.value.message}`
  )}`;

  try {
    // Try to open the mail client
    window.location.href = mailtoLink;

    // Confirm success
    alertMessage.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Your message has been successfully sent.",
      confirmButtonColor: "#e11d48",
    });

    // Clear form after sending
    form.value = { name: "", email: "", subject: "", message: "" };
  } catch (error) {
    alertMessage.fire({
      icon: "error",
      title: "Error!",
      text: "Failed to send message. Please try again.",
      confirmButtonColor: "#e11d48",
    });
  }
};
</script>

<style scoped>
.input-field {
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #e11d48;
  background: #1e293b;
  color: white;
  font-size: 16px;
  outline: none;
}

.input-field::placeholder {
  color: #94a3b8;
}

h2 {
  background: linear-gradient(to right, #ffffff, #ef4444);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
