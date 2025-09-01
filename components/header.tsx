"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet" // Sheetコンポーネントをインポート
import { MenuIcon } from "lucide-react" // ハンバーガーアイコンをインポート

export function Header() {
  useSmoothScroll()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2 font-bold text-lg" prefetch={false}>
          <span className="sr-only">福岡薬院キャンフェス</span>
          福岡薬院キャンフェス
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#top" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            TOP
          </Link>
          <Link href="#overview" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            開催概要
          </Link>
          <Link href="#plans" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            企画紹介
          </Link>
          <Link href="#timetable" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            ステージタイムテーブル
          </Link>
          <Link href="#precautions" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            注意事項
          </Link>
        </nav>
        {/* モバイル用メニューボタン */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden bg-transparent">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px] p-6">
            <nav className="flex flex-col gap-4">
              <Link href="#top" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                TOP
              </Link>
              <Link
                href="#overview"
                className="text-lg font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                開催概要
              </Link>
              <Link href="#plans" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                企画紹介
              </Link>
              <Link
                href="#timetable"
                className="text-lg font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                ステージタイムテーブル
              </Link>
              <Link
                href="#precautions"
                className="text-lg font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                注意事項
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
