import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin } from "lucide-react"

export default function SeniorBandPage() {
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
            <img src="/----------.jpg" alt="先輩会バンド" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">先輩会バンド</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 text-lg">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>12:00 - 15:00</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>メインステージ</span>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-3">企画について</h3>
                <p className="text-gray-700 leading-relaxed">
                  薬院の先輩方によるバンド演奏です。 長年培った音楽経験と情熱を込めた演奏で、
                  会場を盛り上げます。懐かしい楽曲から最新のヒット曲まで、 幅広いレパートリーをお楽しみください。
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">演奏予定曲</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>昭和・平成の名曲</li>
                  <li>ロック・ポップスの定番曲</li>
                  <li>フォークソング</li>
                  <li>オリジナル楽曲</li>
                  <li>観客リクエスト曲</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">バンドメンバー</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>卒業生による結成バンド</li>
                  <li>現役時代から続く音楽活動</li>
                  <li>様々な職業の先輩方が参加</li>
                  <li>音楽への情熱は変わらず</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">演奏スケジュール</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>12:00-12:30 オープニングセット</li>
                  <li>13:00-13:30 懐かしの名曲集</li>
                  <li>14:00-14:30 ロック・ポップス</li>
                  <li>14:30-15:00 アンコール・フィナーレ</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">注意事項</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>大きな音が出ますので、音に敏感な方はご注意ください</li>
                  <li>ステージ前での場所取りはご遠慮ください</li>
                  <li>写真撮影は指定エリアからお願いします</li>
                  <li>演奏中の大きな声援や拍手で応援をお願いします</li>
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
