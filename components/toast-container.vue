<template>
  <div class="fixed bottom-0 right-0 p-4 space-y-4 z-50">
    <div
      v-for="toast in toasts"
      :key="toast.id"
      :class="[
        'max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5',
        `border-l-4 border-${toast.color}-500`
      ]"
    >
      <div class="flex-1 w-0 p-4">
        <div class="flex items-start">
          <div class="ml-3 flex-1">
            <p :class="[`text-${toast.color}-600`, 'text-sm font-medium']">
              {{ toast.title }}
            </p>
            <p class="mt-1 text-sm text-gray-500">
              {{ toast.description }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex border-l border-gray-200">
        <button
          @click="removeToast(toast.id)"
          class="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-400 hover:text-gray-500 focus:outline-none"
        >
          <span class="sr-only">Close</span>
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from 'vue-toastification';

const { toasts, remove } = useToast()

const removeToast = (id) => {
  remove(id)
}
</script>
