import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin, Users, Pen as Yen } from "lucide-react"

export default function Weekly3Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              戻る
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="/placeholder.jpg?height=300&width=800&text=週3企画"
              alt="週3企画"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">週3企画</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 text-lg">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>13:00 - 16:00</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>多目的ホール</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <Yen className="h-5 w-5 text-blue-600" />
                <span>無料</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <Users className="h-5 w-5 text-blue-600" />
                <span>どなたでも</span>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-3">企画について</h3>
                <p className="text-gray-700 leading-relaxed">
                  週3回開催される特別企画です。毎回異なる内容で、 参加者の皆様に新しい発見と楽しい体験を
                  提供します。気軽にご参加ください。
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">企画内容</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>ミニ講座・セミナー</li>
                  <li>体験型ワークショップ</li>
                  <li>交流イベント</li>
                  <li>展示・発表会</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">今回のテーマ</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>地域の歴史と文化</li>
                  <li>環境問題について考える</li>
                  <li>健康的な生活習慣</li>
                  <li>コミュニケーションスキル</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">参加方法</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>予約不要、当日直接会場へ</li>
                  <li>途中参加・途中退場可能</li>
                  <li>資料は当日配布</li>
                  <li>質問・意見交換歓迎</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">注意事項</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>会場の収容人数に限りがあります</li>
                  <li>内容は予告なく変更される場合があります</li>
                  <li>録音・録画はご遠慮ください</li>
                  <li>他の参加者への配慮をお願いします</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
