import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CommunicationCirclePage() {
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
              src="/placeholder.svg?height=400&width=800&text=コミュニケーションサークル発表"
              alt="コミュニケーションサークル発表"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-3xl font-bold">コミュニケーションサークル発表</CardTitle>
            <p className="text-lg text-gray-600">スピーチやプレゼンテーション技術の発表会をお楽しみください！</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                コミュニケーション技術の向上を目指すサークルメンバーによる発表会です！ぜひお気軽にご参加ください！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">開催情報</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>開催時間:</strong> 14:00 - 16:00
                  </li>
                  <li>
                    <strong>場所:</strong> 大講義室
                  </li>
                  <li>
                    <strong>参加費:</strong> 無料
                  </li>
                  <li>
                    <strong>対象:</strong> どなたでも観覧・参加可能
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">こだわりポイント！</h3>
              <p className="text-gray-700">
                スピーチ、プレゼンテーション、ディベートなど、様々な形式でのコミュニケーション技術を披露します。観客の皆さんも一緒に参加できるワークショップも開催予定です！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">注意事項</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>途中入退場は自由です</li>
                <li>ワークショップへの参加は任意です</li>
                <li>録音・録画はご遠慮ください</li>
                <li>質問や感想は発表後にお聞かせください</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
