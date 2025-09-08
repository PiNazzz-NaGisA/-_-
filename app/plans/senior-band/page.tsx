import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SeniorBandPage() {
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
              src="/placeholder.svg?height=400&width=800&text=薬院老人会バンド演奏"
              alt="薬院老人会によるバンド演奏"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-3xl font-bold">薬院老人会によるバンド演奏</CardTitle>
            <p className="text-lg text-gray-600">地域の薬院老人会による心温まるバンド演奏をお楽しみください！</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                地域の薬院老人会の皆さんによる特別なバンド演奏です！ぜひお気軽にご参加ください！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">開催情報</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>開催時間:</strong> 16:00 - 17:00
                  </li>
                  <li>
                    <strong>場所:</strong> 中庭特設ステージ
                  </li>
                  <li>
                    <strong>参加費:</strong> 無料
                  </li>
                  <li>
                    <strong>座席:</strong> 椅子席50席（先着順）
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">こだわりポイント！</h3>
              <p className="text-gray-700">
                長年音楽を愛し続けてきたメンバーたちが、懐かしの名曲から現代の楽曲まで、幅広いレパートリーで心温まる演奏をお届けします。世代を超えた音楽の素晴らしさを感じられる貴重な機会です！
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
