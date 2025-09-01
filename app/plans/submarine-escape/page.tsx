import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SubmarineEscapePage() {
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
              src="/placeholder.svg?height=400&width=800&text=潜水艇脱出ゲーム"
              alt="爆破しうる潜水艇からの脱出"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-3xl font-bold">爆破しうる潜水艇からの脱出</CardTitle>
            <p className="text-lg text-gray-600">制限時間60分！チームワークで潜水艇からの脱出を目指せ！</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                海底に沈んだ潜水艇から制限時間60分以内に脱出する本格的な脱出ゲームです。
                チームメンバーと協力して謎を解き、仕掛けを突破し、爆発する前に潜水艇から脱出しましょう！
                論理的思考力、観察力、そして何よりチームワークが試される究極の体験型ゲームです。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">開催情報</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>開催時間:</strong> 12:30 - 17:00
                  </li>
                  <li>
                    <strong>場所:</strong> 地下実習室（特別セット）
                  </li>
                  <li>
                    <strong>参加費:</strong> 1人 500円
                  </li>
                  <li>
                    <strong>チーム編成:</strong> 4〜6人1組
                  </li>
                  <li>
                    <strong>制限時間:</strong> 60分
                  </li>
                  <li>
                    <strong>対象年齢:</strong> 中学生以上
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">ゲームの流れ</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-600 mb-2">1. ブリーフィング（5分）</h4>
                  <p className="text-sm text-gray-700">
                    ストーリー説明とルール確認。潜水艇の状況と脱出の目的を理解します。
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-600 mb-2">2. 探索フェーズ（20分）</h4>
                  <p className="text-sm text-gray-700">
                    潜水艇内を探索し、脱出に必要な手がかりやアイテムを収集します。
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-600 mb-2">3. 謎解きフェーズ（25分）</h4>
                  <p className="text-sm text-gray-700">収集した情報を元に、複数の謎を解いて脱出ルートを開拓します。</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-600 mb-2">4. 脱出フェーズ（10分）</h4>
                  <p className="text-sm text-gray-700">
                    最終的な脱出装置を作動させ、制限時間内に全員で脱出を目指します。
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">謎解きの種類</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-600 mb-2">論理パズル</h4>
                  <p className="text-sm text-gray-700">数学的思考や論理的推理が必要な問題</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">観察問題</h4>
                  <p className="text-sm text-gray-700">細かい部分への注意力が試される問題</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-600 mb-2">暗号解読</h4>
                  <p className="text-sm text-gray-700">様々な暗号を解読する問題</p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-600 mb-2">協力問題</h4>
                  <p className="text-sm text-gray-700">チーム全員の協力が必要な問題</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">難易度レベル</h3>
              <div className="space-y-3">
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-green-700">初級コース</span>
                    <span className="text-sm text-green-600">脱出成功率: 約80%</span>
                  </div>
                  <p className="text-xs text-green-600 mt-1">脱出ゲーム初心者におすすめ</p>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-yellow-700">中級コース</span>
                    <span className="text-sm text-yellow-600">脱出成功率: 約50%</span>
                  </div>
                  <p className="text-xs text-yellow-600 mt-1">適度な挑戦を求める方に</p>
                </div>

                <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-red-700">上級コース</span>
                    <span className="text-sm text-red-600">脱出成功率: 約20%</span>
                  </div>
                  <p className="text-xs text-red-600 mt-1">脱出ゲーム上級者向けの高難易度</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">予約・料金</h3>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">参加費</span>
                    <span>1人 500円</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">学生割引</span>
                    <span>1人 300円</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">予約方法</span>
                    <span>当日受付（先着順）</span>
                  </div>
                </div>
                <p className="text-xs text-blue-600 mt-3">※脱出成功チームには記念品をプレゼント！</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">注意事項</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>4〜6人でチームを組んでご参加ください</li>
                <li>動きやすい服装でお越しください</li>
                <li>ゲーム中は携帯電話の使用禁止</li>
                <li>ヒントは3回まで利用可能</li>
                <li>安全のため、係員の指示に従ってください</li>
                <li>途中退場は原則として不可</li>
                <li>写真撮影は指定エリアのみ可能</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
