import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CommunicationCirclePage() {
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
              src="/placeholder.svg?height=400&width=800&text=コミュニケーションサークル発表"
              alt="コミュニケーションサークル発表"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-3xl font-bold">コミュニケーションサークル発表</CardTitle>
            <p className="text-lg text-gray-600">スピーチやプレゼンテーション技術の発表会</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                コミュニケーション技術の向上を目指すサークルメンバーによる発表会です。
                スピーチ、プレゼンテーション、ディベートなど、様々な形式でのコミュニケーション技術を披露します。
                観客の皆さんも一緒に参加できるワークショップも開催予定です。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">開催情報</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>開催時間:</strong> 14:00 - 16:00
                  </li>
                  <li>
                    <strong>場所:</strong> 大講義室
                  </li>
                  <li>
                    <strong>参加費:</strong> 無料
                  </li>
                  <li>
                    <strong>対象:</strong> どなたでも観覧・参加可能
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">発表プログラム</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-blue-600">オープニングスピーチ</h4>
                    <span className="text-sm text-gray-500">14:00-14:10</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    サークル代表による「コミュニケーションの力」についてのスピーチ
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-green-600">プレゼンテーション部門</h4>
                    <span className="text-sm text-gray-500">14:10-14:40</span>
                  </div>
                  <p className="text-sm text-gray-700">メンバーによる様々なテーマでのプレゼンテーション（3名×10分）</p>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-purple-600">ディベート実演</h4>
                    <span className="text-sm text-gray-500">14:40-15:10</span>
                  </div>
                  <p className="text-sm text-gray-700">「SNSは人間関係を豊かにするか」をテーマにしたディベート</p>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-orange-600">参加型ワークショップ</h4>
                    <span className="text-sm text-gray-500">15:20-15:50</span>
                  </div>
                  <p className="text-sm text-gray-700">観客参加型の「1分間スピーチチャレンジ」</p>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-red-600">クロージング</h4>
                    <span className="text-sm text-gray-500">15:50-16:00</span>
                  </div>
                  <p className="text-sm text-gray-700">参加者全員での感想共有とまとめ</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">参加型ワークショップについて</h3>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-medium text-yellow-800 mb-2">1分間スピーチチャレンジ</h4>
                <p className="text-sm text-yellow-700 mb-3">
                  観客の皆さんも舞台に上がって、1分間のスピーチにチャレンジできます！
                </p>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• テーマはその場で発表（例：「今日の朝ごはん」「好きな季節」など）</li>
                  <li>• 参加は任意です（強制ではありません）</li>
                  <li>• 参加者には記念品をプレゼント</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">サークル紹介</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm leading-relaxed">
                  コミュニケーションサークルは、スピーチやプレゼンテーション技術の向上を目指す学生団体です。
                  毎週の練習会では、メンバー同士でフィードバックを行い、お互いのコミュニケーション能力を高め合っています。
                  新メンバーも随時募集中です！
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">注意事項</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>途中入退場は自由です</li>
                <li>ワークショップへの参加は任意です</li>
                <li>録音・録画はご遠慮ください</li>
                <li>質問や感想は発表後にお聞かせください</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
