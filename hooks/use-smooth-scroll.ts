"use client"

import { useCallback } from "react"

export function useSmoothScroll() {
  const smoothScroll = useCallback((targetId: string) => {
    const element = document.getElementById(targetId.replace("#", ""))
    if (element) {
      const headerHeight = 64 // ヘッダーの高さ
      const elementPosition = element.offsetTop - headerHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }, [])

  return smoothScroll
}
