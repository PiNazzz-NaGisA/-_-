import { HeroSection } from "@/components/hero-section"
import { ContentSection } from "@/components/content-section"
import { ThemeSection } from "@/components/theme-section"
import { PickupSection } from "@/components/pickup-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { CalendarIcon, ClockIcon, MapPinIcon, TicketIcon } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />

      {/* 開催概要セクション */}
      <section id="overview" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="w-28 h-28 flex-shrink-0">
              <Image
                src="/canfes-myakumyaku.png"
                alt="キャンフェスミャクミャク"
                width={112}
                height={112}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">開催概要</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <CalendarIcon className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">開催日</p>
                    <p className="text-gray-600">2025年9月20日（土）</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <ClockIcon className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">開催時間</p>
                    <p className="text-gray-600">12:00 ~ 15:30</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <MapPinIcon className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">会場</p>
                    <p className="text-gray-600">福岡薬院キャンパス</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <TicketIcon className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">入場料</p>
                    <p className="text-gray-600">無料</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-28 h-28 flex-shrink-0">
              <Image
                src="/canfes-flag-girl.png"
                alt="キャンフェス旗少女"
                width={112}
                height={112}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ステージタイムテーブル */}
      <section id="timetable" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">ステージタイムテーブル</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="text-lg font-semibold text-blue-600 min-w-[140px]">12:00 ~ 12:15</div>
                <div className="text-lg">オープニング</div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-lg font-semibold text-gray-600 min-w-[140px]">12:15 ~ 12:45</div>
                <div className="text-lg">NED in 福岡薬院万博2025</div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="text-lg font-semibold text-blue-600 min-w-[140px]">12:45 ~ 13:35</div>
                <div className="text-lg">コミュニケーションサークル発表</div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-lg font-semibold text-gray-600 min-w-[140px]">13:35 ~ 14:05</div>
                <div className="text-lg">第一回福岡薬院クイズ王決定戦</div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="text-lg font-semibold text-blue-600 min-w-[140px]">14:05 ~ 14:35</div>
                <div className="text-lg">カラオケ大会 ~ in 福岡薬院 ~</div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-lg font-semibold text-gray-600 min-w-[140px]">14:35 ~ 15:20</div>
                <div className="text-lg">薬院老人会によるバンド演奏</div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="text-lg font-semibold text-blue-600 min-w-[140px]">15:20 ~ 15:30</div>
                <div className="text-lg">エンディング</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ThemeSection />
      <ContentSection />
      <PickupSection />
      <Footer />
    </div>
  )
}
