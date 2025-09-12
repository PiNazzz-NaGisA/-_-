import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin } from "lucide-react"

export default function FoodPage() {
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
              src="/placeholder.jpg?height=300&width=800&text=フード企画"
              alt="フード企画"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">フード企画</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 text-lg">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>10:00 - 17:00</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>フードコート</span>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-3">企画について</h3>
                <p className="text-gray-700 leading-relaxed">
                  薬院キャンフェスの美味しいフード企画です。 地元の食材を使った特別メニューや、学生が手作りする
                  心のこもった料理をお楽しみいただけます。
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">メニュー</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>薬院特製カレー - 500円</li>
                  <li>手作りサンドイッチ - 300円</li>
                  <li>フレッシュジュース - 200円</li>
                  <li>焼きそば - 400円</li>
                  <li>たこ焼き - 350円</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">注意事項</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>現金のみの取り扱いとなります</li>
                  <li>売り切れの場合はご了承ください</li>
                  <li>アレルギーをお持ちの方は事前にお声がけください</li>
                  <li>ゴミは指定の場所に捨ててください</li>
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
