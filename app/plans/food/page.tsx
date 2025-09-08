import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FoodPage() {
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
              src="/placeholder.svg?height=400&width=800&text=もちパンカフェ"
              alt="もちパンカフェ"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-3xl font-bold">もちパンカフェ</CardTitle>
            <p className="text-lg text-gray-600">
              わらびもちのドリンクとパンケーキを販売するカフェをお楽しみください！
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                わらびもちのドリンクとパンケーキを販売するカフェ！３種のパンケーキとわらび餅ドリンクがあります！キャンフェスの思い出にぜひぜひ購入してください！！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">開催情報</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>開催時間:</strong> 12:00 - 16:00
                  </li>
                  <li>
                    <strong>場所:</strong> 1階カフェテリア
                  </li>
                  <li>
                    <strong>参加費:</strong> パンケーキ各種・ドリンク各種
                  </li>
                  <li>
                    <strong>販売数:</strong> 各商品限定100個
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">こだわりポイント！</h3>
              <p className="text-gray-700 mb-4">
              「抹茶ラテ」と「ミルクティー」の2種類からお選びいただけます！
              お好きな味をお選びください！
              </p>
              <p className="text-gray-700">
                「抹茶ラテ」と「ミルクティー」の2種類からお選びいただけます！お好きな味をお選びください！
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
