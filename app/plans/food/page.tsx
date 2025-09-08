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
              src="/placeholder.svg?height=400&width=800&text=食品販売"
              alt="食品販売"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-3xl font-bold">食品販売</CardTitle>
            <p className="text-lg text-gray-600">
              パンケーキとわらび餅ドリンクの美味しい組み合わせをお楽しみください！
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                ふわふわのパンケーキと、もちもち食感が楽しいわらび餅ドリンクを販売します！ぜひお気軽にご参加ください！
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
                    <strong>参加費:</strong> 各商品300円〜500円
                  </li>
                  <li>
                    <strong>販売数:</strong> 各商品限定100個
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">こだわりポイント！</h3>
              <p className="text-gray-700">
                パンケーキは焼きたてをご提供し、わらび餅ドリンクは冷たくて美味しい和スイーツドリンクです。甘いものが好きな方にはたまらない組み合わせをご用意しています！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">注意事項</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>売り切れ次第終了となります</li>
                <li>アレルギーをお持ちの方は事前にお申し出ください</li>
                <li>混雑時はお待ちいただく場合があります</li>
                <li>イートインスペースもご利用いただけます</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
