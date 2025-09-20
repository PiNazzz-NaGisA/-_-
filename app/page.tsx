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
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
            <div className="w-28 h-28 flex-shrink-0 order-1 md:order-1">
              <Image
                src="/canfes-myakumyaku.png"
                alt="キャンフェスミャクミャク"
                width={112}
                height={112}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center order-2 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">開催概要</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
                <div className="flex items-center gap-3 bg-white p-3 md:p-4 rounded-lg shadow-sm">
                  <CalendarIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-600 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-semibold text-sm md:text-base">開催日</p>
                    <p className="text-gray-600 text-sm md:text-base">2025年9月20日（土）</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-3 md:p-4 rounded-lg shadow-sm">
                  <ClockIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-600 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-semibold text-sm md:text-base">開催時間</p>
                    <p className="text-gray-600 text-sm md:text-base">12:00 ~ 15:30</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-3 md:p-4 rounded-lg shadow-sm">
                  <MapPinIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-600 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-semibold text-sm md:text-base">会場</p>
                    <p className="text-gray-600 text-sm md:text-base">小学館ビル7階:福岡薬院キャンパス</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-3 md:p-4 rounded-lg shadow-sm">
                  <TicketIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-600 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-semibold text-sm md:text-base">入場料</p>
                    <p className="text-gray-600 text-sm md:text-base">無料</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-28 h-28 flex-shrink-0 order-3 md:order-3">
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
      <section id="timetable" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">ステージタイムテーブル</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-3 md:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 md:p-4 bg-blue-50 rounded-lg">
                <div className="text-base md:text-lg font-semibold text-blue-600 sm:min-w-[140px]">12:00 ~ 12:15</div>
                <div className="text-base md:text-lg">オープニング</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 md:p-4 bg-gray-50 rounded-lg">
                <div className="text-base md:text-lg font-semibold text-gray-600 sm:min-w-[140px]">12:15 ~ 12:45</div>
                <div className="text-base md:text-lg">NED in 福岡薬院万博(プレゼン部門)</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 md:p-4 bg-blue-50 rounded-lg">
                <div className="text-base md:text-lg font-semibold text-blue-600 sm:min-w-[140px]">12:45 ~ 13:15</div>
                <div className="text-base md:text-lg">NED in 福岡薬院万博(カラオケ部門)</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 md:p-4 bg-gray-50 rounded-lg">
                <div className="text-base md:text-lg font-semibold text-gray-600 sm:min-w-[140px]">13:15 ~ 13:35</div>
                <div className="text-base md:text-lg">コミュニケーションサークル発表</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 md:p-4 bg-blue-50 rounded-lg">
                <div className="text-base md:text-lg font-semibold text-blue-600 sm:min-w-[140px]">13:35 ~ 14:05</div>
                <div className="text-base md:text-lg">第一回福岡薬院クイズ王決定戦</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 md:p-4 bg-gray-50 rounded-lg">
                <div className="text-base md:text-lg font-semibold text-gray-600 sm:min-w-[140px]">14:05 ~ 14:35</div>
                <div className="text-base md:text-lg">カラオケ大会 ~ in 福岡薬院 ~</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 md:p-4 bg-blue-50 rounded-lg">
                <div className="text-base md:text-lg font-semibold text-blue-600 sm:min-w-[140px]">14:35 ~ 14:45</div>
                <div className="text-base md:text-lg">倉本さんのお悩み相談会</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 md:p-4 bg-gray-50 rounded-lg">
                <div className="text-base md:text-lg font-semibold text-gray-600 sm:min-w-[140px]">14:45 ~ 15:20</div>
                <div className="text-base md:text-lg">薬院老人会によるバンド演奏</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 md:p-4 bg-blue-50 rounded-lg">
                <div className="text-base md:text-lg font-semibold text-blue-600 sm:min-w-[140px]">15:20 ~ 15:30</div>
                <div className="text-base md:text-lg">エンディング</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ThemeSection />
      <ContentSection />
      <PickupSection />

      {/* キャンパス内での注意事項 */}
      <section className="py-12 md:py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-red-800">
            キャンパス内での注意事項
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border-l-4 border-red-500">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  <span className="text-sm md:text-base">
                    安全管理上、入場には事前招待フォームのご提出・身分証明証のご提示が必須です。
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <span className="text-sm md:text-base">
                    来場中はネームストラップを必ずご着用いただき、帰宅時は受付にご返却ください。
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  <span className="text-sm md:text-base">他の階のトイレや自販機利用はご遠慮ください。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </span>
                  <span className="text-sm md:text-base">
                    チケットは中教室でお買い求めの上、各企画・物販をお楽しみください。
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    5
                  </span>
                  <span className="text-sm md:text-base">飲食物のお持ち込みは可能です。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    6
                  </span>
                  <span className="text-sm md:text-base">販売する飲食物のお持ち帰りは衛生管理上、ご遠慮ください。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    7
                  </span>
                  <span className="text-sm md:text-base">ゴミの分別にご協力をお願いいたします。</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
