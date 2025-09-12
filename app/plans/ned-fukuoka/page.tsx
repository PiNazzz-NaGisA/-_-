import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin } from "lucide-react"

export default function NedFukuokaPage() {
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
            <img src="/ned------.jpg" alt="NED福岡" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">NED福岡</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 text-lg">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>10:00 - 17:00</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>メインステージ</span>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-3">企画について</h3>
                <p className="text-gray-700 leading-relaxed">
                  NED福岡による特別ステージパフォーマンスです。 エネルギッシュなパフォーマンスと観客との一体感を
                  大切にしたステージをお届けします。
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">パフォーマンス内容</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>オリジナル楽曲の演奏</li>
                  <li>観客参加型のパフォーマンス</li>
                  <li>特別ゲストとのコラボレーション</li>
                  <li>サプライズ企画</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">見どころ</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>迫力のあるライブパフォーマンス</li>
                  <li>会場全体が一つになる瞬間</li>
                  <li>プロフェッショナルな演出</li>
                  <li>記憶に残る特別な体験</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">注意事項</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>大きな音が出ますので、音に敏感な方はご注意ください</li>
                  <li>ステージ前での場所取りはご遠慮ください</li>
                  <li>写真撮影は指定エリアからお願いします</li>
                  <li>パフォーマンス中の移動はお控えください</li>
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
