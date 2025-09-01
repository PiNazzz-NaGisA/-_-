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
              src="/placeholder.svg?height=400&width=800&text=プロジェクションマッピング"
              alt="プロジェクションマッピング"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-3xl font-bold">プロジェクションマッピング</CardTitle>
            <p className="text-lg text-gray-600">最新技術による幻想的な映像体験</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                最新のプロジェクションマッピング技術を使用して、建物の壁面に幻想的な映像を投影します。
                光と音楽が織りなす美しい世界をお楽しみください。デジタルアートの新しい可能性を体感できる特別な企画です。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">開催情報</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>開催時間:</strong> 18:00 - 19:30（日没後）
                  </li>
                  <li>
                    <strong>場所:</strong> 校舎外壁
                  </li>
                  <li>
                    <strong>参加費:</strong> 無料
                  </li>
                  <li>
                    <strong>対象:</strong> どなたでも観覧可能
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">上映スケジュール</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border">
                  <p className="font-medium">第1回上映: 18:00 - 18:15</p>
                  <p className="text-sm text-gray-600">テーマ: 「薬院の四季」</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <p className="font-medium">第2回上映: 18:30 - 18:45</p>
                  <p className="text-sm text-gray-600">テーマ: 「未来への扉」</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <p className="font-medium">第3回上映: 19:00 - 19:15</p>
                  <p className="text-sm text-gray-600">テーマ: 「学生生活の思い出」</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">注意事項</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>天候により中止になる場合があります</li>
                <li>観覧は指定エリアからお願いします</li>
                <li>フラッシュ撮影はご遠慮ください</li>
                <li>音響設備を使用するため、近隣への配慮をお願いします</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
