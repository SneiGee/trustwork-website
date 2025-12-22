"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 300)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      <div
        className={`fixed inset-0 bg-background z-[100] transition-opacity duration-300 pointer-events-none ${
          isLoading ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="animate-in fade-in duration-500">{children}</div>
    </>
  )
}
