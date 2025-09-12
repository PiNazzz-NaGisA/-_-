import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin, Users, Pen as Yen } from "lucide-react"

export default function PianoAccordionPage() {
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
              src="/placeholder.jpg?height=300&width=800&text=ピアノ・アコーディオン"
              alt="ピアノ・アコーディオン"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">ピアノ・アコーディオン</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 text-lg">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>11:00 - 15:00</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>音楽ホール</span>
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
                  美しいピアノとアコーディオンの音色をお楽しみください。
                  クラシックからポピュラーまで、様々なジャンルの楽曲を
                  演奏いたします。心温まる音楽の時間をお過ごしください。
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">演奏予定曲</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>クラシック名曲集</li>
                  <li>日本の童謡・唱歌</li>
                  <li>映画音楽</li>
                  <li>ポピュラーソング</li>
                  <li>アニメソング</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">演奏者</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>音楽科学生による演奏</li>
                  <li>地域の音楽愛好家の皆様</li>
                  <li>特別ゲスト演奏者</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">スケジュール</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>11:00-11:30 オープニング演奏</li>
                  <li>12:00-12:30 クラシック特集</li>
                  <li>13:00-13:30 ポピュラー特集</li>
                  <li>14:00-14:30 リクエスト演奏</li>
                  <li>14:30-15:00 フィナーレ</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">注意事項</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>演奏中の入退場は自由です</li>
                  <li>静かに鑑賞をお願いします</li>
                  <li>録音・録画はご遠慮ください</li>
                  <li>携帯電話はマナーモードでお願いします</li>
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
