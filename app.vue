<template>
  <div>
    <NuxtPage />
    <ToastContainer />
  </div>
</template>

<script setup>
import ToastContainer from '~/components/toast-container.vue'
import { useAuth } from '~/composables/useAuth'
import { onMounted } from 'vue'

const { initialize, setupAuthListener } = useAuth()

// Initialize auth on app load
onMounted(async () => {
  await initialize()
  setupAuthListener()
})
</script>
