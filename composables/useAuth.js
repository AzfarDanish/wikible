"use client"

import { useRouter } from "next/navigation"
import { useState, computed } from "react"
import { useToast } from "vue-toastification"
import { useNuxtApp } from "#app"

export const useAuth = () => {
  const { $supabase } = useNuxtApp()
  const user = useState("user", () => null)
  const router = useRouter()
  const toast = useToast()

  // Load user on initial load
  const initialize = async () => {
    try {
      const { data, error } = await $supabase.auth.getSession()
      if (error) throw error
      user.value = data.session?.user || null
    } catch (error) {
      console.error("Error initializing auth:", error)
      user.value = null
    }
  }

  // Sign up with email and password
  const signup = async (email, password) => {
    try {
      const { data, error } = await $supabase.auth.signUp({
        email,
        password,
      })

      if (error) throw error

      if (data.user) {
        user.value = data.user
        toast.add({
          title: "Account created",
          description: "Welcome to Wikible!",
          color: "green",
        })
        router.push("/app")
      }

      return { data, error: null }
    } catch (error) {
      toast.add({
        title: "Signup failed",
        description: error.message,
        color: "red",
      })
      return { data: null, error }
    }
  }

  // Login with email and password
  const login = async (email, password) => {
    try {
      const { data, error } = await $supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      user.value = data.user
      toast.add({
        title: "Login successful",
        description: "Welcome back to Wikible!",
        color: "green",
      })
      router.push("/app")

      return { data, error: null }
    } catch (error) {
      toast.add({
        title: "Login failed",
        description: error.message,
        color: "red",
      })
      return { data: null, error }
    }
  }

  // Logout
  const logout = async () => {
    try {
      const { error } = await $supabase.auth.signOut()
      if (error) throw error

      user.value = null
      toast.add({
        title: "Logged out",
        description: "You have been logged out successfully",
        color: "blue",
      })
      router.push("/login")

      return { error: null }
    } catch (error) {
      toast.add({
        title: "Logout failed",
        description: error.message,
        color: "red",
      })
      return { error }
    }
  }

  // Set up auth state change listener
  const setupAuthListener = () => {
    $supabase.auth.onAuthStateChange((event, session) => {
      user.value = session?.user || null
    })
  }

  return {
    user,
    initialize,
    signup,
    login,
    logout,
    setupAuthListener,
    isLoggedIn: computed(() => !!user.value),
  }
}
