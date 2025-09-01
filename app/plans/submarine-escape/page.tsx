import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeftIcon, CalendarIcon, ClockIcon, MapPinIcon, UsersIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SubmarineEscapePage() {
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
              alt="爆破しうる潜水艇からの脱出"
              width={600}
              height={400}
              className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">脱出ゲーム</Badge>
                <Badge variant="secondary">謎解き</Badge>
                <Badge variant="secondary">チームワーク</Badge>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">爆破しうる潜水艇からの脱出</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                スリル満点の脱出ゲーム！故障した潜水艇から制限時間内に脱出せよ！
                チームワークと知恵を駆使して、様々な謎を解き明かしてください。
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
                  <span>10:00 - 18:00（1回30分）</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="mr-2 h-4 w-4 text-gray-500" />
                  <span>脱出ゲーム会場</span>
                </div>
                <div className="flex items-center">
                  <UsersIcon className="mr-2 h-4 w-4 text-gray-500" />
                  <span>参加費800円・要予約（3-6名チーム）</span>
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
                <h3>ゲーム概要</h3>
                <p>
                  あなたたちは深海調査中に事故に遭い、潜水艇に閉じ込められてしまいました。
                  酸素残量は30分。様々な謎を解いて脱出装置を作動させ、無事に海上へ脱出してください！
                </p>

                <h3>難易度レベル</h3>
                <ul>
                  <li>初級：小学生から参加可能</li>
                  <li>中級：中学生以上推奨</li>
                  <li>上級：大人向け高難易度</li>
                </ul>

                <h3>注意事項</h3>
                <ul>
                  <li>閉所恐怖症の方はご遠慮ください</li>
                  <li>暗い場所での活動があります</li>
                  <li>動きやすい服装でお越しください</li>
                  <li>小学生は保護者同伴必須</li>
                </ul>

                <h3>成功報酬</h3>
                <p>
                  制限時間内に脱出成功したチームには、特製の「脱出証明書」と 薬院キャンフェス限定グッズをプレゼント！
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
