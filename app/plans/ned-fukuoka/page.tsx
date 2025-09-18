import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NedFukuokaPage() {
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
              src="/ned-fukuoka-expo.jpg"
              alt="NED in 福岡薬院万博2025"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-3xl font-bold">NED in 福岡薬院万博2025</CardTitle>
            <p className="text-lg text-gray-600">NED関係の何かを入れる</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                今年も開催、NED in 福岡薬院！
                今年は保護者の方や卒業生のみなさんも見守る、少しレベルアップしたステージです。
                探求部門では、それぞれの好きなことや経験を自由に語ってもらいます。
                そしてスキル部門では、即興プレゼンで観客を魅了していただきます。
                今回は、1年生と前回王者の戦いも予定されています。どんな展開になるのか、ぜひご注目ください！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">開催情報</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>開催時間:</strong> (プレゼン部門)12:15 ~ 12:45 (カラオケ部門)12:45 ~ 13:15
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
