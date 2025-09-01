import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeftIcon, CalendarIcon, ClockIcon, MapPinIcon, UsersIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CommunicationCirclePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/#plans">
            <Button variant="outline" className="mb-4 bg-transparent">
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              企画一覧に戻る
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="コミュニケーションサークル発表"
              width={600}
              height={400}
              className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">発表</Badge>
                <Badge variant="secondary">コミュニケーション</Badge>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">コミュニケーションサークル発表</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                地域のコミュニケーションサークルメンバーによる発表会です。
                スピーチ、プレゼンテーション、ディスカッションなど、様々な形式で交流を深めます。
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CalendarIcon className="mr-2 h-5 w-5" />
                  開催情報
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
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
                  <span>参加費無料・観覧自由</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>企画詳細</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <h3>発表内容</h3>
                <ul>
                  <li>効果的なコミュニケーション術</li>
                  <li>プレゼンテーションスキル向上法</li>
                  <li>チームワークの重要性</li>
                  <li>異文化コミュニケーション</li>
                  <li>デジタル時代のコミュニケーション</li>
                </ul>

                <h3>参加メリット</h3>
                <p>
                  コミュニケーション能力向上のヒントを得られるだけでなく、
                  同じ志を持つ仲間との出会いの場としてもご活用いただけます。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
