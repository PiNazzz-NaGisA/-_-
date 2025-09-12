import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin, Users, Pen as Yen } from "lucide-react"

export default function PhotoboothPage() {
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
              src="/placeholder.jpg?height=300&width=800&text=フォトブース"
              alt="フォトブース"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">フォトブース</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 text-lg">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>10:00 - 17:00</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>エントランス</span>
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
                  薬院キャンフェスの思い出を写真に残しませんか？ 可愛い背景やプロップスをご用意して、
                  素敵な写真撮影をお手伝いします。
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">撮影内容</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>個人写真</li>
                  <li>グループ写真</li>
                  <li>家族写真</li>
                  <li>友達同士の記念写真</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">用意しているもの</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>カラフルな背景</li>
                  <li>楽しいプロップス</li>
                  <li>フェスティバルテーマの装飾</li>
                  <li>撮影用の小道具</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">利用方法</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>予約不要、当日直接お越しください</li>
                  <li>お客様のカメラ・スマートフォンで撮影</li>
                  <li>スタッフがお手伝いします</li>
                  <li>混雑時は順番にお待ちください</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">注意事項</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>プロップスは大切に扱ってください</li>
                  <li>次の方のために時間を考慮してください</li>
                  <li>撮影データの管理は各自でお願いします</li>
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
