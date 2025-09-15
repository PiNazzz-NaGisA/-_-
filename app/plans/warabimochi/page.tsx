import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function WarabimochiPlanPage() {
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
              src="/placeholder.svg?height=400&width=800&text=わらび餅ドリンク"
              alt="わらび餅ドリンク物販"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">物販</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">ドリンク</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">わらび餅ドリンク物販</h1>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">商品概要</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                ひんやり美味しいわらび餅と、様々なドリンクをご用意！ 手作りのぷるぷるわらび餅と、厳選したドリンクで、
                キャンフェスでの暑さを吹き飛ばしましょう。
              </p>

              <h2 className="text-2xl font-semibold mb-4">詳細情報</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">販売時間</h3>
                  <p className="text-gray-700">11:30 ~ 17:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">場所</h3>
                  <p className="text-gray-700">中庭テント</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">価格</h3>
                  <p className="text-gray-700">200円〜400円</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">数量</h3>
                  <p className="text-gray-700">わらび餅150個、ドリンク200杯</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-4">わらび餅メニュー</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">きなこわらび餅</h3>
                  <p className="text-gray-700 text-sm mb-2">250円</p>
                  <p className="text-gray-600 text-sm">香ばしいきなこをたっぷりと</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">黒蜜わらび餅</h3>
                  <p className="text-gray-700 text-sm mb-2">280円</p>
                  <p className="text-gray-600 text-sm">濃厚な黒蜜の甘さが絶品</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">抹茶わらび餅</h3>
                  <p className="text-gray-700 text-sm mb-2">300円</p>
                  <p className="text-gray-600 text-sm">上品な抹茶の風味</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">ミックスわらび餅</h3>
                  <p className="text-gray-700 text-sm mb-2">350円</p>
                  <p className="text-gray-600 text-sm">3種類の味が楽しめる</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-4">ドリンクメニュー</h2>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">緑茶</h3>
                  <p className="text-gray-700 text-sm mb-2">200円</p>
                  <p className="text-gray-600 text-sm">さっぱりとした味わい</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">ほうじ茶</h3>
                  <p className="text-gray-700 text-sm mb-2">200円</p>
                  <p className="text-gray-600 text-sm">香ばしい香りが自慢</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">抹茶ラテ</h3>
                  <p className="text-gray-700 text-sm mb-2">350円</p>
                  <p className="text-gray-600 text-sm">クリーミーな抹茶ラテ</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">アイスコーヒー</h3>
                  <p className="text-gray-700 text-sm mb-2">250円</p>
                  <p className="text-gray-600 text-sm">すっきりとした苦味</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">レモネード</h3>
                  <p className="text-gray-700 text-sm mb-2">300円</p>
                  <p className="text-gray-600 text-sm">爽やかな酸味が人気</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">オリジナルブレンド茶</h3>
                  <p className="text-gray-700 text-sm mb-2">400円</p>
                  <p className="text-gray-600 text-sm">当店限定の特別ブレンド</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-4">こだわりポイント</h2>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>わらび餅は当日朝に手作り</li>
                <li>本わらび粉を使用した本格的な味</li>
                <li>ドリンクは厳選した茶葉を使用</li>
                <li>氷は純水を使用したこだわりの氷</li>
                <li>容器は環境に配慮した紙コップを使用</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">セット商品</h2>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold mb-4">わらび餅＋ドリンクセット</h3>
                <p className="text-gray-700 mb-2">お好きなわらび餅＋お好きなドリンク</p>
                <p className="text-lg font-semibold text-green-600">通常価格より50円お得！</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4">物販チームからのメッセージ</h2>
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  わらび餅ドリンク物販チームでは、伝統的な和のスイーツと、 こだわりのドリンクで皆様をおもてなしします。
                  手作りのわらび餅のぷるぷる食感と、厳選したドリンクの組み合わせを
                  ぜひお楽しみください。暑い日にぴったりの涼しげなメニューをご用意してお待ちしております！
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
