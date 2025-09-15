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
            <p className="text-lg text-gray-600">人生経験豊富な倉本さんが皆さんのお悩みにお答えします！</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                ここ福岡薬院キャンパスでは、様々な人が在籍し、多種多様な人間関係を築き上げてきた。
                そして、今、日頃から様々な人間関係の問題が起こっている...
                そんな問題を解決する1人の男がいた。その名も倉本 光希！！！
                と、いう事で事前に集めたお悩みになんと！倉本先生がお悩みに答えてくれます！
                ぜひ参加してお悩みを解決して行ってください！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">開催情報</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>開催時間:</strong> バンドの準備中！
                  </li>
                  <li>
                    <strong>場所:</strong> ステージ
                  </li>

                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
