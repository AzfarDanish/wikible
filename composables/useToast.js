"use client"

import { useState } from "react"

export const useToast = () => {
  const toasts = useState("toasts", () => [])

  const add = ({ title, description, color = "blue", timeout = 5000 }) => {
    const id = Date.now().toString()

    toasts.value.push({
      id,
      title,
      description,
      color,
    })

    if (timeout) {
      setTimeout(() => {
        remove(id)
      }, timeout)
    }

    return id
  }

  const remove = (id) => {
    toasts.value = toasts.value.filter((toast) => toast.id !== id)
  }

  return {
    toasts,
    add,
    remove,
  }
}
