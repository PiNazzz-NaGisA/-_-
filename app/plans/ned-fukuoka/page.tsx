import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, MapPin, Clock, Users } from "lucide-react"

export default function NEDFukuokaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/#plans">
            <Button variant="outline" className="mb-4 bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              企画一覧に戻る
            </Button>
          </Link>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">NED in 福岡薬院万博2025</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=600&text=NED+in+福岡薬院万博2025"
                alt="NED in 福岡薬院万博2025"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>メイン会場</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-600" />
                <span>13:00-15:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-purple-600" />
                <span>参加自由</span>
              </div>
            </div>

            <div className="prose max-w-none">
              <h3>企画概要</h3>
              <p>
                福岡薬院キャンパス初の万博形式イベント「NED in 福岡薬院万博2025」を開催します！
                地域の魅力を再発見し、未来への可能性を探る特別企画です。
              </p>

              <h3>企画内容</h3>
              <ul>
                <li>地域の歴史と文化の展示</li>
                <li>未来技術の体験コーナー</li>
                <li>地域住民との交流ブース</li>
                <li>薬院の魅力発信プレゼンテーション</li>
              </ul>

              <h3>参加方法</h3>
              <p>
                事前予約は不要です。当日会場にお越しください。 各ブースを自由に回って、薬院の魅力を体感してください。
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
