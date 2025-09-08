"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Clock, MapPin, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Weekly1WorkshopPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="mr-2 h-4 w-4" />
            トップページに戻る
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">FLOLA（フローラ）</h1>
            <p className="text-xl text-gray-600">世界に一つ、自分だけの花の標本作りをお楽しみください！</p>
          </div>

          {/* Main Image */}
          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="FLOLA（フローラ）"
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* 企画概要 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">企画概要</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">名前の由来</h4>
                    <p className="text-gray-700">Flower + Expo（Expo + flora）の造語</p>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      世界に一つ、自分だけの"花の標本"をつくろう！ドライフラワーでつくる"フローティングフレーム"ワークショップ🌿
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-2">
                      花を閉じ込めるのは、未来？それとも記憶？花の万博、あなたのフレームから見える世界をぜひ見せてね！
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">ぜひお気軽にご参加ください！</p>
              </CardContent>
            </Card>

            {/* 開催情報 */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-900">開催情報</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-blue-800">
                  <Clock className="mr-3 h-5 w-5" />
                  <span>開催時間：13:00〜16:00</span>
                </div>
                <div className="flex items-center text-blue-800">
                  <MapPin className="mr-3 h-5 w-5" />
                  <span>場所：2階ワークショップルーム</span>
                </div>
                <div className="flex items-center text-blue-800">
                  <Users className="mr-3 h-5 w-5" />
                  <span>対象：どなたでも（小学生以下は保護者同伴）</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* こだわりポイント */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">こだわりポイント！</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">背景</h4>
                  <p className="text-gray-700">
                    「未来につながる手仕事」を意識しました。世界の植物のように、さまざまな色や形のドライフラワーを使い、一人ひとりの感性で"花の博覧会"をつくる体験を目指します。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">目的</h4>
                  <p className="text-gray-700">
                    来場者が自分の感性で花を選び、アートのような一枚を完成させることで、手を動かす喜びと、自分らしい美の発見を感じてもらう。フレームに閉じ込めるのは「今このとき」の文化祭の記憶でもあります。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">コンセプト</h4>
                  <p className="text-gray-700">
                    「小さなフレームに広がる、世界のかけら。」ガラスに挟まれた一輪の花は、未来を旅する標本。世界の多様性や美しさを小さなフレームに閉じ込めて、あなたの「花の万博」を形にしよう。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 注意事項 */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">注意事項</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>材料がなくなり次第終了となります</li>
                <li>作品の乾燥時間として約30分程度お時間をいただきます</li>
                <li>小さな部品を使用するため、小さなお子様は保護者の方と一緒にご参加ください</li>
                <li>汚れても良い服装でお越しください</li>
              </ul>
            </CardContent>
          </Card>

          {/* Back to Top Button */}
          <div className="text-center mt-12">
            <Link href="/">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                トップページに戻る
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
