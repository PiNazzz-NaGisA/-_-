import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ThemeSection } from "@/components/theme-section"
import { PickupSection } from "@/components/pickup-section"
import { ContentSection } from "@/components/content-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-screen-xl mx-auto w-full">
        {" "}
        {/* ここにmax-w-screen-xlとmx-autoを追加 */}
        {/* キャンフェスサイトのメインタイトル */}
        <HeroSection />
        {/* 今年のテーマ */}
        <ThemeSection />
        {/* 開催概要と開催日時 */}
        <ContentSection id="overview" title="開催概要" className="bg-white shadow-sm rounded-lg mx-4 my-8">
          <p className="text-center text-xl font-medium">
            2025年9月20日(土)
            <br />
            オープニング12:00(開場11:30)
            <br />
            ＠N/S/R高福岡薬院キャンパス
          </p>
        </ContentSection>
        {/* 「キャンフェスとは」セクションを削除しました */}
        <PickupSection />
        <ContentSection
          id="timetable"
          title="ステージタイムテーブル"
          className="bg-white shadow-sm rounded-lg mx-4 my-8"
        >
          <p className="text-center text-lg">タイムテーブル作れ</p>
          <div className="mt-6 p-4 border border-dashed border-gray-300 rounded-md text-center text-gray-500">
            <p>ステージのタイムテーブルは現在調整中です。</p>
            <p>詳細が決まり次第、こちらで公開いたしますので、今しばらくお待ちください。</p>
          </div>
        </ContentSection>
        <ContentSection id="precautions" title="注意事項" className="bg-gray-50 shadow-sm rounded-lg mx-4 my-8">
          <ul className="list-disc list-inside">
            <li>駐車場のご用意がございません、近隣のコインパーキングや公共交通機関をご利用ください。</li>
            <li>会場内での喫煙はご遠慮ください。</li>
            <li>ゴミは指定の場所に分別して捨ててください。</li>
            <li>ペットの同伴はご遠慮ください（盲導犬、介助犬を除く）。</li>
            <li>会場内での飲食物の持ち込みは一部制限がございます。</li>
            <li>貴重品の管理は各自でお願いいたします。</li>
            <li>イベント内容は予告なく変更される場合がございます。</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4">※注意事項は要確認</p>
        </ContentSection>
      </main>
      <Footer />
    </div>
  )
}
