import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin, Users, Pen as Yen } from "lucide-react"

export default function PancakePage() {
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
              src="/placeholder.jpg?height=300&width=800&text=パンケーキ"
              alt="パンケーキ"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">パンケーキ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 text-lg">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>10:00 - 16:00</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>フードエリア</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <Yen className="h-5 w-5 text-blue-600" />
                <span>300円〜</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <Users className="h-5 w-5 text-blue-600" />
                <span>どなたでも</span>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-3">企画について</h3>
                <p className="text-gray-700 leading-relaxed">
                  ふわふわで美味しい手作りパンケーキをご提供します。 様々なトッピングをご用意しており、お好みに合わせて
                  カスタマイズしていただけます。
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">メニュー</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>プレーンパンケーキ - 300円</li>
                  <li>フルーツパンケーキ - 450円</li>
                  <li>チョコレートパンケーキ - 400円</li>
                  <li>ホイップクリームパンケーキ - 350円</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">トッピング</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>メープルシロップ</li>
                  <li>ハチミツ</li>
                  <li>フレッシュフルーツ</li>
                  <li>ホイップクリーム</li>
                  <li>チョコレートソース</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">注意事項</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>現金のみの取り扱いとなります</li>
                  <li>材料がなくなり次第終了となります</li>
                  <li>アレルギーをお持ちの方は事前にお申し出ください</li>
                  <li>混雑時はお待ちいただく場合があります</li>
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
