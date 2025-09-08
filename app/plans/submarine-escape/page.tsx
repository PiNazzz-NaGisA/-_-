import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SubmarineEscapePage() {
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
              src="/placeholder.svg?height=400&width=800&text=潜水艇脱出ゲーム"
              alt="爆破しうる潜水艇からの脱出"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-3xl font-bold">爆破しうる潜水艇からの脱出</CardTitle>
            <p className="text-lg text-gray-600">制限時間60分！チームワークで潜水艇からの脱出を目指せ！</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                海底に沈んだ潜水艇から制限時間60分以内に脱出する本格的な脱出ゲームです！ぜひお気軽にご参加ください！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">開催情報</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>開催時間:</strong> 12:30 - 17:00
                  </li>
                  <li>
                    <strong>場所:</strong> 地下実習室（特別セット）
                  </li>
                  <li>
                    <strong>参加費:</strong> 1人 500円
                  </li>
                  <li>
                    <strong>チーム編成:</strong> 4〜6人1組
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">こだわりポイント！</h3>
              <p className="text-gray-700">
                チームメンバーと協力して謎を解き、仕掛けを突破し、爆発する前に潜水艇から脱出しましょう！論理的思考力、観察力、そして何よりチームワークが試される究極の体験型ゲームです！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">注意事項</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>4〜6人でチームを組んでご参加ください</li>
                <li>動きやすい服装でお越しください</li>
                <li>ゲーム中は携帯電話の使用禁止</li>
                <li>安全のため、係員の指示に従ってください</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
