import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeftIcon, CalendarIcon, ClockIcon, MapPinIcon, UsersIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NEDFukuokaPage() {
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
              alt="NED in 福岡薬院万博2025"
              width={600}
              height={400}
              className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">特別企画</Badge>
                <Badge variant="secondary">地域交流</Badge>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">NED in 福岡薬院万博2025</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                福岡薬院地域の魅力を発信する特別企画です。地域の歴史、文化、グルメを紹介し、
                来場者の皆様に薬院の素晴らしさを体験していただきます。
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
                  <span>10:00 - 16:00</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="mr-2 h-4 w-4 text-gray-500" />
                  <span>メインステージエリア</span>
                </div>
                <div className="flex items-center">
                  <UsersIcon className="mr-2 h-4 w-4 text-gray-500" />
                  <span>参加費無料</span>
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
                <h3>企画内容</h3>
                <ul>
                  <li>薬院地域の歴史パネル展示</li>
                  <li>地元グルメの紹介コーナー</li>
                  <li>薬院商店街との連携企画</li>
                  <li>地域住民との交流イベント</li>
                </ul>

                <h3>見どころ</h3>
                <p>
                  薬院の知られざる魅力を発見できる貴重な機会です。地域の方々との交流を通じて、
                  薬院の温かいコミュニティを感じていただけます。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
