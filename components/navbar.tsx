"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // This would be replaced with actual auth logic
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3">
      <nav
        className={cn(
          "flex items-center justify-between w-full max-w-4xl px-6 py-2 transition-all duration-300",
          "rounded-full backdrop-blur-md shadow-sm",
          scrolled ? "bg-white/90 shadow-md" : "bg-white/70",
        )}
      >
        <Link href="/" className="font-bold text-xl">
          Wikible
        </Link>
        
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline decoration-2 decoration-primary/70 underline-offset-8 transition-all"
          >
            Home
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium hover:underline decoration-2 decoration-primary/70 underline-offset-8 transition-all"
          >
            How It Works
          </Link>
          <Link
            href="#use-cases"
            className="text-sm font-medium hover:underline decoration-2 decoration-primary/70 underline-offset-8 transition-all"
          >
            Use Cases
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:underline decoration-2 decoration-primary/70 underline-offset-8 transition-all"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium hover:underline decoration-2 decoration-primary/70 underline-offset-8 transition-all"
          >
            FAQ
          </Link>
        </div>

        <Button
          onClick={toggleLogin}
          className="transition-all duration-300 hover:shadow-md hover:scale-105"
          variant="default"
        >
          {isLoggedIn ? "Go to App" : "Login"}
        </Button>
      </nav>
    </header>
  )
}
