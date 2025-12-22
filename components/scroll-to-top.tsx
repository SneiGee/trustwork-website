"use client"

import { ArrowUp } from "lucide-react"
import { useScrollToTop } from "@/hooks/use-scroll-to-top"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ScrollToTop() {
  const { isVisible, scrollToTop } = useScrollToTop(400)

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className={cn(
        "fixed cursor-pointer bottom-8 right-8 z-50 h-12 w-12 rounded-full shadow-lg transition-all duration-300 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none",
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  )
}
