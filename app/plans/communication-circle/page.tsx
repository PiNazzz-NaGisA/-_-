import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, MapPin, Clock, Users } from "lucide-react"

export default function CommunicationCirclePage() {
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
            <CardTitle className="text-3xl font-bold text-center">コミュニケーションサークル発表</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=600&text=コミュニケーションサークル発表"
                alt="コミュニケーションサークル発表"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>ステージエリア</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-600" />
                <span>14:00-15:30</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-purple-600" />
                <span>観覧自由</span>
              </div>
            </div>

            <div className="prose max-w-none">
              <h3>企画概要</h3>
              <p>
                コミュニケーションサークルのメンバーが日頃の活動成果を発表します。
                スピーチ、プレゼンテーション、ディスカッションなど、多彩な発表をお楽しみください。
              </p>

              <h3>発表内容</h3>
              <ul>
                <li>「効果的なプレゼンテーションの技術」</li>
                <li>「異文化コミュニケーションの体験談」</li>
                <li>「チームワークを高める方法」</li>
                <li>「リーダーシップについて考える」</li>
                <li>「コミュニケーション能力向上のコツ」</li>
              </ul>

              <h3>見どころ</h3>
              <p>
                実際のビジネスシーンや日常生活で役立つコミュニケーションスキルを、
                実演を交えながら分かりやすく紹介します。質疑応答の時間もありますので、
                気になることがあればお気軽にご質問ください。
              </p>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>参加特典：</strong>発表後に簡単なコミュニケーション診断シートをプレゼント！
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
