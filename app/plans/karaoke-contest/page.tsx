import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function KaraokeContestPage() {
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
              src="/placeholder.svg?height=400&width=800&text=カラオケ大会"
              alt="カラオケ大会 ~ in 福岡薬院 ~"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-3xl font-bold">カラオケ大会 ~ in 福岡薬院 ~</CardTitle>
            <p className="text-lg text-gray-600">歌自慢の皆さん集合！福岡薬院初のカラオケ大会をお楽しみください！</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                キャンフェスステージにて、カラオケ大会を開催します！！
                上手い・下手関係なしに、みんなで盛り上がりましょう！！

              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">開催情報</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>開催時間:</strong> 15:00 - 17:00
                  </li>
                  <li>
                    <strong>場所:</strong> 体育館（特設ステージ）
                  </li>
                  <li>
                    <strong>参加費:</strong> 無料
                  </li>
                  <li>
                    <strong>エントリー:</strong> 当日受付（14:30〜）
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">こだわりポイント！</h3>
              <p className="text-gray-700">
                歌自慢の皆さんはもちろん、普段は人前で歌わない方も気軽に参加できるアットホームな雰囲気の大会です。様々な部門を設けているので、どなたでも楽しく参加していただけます！
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
