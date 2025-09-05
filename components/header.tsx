"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useSmoothScroll()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900">
              福岡薬院キャンフェス
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/#top" className="text-gray-700 hover:text-gray-900 transition-colors">
              TOP
            </Link>
            <Link href="/#overview" className="text-gray-700 hover:text-gray-900 transition-colors">
              開催概要
            </Link>
            <Link href="/#plans" className="text-gray-700 hover:text-gray-900 transition-colors">
              企画紹介
            </Link>
            <Link href="/#schedule" className="text-gray-700 hover:text-gray-900 transition-colors">
              ステージタイムテーブル
            </Link>
            <Link href="/#notes" className="text-gray-700 hover:text-gray-900 transition-colors">
              注意事項
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu} aria-label="メニューを開く">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/#top"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors"
                onClick={closeMenu}
              >
                TOP
              </Link>
              <Link
                href="/#overview"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors"
                onClick={closeMenu}
              >
                開催概要
              </Link>
              <Link
                href="/#plans"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors"
                onClick={closeMenu}
              >
                企画紹介
              </Link>
              <Link
                href="/#schedule"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors"
                onClick={closeMenu}
              >
                ステージタイムテーブル
              </Link>
              <Link
                href="/#notes"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors"
                onClick={closeMenu}
              >
                注意事項
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
