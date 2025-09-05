"use client"

import { useEffect } from "react"

export function useSmoothScroll() {
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === "A" && target.href.includes("#")) {
        const href = target.getAttribute("href")
        if (!href || href.length <= 1 || href === "#") {
          return
        }

        try {
          const targetId = href.substring(1)
          const targetElement = document.querySelector(`#${targetId}`)

          if (targetElement) {
            e.preventDefault()
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        } catch (error) {
          console.warn("Invalid selector:", href)
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])
}
