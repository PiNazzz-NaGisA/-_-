import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin, Users, Pen as Yen } from "lucide-react"

export default function ProjectionPage() {
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
              src="/placeholder.jpg?height=300&width=800&text=プロジェクション"
              alt="プロジェクション"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">プロジェクション</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 text-lg">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>18:00 - 20:00</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>中央広場</span>
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
                  最新のプロジェクション技術を使った幻想的な映像ショーです。 建物の壁面に美しい映像を投影し、音楽と共に
                  特別な空間を演出します。夜の薬院キャンフェスのハイライトです。
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">上映内容</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>薬院の歴史と文化</li>
                  <li>学生作品の映像</li>
                  <li>インタラクティブな映像体験</li>
                  <li>音楽と映像のコラボレーション</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">技術仕様</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>4K高解像度プロジェクター使用</li>
                  <li>立体音響システム</li>
                  <li>建物の形状に合わせた映像調整</li>
                  <li>天候に配慮した設備</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">上映スケジュール</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>18:00-18:20 オープニング</li>
                  <li>18:30-18:50 薬院の歴史</li>
                  <li>19:00-19:20 学生作品集</li>
                  <li>19:30-19:50 フィナーレ</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">注意事項</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>雨天の場合は中止となります</li>
                  <li>暗くなってからの上映となります</li>
                  <li>フラッシュ撮影はご遠慮ください</li>
                  <li>周辺住民の方への配慮をお願いします</li>
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
