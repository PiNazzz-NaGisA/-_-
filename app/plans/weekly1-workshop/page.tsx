import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Weekly1WorkshopPage() {
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
              src="/placeholder.svg?height=400&width=800&text=週1物販ワークショップ"
              alt="週1物販ワークショップ"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">物販</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                ワークショップ
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">体験</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">週1物販ワークショップ</h1>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">企画概要</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                毎週1回開催される特別なワークショップ！自分だけのオリジナル作品を作って、
                そのまま持ち帰ることができます。学生スタッフが丁寧に指導するので、
                初心者の方でも安心してご参加いただけます。作った作品は記念品として、
                またはプレゼントとしてもお楽しみください。
              </p>

              <h2 className="text-2xl font-semibold mb-4">詳細情報</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">開催時間</h3>
                  <p className="text-gray-700">毎週土曜日 14:00 - 16:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">場所</h3>
                  <p className="text-gray-700">アートルーム（2階）</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">参加費</h3>
                  <p className="text-gray-700">500円〜1,500円（材料費込み）</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">定員</h3>
                  <p className="text-gray-700">各回15名（要予約）</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-4">ワークショップメニュー</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <h3 className="font-semibold mb-2">オリジナルキーホルダー作り</h3>
                  <p className="text-gray-700 text-sm mb-2">参加費：500円</p>
                  <p className="text-gray-600 text-sm">レジンやビーズを使って世界に一つだけのキーホルダーを作成</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <h3 className="font-semibold mb-2">手作りアクセサリー</h3>
                  <p className="text-gray-700 text-sm mb-2">参加費：800円</p>
                  <p className="text-gray-600 text-sm">ピアス、イヤリング、ブレスレットから選択可能</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <h3 className="font-semibold mb-2">オリジナルトートバッグ</h3>
                  <p className="text-gray-700 text-sm mb-2">参加費：1,200円</p>
                  <p className="text-gray-600 text-sm">布用ペイントでデザインを描いてオリジナルバッグを作成</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <h3 className="font-semibold mb-2">ハーバリウム作り</h3>
                  <p className="text-gray-700 text-sm mb-2">参加費：1,500円</p>
                  <p className="text-gray-600 text-sm">ドライフラワーとオイルで美しいハーバリウムを作成</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <h3 className="font-semibold mb-2">陶芸体験（小物入れ）</h3>
                  <p className="text-gray-700 text-sm mb-2">参加費：1,000円</p>
                  <p className="text-gray-600 text-sm">粘土をこねて小さな器や小物入れを作成（焼成後お渡し）</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <h3 className="font-semibold mb-2">キャンドル作り</h3>
                  <p className="text-gray-700 text-sm mb-2">参加費：700円</p>
                  <p className="text-gray-600 text-sm">好きな色と香りを選んでオリジナルキャンドルを作成</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-4">月間スケジュール</h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold mb-4">📅 今月の開催予定</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">第1週（1月7日）</h4>
                    <p className="text-gray-700 text-sm">オリジナルキーホルダー作り</p>
                    <p className="text-gray-600 text-xs">残り席数：8席</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">第2週（1月14日）</h4>
                    <p className="text-gray-700 text-sm">ハーバリウム作り</p>
                    <p className="text-gray-600 text-xs">残り席数：3席</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">第3週（1月21日）</h4>
                    <p className="text-gray-700 text-sm">手作りアクセサリー</p>
                    <p className="text-gray-600 text-xs">残り席数：12席</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">第4週（1月28日）</h4>
                    <p className="text-gray-700 text-sm">オリジナルトートバッグ</p>
                    <p className="text-gray-600 text-xs">残り席数：15席</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-4">参加方法・注意事項</h2>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>事前予約が必要です（当日受付は空きがある場合のみ）</li>
                <li>参加費は当日現金でお支払いください</li>
                <li>汚れても良い服装でお越しください</li>
                <li>小学生以下のお子様は保護者同伴でお願いします</li>
                <li>作品の完成まで約2時間かかります</li>
                <li>陶芸体験の作品は焼成後、1週間後のお渡しとなります</li>
                <li>キャンセルは前日までにご連絡ください</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">予約方法</h2>
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold mb-4">📞 予約受付</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>電話：</strong>092-XXX-XXXX（平日 10:00-17:00）
                  </p>
                  <p className="text-gray-700">
                    <strong>メール：</strong>workshop@yakuin-canfes.jp
                  </p>
                  <p className="text-gray-700">
                    <strong>受付開始：</strong>毎月25日から翌月分の予約開始
                  </p>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  ※予約時に「お名前」「参加希望日」「参加人数」「連絡先」をお伝えください
                </p>
              </div>

              <h2 className="text-2xl font-semibold mb-4">特別企画</h2>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold mb-4">🎨 月末スペシャルワークショップ</h3>
                <p className="text-gray-700 mb-2">毎月最終週は特別企画を開催！</p>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>プロの講師による本格的な指導</li>
                  <li>通常より高品質な材料を使用</li>
                  <li>完成作品の写真撮影サービス</li>
                  <li>参加者全員にオリジナルグッズプレゼント</li>
                </ul>
                <p className="text-red-600 text-sm font-semibold mt-2">※参加費：通常料金＋500円</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4">ワークショップチームからのメッセージ</h2>
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  週1物販ワークショップでは、「作る楽しさ」と「持ち帰る喜び」を
                  大切にしています。初心者の方でも安心して参加できるよう、
                  学生スタッフが一人ひとりに丁寧に指導いたします。
                  手作りの温かさを感じながら、世界に一つだけの作品を作ってみませんか？
                  皆様のご参加を心よりお待ちしております！
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
