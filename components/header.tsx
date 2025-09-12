"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const smoothScroll = useSmoothScroll()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    smoothScroll(targetId)
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/placeholder-logo.svg" alt="薬院キャンフェス" className="h-8 w-8" />
            <span className="text-xl font-bold">薬院キャンフェス</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#theme"
              onClick={(e) => handleNavClick(e, "theme")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              テーマ
            </a>
            <a
              href="#content"
              onClick={(e) => handleNavClick(e, "content")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              企画内容
            </a>
            <a
              href="#pickup"
              onClick={(e) => handleNavClick(e, "pickup")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              ピックアップ
            </a>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">メニューを開く</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                <a
                  href="#theme"
                  onClick={(e) => handleNavClick(e, "theme")}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  テーマ
                </a>
                <a
                  href="#content"
                  onClick={(e) => handleNavClick(e, "content")}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  企画内容
                </a>
                <a
                  href="#pickup"
                  onClick={(e) => handleNavClick(e, "pickup")}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  ピックアップ
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
