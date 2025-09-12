import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin, Users, Pen as Yen } from "lucide-react"

export default function Weekly1WorkshopPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              戻る
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="/placeholder.jpg?height=300&width=800&text=週1ワークショップ"
              alt="週1ワークショップ"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">週1ワークショップ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 text-lg">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>10:00 - 17:00</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>ワークショップ会場</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <Yen className="h-5 w-5 text-blue-600" />
                <span>材料費のみ</span>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <Users className="h-5 w-5 text-blue-600" />
                <span>どなたでも</span>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-3">企画について</h3>
                <p className="text-gray-700 leading-relaxed">
                  様々な手作り体験ができるワークショップです。 専門の講師が丁寧に指導しますので、
                  初心者の方でも安心してご参加いただけます。 作った作品はお持ち帰りいただけます。
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">ワークショップ内容</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>陶芸体験（湯呑み・お皿作り）</li>
                  <li>アクセサリー作り</li>
                  <li>キャンドル作り</li>
                  <li>押し花アート</li>
                  <li>革小物作り</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">タイムスケジュール</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>10:00-11:30 陶芸体験</li>
                  <li>12:00-13:30 アクセサリー作り</li>
                  <li>14:00-15:30 キャンドル作り</li>
                  <li>16:00-17:00 押し花アート</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">参加方法</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>当日受付または事前予約</li>
                  <li>各回定員10名</li>
                  <li>所要時間は約90分</li>
                  <li>材料費は体験内容により異なります</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">料金</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>陶芸体験：800円</li>
                  <li>アクセサリー作り：500円</li>
                  <li>キャンドル作り：600円</li>
                  <li>押し花アート：400円</li>
                  <li>革小物作り：700円</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">注意事項</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>汚れても良い服装でお越しください</li>
                  <li>小学生以下は保護者同伴でお願いします</li>
                  <li>作品の完成には時間がかかる場合があります</li>
                  <li>材料の都合により内容が変更になる場合があります</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
