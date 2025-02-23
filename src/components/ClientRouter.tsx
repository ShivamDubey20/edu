"use client"

import { useEffect } from "react"
import type React from "react" // Added import for React

export default function ClientRouter({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Any browser-specific code can go here
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  return <>{children}</>
}

