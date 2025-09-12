import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, MapPin, Users, Utensils } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FoodPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          企画一覧に戻る
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
            <Image src="/placeholder.svg?height=400&width=800" alt="もちパンカフェ" fill className="object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white text-center">もちパンカフェ</h1>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-700">企画について</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    もちもちの食感が自慢のパンと、香り高いコーヒーを楽しめるカフェ企画です。
                    手作りのもちパンは、外はカリッと中はもちもちの絶妙な食感で、 一度食べたら忘れられない美味しさです。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    コーヒーは厳選された豆を使用し、一杯一杯丁寧にドリップしています。
                    もちパンとの相性も抜群で、ほっと一息つける空間を提供します。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    カフェスペースでは、友達や家族とゆっくりとした時間を過ごすことができます。
                    キャンパスフェスティバルの合間の休憩にもぜひお立ち寄りください。
                  </p>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-700">メニュー</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-orange-600">もちパン</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• プレーンもちパン - 200円</li>
                        <li>• あんこもちパン - 250円</li>
                        <li>• チーズもちパン - 280円</li>
                        <li>• チョコもちパン - 260円</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-orange-600">ドリンク</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• ブレンドコーヒー - 300円</li>
                        <li>• カフェラテ - 350円</li>
                        <li>• 紅茶 - 250円</li>
                        <li>• オレンジジュース - 200円</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-orange-700">開催情報</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="font-medium">開催時間</p>
                      <p className="text-sm text-gray-600">10:00 - 16:00</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="font-medium">場所</p>
                      <p className="text-sm text-gray-600">学生食堂前テラス</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="font-medium">主催</p>
                      <p className="text-sm text-gray-600">料理研究会</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Utensils className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="font-medium">カテゴリ</p>
                      <p className="text-sm text-gray-600">物販・フード</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-orange-700">タグ</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      物販
                    </Badge>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      フード
                    </Badge>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      ドリンク
                    </Badge>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      カフェ
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-orange-700">注意事項</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 売り切れ次第終了となります</li>
                    <li>• アレルギーをお持ちの方はスタッフにお声かけください</li>
                    <li>• 座席数に限りがあります</li>
                    <li>• 現金のみの対応となります</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button asChild className="bg-orange-600 hover:bg-orange-700">
              <Link href="/">他の企画も見る</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
