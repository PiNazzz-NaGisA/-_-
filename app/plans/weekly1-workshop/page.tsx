import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FloraPage() {
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
              src="/flola-floating-frame-image.jpg"
              alt="FLOLA（フローラ）"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-3xl font-bold">FLOLA（フローラ）</CardTitle>
            <p className="text-lg text-gray-600">
              世界に一つ、自分だけの"花の標本"をつくるワークショップをお楽しみください！
            </p>
            <p className="text-sm text-gray-500 mt-2">名前の由来：Flower + Expo（Expo + flora）の造語</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                世界に一つ、自分だけの"花の標本"をつくろう！ドライフラワーでつくる"フローティングフレーム"ワークショップ🌿花を閉じ込めるのは、未来？それとも記憶？花の万博、あなたのフレームから見える世界をぜひ見せてね！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">開催情報</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>開催時間:</strong> 12:15 ~ 14:50
                  </li>
                  <li>
                    <strong>場所:</strong> ステージ右横
                  </li>
                  <li>
                    <strong>チケット価格:</strong> 一枚 300円
                  </li>
                  <li>
                    <strong>チケット販売場所:</strong> 中教室入り口にて販売中(数に限りがございます。)
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">こだわりポイント！</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">背景</h4>
                  <p className="text-gray-700">
                    「未来につながる手仕事」を意識しました。世界の植物のように、さまざまな色や形のドライフラワーを使い、一人ひとりの感性で"花の博覧会"をつくる体験を目指します。
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-green-600 mb-2">目的</h4>
                  <p className="text-gray-700">
                    来場者が自分の感性で花を選び、アートのような一枚を完成させることで、手を動かす喜びと、自分らしい美の発見を感じてもらう。フレームに閉じ込めるのは「今このとき」の文化祭の記憶でもあります。
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">コンセプト</h4>
                  <p className="text-gray-700">
                    「小さなフレームに広がる、世界のかけら。」ガラスに挟まれた一輪の花は、未来を旅する標本。世界の多様性や美しさを小さなフレームに閉じ込めて、あなたの「花の万博」を形にしよう。
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
