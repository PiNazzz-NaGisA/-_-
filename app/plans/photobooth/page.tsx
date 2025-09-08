import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PhotoboothPage() {
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
              src="/placeholder.svg?height=400&width=800&text=fact+photo"
              alt="fact photo -in campus festival-"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-3xl font-bold">fact photo -in campus festival-</CardTitle>
            <p className="text-lg text-gray-600">あなたの"いま"を、未来に届ける一枚にしませんか！</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                今年もフォトブース企画「fact photo」、開催いたします！ぜひお気軽にご参加ください！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">開催情報</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>開催時間:</strong> 13:00 - 16:00
                  </li>
                  <li>
                    <strong>場所:</strong> 2階 多目的室
                  </li>
                  <li>
                    <strong>参加費:</strong> データ版無料、プリント版200円
                  </li>
                  <li>
                    <strong>対象:</strong> どなたでも参加可能
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">用意している小道具</h3>
              <p className="text-gray-700">
                昨年ご好評をいただいたこの企画、今年はさらにパワーアップ！今回はその場でプリントして持ち帰れるプランをご用意しました。キャンフェスで過ごす"いま"を、"最高のカタチ"で残してみませんか！
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
