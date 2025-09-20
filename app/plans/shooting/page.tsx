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
              src="/shateki-image.png"
              alt="射的"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-3xl font-bold">射的</CardTitle>
            <p className="text-lg text-gray-600">昔懐かしい射的ゲームで景品をゲットしよう！</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                子供の頃にやったことがある人もいるであろう「射的を」今回のキャンフェスで出展します！ぜひお気軽にご参加ください！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">開催情報</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>開催時間:</strong> 12:15 ~ 14:45
                  </li>
                  <li>
                    <strong>場所:</strong> 中教室後方
                  </li>
                  <li>
                    <strong>チケット価格:</strong> 一枚 100円
                  </li>
                  <li>
                    <strong>チケット販売場所:</strong> 中教室入り口にて販売中(数に限りがございます。)
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">景品について</h3>
              <p className="text-gray-700">
                昔懐かしのあのお菓子たちを景品としてご用意してます！大景品にはみんな大好きあのお菓子まで！
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
