import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin, Users, Pen as Yen } from "lucide-react"

export default function ShootingPage() {
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
              src="/placeholder.jpg?height=300&width=800&text=射的"
              alt="射的"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">射的</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 text-lg">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>10:00 - 17:00</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>ゲームコーナー</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <Yen className="h-5 w-5 text-blue-600" />
                <span>100円/回</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <Users className="h-5 w-5 text-blue-600" />
                <span>小学生以上</span>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-3">企画について</h3>
                <p className="text-gray-700 leading-relaxed">
                  昔懐かしい射的ゲームです！コルクガンを使って 的を狙い撃ちしてください。命中した景品は
                  お持ち帰りいただけます。お子様から大人まで 楽しめるゲームです。
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">ゲーム内容</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>コルクガンを使用した安全な射的</li>
                  <li>1回につき5発まで</li>
                  <li>倒した景品はお持ち帰り可能</li>
                  <li>様々な景品をご用意</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">景品</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>お菓子各種</li>
                  <li>文房具</li>
                  <li>小さなおもちゃ</li>
                  <li>オリジナルグッズ</li>
                  <li>特別賞品（難易度高）</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">遊び方</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>受付で料金をお支払いください</li>
                  <li>スタッフから説明を受けてください</li>
                  <li>安全に注意して射的をお楽しみください</li>
                  <li>倒した景品をお受け取りください</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">注意事項</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>小学生未満のお子様は保護者同伴でお願いします</li>
                  <li>コルクガンの取り扱いには十分注意してください</li>
                  <li>他の参加者の邪魔にならないようにしてください</li>
                  <li>景品の交換・返品はできません</li>
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
