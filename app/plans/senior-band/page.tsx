import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SeniorBandPage() {
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
              src="/placeholder.svg?height=400&width=800&text=薬院老人会バンド演奏"
              alt="薬院老人会によるバンド演奏"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-3xl font-bold">薬院老人会によるバンド演奏</CardTitle>
            <p className="text-lg text-gray-600">地域の薬院老人会による心温まるバンド演奏</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                地域の薬院老人会の皆さんによる特別なバンド演奏です。
                長年音楽を愛し続けてきたメンバーたちが、懐かしの名曲から現代の楽曲まで、
                幅広いレパートリーで心温まる演奏をお届けします。世代を超えた音楽の素晴らしさを感じられる貴重な機会です。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">開催情報</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>開催時間:</strong> 16:00 - 17:00
                  </li>
                  <li>
                    <strong>場所:</strong> 中庭特設ステージ
                  </li>
                  <li>
                    <strong>参加費:</strong> 無料
                  </li>
                  <li>
                    <strong>対象:</strong> どなたでも観覧可能
                  </li>
                  <li>
                    <strong>座席:</strong> 椅子席50席（先着順）
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">バンドメンバー紹介</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-blue-600 mb-2">田中 一郎さん（75歳）</h4>
                  <p className="text-sm text-gray-600 mb-1">ボーカル・ギター</p>
                  <p className="text-xs text-gray-700">元音楽教師。50年以上のギター歴を持つベテランミュージシャン。</p>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-green-600 mb-2">佐藤 花子さん（68歳）</h4>
                  <p className="text-sm text-gray-600 mb-1">キーボード・コーラス</p>
                  <p className="text-xs text-gray-700">元ピアノ講師。クラシックからポップスまで幅広くこなす。</p>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-purple-600 mb-2">山田 次郎さん（72歳）</h4>
                  <p className="text-sm text-gray-600 mb-1">ベース</p>
                  <p className="text-xs text-gray-700">若い頃はプロを目指していた実力派。安定したリズムが自慢。</p>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-orange-600 mb-2">鈴木 三郎さん（70歳）</h4>
                  <p className="text-sm text-gray-600 mb-1">ドラムス</p>
                  <p className="text-xs text-gray-700">60歳からドラムを始めた遅咲きの才能。パワフルな演奏が魅力。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">演奏予定曲目</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-red-600 mb-2">第1部：懐かしの名曲（16:00-16:20）</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 津軽海峡冬景色（石川さゆり）</li>
                    <li>• 贈る言葉（海援隊）</li>
                    <li>• 青春（毛皮のマリーズ）</li>
                    <li>• 乾杯（長渕剛）</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-blue-600 mb-2">第2部：世代を超えた名曲（16:25-16:45）</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 上野駅（森高千里）</li>
                    <li>• 島唄（THE BOOM）</li>
                    <li>• 夜空ノムコウ（SMAP）</li>
                    <li>• 花（森山直太朗）</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-green-600 mb-2">第3部：みんなで歌おう（16:50-17:00）</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• ふるさと（文部省唱歌）</li>
                    <li>• 見上げてごらん夜の星を（坂本九）</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-2">※観客の皆さんも一緒に歌っていただけます</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">薬院老人会について</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm leading-relaxed">
                  薬院老人会は、薬院地域にお住まいの60歳以上の方々で構成される地域団体です。
                  健康維持活動、文化活動、地域交流活動を通じて、生きがいのある充実した生活を送ることを目的としています。
                  音楽活動は3年前から始まり、月2回の練習を重ねて今回の発表に至りました。
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">特別企画</h3>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-medium text-yellow-800 mb-2">世代交流セッション</h4>
                <p className="text-sm text-yellow-700">
                  演奏終了後、希望者は楽器に触れたり、メンバーの皆さんとお話しできる時間を設けています。
                  音楽を通じた世代を超えた交流をお楽しみください。
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">注意事項</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>屋外での開催のため、天候により中止・変更の場合があります</li>
                <li>椅子席は先着順です（立ち見も可能）</li>
                <li>演奏中の録音・録画は許可制です</li>
                <li>第3部では一緒に歌っていただけます</li>
                <li>演奏後の交流時間は自由参加です</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
