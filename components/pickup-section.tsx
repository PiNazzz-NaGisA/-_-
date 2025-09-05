"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

const plans = [
  {
    id: "shooting",
    title: "射的",
    description:
      "子供の頃にやったことがある人もいるであろう「射的を」今回のキャンフェスで出展します！ぜひお気軽にご参加ください！",
    category: "体験",
    image: "/placeholder.svg?height=200&width=300&text=射的",
    href: "/plans/shooting",
  },
  {
    id: "photobooth",
    title: "fact photo -in campus festival-",
    description: 'あなたの"いま"を、未来に届ける一枚に。キャンフェスで過ごす特別な瞬間を最高のカタチで残しませんか？',
    category: "撮影",
    image: "/placeholder.svg?height=200&width=300&text=fact+photo",
    href: "/plans/photobooth",
  },
  {
    id: "projection",
    title: "プロジェクションマッピングin夏の思い出",
    description: "キャンフェス史上初！プロジェクションマッピングを展示します！飲食の前後にぜひ立ち寄ってみてください！",
    category: "アート",
    image: "/placeholder.svg?height=200&width=300&text=プロジェクションマッピング",
    href: "/plans/projection",
  },
  {
    id: "food",
    title: "食品販売",
    description: "パンケーキとわらび餅ドリンクの美味しい組み合わせをお楽しみください！",
    category: "食品",
    image: "/placeholder.svg?height=200&width=300&text=食品販売",
    href: "/plans/food",
  },
  {
    id: "weekly1-workshop",
    title: "週1物販ワークショップ",
    description: "手作り体験と物販を組み合わせた楽しいワークショップです！",
    category: "ワークショップ",
    image: "/placeholder.svg?height=200&width=300&text=週1物販ワークショップ",
    href: "/plans/weekly1-workshop",
  },
  {
    id: "ned-fukuoka",
    title: "NED in 福岡薬院万博2025",
    description: "福岡薬院万博2025の特別企画をお楽しみください！",
    category: "特別企画",
    image: "/placeholder.svg?height=200&width=300&text=NED+in+福岡薬院万博2025",
    href: "/plans/ned-fukuoka",
  },
  {
    id: "kuramoto-consultation",
    title: "倉本さんのお悩み相談室",
    description: "お悩みを気軽に相談できる温かい空間をご用意しています！",
    category: "相談",
    image: "/placeholder.svg?height=200&width=300&text=倉本さんのお悩み相談室",
    href: "/plans/kuramoto-consultation",
  },
  {
    id: "communication-circle",
    title: "コミュニケーションサークル発表",
    description: "サークル活動の成果を発表する特別なステージです！",
    category: "発表",
    image: "/placeholder.svg?height=200&width=300&text=コミュニケーションサークル発表",
    href: "/plans/communication-circle",
  },
  {
    id: "karaoke-contest",
    title: "カラオケ大会 ~ in 福岡薬院 ~",
    description: "歌自慢の皆さん、集まれ！楽しいカラオケ大会を開催します！",
    category: "エンターテイメント",
    image: "/placeholder.svg?height=200&width=300&text=カラオケ大会",
    href: "/plans/karaoke-contest",
  },
  {
    id: "quiz-contest",
    title: "第1回福岡薬院クイズ王決定戦",
    description: "知識を競う白熱のクイズバトル！クイズ王の座を目指そう！",
    category: "ゲーム",
    image: "/placeholder.svg?height=200&width=300&text=クイズ王決定戦",
    href: "/plans/quiz-contest",
  },
  {
    id: "senior-band",
    title: "薬院老人会によるバンド演奏",
    description: "ベテランミュージシャンによる心温まる演奏をお楽しみください！",
    category: "音楽",
    image: "/placeholder.svg?height=200&width=300&text=薬院老人会バンド",
    href: "/plans/senior-band",
  },
  {
    id: "submarine-escape",
    title: "爆破しうる潜水艇からの脱出",
    description: "スリル満点の脱出ゲーム！チームワークで危機を乗り越えよう！",
    category: "ゲーム",
    image: "/placeholder.svg?height=200&width=300&text=潜水艇脱出ゲーム",
    href: "/plans/submarine-escape",
  },
]

export function PickupSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedPlans = showAll ? plans : plans.slice(0, 3)

  return (
    <section id="plans" className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">企画紹介</h2>
          <p className="text-lg text-gray-600">今年のキャンフェスでは、様々な楽しい企画をご用意しています</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {displayedPlans.map((plan) => (
            <Card key={plan.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <Image
                  src={plan.image || "/placeholder.svg"}
                  alt={plan.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{plan.category}</Badge>
                </div>
                <CardTitle className="text-xl">{plan.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600 line-clamp-3">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={plan.href}>
                  <Button className="w-full">詳細を見る</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={() => setShowAll(!showAll)} variant="outline" size="lg">
            {showAll ? "企画を折りたたむ" : "企画一覧をみる"}
          </Button>
        </div>
      </div>
    </section>
  )
}
