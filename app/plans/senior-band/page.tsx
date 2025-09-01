import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon, CalendarIcon, ClockIcon, MapPinIcon, UsersIcon, MusicIcon, HeartIcon } from "lucide-react"
import Link from "next/link"

export default function SeniorBandPage() {
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
            <div className="h-64 bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white text-center">薬院老人会によるバンド演奏</h1>
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
                      <span>14:00 - 15:30</span>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="mr-2 h-4 w-4 text-gray-500" />
                      <span>野外ステージ</span>
                    </div>
                    <div className="flex items-center">
                      <UsersIcon className="mr-2 h-4 w-4 text-gray-500" />
                      <span>観覧無料</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>企画概要</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      薬院老人会の皆様による心温まるバンド演奏をお楽しみください。
                      昭和の名曲から現代の楽曲まで、幅広いレパートリーで 世代を超えた音楽の魅力をお届けします。
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-bold mb-4">バンドメンバー紹介</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">「薬院シルバーロッカーズ」</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• ボーカル：田中さん（75歳）</li>
                          <li>• ギター：佐藤さん（72歳）</li>
                          <li>• ベース：鈴木さん（68歳）</li>
                          <li>• ドラム：山田さん（70歳）</li>
                          <li>• キーボード：高橋さん（73歳）</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">バンド結成秘話</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">
                          2020年に老人会の音楽好きメンバーが集まって結成。
                          「年齢は関係ない、音楽に国境はない」をモットーに、 週2回の練習を重ねています。
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">演奏予定曲目</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <MusicIcon className="mr-2 h-5 w-5 text-blue-500" />
                          第1部（14:00-14:30）
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>1. 津軽海峡冬景色</li>
                          <li>2. 贈る言葉</li>
                          <li>3. 青春</li>
                          <li>4. 乾杯</li>
                          <li>5. 昴-すばる-</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <MusicIcon className="mr-2 h-5 w-5 text-purple-500" />
                          第2部（14:45-15:15）
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>1. 上を向いて歩こう</li>
                          <li>2. 見上げてごらん夜の星を</li>
                          <li>3. 世界に一つだけの花</li>
                          <li>4. 涙そうそう</li>
                          <li>5. ふるさと（合唱）</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <Card className="mt-4">
                    <CardHeader>
                      <CardTitle className="text-lg">アンコール（15:15-15:30）</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        観客の皆様からのリクエストにお応えします！ 知っている曲があれば一緒に歌いましょう♪
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">見どころ・聞きどころ</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <HeartIcon className="mr-2 h-5 w-5 text-red-500" />
                          心に響く歌声
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">
                          人生経験豊富な皆様の歌声には、若い世代にはない深みと温かさがあります。
                          特に田中さんのボーカルは圧巻です。
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">熟練の演奏技術</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">
                          若い頃から楽器を続けている方、定年後に始めた方など、
                          それぞれの音楽人生が織りなすハーモニーをお楽しみください。
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">世代を超えた交流</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">
                          昭和の名曲から現代の楽曲まで、幅広い世代が楽しめる選曲で、
                          会場全体が一体となって盛り上がります。
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">感動のフィナーレ</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">
                          最後の「ふるさと」では、観客の皆様も一緒に合唱していただきます。
                          きっと心温まるひとときになるでしょう。
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">メンバーからのメッセージ</h2>
                  <Card>
                    <CardContent className="pt-6">
                      <blockquote className="text-gray-700 leading-relaxed italic border-l-4 border-blue-500 pl-4">
                        「年を重ねても音楽への情熱は変わりません。むしろ、人生経験を重ねた今だからこそ、
                        歌詞の意味や音楽の素晴らしさを深く理解できるようになりました。
                        私たちの演奏を通じて、音楽の持つ力、世代を超えたつながりの大切さを
                        皆様に感じていただければ幸いです。一緒に素敵な時間を過ごしましょう！」
                      </blockquote>
                      <p className="text-right mt-4 text-gray-600">- 薬院シルバーロッカーズ一同</p>
                    </CardContent>
                  </Card>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">お願い</h2>
                  <Card>
                    <CardContent className="pt-6">
                      <ul className="space-y-2 text-gray-700">
                        <li>• 野外での開催のため、雨天時は屋内に変更となる場合があります</li>
                        <li>• 演奏中の録音・録画はご遠慮ください</li>
                        <li>• 大きな声での合唱は大歓迎です！</li>
                        <li>• 椅子の数に限りがありますので、お早めにお越しください</li>
                        <li>• 演奏後、メンバーとの記念撮影も可能です</li>
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
