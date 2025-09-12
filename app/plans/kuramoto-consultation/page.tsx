import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin, Users, Pen as Yen } from "lucide-react"

export default function KuramotoConsultationPage() {
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
              src="/placeholder.jpg?height=300&width=800&text=倉本相談"
              alt="倉本相談"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">倉本相談</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 text-lg">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>10:00 - 17:00</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>相談ブース</span>
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
                  倉本先生による個別相談会です。学習に関する悩みや 進路についての相談など、様々なお悩みにお答えします。
                  気軽にお立ち寄りください。
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">相談内容</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>学習方法について</li>
                  <li>進路選択の悩み</li>
                  <li>大学生活について</li>
                  <li>その他、学生生活に関すること</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">利用方法</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>予約不要、当日直接お越しください</li>
                  <li>1回の相談時間は約15分程度</li>
                  <li>混雑時はお待ちいただく場合があります</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">注意事項</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>プライバシーは厳守いたします</li>
                  <li>相談内容によっては後日改めてお時間をいただく場合があります</li>
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
