import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, MapPin, Clock, Users } from "lucide-react"

export default function KaraokeContestPage() {
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
            <CardTitle className="text-3xl font-bold text-center">カラオケ大会 ~ in 福岡薬院 ~</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=600&text=カラオケ大会"
                alt="カラオケ大会"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>ステージエリア</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-600" />
                <span>15:30-17:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-purple-600" />
                <span>参加者募集中</span>
              </div>
            </div>

            <div className="prose max-w-none">
              <h3>企画概要</h3>
              <p>
                福岡薬院キャンパス初のカラオケ大会を開催します！
                歌自慢の皆さん、この機会にぜひご参加ください。観覧のみの参加も大歓迎です。
              </p>

              <h3>参加部門</h3>
              <ul>
                <li>
                  <strong>ソロ部門：</strong>一人で歌唱（制限時間：4分）
                </li>
                <li>
                  <strong>デュエット部門：</strong>二人で歌唱（制限時間：5分）
                </li>
                <li>
                  <strong>グループ部門：</strong>3人以上で歌唱（制限時間：6分）
                </li>
                <li>
                  <strong>フリー部門：</strong>楽器演奏もOK（制限時間：5分）
                </li>
              </ul>

              <h3>賞品・表彰</h3>
              <ul>
                <li>最優秀賞（各部門1組）：図書カード3,000円分</li>
                <li>優秀賞（各部門1組）：図書カード1,000円分</li>
                <li>観客賞（1組）：特別記念品</li>
                <li>参加賞：全参加者にオリジナルグッズプレゼント</li>
              </ul>

              <h3>参加方法</h3>
              <p>
                当日12:00から受付開始。先着20組まで参加可能です。
                楽曲は当日発表される課題曲リストから選択、または自由曲でもOKです。
              </p>

              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="text-sm text-pink-800">
                  <strong>注意事項：</strong>著作権の関係で、一部楽曲は歌唱できない場合があります。
                  詳細は当日スタッフにお尋ねください。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
