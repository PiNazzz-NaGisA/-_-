import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon, CalendarIcon, ClockIcon, MapPinIcon, UsersIcon, MusicIcon, TrophyIcon } from "lucide-react"
import Link from "next/link"

export default function KaraokeContestPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/">
            <Button variant="outline" className="mb-4 bg-transparent">
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              企画一覧に戻る
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white text-center">カラオケ大会 ~ in 福岡薬院 ~</h1>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CalendarIcon className="mr-2 h-5 w-5" />
                      開催情報
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center">
                      <ClockIcon className="mr-2 h-4 w-4 text-gray-500" />
                      <span>15:00 - 17:00</span>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="mr-2 h-4 w-4 text-gray-500" />
                      <span>メインステージ</span>
                    </div>
                    <div className="flex items-center">
                      <UsersIcon className="mr-2 h-4 w-4 text-gray-500" />
                      <span>参加費：500円（観覧無料）</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>企画概要</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      薬院の地で開催される熱いカラオケバトル！ 年齢・性別問わず、どなたでも参加できます。
                      自慢の歌声を披露して、薬院カラオケ王を目指しましょう！
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-bold mb-4">大会概要</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <MusicIcon className="mr-2 h-5 w-5 text-pink-500" />
                          参加方法
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 当日受付（14:30-14:55）</li>
                          <li>• 参加費：500円</li>
                          <li>• 1人1曲まで</li>
                          <li>• 楽曲は当日選択</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <TrophyIcon className="mr-2 h-5 w-5 text-yellow-500" />
                          賞品
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 優勝：薬院商店街お食事券 5,000円分</li>
                          <li>• 準優勝：カラオケ無料券 3,000円分</li>
                          <li>• 3位：薬院グルメセット</li>
                          <li>• 参加賞：オリジナルタオル</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">審査基準</h2>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <h3 className="font-bold text-lg mb-2">歌唱力</h3>
                          <p className="text-sm text-gray-600">音程・リズム・表現力</p>
                          <p className="text-2xl font-bold text-blue-500">40%</p>
                        </div>
                        <div className="text-center">
                          <h3 className="font-bold text-lg mb-2">パフォーマンス</h3>
                          <p className="text-sm text-gray-600">ステージング・魅力</p>
                          <p className="text-2xl font-bold text-green-500">30%</p>
                        </div>
                        <div className="text-center">
                          <h3 className="font-bold text-lg mb-2">観客の反応</h3>
                          <p className="text-sm text-gray-600">盛り上がり・感動</p>
                          <p className="text-2xl font-bold text-red-500">30%</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">タイムスケジュール</h2>
                  <div className="space-y-3">
                    <Card>
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-center">
                          <span className="font-bold">14:30-14:55</span>
                          <span>参加受付・楽曲選択</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-center">
                          <span className="font-bold">15:00-15:10</span>
                          <span>開会式・ルール説明</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-center">
                          <span className="font-bold">15:10-16:30</span>
                          <span>カラオケ大会本戦</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-center">
                          <span className="font-bold">16:30-16:45</span>
                          <span>審査・結果発表</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-center">
                          <span className="font-bold">16:45-17:00</span>
                          <span>表彰式・閉会式</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">注意事項</h2>
                  <Card>
                    <CardContent className="pt-6">
                      <ul className="space-y-2 text-gray-700">
                        <li>• 楽曲は著作権フリーまたは許可済みのもののみ</li>
                        <li>• 不適切な歌詞の楽曲は選択できません</li>
                        <li>• 参加者多数の場合は抽選となる場合があります</li>
                        <li>• 機材の都障により楽曲が選択できない場合があります</li>
                        <li>• 審査結果に関するお問い合わせはお受けできません</li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
