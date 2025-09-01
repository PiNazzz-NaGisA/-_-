import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon, CalendarIcon, ClockIcon, MapPinIcon, UsersIcon } from "lucide-react"
import Link from "next/link"

export default function NEDFukuokaPage() {
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
            <div className="h-64 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white text-center">NED in 福岡薬院万博2025</h1>
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
                      <span>10:00 - 17:00</span>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="mr-2 h-4 w-4 text-gray-500" />
                      <span>メインステージ</span>
                    </div>
                    <div className="flex items-center">
                      <UsersIcon className="mr-2 h-4 w-4 text-gray-500" />
                      <span>参加費無料</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>企画概要</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      福岡薬院万博2025の特別企画として開催される、地域密着型のイベントです。
                      様々なパフォーマンスや展示を通じて、薬院の魅力を発信します。
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-bold mb-4">プログラム内容</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">地域紹介コーナー</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">薬院の歴史や文化、おすすめスポットを紹介</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">パフォーマンスショー</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">地元アーティストによる音楽・ダンスパフォーマンス</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">体験コーナー</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">薬院の伝統工芸や文化を体験できるワークショップ</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">交流イベント</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">来場者同士の交流を深めるゲームやアクティビティ</p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">企画班からのメッセージ</h2>
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-gray-700 leading-relaxed">
                        「NED in
                        福岡薬院万博2025」は、薬院の魅力を再発見し、地域の絆を深めることを目的とした特別企画です。
                        地域の皆様と一緒に、薬院の未来を考え、新しいつながりを築いていきたいと思います。
                        ぜひお気軽にご参加ください！
                      </p>
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
