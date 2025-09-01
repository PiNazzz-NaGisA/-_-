import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon, CalendarIcon, ClockIcon, MapPinIcon, UsersIcon, MicIcon } from "lucide-react"
import Link from "next/link"

export default function CommunicationCirclePage() {
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
            <div className="h-64 bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white text-center">コミュニケーションサークル発表</h1>
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
                      <span>13:00 - 15:00</span>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="mr-2 h-4 w-4 text-gray-500" />
                      <span>発表ホール</span>
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
                      地域のコミュニケーションサークルメンバーによる、 日頃の活動成果を披露する発表会です。
                      スピーチ、プレゼンテーション、ディスカッションなど多彩な内容をお楽しみください。
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-bold mb-4">発表プログラム</h2>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <MicIcon className="mr-2 h-5 w-5 text-blue-500" />
                          13:00-13:20 オープニングスピーチ
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">「コミュニケーションの力」について</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">13:20-13:50 グループプレゼンテーション</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">「地域活性化のアイデア」をテーマとした発表</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">13:50-14:20 パネルディスカッション</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">「これからの薬院のまちづくり」について</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">14:20-14:50 個人発表</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">メンバーによる自由テーマでのスピーチ</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">14:50-15:00 クロージング</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">まとめと今後の活動について</p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">サークルについて</h2>
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        薬院コミュニケーションサークルは、地域住民の皆様のコミュニケーション能力向上と
                        地域交流の促進を目的として活動している団体です。
                      </p>
                      <h3 className="font-bold mb-2">主な活動内容：</h3>
                      <ul className="space-y-1 text-gray-700">
                        <li>• 月2回の定例会（スピーチ練習、ディスカッション）</li>
                        <li>• プレゼンテーション技術の向上</li>
                        <li>• 地域イベントでの司会・進行</li>
                        <li>• 異世代交流イベントの企画・運営</li>
                        <li>• コミュニケーション講座の開催</li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">見どころ</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">多様な年代の発表</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">10代から70代まで、幅広い年代のメンバーが参加</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">実践的な内容</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">日常生活や仕事に活かせるコミュニケーション技術</p>
                      </CardContent>
                    </Card>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
