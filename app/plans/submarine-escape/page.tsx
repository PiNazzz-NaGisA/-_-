import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon, CalendarIcon, ClockIcon, MapPinIcon, UsersIcon, AlertTriangleIcon, ZapIcon } from "lucide-react"
import Link from "next/link"

export default function SubmarineEscapePage() {
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
            <div className="h-64 bg-gradient-to-r from-red-600 to-orange-600 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white text-center">爆破しうる潜水艇からの脱出</h1>
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
                      <span>随時開催（1回30分）</span>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="mr-2 h-4 w-4 text-gray-500" />
                      <span>特設脱出ルーム（地下1階）</span>
                    </div>
                    <div className="flex items-center">
                      <UsersIcon className="mr-2 h-4 w-4 text-gray-500" />
                      <span>参加費：800円（1人）</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-600">
                      <AlertTriangleIcon className="mr-2 h-5 w-5" />
                      緊急ミッション
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      深海に沈んだ潜水艇で爆発装置が作動！ 制限時間30分以内に謎を解き、 仲間と協力して脱出せよ！
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-bold mb-4">ミッション概要</h2>
                  <Card className="border-orange-200 bg-orange-50">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <ZapIcon className="h-6 w-6 text-red-500 mt-1" />
                          <div>
                            <h3 className="font-bold text-lg">状況設定</h3>
                            <p className="text-gray-700">
                              あなたたちは海洋調査チームの一員として潜水艇で深海調査中、
                              突然の事故により潜水艇が海底に沈没。さらに爆発装置が作動してしまいました。
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <AlertTriangleIcon className="h-6 w-6 text-orange-500 mt-1" />
                          <div>
                            <h3 className="font-bold text-lg">ミッション</h3>
                            <p className="text-gray-700">
                              制限時間30分以内に潜水艇内の謎を解き、 爆発装置を解除して脱出ポッドで海上に脱出せよ！
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">ゲーム詳細</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">参加人数・時間</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 2-6名のチーム制</li>
                          <li>• 制限時間：30分</li>
                          <li>• 推奨年齢：中学生以上</li>
                          <li>• 1日8回開催</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">難易度・特徴</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 難易度：★★★☆☆</li>
                          <li>• 論理的思考が必要</li>
                          <li>• チームワークが重要</li>
                          <li>• 臨場感あふれる演出</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">脱出の流れ</h2>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">STEP 1: 状況把握（5分）</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">潜水艇内の状況を確認し、利用可能な機器や手がかりを探索</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">STEP 2: 謎解き（15分）</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">
                          潜水艇内に隠された複数の謎を解き、爆発装置の解除コードを入手
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">STEP 3: 装置解除（5分）</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">入手したコードで爆発装置を解除し、脱出ポッドを起動</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">STEP 4: 脱出（5分）</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">脱出ポッドで海上への脱出を完了し、ミッション成功！</p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">謎解き要素</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">暗号解読</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">
                          潜水艇の操作マニュアルに隠された暗号を解読し、 重要な情報を入手します。
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">機械操作</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">
                          潜水艇内の様々な機器を正しい手順で操作し、 システムを復旧させます。
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">パズル</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">
                          物理的なパズルを解いて隠された鍵や道具を入手し、 次のステップに進みます。
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">チームワーク</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">
                          複数人で同時に作業する必要がある謎もあり、 連携が成功の鍵となります。
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">予約・参加方法</h2>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-bold mb-2">開催スケジュール</h3>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>10:00-10:30</div>
                            <div>11:00-11:30</div>
                            <div>12:00-12:30</div>
                            <div>13:00-13:30</div>
                            <div>14:00-14:30</div>
                            <div>15:00-15:30</div>
                            <div>16:00-16:30</div>
                            <div>17:00-17:30</div>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold mb-2">予約方法</h3>
                          <ul className="space-y-1 text-gray-700">
                            <li>• 当日受付（各回開始30分前から）</li>
                            <li>• 先着順（各回最大6名）</li>
                            <li>• 参加費：800円/人</li>
                            <li>• 2名以上での参加が必要</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">注意事項</h2>
                  <Card>
                    <CardContent className="pt-6">
                      <ul className="space-y-2 text-gray-700">
                        <li>• 中学生以下は保護者の同伴が必要です</li>
                        <li>• 閉所恐怖症の方はご参加をお控えください</li>
                        <li>• 室内は薄暗く設定されています</li>
                        <li>• 携帯電話の使用は禁止です</li>
                        <li>• ヒントは3回まで提供可能です</li>
                        <li>• 制限時間内に脱出できなくても安全に退出できます</li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">企画班からのメッセージ</h2>
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-gray-700 leading-relaxed">
                        「爆破しうる潜水艇からの脱出」は、スリルと謎解きの楽しさを同時に味わえる
                        本格的な脱出ゲームです。仲間と協力し、限られた時間の中で冷静に判断し、
                        見事脱出を成功させてください。きっと忘れられない体験になるはずです！
                        皆様の挑戦をお待ちしています。
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
