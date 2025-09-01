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
                福岡薬院キャンパス初開催となるクイズ大会です！一般常識から専門知識、
                地域に関する問題まで幅広いジャンルの問題を出題します。
                3〜4人でチームを組んで参加し、チームワークと知識で福岡薬院初代クイズ王の座を目指しましょう！
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
                  <li>
                    <strong>エントリー:</strong> 事前申込制（当日受付も可）
                  </li>
                  <li>
                    <strong>定員:</strong> 最大16チーム
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">大会形式</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-600 mb-2">予選ラウンド（筆記問題）</h4>
                  <p className="text-sm text-gray-700 mb-2">全チーム参加の筆記問題。上位8チームが準決勝に進出。</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• 問題数: 20問</li>
                    <li>• 制限時間: 30分</li>
                    <li>• ジャンル: 一般常識、時事問題、地域問題</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-600 mb-2">準決勝（早押し問題）</h4>
                  <p className="text-sm text-gray-700 mb-2">8チームによる早押しクイズ。上位4チームが決勝進出。</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• 形式: 早押しクイズ</li>
                    <li>• 問題数: 最大15問</li>
                    <li>• ジャンル: 学術、エンタメ、スポーツ</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-600 mb-2">決勝（総合問題）</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    4チームによる最終決戦。様々な形式の問題で真の王者を決定。
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• 形式: 早押し + 筆記 + 特別問題</li>
                    <li>• 問題数: 20問程度</li>
                    <li>• ジャンル: 総合問題</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">出題ジャンル</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="bg-purple-50 p-3 rounded-lg text-center">
                  <p className="font-medium text-purple-700">一般常識</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <p className="font-medium text-blue-700">時事問題</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <p className="font-medium text-green-700">地理・歴史</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg text-center">
                  <p className="font-medium text-yellow-700">科学・技術</p>
                </div>
                <div className="bg-pink-50 p-3 rounded-lg text-center">
                  <p className="font-medium text-pink-700">エンタメ</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg text-center">
                  <p className="font-medium text-orange-700">スポーツ</p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg text-center">
                  <p className="font-medium text-red-700">文学・芸術</p>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg text-center">
                  <p className="font-medium text-indigo-700">福岡・薬院</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <p className="font-medium text-gray-700">その他</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">賞品</h3>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-yellow-800">🏆 優勝チーム（4名）</span>
                    <span className="text-sm text-yellow-700">図書カード5,000円分 + トロフィー</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-yellow-800">🥈 準優勝チーム（4名）</span>
                    <span className="text-sm text-yellow-700">図書カード3,000円分</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-yellow-800">🥉 第3位チーム（4名）</span>
                    <span className="text-sm text-yellow-700">図書カード1,000円分</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-yellow-800">🎯 ベストアンサー賞</span>
                    <span className="text-sm text-yellow-700">特別賞品</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">参加方法・注意事項</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>3〜4人でチームを組んでご参加ください</li>
                <li>チーム名を事前に決めておいてください</li>
                <li>事前申込推奨（当日受付も可能ですが定員に達した場合は締切）</li>
                <li>筆記用具は各自でご持参ください</li>
                <li>携帯電話・スマートフォンの使用は禁止</li>
                <li>観戦のみの参加も大歓迎です</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
