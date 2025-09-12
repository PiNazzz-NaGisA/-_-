import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin, Users, Pen as Yen } from "lucide-react"

export default function QuizContestPage() {
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
              src="/placeholder.jpg?height=300&width=800&text=クイズ大会"
              alt="クイズ大会"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">クイズ大会</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 text-lg">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>13:00 - 15:00</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>講堂</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <Yen className="h-5 w-5 text-blue-600" />
                <span>無料</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <Users className="h-5 w-5 text-blue-600" />
                <span>どなたでも（チーム戦）</span>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-3">企画について</h3>
                <p className="text-gray-700 leading-relaxed">
                  知識と知恵を競う楽しいクイズ大会です！ 様々なジャンルの問題を用意しており、
                  チーム戦で協力しながら挑戦していただけます。 優勝チームには豪華賞品をご用意しています。
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">参加方法</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>3-4人でチームを組んで参加</li>
                  <li>当日受付で参加申し込み</li>
                  <li>参加費無料</li>
                  <li>先着順で受付（定員になり次第締切）</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">クイズジャンル</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>一般常識</li>
                  <li>歴史・地理</li>
                  <li>スポーツ</li>
                  <li>エンターテイメント</li>
                  <li>科学・技術</li>
                  <li>薬院・福岡に関する問題</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">大会形式</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>予選ラウンド（筆記問題）</li>
                  <li>準決勝（早押し問題）</li>
                  <li>決勝戦（総合問題）</li>
                  <li>各ラウンドで上位チームが進出</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">賞品</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>優勝：図書カード5,000円分（チーム全員）</li>
                  <li>準優勝：図書カード3,000円分（チーム全員）</li>
                  <li>3位：図書カード1,000円分（チーム全員）</li>
                  <li>参加賞：オリジナルグッズ</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">注意事項</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>携帯電話・スマートフォンの使用は禁止</li>
                  <li>チーム内での相談は自由</li>
                  <li>判定に関する異議申し立ては受け付けません</li>
                  <li>会場内での飲食は可能です</li>
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
