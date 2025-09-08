"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Clock, MapPin, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FoodPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">もちパンカフェ</h1>
            <p className="text-xl text-gray-600">わらびもちドリンクとパンケーキをお楽しみください！</p>
          </div>

          {/* Main Image */}
          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="もちパンカフェ"
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
                <p className="text-gray-700 leading-relaxed">
                  わらびもちのドリンクとパンケーキを販売するカフェ！３種のパンケーキとわらび餅ドリンクがあります！キャンフェスの思い出にぜひぜひ購入してください！！
                </p>
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
                  <span>開催時間：12:00〜16:00</span>
                </div>
                <div className="flex items-center text-blue-800">
                  <MapPin className="mr-3 h-5 w-5" />
                  <span>場所：1階カフェエリア</span>
                </div>
                <div className="flex items-center text-blue-800">
                  <Users className="mr-3 h-5 w-5" />
                  <span>対象：どなたでも</span>
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
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">パンケーキ（3種類）</h4>
                  <p className="text-gray-700">
                    パンケーキは「ハニーバター」「チョコ&ホイップ」「餡子を挟んだどら焼き風」の3種類のトッピングがあり好きな味をお選びいただけます！（トッピングごとに売り切れ次第終了）
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">わらび餅ドリンク（2種類）</h4>
                  <p className="text-gray-700">
                    「抹茶ラテ」と「ミルクティー」の2種類からお選びいただけます！お好きな味をお選びください！
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
                <li>商品は売り切れ次第終了となります</li>
                <li>アレルギーをお持ちの方は事前にお声がけください</li>
                <li>会場内でのお召し上がりをお願いいたします</li>
                <li>ゴミは指定の場所に分別して捨ててください</li>
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
