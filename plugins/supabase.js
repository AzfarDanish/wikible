import { createClient } from "@supabase/supabase-js"
import { defineNuxtPlugin } from "#app"
import { useRuntimeConfig } from "#app"

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const supabaseUrl = config.public.supabaseUrl
  const supabaseKey = config.public.supabaseAnonKey

  const supabase = createClient(supabaseUrl, supabaseKey)

  return {
    provide: {
      supabase,
    },
  }
})
