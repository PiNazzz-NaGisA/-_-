"use client"

import { useEffect } from "react"

export function useSmoothScroll() {
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === "A" && target.href) {
        const url = new URL(target.href)
        const hash = url.hash

        // 空のハッシュや無効なハッシュをチェック
        if (!hash || hash.length <= 1) {
          return
        }

        try {
          const element = document.querySelector(hash)
          if (element && url.pathname === window.location.pathname) {
            e.preventDefault()
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        } catch (error) {
          // 無効なセレクターの場合はエラーをキャッチして何もしない
          console.warn("Invalid selector:", hash)
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])
}
