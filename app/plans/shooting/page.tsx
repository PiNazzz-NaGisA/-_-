import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ShootingPlanPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-screen-xl mx-auto w-full px-4 py-8">
        <div className="mb-6">
          <Link href="/#pickup">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              企画一覧に戻る
            </Button>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96">
            <Image
              src="/placeholder.svg?height=400&width=800&text=射的ゲーム"
              alt="射的企画班"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">企画班</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">ゲーム</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">射的企画班</h1>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">企画概要</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                伝統的な射的ゲームで腕試し！的を狙って豪華景品をゲットしよう。
                昔懐かしい縁日の雰囲気を再現し、子供から大人まで楽しめる企画です。
              </p>

              <h2 className="text-2xl font-semibold mb-4">詳細情報</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">開催時間</h3>
                  <p className="text-gray-700">12:00 - 17:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">場所</h3>
                  <p className="text-gray-700">体育館前広場</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">参加費</h3>
                  <p className="text-gray-700">1回 200円</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">対象</h3>
                  <p className="text-gray-700">どなたでも参加可能</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-4">景品について</h2>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>1等：大型ぬいぐるみ</li>
                <li>2等：お菓子詰め合わせ</li>
                <li>3等：文房具セット</li>
                <li>参加賞：オリジナルステッカー</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">ルール</h2>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>1回につき5発まで撃てます</li>
                <li>的に当たった数によって景品が決まります</li>
                <li>安全のため、係員の指示に従ってください</li>
                <li>小学生以下のお子様は保護者同伴でお願いします</li>
              </ol>

              <h2 className="text-2xl font-semibold mb-4">企画班からのメッセージ</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  射的企画班一同、皆様のお越しをお待ちしております！
                  昔懐かしい射的ゲームで、童心に帰って楽しんでいただけるよう、
                  心を込めて準備いたします。ぜひお気軽にお立ち寄りください！
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
