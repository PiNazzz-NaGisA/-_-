import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeftIcon, CalendarIcon, ClockIcon, MapPinIcon, UsersIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SeniorBandPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/#plans">
            <Button variant="outline" className="mb-4 bg-transparent">
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              企画一覧に戻る
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="薬院老人会によるバンド演奏"
              width={600}
              height={400}
              className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">音楽</Badge>
                <Badge variant="secondary">バンド</Badge>
                <Badge variant="secondary">世代交流</Badge>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">薬院老人会によるバンド演奏</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                薬院地域の老人会メンバーによる心温まるバンド演奏です。
                昭和の名曲から現代の楽曲まで、幅広いレパートリーでお楽しみいただけます。
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CalendarIcon className="mr-2 h-5 w-5" />
                  開催情報
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <ClockIcon className="mr-2 h-4 w-4 text-gray-500" />
                  <span>12:00 - 13:00</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="mr-2 h-4 w-4 text-gray-500" />
                  <span>野外ステージ</span>
                </div>
                <div className="flex items-center">
                  <UsersIcon className="mr-2 h-4 w-4 text-gray-500" />
                  <span>観覧無料</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>企画詳細</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <h3>演奏予定曲</h3>
                <ul>
                  <li>津軽海峡冬景色</li>
                  <li>青春</li>
                  <li>贈る言葉</li>
                  <li>乾杯</li>
                  <li>上を向いて歩こう</li>
                  <li>その他リクエスト曲</li>
                </ul>

                <h3>バンドメンバー</h3>
                <p>
                  薬院老人会の音楽愛好家の皆様が結成したバンドです。
                  平均年齢70歳を超えるメンバーが、若々しい演奏をお届けします。
                </p>

                <h3>特別企画</h3>
                <p>演奏中に観客の皆様との合唱タイムもご用意しています。 世代を超えた音楽の楽しさを共有しましょう！</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
