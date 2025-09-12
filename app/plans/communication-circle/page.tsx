import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin } from "lucide-react"

export default function CommunicationCirclePage() {
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
              src="/-----------.jpg"
              alt="コミュニケーション・サークル"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">コミュニケーション・サークル</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 text-lg">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>11:00 - 16:00</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>メインステージ</span>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-3">企画について</h3>
                <p className="text-gray-700 leading-relaxed">
                  コミュニケーション・サークルによるステージパフォーマンスです。
                  様々な表現を通じて、観客の皆様とのコミュニケーションを大切にした 楽しいステージをお届けします。
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">見どころ</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>インタラクティブなパフォーマンス</li>
                  <li>観客参加型の企画</li>
                  <li>コミュニケーションを重視した演出</li>
                  <li>多彩な表現活動</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">注意事項</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>ステージ前での場所取りはご遠慮ください</li>
                  <li>写真撮影は指定エリアからお願いします</li>
                  <li>大きな声援や拍手で応援をお願いします</li>
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
