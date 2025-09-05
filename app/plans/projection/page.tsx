import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, MapPin, Pen as Yen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-screen-xl mx-auto w-full px-4 py-8">
        <div className="mb-6">
          <Link href="/#plans">
            <Button variant="outline" className="mb-4 bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              企画一覧に戻る
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600&text=プロジェクションマッピングin夏の思い出"
              alt="プロジェクションマッピングin夏の思い出"
              width={600}
              height={400}
              className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <Badge className="mb-4">企画班</Badge>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">プロジェクションマッピングin夏の思い出</h1>
            <p className="text-lg text-gray-600 mb-6">
              キャンフェス史上初！プロジェクションマッピングを展示します！飲食の前後にぜひ立ち寄ってみてください！
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                開催情報
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <span>開催時間: 12:00 - 16:00</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span>場所: 2階多目的室</span>
              </div>
              <div className="flex items-center gap-2">
                <Yen className="h-4 w-4 text-gray-500" />
                <span>参加費: 無料</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>こだわりポイント</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                展示のテーマは『夏』です。夏の思い出の写真やイラストをたくさん集めました！真っ暗な部屋の中で、ぜひ楽しんでください！
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>注意事項</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>展示は暗い部屋で行われます。足元にお気をつけください。</li>
              <li>上映中の入退室は自由ですが、他の来場者の迷惑にならないようお静かにお願いします。</li>
              <li>写真撮影は可能ですが、フラッシュの使用はご遠慮ください。</li>
              <li>小さなお子様は保護者の方と一緒にご観覧ください。</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
