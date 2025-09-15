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
                    <strong>開催時間:</strong> 12:15 ~ 14:45
                  </li>
                  <li>
                    <strong>場所:</strong> 中教室
                  </li>
                  <li>
                    <strong>チケット価格:</strong> パンケーキ各種200円 , ドリンク各種400円
                  </li>
                  <li>
                    <strong>チケット販売場所:</strong>キャンパス入り口にて販売中(数に限りがございます。)
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">こだわりポイント！</h3>
              <p className="text-gray-700 mb-4">
                パンケーキは「ハニーバター」「チョコ&ホイップ」「餡子を挟んだどら焼き風」の3種類のトッピングがあり好きな味をお選びいただけます！(トッピングごとに売り切れ次第終了)
                「抹茶ラテ」と「ミルクティー」の2種類からお選びいただけます！ お好きな味をお選びください！
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
