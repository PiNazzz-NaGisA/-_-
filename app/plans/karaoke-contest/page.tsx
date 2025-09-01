import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeftIcon, CalendarIcon, ClockIcon, MapPinIcon, UsersIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function KaraokeContestPage() {
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
              alt="カラオケ大会 ~ in 福岡薬院 ~"
              width={600}
              height={400}
              className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">音楽</Badge>
                <Badge variant="secondary">大会</Badge>
                <Badge variant="secondary">エンタメ</Badge>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">カラオケ大会 ~ in 福岡薬院 ~</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                歌好きの皆様、お待たせしました！福岡薬院で開催される熱いカラオケ大会です。
                年齢問わず、どなたでも参加できます。あなたの自慢の歌声を披露してください！
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
                  <span>14:00 - 17:00</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="mr-2 h-4 w-4 text-gray-500" />
                  <span>メインステージ</span>
                </div>
                <div className="flex items-center">
                  <UsersIcon className="mr-2 h-4 w-4 text-gray-500" />
                  <span>参加費500円・事前申込制</span>
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
                <h3>大会ルール</h3>
                <ul>
                  <li>1人1曲まで（時間制限：5分以内）</li>
                  <li>ジャンル不問（演歌からJ-POPまで何でもOK）</li>
                  <li>観客投票により優勝者を決定</li>
                  <li>楽器の持ち込み可（アコースティックのみ）</li>
                </ul>

                <h3>賞品</h3>
                <ul>
                  <li>優勝：薬院商店街お食事券5,000円分</li>
                  <li>準優勝：カラオケボックス利用券</li>
                  <li>3位：地元特産品詰め合わせ</li>
                  <li>参加賞：オリジナルタオル</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
