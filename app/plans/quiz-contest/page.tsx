import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function QuizContestPage() {
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
              src="/placeholder.svg?height=400&width=800&text=クイズ王決定戦"
              alt="第1回福岡薬院クイズ王決定戦"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-3xl font-bold">第1回福岡薬院クイズ王決定戦</CardTitle>
            <p className="text-lg text-gray-600">知識自慢の皆さん、チームを組んで福岡薬院の初代クイズ王を目指そう！</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                福岡薬院キャンパス初開催となるクイズ大会です！ぜひお気軽にご参加ください！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">開催情報</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>開催時間:</strong> 13:30 - 15:30
                  </li>
                  <li>
                    <strong>場所:</strong> 大講義室
                  </li>
                  <li>
                    <strong>参加費:</strong> 無料
                  </li>
                  <li>
                    <strong>チーム編成:</strong> 3〜4人1組
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">こだわりポイント！</h3>
              <p className="text-gray-700">
                一般常識から専門知識、地域に関する問題まで幅広いジャンルの問題を出題します。チームワークと知識で福岡薬院初代クイズ王の座を目指しましょう！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">注意事項</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>3〜4人でチームを組んでご参加ください</li>
                <li>チーム名を事前に決めておいてください</li>
                <li>事前申込推奨（当日受付も可能ですが定員に達した場合は締切）</li>
                <li>筆記用具は各自でご持参ください</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
