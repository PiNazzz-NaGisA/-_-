import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Weekly3PlanPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-screen-xl mx-auto w-full px-4 py-8">
        <div className="mb-6">
          <Link href="/#plans">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              企画一覧に戻る
            </Button>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96">
            <Image
              src="/placeholder.svg?height=400&width=800&text=週3物販"
              alt="週3物販"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">物販</span>
              <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">限定</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">週3物販</h1>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">企画概要</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                週3回限定の特別物販！お見逃しなく。 普段は手に入らない限定グッズや、学生が手作りしたオリジナル商品を
                特別価格で販売します。数量限定のレアアイテムも多数ご用意！
              </p>

              <h2 className="text-2xl font-semibold mb-4">詳細情報</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">販売時間</h3>
                  <p className="text-gray-700">13:00 - 15:00（限定2時間）</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">場所</h3>
                  <p className="text-gray-700">特設ブース（正門前）</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">価格</h3>
                  <p className="text-gray-700">100円〜1,000円</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">販売方法</h3>
                  <p className="text-gray-700">先着順・数量限定</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-4">限定商品ラインナップ</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <h3 className="font-semibold mb-2">キャンフェス2025限定Tシャツ</h3>
                  <p className="text-gray-700 text-sm mb-2">800円（限定50枚）</p>
                  <p className="text-gray-600 text-sm">今年だけのオリジナルデザイン</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <h3 className="font-semibold mb-2">手作りアクセサリー</h3>
                  <p className="text-gray-700 text-sm mb-2">300円〜500円</p>
                  <p className="text-gray-600 text-sm">学生が一つ一つ手作り</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <h3 className="font-semibold mb-2">オリジナルステッカーセット</h3>
                  <p className="text-gray-700 text-sm mb-2">200円（限定100セット）</p>
                  <p className="text-gray-600 text-sm">キャンフェスキャラクター入り</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <h3 className="font-semibold mb-2">手作りお菓子詰め合わせ</h3>
                  <p className="text-gray-700 text-sm mb-2">400円（限定30個）</p>
                  <p className="text-gray-600 text-sm">製菓部特製の詰め合わせ</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <h3 className="font-semibold mb-2">リサイクル雑貨</h3>
                  <p className="text-gray-700 text-sm mb-2">100円〜300円</p>
                  <p className="text-gray-600 text-sm">環境に優しいアップサイクル商品</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <h3 className="font-semibold mb-2">限定トートバッグ</h3>
                  <p className="text-gray-700 text-sm mb-2">600円（限定20個）</p>
                  <p className="text-gray-600 text-sm">薬院万博ロゴ入り特別版</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-4">販売スケジュール</h2>
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold mb-4">⚠️ 重要：販売は週3回のみ！</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    <strong>月曜日 13:00-15:00</strong>：Tシャツ・アクセサリー中心
                  </li>
                  <li>
                    <strong>水曜日 13:00-15:00</strong>：お菓子・雑貨中心
                  </li>
                  <li>
                    <strong>金曜日 13:00-15:00</strong>：全商品＋限定アイテム
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">※キャンフェス当日は特別に全商品販売</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4">購入方法・注意事項</h2>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>現金のみの取り扱いとなります</li>
                <li>お一人様各商品1点までの購入制限があります</li>
                <li>売り切れ次第終了となります</li>
                <li>返品・交換はお受けできません</li>
                <li>雨天時は屋内での販売となる場合があります</li>
                <li>開始30分前から整理券を配布します</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">特別企画</h2>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold mb-4">🎁 ラッキーボックス</h3>
                <p className="text-gray-700 mb-2">何が入っているかお楽しみ！500円</p>
                <p className="text-gray-600 text-sm">1,000円相当以上の商品が必ず入っています</p>
                <p className="text-red-600 text-sm font-semibold mt-2">※金曜日のみ限定10個</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4">物販チームからのメッセージ</h2>
              <div className="bg-red-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  週3物販チームでは、普段は手に入らない特別な商品を
                  限定販売でお届けしています！学生が心を込めて作った手作り商品や、
                  キャンフェス限定グッズなど、ここでしか買えないアイテムばかりです。
                  数量限定のため、お早めにお越しください。 皆様との出会いを楽しみにしています！
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
