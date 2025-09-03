import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PhotoboothPage() {
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
              src="/placeholder.svg?height=400&width=800&text=fact photo"
              alt="fact photo -in campus festival-"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-3xl font-bold">fact photo -in campus festival-</CardTitle>
            <p className="text-lg text-gray-600">あなたの"いま"を、未来に届ける一枚に。</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                今年もフォトブース企画「fact
                photo」、開催いたします！昨年ご好評をいただいたこの企画、今年はさらにパワーアップ！今回はその場でプリントして持ち帰れるプランをご用意しました。もちろん、データだけのご利用も大歓迎です。キャンフェスで過ごす"いま"を、"最高のカタチ"で残してみませんか？あなたの"いま"を、未来に届ける一枚に。ぜひ、お立ち寄りください！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">開催情報</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>開催時間:</strong> 12:00 - 17:00
                  </li>
                  <li>
                    <strong>場所:</strong> 2階ラウンジ
                  </li>
                  <li>
                    <strong>参加費:</strong> 1枚 300円
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">こだわりポイント</h3>
              <p className="text-gray-700 leading-relaxed">
                今回のフォトブースでは、閉鎖的な空間での写真表現に挑戦しています。敢えて狭く、無機質な空間を設定することで、写る人自身の存在や個性、色彩がより際立つように設計しました。その「無機質な箱」に花を咲かせるのは、あなたたち自身です。背景ではなく、被写体が主役。シンプルだからこそ、表情や関係性、"今"の空気感がより深く焼き付きます。キャンフェスの思い出を、ただの記録で終わらせない。この一瞬をアートに、そして記憶に。あなたにとって、このキャンフェスが最高のものとなるように。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">注意事項</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>撮影は1組5分程度でお願いします</li>
                <li>混雑時はお待ちいただく場合があります</li>
                <li>プリント枚数に限りがあります</li>
                <li>データのお渡しはその場で行います</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
