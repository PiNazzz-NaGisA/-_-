import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PianoAccordionPage() {
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
              src="/placeholder.svg?height=400&width=800&text=ピアノとアコーディオンの演奏会"
              alt="ピアノとアコーディオンの演奏会"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-3xl font-bold">シオン</CardTitle>
            <p className="text-lg text-gray-600">美しいピアノとアコーディオンの音色をお楽しみください！</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">企画概要</h3>
              <p className="text-gray-700 leading-relaxed">
                ー蜜月で出会う私たちー
                ー途中で出会う愉快なたい焼き達…？ー
                ーそして二度とない再会ー
                全て違ったジャンル、構成で皆様を音楽の世界へご招待致します✨
                皆さんと一緒に楽しむ演奏会、是非ご覧ください♪
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">開催情報</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>
                    <strong>開催時間:</strong> 14:30 - 15:30
                  </li>
                  <li>
                    <strong>場所:</strong> 音楽室
                  </li>
                  <li>
                    <strong>参加費:</strong> 無料
                  </li>
                  <li>
                    <strong>座席:</strong> 椅子席40席（先着順）
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">こだわりポイント！</h3>
              <p className="text-gray-700">
                ピアノの繊細な音色とアコーディオンの温かみのある響きが織りなす、心に響く演奏をお届けします。クラシックから現代曲まで、幅広いレパートリーで皆様をお迎えいたします！
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
