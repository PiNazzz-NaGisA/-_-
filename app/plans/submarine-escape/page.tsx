import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SubmarineEscapePage() {
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
              src="/placeholder.svg?height=400&width=800&text=潜水艇脱出ゲーム"
              alt="爆破しうる潜水艇からの脱出"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-3xl font-bold">爆発しうる潜水艇からの脱出</CardTitle>
            <p className="text-lg text-gray-600">爆発まで残り10分！？リアル脱出型謎解き</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                『おめでとうございます！あなたは深海観光ツアーに当選しました！』
                連絡を受け、潜水艇に乗るあなたたち。
                深く潜ったそのとき、船内に突如アナウンスが響く。
                「この船は10分後に爆発します。」
                生き残るには、船に仕掛けられた爆弾を解除するしかない。
                仲間と協力し、無事に帰ることはできるのか——
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">開催情報</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>開催時間:</strong> 12:30 ~ 17:00
                  </li>
                  <li>
                    <strong>場所:</strong> 地下実習室（特別セット）
                  </li>
                  <li>
                    <strong>参加費:</strong> 1人 500円
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">こだわりポイント！</h3>
              <p className="text-gray-700">
                潜水艇をテーマに制作しました。
                教室全体を一つの潜水艇に見立て、没入感のある世界観を目指しました！参加者が物語の中に入り込めるように空間全体を作り込んでいます。
                難易度も初心者の方でも楽しめるように設定しています。
                謎解きが初めてでも、友達と協力すればきっとクリアできるはず。どなたでもお気軽にご参加ください！

              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
