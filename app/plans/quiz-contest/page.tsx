import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeftIcon, CalendarIcon, ClockIcon, MapPinIcon, UsersIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function QuizContestPage() {
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
              alt="第1回福岡薬院クイズ王決定戦"
              width={600}
              height={400}
              className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">クイズ</Badge>
                <Badge variant="secondary">大会</Badge>
                <Badge variant="secondary">知識</Badge>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">第1回福岡薬院クイズ王決定戦</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                記念すべき第1回目となる福岡薬院クイズ王決定戦！
                一般常識から薬院の歴史まで、幅広いジャンルの問題で知識を競い合います。
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
                  <span>15:00 - 17:00</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="mr-2 h-4 w-4 text-gray-500" />
                  <span>クイズ会場</span>
                </div>
                <div className="flex items-center">
                  <UsersIcon className="mr-2 h-4 w-4 text-gray-500" />
                  <span>参加費300円・当日受付可</span>
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
                <h3>出題ジャンル</h3>
                <ul>
                  <li>一般常識・時事問題</li>
                  <li>福岡・薬院の歴史と文化</li>
                  <li>スポーツ・エンターテイメント</li>
                  <li>科学・技術</li>
                  <li>グルメ・料理</li>
                </ul>

                <h3>大会形式</h3>
                <p>
                  予選：筆記問題（30問）
                  <br />
                  準決勝：早押しクイズ（上位8名）
                  <br />
                  決勝：総合問題（上位3名）
                </p>

                <h3>賞品</h3>
                <ul>
                  <li>クイズ王：図書カード10,000円分 + トロフィー</li>
                  <li>準優勝：図書カード5,000円分</li>
                  <li>3位：図書カード3,000円分</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
