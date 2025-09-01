import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function KaraokeContestPage() {
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
              src="/placeholder.svg?height=400&width=800&text=カラオケ大会"
              alt="カラオケ大会 ~ in 福岡薬院 ~"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-3xl font-bold">カラオケ大会 ~ in 福岡薬院 ~</CardTitle>
            <p className="text-lg text-gray-600">歌自慢の皆さん集合！福岡薬院初のカラオケ大会</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                福岡薬院キャンパス初開催となるカラオケ大会です！歌自慢の皆さんはもちろん、
                普段は人前で歌わない方も気軽に参加できるアットホームな雰囲気の大会です。
                様々な部門を設けているので、どなたでも楽しく参加していただけます。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">開催情報</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>開催時間:</strong> 15:00 - 17:00
                  </li>
                  <li>
                    <strong>場所:</strong> 体育館（特設ステージ）
                  </li>
                  <li>
                    <strong>参加費:</strong> 無料
                  </li>
                  <li>
                    <strong>エントリー:</strong> 当日受付（14:30〜）
                  </li>
                  <li>
                    <strong>定員:</strong> 先着30名
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">大会部門</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-600 mb-2">一般部門</h4>
                  <p className="text-sm text-gray-700">ジャンル問わず、お好きな楽曲で参加できる部門です。</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-600 mb-2">アニソン部門</h4>
                  <p className="text-sm text-gray-700">アニメソング限定の部門。懐かしの名曲から最新曲まで！</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-600 mb-2">デュエット部門</h4>
                  <p className="text-sm text-gray-700">2人組での参加部門。息の合ったハーモニーを披露しよう！</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-600 mb-2">チャレンジ部門</h4>
                  <p className="text-sm text-gray-700">初心者歓迎！勇気を出して挑戦する方を応援する部門です。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">タイムスケジュール</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center bg-white p-3 rounded-lg border">
                  <span className="font-medium">受付・リハーサル</span>
                  <span className="text-sm text-gray-600">14:30 - 15:00</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded-lg border">
                  <span className="font-medium">開会式・ルール説明</span>
                  <span className="text-sm text-gray-600">15:00 - 15:10</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded-lg border">
                  <span className="font-medium">予選ラウンド</span>
                  <span className="text-sm text-gray-600">15:10 - 16:20</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded-lg border">
                  <span className="font-medium">決勝ラウンド</span>
                  <span className="text-sm text-gray-600">16:30 - 16:50</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded-lg border">
                  <span className="font-medium">結果発表・表彰式</span>
                  <span className="text-sm text-gray-600">16:50 - 17:00</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">賞品・特典</h3>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-yellow-800">🏆 各部門優勝者</span>
                    <span className="text-sm text-yellow-700">図書カード3,000円分</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-yellow-800">🥈 各部門準優勝者</span>
                    <span className="text-sm text-yellow-700">図書カード1,000円分</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-yellow-800">🎵 参加者全員</span>
                    <span className="text-sm text-yellow-700">オリジナル缶バッジ</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-yellow-800">👏 観客投票賞</span>
                    <span className="text-sm text-yellow-700">特別賞品</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">参加方法・注意事項</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>当日14:30から体育館入口で受付開始（先着30名）</li>
                <li>1人1曲まで（デュエット部門は2人で1曲）</li>
                <li>楽曲は事前に用意されたリストから選択</li>
                <li>歌詞カードの持ち込み可能</li>
                <li>観客の皆さんも投票に参加できます</li>
                <li>録音・録画は主催者のみ許可</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
