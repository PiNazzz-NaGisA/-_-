import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin } from "lucide-react"

export default function KaraokeContestPage() {
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
            <img src="/-------.jpg" alt="カラオケ大会" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">カラオケ大会</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 text-lg">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>13:00 - 16:00</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>メインステージ</span>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-3">企画について</h3>
                <p className="text-gray-700 leading-relaxed">
                  薬院キャンフェス恒例のカラオケ大会です！ 学生、教職員、地域の皆様どなたでも参加できる
                  楽しいカラオケコンテストを開催します。
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">参加方法</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>当日受付で参加申し込み</li>
                  <li>1人1曲まで（時間の都合により変更の場合あり）</li>
                  <li>楽曲は事前に用意されたリストから選択</li>
                  <li>優秀者には素敵な賞品をプレゼント</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">審査基準</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>歌唱力</li>
                  <li>パフォーマンス</li>
                  <li>観客の盛り上がり</li>
                  <li>オリジナリティ</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">注意事項</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>参加希望者多数の場合は抽選となります</li>
                  <li>不適切な楽曲の選択はご遠慮ください</li>
                  <li>マイクの取り扱いにご注意ください</li>
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
