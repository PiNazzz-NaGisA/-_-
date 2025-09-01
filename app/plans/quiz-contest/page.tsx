import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon, CalendarIcon, ClockIcon, MapPinIcon, UsersIcon, BrainIcon, TrophyIcon } from "lucide-react"
import Link from "next/link"

export default function QuizContestPage() {
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
            <div className="h-64 bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white text-center">第1回福岡薬院クイズ王決定戦</h1>
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
                      <span>10:30 - 12:00</span>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="mr-2 h-4 w-4 text-gray-500" />
                      <span>クイズ会場（3階）</span>
                    </div>
                    <div className="flex items-center">
                      <UsersIcon className="mr-2 h-4 w-4 text-gray-500" />
                      <span>参加費：300円（観覧無料）</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>企画概要</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      記念すべき第1回となる福岡薬院クイズ王決定戦！
                      薬院に関する問題から一般常識まで、様々なジャンルの問題に挑戦。
                      知識自慢の皆様、ぜひご参加ください！
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-bold mb-4">大会形式</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <BrainIcon className="mr-2 h-5 w-5 text-yellow-500" />
                          予選ラウンド
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 筆記クイズ（20問）</li>
                          <li>• 制限時間：15分</li>
                          <li>• 上位8名が決勝進出</li>
                          <li>• 同点の場合はサドンデス</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <TrophyIcon className="mr-2 h-5 w-5 text-gold-500" />
                          決勝ラウンド
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 早押しクイズ</li>
                          <li>• 8名によるトーナメント</li>
                          <li>• 各対戦5問先取</li>
                          <li>• 優勝者がクイズ王に！</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">出題ジャンル</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">薬院・福岡</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 薬院の歴史</li>
                          <li>• 地域の名所</li>
                          <li>• 福岡の文化</li>
                          <li>• 方言・グルメ</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">一般常識</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 時事問題</li>
                          <li>• 歴史・地理</li>
                          <li>• 科学・技術</li>
                          <li>• 政治・経済</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">エンタメ</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 映画・ドラマ</li>
                          <li>• 音楽・芸能</li>
                          <li>• スポーツ</li>
                          <li>• アニメ・漫画</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">賞品・特典</h2>
                  <div className="space-y-4">
                    <Card className="border-yellow-400 border-2">
                      <CardHeader>
                        <CardTitle className="text-xl flex items-center text-yellow-600">
                          <TrophyIcon className="mr-2 h-6 w-6" />
                          優勝（クイズ王）
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-gray-700 space-y-1">
                          <li>• 薬院商店街お買い物券 10,000円分</li>
                          <li>• クイズ王認定証</li>
                          <li>• オリジナルトロフィー</li>
                          <li>• 次回大会シード権</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">準優勝</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• お買い物券 5,000円分</li>
                            <li>• 準優勝メダル</li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">3位</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• お買い物券 3,000円分</li>
                            <li>• 3位メダル</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">参加賞</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">オリジナルクリアファイル＋薬院マップ</p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">タイムスケジュール</h2>
                  <div className="space-y-3">
                    <Card>
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-center">
                          <span className="font-bold">10:00-10:25</span>
                          <span>受付・説明</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-center">
                          <span className="font-bold">10:30-10:50</span>
                          <span>予選ラウンド（筆記）</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-center">
                          <span className="font-bold">10:50-11:00</span>
                          <span>採点・決勝進出者発表</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-center">
                          <span className="font-bold">11:00-11:45</span>
                          <span>決勝ラウンド（早押し）</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-center">
                          <span className="font-bold">11:45-12:00</span>
                          <span>表彰式・閉会式</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">参加方法</h2>
                  <Card>
                    <CardContent className="pt-6">
                      <ul className="space-y-2 text-gray-700">
                        <li>• 当日受付（10:00-10:25）</li>
                        <li>• 参加費：300円</li>
                        <li>• 定員：32名（先着順）</li>
                        <li>• 年齢制限なし（小学生以下は保護者同伴）</li>
                        <li>• 筆記用具をご持参ください</li>
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
