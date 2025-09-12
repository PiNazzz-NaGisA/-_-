import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin, Users, Pen as Yen } from "lucide-react"

export default function WarabimochiPage() {
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
              src="/placeholder.jpg?height=300&width=800&text=わらび餅"
              alt="わらび餅"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">わらび餅</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 text-lg">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>11:00 - 16:00</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>和菓子コーナー</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <Yen className="h-5 w-5 text-blue-600" />
                <span>200円</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <Users className="h-5 w-5 text-blue-600" />
                <span>どなたでも</span>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-3">企画について</h3>
                <p className="text-gray-700 leading-relaxed">
                  手作りの美味しいわらび餅をご提供します。 ぷるぷるとした食感と上品な甘さが自慢の
                  本格的なわらび餅です。きな粉と黒蜜で お召し上がりください。
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">商品詳細</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>本わらび粉使用の本格わらび餅</li>
                  <li>きな粉と黒蜜付き</li>
                  <li>1パック6個入り</li>
                  <li>その場でお召し上がりいただけます</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">こだわり</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>厳選した本わらび粉を使用</li>
                  <li>職人による手作り製法</li>
                  <li>添加物を使わない自然な味</li>
                  <li>作りたての美味しさをお届け</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">販売時間</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>11:00 第1回販売開始</li>
                  <li>13:00 第2回販売開始</li>
                  <li>15:00 第3回販売開始</li>
                  <li>各回限定50パック</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">注意事項</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>売り切れ次第終了となります</li>
                  <li>現金のみの取り扱いです</li>
                  <li>アレルギーをお持ちの方は事前にお申し出ください</li>
                  <li>お持ち帰りの場合は早めにお召し上がりください</li>
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
