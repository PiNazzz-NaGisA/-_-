import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProjectionPlanPage() {
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
              src="/placeholder.svg?height=400&width=800&text=プロジェクションマッピングin夏の思い出"
              alt="プロジェクションマッピングin夏の思い出"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">企画班</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">アート</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">プロジェクションマッピングin夏の思い出</h1>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">企画概要</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                キャンフェス史上初！プロジェクションマッピングを展示します！飲食の前後にぜひ立ち寄ってみてください！
              </p>

              <h2 className="text-2xl font-semibold mb-4">詳細情報</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">開催時間</h3>
                  <p className="text-gray-700">18:00 - 20:00（日没後）</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">場所</h3>
                  <p className="text-gray-700">校舎外壁（中庭側）</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">参加費</h3>
                  <p className="text-gray-700">無料</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-4">こだわりポイント</h2>
              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700 leading-relaxed">
                  展示のテーマは『夏』です。夏の思い出の写真やイラストをたくさん集めました！真っ暗な部屋の中で、ぜひ楽しんでください！
                </p>
              </div>

              <h2 className="text-2xl font-semibold mb-4">注意事項</h2>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>雨天の場合は中止となります</li>
                <li>観覧エリアには限りがあります</li>
                <li>フラッシュ撮影はご遠慮ください</li>
                <li>大きな音が出ますので、小さなお子様はご注意ください</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">企画班からのメッセージ</h2>
              <div className="bg-purple-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  プロジェクションマッピング企画班では、半年以上かけて準備してきた渾身の作品をお届けします！
                  光と音楽が織りなす幻想的な世界で、特別なひとときをお過ごしください。
                  きっと心に残る感動的な体験になると思います。皆様のお越しをお待ちしております！
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
