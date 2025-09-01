import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ShootingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/#plans">
            <Button variant="outline" className="group bg-transparent">
              <ArrowLeftIcon className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              企画一覧に戻る
            </Button>
          </Link>
        </div>

        <Card className="max-w-4xl mx-auto">
          <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=800&text=射的企画班"
              alt="射的企画班"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-3xl font-bold">射的企画班</CardTitle>
            <p className="text-lg text-gray-600">昔懐かしい射的ゲームで景品をゲットしよう！</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                昔懐かしい射的ゲームを現代風にアレンジ！コルクガンを使って的を狙い、見事命中させると素敵な景品がもらえます。
                お子様から大人まで楽しめる企画です。腕に自信のある方はぜひチャレンジしてみてください！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">開催情報</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>開催時間:</strong> 12:30 - 16:00
                  </li>
                  <li>
                    <strong>場所:</strong> 1階エントランス
                  </li>
                  <li>
                    <strong>参加費:</strong> 1回 200円
                  </li>
                  <li>
                    <strong>対象:</strong> どなたでも参加可能
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">景品について</h3>
              <p className="text-gray-700">
                命中した的に応じて、お菓子や文房具、オリジナルグッズなど様々な景品をご用意しています。
                特に難しい的を狙い撃ちできた方には、特別な景品もご用意していますのでお楽しみに！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">注意事項</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>安全のため、係員の指示に従ってください</li>
                <li>小さなお子様は保護者の方と一緒にご参加ください</li>
                <li>混雑時はお待ちいただく場合があります</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
