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
                人生経験豊富な倉本さんが、皆さんの様々なお悩みに真摯にお答えする相談室です！ぜひお気軽にご参加ください！
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
                    <strong>参加費:</strong> 無料
                  </li>
                  <li>
                    <strong>相談時間:</strong> 1人15分程度
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">こだわりポイント！</h3>
              <p className="text-gray-700">
                恋愛、友人関係、将来の進路、家族のことなど、どんな小さなことでも大丈夫。温かい人柄の倉本さんが、きっと心に寄り添うアドバイスをしてくれるはずです！
              </p>
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
