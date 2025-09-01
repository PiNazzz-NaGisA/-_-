import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FoodPlanPage() {
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
              src="/placeholder.svg?height=400&width=800&text=食品販売"
              alt="食品販売"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">物販</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">フード</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">ドリンク</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">食品販売</h1>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">概要</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                キャンフェスでお腹が空いたら、食品販売コーナーへ！
                ふわふわのパンケーキから、ひんやり美味しいわらび餅とドリンクまで、
                様々な美味しいメニューをご用意しています。休憩にぜひお立ち寄りください。
              </p>

              <h2 className="text-2xl font-semibold mb-4">販売情報</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">販売時間</h3>
                  <p className="text-gray-700">11:30 - 17:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">場所</h3>
                  <p className="text-gray-700">カフェテリア前・中庭テント</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">価格帯</h3>
                  <p className="text-gray-700">200円〜500円</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">支払い方法</h3>
                  <p className="text-gray-700">現金のみ</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-4">パンケーキメニュー</h2>
              <p className="text-gray-600 mb-4">販売場所：カフェテリア前 | 販売時間：12:00-16:00</p>
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

              <h2 className="text-2xl font-semibold mb-4">わらび餅メニュー</h2>
              <p className="text-gray-600 mb-4">販売場所：中庭テント | 販売時間：11:30-17:00</p>
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
              <p className="text-gray-600 mb-4">販売場所：中庭テント | 販売時間：11:30-17:00</p>
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

              <h2 className="text-2xl font-semibold mb-4">おすすめセット</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-r from-yellow-50 to-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">パンケーキ＋ドリンクセット</h3>
                  <p className="text-gray-700 mb-2">お好きなパンケーキ＋お好きなドリンク</p>
                  <p className="text-lg font-semibold text-orange-600">通常価格より50円お得！</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">わらび餅＋ドリンクセット</h3>
                  <p className="text-gray-700 mb-2">お好きなわらび餅＋お好きなドリンク</p>
                  <p className="text-lg font-semibold text-green-600">通常価格より50円お得！</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-4">こだわりポイント</h2>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>パンケーキは国産小麦粉を使用した手作り生地</li>
                <li>わらび餅は本わらび粉を使用した本格的な味</li>
                <li>注文を受けてから調理する出来立て提供</li>
                <li>地元産の新鮮な卵と牛乳を使用</li>
                <li>ドリンクは厳選した茶葉を使用</li>
                <li>環境に配慮した紙容器を使用</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">注意事項</h2>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>売り切れ次第終了となります</li>
                <li>作り置きはしておりませんので、お時間をいただく場合があります</li>
                <li>アレルギーをお持ちの方は事前にお声がけください</li>
                <li>イートインスペースには限りがあります</li>
                <li>混雑時はお待ちいただく場合があります</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">食品販売チームからのメッセージ</h2>
              <div className="bg-gradient-to-r from-yellow-50 to-green-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  食品販売チームでは、キャンフェスを楽しむ皆様に美味しい食べ物と飲み物をお届けするため、
                  材料選びから調理まで、すべてにこだわって準備しています。
                  温かいパンケーキでほっと一息ついたり、ひんやりわらび餅で暑さを和らげたり、
                  お好みのドリンクでのどを潤したり...
                  キャンフェスでの楽しいひとときに、私たちの手作りグルメをぜひお楽しみください！
                  スタッフ一同、心を込めてお作りします。
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
