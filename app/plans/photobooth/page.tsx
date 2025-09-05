import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, MapPin, Users, Camera, Palette } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PhotoboothPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/#plans">
          <Button variant="ghost" className="mb-6 group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            企画一覧に戻る
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="mb-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
            <div className="relative z-10">
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">企画班</Badge>
              <h1 className="mb-2 text-4xl font-bold">fact photo -in campus festival-</h1>
              <p className="text-xl opacity-90">あなたの"いま"を、未来に届ける一枚に。</p>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/3 opacity-20">
              <Camera className="h-full w-full" />
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image */}
            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=fact+photo"
                alt="fact photo -in campus festival-"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  企画概要
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  今年もフォトブース企画「fact
                  photo」、開催いたします！昨年ご好評をいただいたこの企画、今年はさらにパワーアップ！今回はその場でプリントして持ち帰れるプランをご用意しました。もちろん、データだけのご利用も大歓迎です。キャンフェスで過ごす"いま"を、"最高のカタチ"で残してみませんか？あなたの"いま"を、未来に届ける一枚に。ぜひ、お立ち寄りください！
                </p>
              </CardContent>
            </Card>

            {/* こだわりポイント */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  こだわりポイント
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  今回のフォトブースでは、閉鎖的な空間での写真表現に挑戦しています。敢えて狭く、無機質な空間を設定することで、写る人自身の存在や個性、色彩がより際立つように設計しました。その「無機質な箱」に花を咲かせるのは、あなたたち自身です。背景ではなく、被写体が主役。シンプルだからこそ、表情や関係性、"今"の空気感がより深く焼き付きます。キャンフェスの思い出を、ただの記録で終わらせない。この一瞬をアートに、そして記憶に。あなたにとって、このキャンフェスが最高のものとなるように。
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event Info */}
            <Card>
              <CardHeader>
                <CardTitle>開催情報</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium">開催時間</p>
                    <p className="text-sm text-gray-600">13:00 - 16:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium">場所</p>
                    <p className="text-sm text-gray-600">2階 多目的室</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium">参加費</p>
                    <p className="text-sm text-gray-600">
                      データ版: 無料
                      <br />
                      プリント版: 200円
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notes */}
            <Card>
              <CardHeader>
                <CardTitle>注意事項</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 撮影は順番制となります</li>
                  <li>• 混雑時はお待ちいただく場合があります</li>
                  <li>• データお渡しはQRコードで行います</li>
                  <li>• プリント版は現地でお渡しします</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
