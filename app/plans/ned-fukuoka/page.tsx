import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NedFukuokaPage() {
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
              src="/placeholder.svg?height=400&width=800&text=NED+in+福岡薬院万博2025"
              alt="NED in 福岡薬院万博2025"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-3xl font-bold">NED in 福岡薬院万博2025</CardTitle>
            <p className="text-lg text-gray-600">地域密着型の特別企画をお楽しみください！</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                「NED（New Experience Design）in
                福岡薬院万博2025」は、薬院地域の魅力を再発見し、新しい体験をデザインする特別企画です！ぜひお気軽にご参加ください！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">開催情報</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>開催時間:</strong> 12:00 - 17:00
                  </li>
                  <li>
                    <strong>場所:</strong> 校内各所（パビリオン形式）
                  </li>
                  <li>
                    <strong>参加費:</strong> 無料
                  </li>
                  <li>
                    <strong>対象:</strong> どなたでも参加可能
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">こだわりポイント！</h3>
              <p className="text-gray-700">
                地域の歴史、文化、グルメ、人々との交流を通じて、薬院の新たな一面を発見できる万博形式のイベントです。薬院クイズラリーも開催予定です！
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
