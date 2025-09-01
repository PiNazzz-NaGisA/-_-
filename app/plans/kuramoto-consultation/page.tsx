import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeftIcon, CalendarIcon, ClockIcon, MapPinIcon, UsersIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function KuramotoConsultationPage() {
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
              alt="倉本さんのお悩み相談室"
              width={600}
              height={400}
              className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">相談</Badge>
                <Badge variant="secondary">交流</Badge>
                <Badge variant="secondary">人生</Badge>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">倉本さんのお悩み相談室</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                人生経験豊富な倉本さんが、皆様のお悩みに親身になってお答えします。
                恋愛、仕事、人間関係など、どんなことでもお気軽にご相談ください。
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
                  <span>11:00 - 15:00</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="mr-2 h-4 w-4 text-gray-500" />
                  <span>相談コーナー</span>
                </div>
                <div className="flex items-center">
                  <UsersIcon className="mr-2 h-4 w-4 text-gray-500" />
                  <span>参加費無料・予約不要</span>
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
                <h3>相談内容</h3>
                <ul>
                  <li>恋愛・結婚に関するお悩み</li>
                  <li>仕事・キャリアの相談</li>
                  <li>人間関係の悩み</li>
                  <li>将来への不安</li>
                  <li>その他、人生全般のお悩み</li>
                </ul>

                <h3>倉本さんについて</h3>
                <p>
                  長年にわたり地域のコミュニティで活動し、多くの方々の相談に乗ってきた経験豊富な倉本さん。
                  温かい人柄と的確なアドバイスで、きっとあなたの心を軽くしてくれるでしょう。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
