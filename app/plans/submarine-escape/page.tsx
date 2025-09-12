import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin, Users, Pen as Yen } from "lucide-react"

export default function SubmarineEscapePage() {
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
              src="/placeholder.jpg?height=300&width=800&text=潜水艦脱出ゲーム"
              alt="潜水艦脱出ゲーム"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">潜水艦脱出ゲーム</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 text-lg">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>10:00 - 17:00</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>特設会場</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <Yen className="h-5 w-5 text-blue-600" />
                <span>500円/チーム</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <Users className="h-5 w-5 text-blue-600" />
                <span>3-6人チーム</span>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-3">企画について</h3>
                <p className="text-gray-700 leading-relaxed">
                  チームワークと知恵を駆使して潜水艦からの脱出を目指す
                  リアル脱出ゲームです！様々な謎解きや仕掛けが待ち受けています。 制限時間内に脱出できるでしょうか？
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">ゲーム内容</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>制限時間60分の脱出ゲーム</li>
                  <li>潜水艦をテーマにした謎解き</li>
                  <li>チーム全員で協力して挑戦</li>
                  <li>複数の部屋を移動しながら進行</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">難易度</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>初心者から上級者まで楽しめる設計</li>
                  <li>ヒント機能あり（回数制限あり）</li>
                  <li>段階的に難しくなる謎解き</li>
                  <li>最終的な脱出成功率は約30%</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">参加方法</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>当日受付または事前予約</li>
                  <li>3-6人でチームを組んで参加</li>
                  <li>1日8回開催（各回60分）</li>
                  <li>各回定員18名（3チーム同時進行）</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">特典</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>脱出成功チームには認定証をプレゼント</li>
                  <li>記念撮影コーナーあり</li>
                  <li>参加者全員にオリジナルステッカー</li>
                  <li>最速脱出チームには特別賞品</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">注意事項</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>小学生以下は保護者同伴でお願いします</li>
                  <li>携帯電話の使用は禁止です</li>
                  <li>ゲーム中の写真撮影はご遠慮ください</li>
                  <li>体調不良の方は参加をお控えください</li>
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
