import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, MapPin, Clock, Users } from "lucide-react"

export default function QuizContestPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/#plans">
            <Button variant="outline" className="mb-4 bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              企画一覧に戻る
            </Button>
          </Link>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">第1回福岡薬院クイズ王決定戦</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=600&text=クイズ王決定戦"
                alt="クイズ王決定戦"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>メイン会場</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-600" />
                <span>16:00-17:30</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-purple-600" />
                <span>チーム戦（3-4名）</span>
              </div>
            </div>

            <div className="prose max-w-none">
              <h3>企画概要</h3>
              <p>
                記念すべき第1回福岡薬院クイズ王決定戦を開催！
                知識自慢の皆さん、チームを組んで福岡薬院の初代クイズ王を目指しましょう。
              </p>

              <h3>競技形式</h3>
              <ul>
                <li>
                  <strong>予選ラウンド：</strong>筆記クイズ（一般常識・時事問題）
                </li>
                <li>
                  <strong>準決勝：</strong>早押しクイズ（学術・文化・スポーツ）
                </li>
                <li>
                  <strong>決勝戦：</strong>福岡・薬院に関する特別問題
                </li>
                <li>
                  <strong>特別ラウンド：</strong>画像・音楽クイズ
                </li>
              </ul>

              <h3>出題ジャンル</h3>
              <ul>
                <li>一般常識・時事問題</li>
                <li>歴史・地理</li>
                <li>科学・医学</li>
                <li>文学・芸術</li>
                <li>スポーツ・エンターテイメント</li>
                <li>福岡・薬院ローカル問題</li>
              </ul>

              <h3>賞品</h3>
              <ul>
                <li>
                  <strong>優勝チーム：</strong>図書カード5,000円分×人数分 + トロフィー
                </li>
                <li>
                  <strong>準優勝チーム：</strong>図書カード3,000円分×人数分
                </li>
                <li>
                  <strong>第3位チーム：</strong>図書カード1,000円分×人数分
                </li>
                <li>
                  <strong>参加賞：</strong>全参加者にオリジナル文具セット
                </li>
              </ul>

              <h3>参加方法</h3>
              <p>
                3-4名でチームを組んでご参加ください。当日受付も可能ですが、
                事前にチーム名を決めておくとスムーズです。最大12チームまで参加可能。
              </p>

              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>特典：</strong>優勝チームには「福岡薬院クイズ王」の称号と 記念プレートを贈呈します！
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
