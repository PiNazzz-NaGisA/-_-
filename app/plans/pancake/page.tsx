import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PancakePlanPage() {
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
              src="/placeholder.svg?height=400&width=800&text=パンケーキ"
              alt="パンケーキ物販"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">物販</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">フード</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">パンケーキ物販</h1>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">商品概要</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                ふわふわの美味しいパンケーキを販売！休憩にどうぞ。
                手作りの温かいパンケーキに、お好みのトッピングをのせて、 キャンフェスでの疲れを癒してください。
              </p>

              <h2 className="text-2xl font-semibold mb-4">詳細情報</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">販売時間</h3>
                  <p className="text-gray-700">12:00 - 16:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">場所</h3>
                  <p className="text-gray-700">カフェテリア前</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">価格</h3>
                  <p className="text-gray-700">300円〜500円</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">数量</h3>
                  <p className="text-gray-700">限定100食</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-4">メニュー</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">プレーンパンケーキ</h3>
                  <p className="text-gray-700 text-sm mb-2">300円</p>
                  <p className="text-gray-600 text-sm">シンプルで優しい味のパンケーキ</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">ベリーパンケーキ</h3>
                  <p className="text-gray-700 text-sm mb-2">400円</p>
                  <p className="text-gray-600 text-sm">新鮮なベリーとホイップクリーム</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">チョコパンケーキ</h3>
                  <p className="text-gray-700 text-sm mb-2">450円</p>
                  <p className="text-gray-600 text-sm">濃厚チョコソースとバナナ</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">スペシャルパンケーキ</h3>
                  <p className="text-gray-700 text-sm mb-2">500円</p>
                  <p className="text-gray-600 text-sm">全部のせ！豪華版パンケーキ</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-4">こだわりポイント</h2>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>国産小麦粉を使用した手作り生地</li>
                <li>注文を受けてから焼き上げる出来立て</li>
                <li>地元産の新鮮な卵と牛乳を使用</li>
                <li>トッピングは全て手作り</li>
                <li>アレルギー対応も可能（要相談）</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">注意事項</h2>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>売り切れ次第終了となります</li>
                <li>作り置きはしておりませんので、お時間をいただく場合があります</li>
                <li>アレルギーをお持ちの方は事前にお声がけください</li>
                <li>イートインスペースには限りがあります</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">物販チームからのメッセージ</h2>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  パンケーキ物販チームでは、皆様に美味しいパンケーキをお届けするため、
                  材料選びから調理まで、すべてにこだわって準備しています。
                  キャンフェスでの楽しいひとときに、温かいパンケーキで一息ついてください。
                  スタッフ一同、心を込めてお作りします！
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
