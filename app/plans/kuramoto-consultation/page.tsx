import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon, CalendarIcon, ClockIcon, MapPinIcon, UsersIcon, HeartIcon } from "lucide-react"
import Link from "next/link"

export default function KuramotoConsultationPage() {
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
            <div className="h-64 bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white text-center">倉本さんのお悩み相談室</h1>
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
                      <span>11:00 - 16:00</span>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="mr-2 h-4 w-4 text-gray-500" />
                      <span>相談室（2階）</span>
                    </div>
                    <div className="flex items-center">
                      <UsersIcon className="mr-2 h-4 w-4 text-gray-500" />
                      <span>参加費無料・予約不要</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>企画概要</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      人生経験豊富な倉本さんが、皆様のお悩みに親身になってお答えします。
                      恋愛、仕事、人間関係など、どんなことでもお気軽にご相談ください。
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-bold mb-4">相談内容例</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <HeartIcon className="mr-2 h-5 w-5 text-red-500" />
                          恋愛相談
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">片思い、失恋、結婚など恋愛に関するお悩み</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">仕事・キャリア</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">転職、昇進、職場の人間関係など</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">家族・友人関係</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">親子関係、友人とのトラブル、コミュニケーション</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">将来への不安</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">進路選択、人生設計、夢の実現方法</p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">倉本さんからのメッセージ</h2>
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-gray-700 leading-relaxed">
                        人生には様々な悩みがつきものです。一人で抱え込まず、誰かに話すことで心が軽くなることもあります。
                        私の経験が少しでも皆様のお役に立てれば幸いです。どんな小さなことでも、お気軽にお話しください。
                        一緒に解決の糸口を見つけましょう。
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">ご利用方法</h2>
                  <Card>
                    <CardContent className="pt-6">
                      <ul className="space-y-2 text-gray-700">
                        <li>• 予約は不要です。開催時間内にお越しください</li>
                        <li>• 相談時間は一人約15-20分程度です</li>
                        <li>• 混雑時はお待ちいただく場合があります</li>
                        <li>• プライバシーは厳守いたします</li>
                        <li>• 相談内容に関する秘密は絶対に守ります</li>
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
