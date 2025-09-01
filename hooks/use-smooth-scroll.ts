"use client"

import { useEffect } from "react"

export function useSmoothScroll() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        const href = target.getAttribute("href")

        // hrefが#のみの場合や空の場合は処理しない
        if (!href || href === "#" || href.length <= 1) {
          return
        }

        e.preventDefault()

        try {
          const element = document.querySelector(href)
          if (element) {
            const offset = 60 // Adjust this value based on your fixed header height
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - offset,
              behavior: "smooth",
            })
          }
        } catch (error) {
          // 無効なセレクターの場合はエラーをキャッチして何もしない
          console.warn(`Invalid selector: ${href}`)
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])
}
