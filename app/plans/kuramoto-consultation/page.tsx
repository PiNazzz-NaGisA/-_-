import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, MapPin, Clock, Users } from "lucide-react"

export default function KuramotoConsultationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/#plans">
            <Button variant="outline" className="mb-4 bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              企画一覧に戻る
            </Button>
          </Link>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">倉本さんのお悩み相談室</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=600&text=倉本さんのお悩み相談室"
                alt="倉本さんのお悩み相談室"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>相談室（2F）</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-600" />
                <span>12:30-16:30</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-purple-600" />
                <span>個別相談</span>
              </div>
            </div>

            <div className="prose max-w-none">
              <h3>企画概要</h3>
              <p>
                人生経験豊富な倉本さんが、皆さんのお悩みに真摯にお答えします。
                恋愛、進路、人間関係など、どんなお悩みでもお気軽にご相談ください。
              </p>

              <h3>相談内容例</h3>
              <ul>
                <li>恋愛・人間関係の悩み</li>
                <li>進路・将来への不安</li>
                <li>学業・勉強方法について</li>
                <li>日常生活の小さな悩み</li>
              </ul>

              <h3>参加方法</h3>
              <p>
                当日受付にて順番をお取りください。一人15分程度の個別相談となります。
                プライバシーは厳守いたしますので、安心してご相談ください。
              </p>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>注意：</strong>専門的な医療相談や法律相談は対応できません。
                  一般的な人生相談の範囲でお願いいたします。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
