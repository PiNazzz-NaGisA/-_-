import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, MapPin, Clock, Users } from "lucide-react"

export default function SubmarineEscapePage() {
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
            <CardTitle className="text-3xl font-bold text-center">爆破しうる潜水艇からの脱出</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=600&text=潜水艇脱出ゲーム"
                alt="潜水艇脱出ゲーム"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>特設会場（1F）</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-600" />
                <span>12:00-17:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-purple-600" />
                <span>4-6名チーム</span>
              </div>
            </div>

            <div className="prose max-w-none">
              <h3>企画概要</h3>
              <p>
                深海に沈んだ潜水艇で目を覚ましたあなたたち。酸素残量は60分、
                そして潜水艇には爆破装置が仕掛けられている...！ チームワークと知恵を駆使して、制限時間内に脱出せよ！
              </p>

              <h3>ゲーム内容</h3>
              <ul>
                <li>
                  <strong>制限時間：</strong>60分
                </li>
                <li>
                  <strong>難易度：</strong>★★★★☆（上級者向け）
                </li>
                <li>
                  <strong>ジャンル：</strong>謎解き・パズル・チームワーク
                </li>
                <li>
                  <strong>ストーリー：</strong>海底探査中の事故からの脱出劇
                </li>
              </ul>

              <h3>脱出の流れ</h3>
              <ol>
                <li>
                  <strong>状況把握：</strong>潜水艇内の現状を調査
                </li>
                <li>
                  <strong>謎解きフェーズ：</strong>各種パズルと暗号を解読
                </li>
                <li>
                  <strong>修理作業：</strong>損傷した機器の復旧
                </li>
                <li>
                  <strong>最終脱出：</strong>浮上システムの起動
                </li>
              </ol>

              <h3>特徴・見どころ</h3>
              <ul>
                <li>本格的な潜水艇セットで臨場感抜群</li>
                <li>科学的知識も必要な高難度謎解き</li>
                <li>チーム全員の協力が不可欠</li>
                <li>複数のエンディングが存在</li>
                <li>脱出成功率は約30%の高難度設定</li>
              </ul>

              <h3>参加方法・料金</h3>
              <p>
                1回あたり4-6名のチームで参加。参加費は1人500円です。 当日受付も可能ですが、事前予約がおすすめです。
                所要時間は説明込みで約90分を予定しています。
              </p>

              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-sm text-red-800">
                  <strong>注意事項：</strong>閉所恐怖症の方、心臓の弱い方はご参加をお控えください。
                  また、暗い場所や大きな音が苦手な方もご注意ください。
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <p className="text-sm text-blue-800">
                  <strong>脱出成功特典：</strong>見事脱出に成功したチームには、
                  特製「潜水艇脱出証明書」と記念品をプレゼント！
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
