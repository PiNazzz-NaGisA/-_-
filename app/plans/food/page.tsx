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
            <p className="text-lg text-gray-600">パンケーキとわらび餅ドリンクの美味しい組み合わせ</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                ふわふわのパンケーキと、もちもち食感が楽しいわらび餅ドリンクを販売します。
                パンケーキは焼きたてをご提供し、わらび餅ドリンクは冷たくて美味しい和スイーツドリンクです。
                甘いものが好きな方にはたまらない組み合わせをお楽しみください！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">販売情報</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>販売時間:</strong> 12:00 - 16:00
                  </li>
                  <li>
                    <strong>場所:</strong> 1階カフェテリア
                  </li>
                  <li>
                    <strong>販売数:</strong> 各商品限定100個
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">メニュー・価格</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-3 text-orange-600">パンケーキ</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>プレーン</span>
                      <span className="font-medium">400円</span>
                    </div>
                    <div className="flex justify-between">
                      <span>チョコレート</span>
                      <span className="font-medium">450円</span>
                    </div>
                    <div className="flex justify-between">
                      <span>フルーツ</span>
                      <span className="font-medium">500円</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">※メープルシロップ、バター付き</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-3 text-green-600">わらび餅ドリンク</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>抹茶味</span>
                      <span className="font-medium">350円</span>
                    </div>
                    <div className="flex justify-between">
                      <span>黒蜜きなこ味</span>
                      <span className="font-medium">350円</span>
                    </div>
                    <div className="flex justify-between">
                      <span>いちご味</span>
                      <span className="font-medium">380円</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">※冷たいドリンクにもちもちわらび餅入り</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">セット割引</h3>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="font-medium text-yellow-800">パンケーキ + わらび餅ドリンクのセット注文で50円割引！</p>
                <p className="text-sm text-yellow-700 mt-1">※セット割引は各種組み合わせ可能です</p>
              </div>
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
