import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, MapPin, Clock, Users } from "lucide-react"

export default function SeniorBandPage() {
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
            <CardTitle className="text-3xl font-bold text-center">薬院老人会によるバンド演奏</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=600&text=薬院老人会バンド演奏"
                alt="薬院老人会バンド演奏"
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
                <span>13:30-14:30</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-purple-600" />
                <span>観覧自由</span>
              </div>
            </div>

            <div className="prose max-w-none">
              <h3>企画概要</h3>
              <p>
                地域の薬院老人会の皆さんが結成したバンド「薬院シルバーサウンズ」による
                特別演奏会を開催します。年齢を重ねても音楽への情熱は衰えない、
                素晴らしいパフォーマンスをお楽しみください。
              </p>

              <h3>演奏予定曲</h3>
              <ul>
                <li>「津軽海峡冬景色」- 石川さゆり</li>
                <li>「贈る言葉」- 海援隊</li>
                <li>「乾杯」- 乾杯</li>
                <li>「青春」- 毛皮のマリーズ</li>
                <li>「上を向いて歩こう」- 坂本九</li>
                <li>「見上げてごらん夜の星を」- 坂本九</li>
                <li>オリジナル楽曲「薬院の四季」</li>
              </ul>

              <h3>バンドメンバー紹介</h3>
              <ul>
                <li>
                  <strong>田中さん（78歳）：</strong>ボーカル・ギター（元音楽教師）
                </li>
                <li>
                  <strong>佐藤さん（72歳）：</strong>ベース（元ジャズ喫茶店主）
                </li>
                <li>
                  <strong>山田さん（75歳）：</strong>ドラムス（元会社員、趣味歴50年）
                </li>
                <li>
                  <strong>鈴木さん（70歳）：</strong>キーボード（元ピアノ講師）
                </li>
                <li>
                  <strong>高橋さん（74歳）：</strong>ハーモニカ・コーラス（元合唱団員）
                </li>
              </ul>

              <h3>見どころ</h3>
              <p>
                長年培った音楽技術と人生経験が織りなす、心に響く演奏をお届けします。
                世代を超えて愛される名曲の数々を、温かみのある演奏でお楽しみください。
                演奏後には、メンバーとの交流タイムも予定しています。
              </p>

              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-sm text-orange-800">
                  <strong>特別企画：</strong>演奏後に観客の皆さんと一緒に「ふるさと」を
                  合唱する時間を設けます。ぜひご一緒にお歌いください！
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
