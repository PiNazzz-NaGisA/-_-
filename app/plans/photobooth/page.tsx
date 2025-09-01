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
              src="/placeholder.svg?height=400&width=800&text=フォトブース"
              alt="フォトブース"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-3xl font-bold">フォトブース</CardTitle>
            <p className="text-lg text-gray-600">思い出の一枚を撮影しよう！</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                様々な小道具やセットを使って、思い出に残る写真を撮影できるフォトブースです。
                友達同士、家族、カップルで楽しい写真を撮って、キャンフェスの思い出を残しませんか？
                撮影した写真はその場でプリントしてお渡しします！
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
                    <strong>場所:</strong> 2階ラウンジ
                  </li>
                  <li>
                    <strong>参加費:</strong> 1枚 300円
                  </li>
                  <li>
                    <strong>対象:</strong> どなたでも参加可能
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">用意している小道具</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="font-medium">帽子・サングラス</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="font-medium">吹き出しボード</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="font-medium">季節の小物</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="font-medium">面白マスク</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="font-medium">フレーム</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="font-medium">その他多数</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">注意事項</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>撮影は1組5分程度でお願いします</li>
                <li>小道具は大切に扱ってください</li>
                <li>混雑時はお待ちいただく場合があります</li>
                <li>プリント枚数に限りがあります</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
