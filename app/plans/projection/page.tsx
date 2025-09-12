import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProjectionPage() {
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
              src="/placeholder.svg?height=400&width=800&text=プロジェクションマッピングin夏の思い出"
              alt="プロジェクションマッピングin夏の思い出"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-3xl font-bold">プロジェクションマッピングin夏の思い出</CardTitle>
            <p className="text-lg text-gray-600">キャンフェス史上初！プロジェクションマッピングを展示します！</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                キャンフェス史上初！プロジェクションマッピングを展示します！ぜひお気軽にご参加ください！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">開催情報</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>開催時間:</strong> 12:15 ~ 15:30
                  </li>
                  <li>
                    <strong>場所:</strong>中教室 後方 右側
                  </li>
                  <li>
                    <strong>参加費:</strong> 無料
                  </li>
                  <li>
                    <strong>チケット販売:</strong> どなたでも観覧可能
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">こだわりポイント！</h3>
              <p className="text-gray-700">
                展示のテーマは『夏』です。夏の思い出の写真やイラストをたくさん集めました！真っ暗な部屋の中で、ぜひ楽しんでください！
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
