import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ThemeSection } from "@/components/theme-section"
import { PickupSection } from "@/components/pickup-section"
import { ContentSection } from "@/components/content-section"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-screen-xl mx-auto w-full">
        {/* キャンフェスサイトのメインタイトル */}
        <HeroSection />
        {/* 今年のテーマ */}
        <ThemeSection />
        {/* 開催概要と開催日時 */}
        <ContentSection id="overview" title="開催概要" className="bg-white shadow-sm rounded-lg mx-4 my-8">
          <div className="flex items-center justify-center gap-8">
            {/* 左側のミニキャラ */}
            <div className="w-28 h-28 flex-shrink-0">
              <Image
                src="/canfes-myakumyaku.png"
                alt="キャンフェスミャクミャク"
                width={112}
                height={112}
                className="w-full h-full object-contain"
              />
            </div>

            {/* 中央の開催概要テキスト */}
            <p className="text-center text-xl font-medium">
              2025年9月20日(土)
              <br />
              オープニング12:00(開場11:30)
              <br />
              ＠N/S/R高福岡薬院キャンパス
            </p>

            {/* 右側のミニキャラ */}
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
        </ContentSection>
        {/* ステージタイムテーブル */}
        <ContentSection
          id="timetable"
          title="ステージタイムテーブル"
          className="bg-white shadow-sm rounded-lg mx-4 my-8"
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
              <span className="font-medium">12:00 ~ 12:15</span>
              <span>オープニング</span>
            </div>
            <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
              <span className="font-medium">12:15 ~ 12:45</span>
              <span>NED in 福岡薬院万博2025</span>
            </div>
            <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
              <span className="font-medium">12:45 ~ 13:35</span>
              <span>コミュニケーションサークル発表</span>
            </div>
            <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
              <span className="font-medium">13:35 ~ 14:05</span>
              <span>第一回福岡薬院クイズ王決定戦</span>
            </div>
            <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
              <span className="font-medium">14:05 ~ 14:35</span>
              <span>カラオケ大会 ~ in 福岡薬院 ~</span>
            </div>
            <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
              <span className="font-medium">14:35 ~ 15:20</span>
              <span>薬院老人会によるバンド演奏</span>
            </div>
            <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
              <span className="font-medium">15:20 ~ 15:30</span>
              <span>エンディング</span>
            </div>
          </div>
        </ContentSection>
        {/* 企画紹介（体験型企画とステージ企画） */}
        <PickupSection />
        {/* 注意事項 */}
        <ContentSection id="precautions" title="注意事項" className="bg-gray-50 shadow-sm rounded-lg mx-4 my-8">
          <ul className="list-disc list-inside">
            <li>駐車場のご用意がございません、近隣のコインパーキングや公共交通機関をご利用ください。</li>
            <li>会場内での飲食は中教室のみとなっております。</li>
            <li>ゴミは指定の場所に捨てるようにしてください。</li>
            <li>キャンパス備品などには許可なく触らないようにお願いします。</li>
            <li>フォームに回答していない方はご来場できません。事前にフォーム回答お願いします。</li>
            <li>イベント内容は予告なく変更される場合がございます。</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4"></p>
        </ContentSection>
      </main>
      <Footer />
    </div>
  )
}
