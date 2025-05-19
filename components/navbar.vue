import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRouter } from "next/navigation"
<template>
  <header class="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3">
    <nav
      :class="[
        'flex items-center justify-between w-full max-w-4xl px-6 py-2 transition-all duration-300',
        'rounded-full backdrop-blur-md shadow-sm',
        scrolled ? 'bg-white/90 shadow-md' : 'bg-white/70',
      ]"
    >
      <NuxtLink to="/" class="font-bold text-xl">
        Wikible
      </NuxtLink>
      
      <div class="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-6">
        <NuxtLink
          to="/"
          class="text-sm font-medium hover:underline decoration-2 decoration-primary/70 underline-offset-8 transition-all"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/#how-it-works"
          class="text-sm font-medium hover:underline decoration-2 decoration-primary/70 underline-offset-8 transition-all"
        >
          How It Works
        </NuxtLink>
        <NuxtLink
          to="/#use-cases"
          class="text-sm font-medium hover:underline decoration-2 decoration-primary/70 underline-offset-8 transition-all"
        >
          Use Cases
        </NuxtLink>
        <NuxtLink
          to="/#pricing"
          class="text-sm font-medium hover:underline decoration-2 decoration-primary/70 underline-offset-8 transition-all"
        >
          Pricing
        </NuxtLink>
        <NuxtLink
          to="/#faq"
          class="text-sm font-medium hover:underline decoration-2 decoration-primary/70 underline-offset-8 transition-all"
        >
          FAQ
        </NuxtLink>
      </div>

      <button
        @click="handleAuthAction"
        class="transition-all duration-300 hover:shadow-md hover:scale-105 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium"
      >
        {{ isLoggedIn ? 'Go to App' : 'Login' }}
      </button>
    </nav>
  </header>
</template>

<script setup>
const { isLoggedIn } = useAuth()
const router = useRouter()
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

const handleAuthAction = () => {
  if (isLoggedIn.value) {
    router.push('/app')
  } else {
    router.push('/login')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
