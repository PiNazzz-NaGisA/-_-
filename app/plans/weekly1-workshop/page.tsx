import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Weekly1WorkshopPage() {
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
              src="/placeholder.svg?height=400&width=800&text=週1物販ワークショップ"
              alt="週1物販ワークショップ"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-3xl font-bold">週1物販ワークショップ</CardTitle>
            <p className="text-lg text-gray-600">
              手作り体験と物販を組み合わせた楽しいワークショップをお楽しみください！
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                手作りアクセサリーやオリジナルグッズの制作体験ができるワークショップです！ぜひお気軽にご参加ください！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">開催情報</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>開催時間:</strong> 13:00 - 16:30
                  </li>
                  <li>
                    <strong>場所:</strong> 3階多目的室
                  </li>
                  <li>
                    <strong>参加費:</strong> 300円〜1,200円（メニューにより異なります）
                  </li>
                  <li>
                    <strong>定員:</strong> 各回8名
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">こだわりポイント！</h3>
              <p className="text-gray-700">
                作った作品はその場でお持ち帰りいただけます。また、完成品の販売も行っており、手作りの温かみを感じられる商品を多数ご用意しています！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">注意事項</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>ワークショップは当日受付（先着順）</li>
                <li>汚れても良い服装でお越しください</li>
                <li>小学生以下のお子様は保護者同伴でお願いします</li>
                <li>材料がなくなり次第終了となります</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
