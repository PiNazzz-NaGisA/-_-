import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function KuramotoConsultationPage() {
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
              src="/placeholder.svg?height=400&width=800&text=倉本さんのお悩み相談室"
              alt="倉本さんのお悩み相談室"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-3xl font-bold">倉本さんのお悩み相談室</CardTitle>
            <p className="text-lg text-gray-600">人生経験豊富な倉本さんが皆さんのお悩みにお答えします</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                人生経験豊富な倉本さんが、皆さんの様々なお悩みに真摯にお答えする相談室です。
                恋愛、友人関係、将来の進路、家族のことなど、どんな小さなことでも大丈夫。
                温かい人柄の倉本さんが、きっと心に寄り添うアドバイスをしてくれるはずです。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">開催情報</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>開催時間:</strong> 13:00 - 16:00
                  </li>
                  <li>
                    <strong>場所:</strong> 2階相談室
                  </li>
                  <li>
                    <strong>相談時間:</strong> 1人15分程度
                  </li>
                  <li>
                    <strong>参加費:</strong> 無料
                  </li>
                  <li>
                    <strong>対象:</strong> どなたでも
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">倉本さんプロフィール</h3>
              <div className="bg-white p-6 rounded-lg border">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 bg-gray-300 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">倉本 太郎さん</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      元高校教師として35年間教育現場で活躍。退職後は地域のボランティア活動に参加し、
                      多くの若者の相談に乗ってきました。3人の子どもを育て上げた経験もあり、
                      幅広い年代の方々から信頼を得ています。趣味は読書と園芸。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">相談できる内容</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="bg-pink-50 p-3 rounded-lg">
                    <p className="font-medium text-pink-700">恋愛・人間関係</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="font-medium text-blue-700">進路・将来の悩み</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="font-medium text-green-700">家族関係</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="font-medium text-yellow-700">学校・職場の悩み</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="font-medium text-purple-700">自分自身について</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-700">その他なんでも</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">予約方法</h3>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <p className="font-medium text-orange-800 mb-2">当日受付制</p>
                <p className="text-sm text-orange-700">
                  相談室前の受付で順番をお取りください。混雑時はお待ちいただく場合があります。
                  相談内容は事前に簡単にメモしておくとスムーズです。
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">注意事項</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>相談内容の秘密は厳守いたします</li>
                <li>1人15分程度でお願いします（状況により延長可能）</li>
                <li>深刻な問題については専門機関をご紹介する場合があります</li>
                <li>相談は日本語のみとなります</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
