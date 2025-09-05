"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  useSmoothScroll()

  const navItems = [
    { href: "#", label: "TOP" },
    { href: "#overview", label: "開催概要" },
    { href: "#plans", label: "企画紹介" },
    { href: "#timetable", label: "ステージタイムテーブル" },
    { href: "#precautions", label: "注意事項" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-screen-xl mx-auto flex h-14 items-center px-4">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="#">
            <span className="hidden font-bold sm:inline-block">福岡薬院キャンフェス</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <a href="#" className="flex items-center" onClick={() => setIsOpen(false)}>
              <span className="font-bold">福岡薬院キャンフェス</span>
            </a>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-foreground/60 transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <a href="#" className="inline-block font-bold md:hidden">
              福岡薬院キャンフェス
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
