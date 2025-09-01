"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const plans = [
  {
    id: "shooting",
    title: "射的企画班",
    description: "昔懐かしい射的ゲームをお楽しみください！景品も豊富にご用意しています。",
    category: "ゲーム",
    href: "/plans/shooting",
  },
  {
    id: "photobooth",
    title: "フォトブース",
    description: "思い出に残る写真を撮影しませんか？様々な小道具をご用意しています。",
    category: "撮影",
    href: "/plans/photobooth",
  },
  {
    id: "projection",
    title: "プロジェクションマッピング",
    description: "最新技術を使った幻想的な映像体験をお楽しみください。",
    category: "映像",
    href: "/plans/projection",
  },
  {
    id: "food",
    title: "食品販売",
    description: "美味しいパンケーキとわらび餅ドリンクを販売しています。",
    category: "食品",
    href: "/plans/food",
  },
  {
    id: "weekly1-workshop",
    title: "週1物販ワークショップ",
    description: "手作り体験ができるワークショップと物販を行います。",
    category: "ワークショップ",
    href: "/plans/weekly1-workshop",
  },
  {
    id: "ned-fukuoka",
    title: "NED in 福岡薬院万博2025",
    description: "福岡薬院の魅力を発信する特別企画です。",
    category: "展示",
    href: "/plans/ned-fukuoka",
  },
  {
    id: "kuramoto-consultation",
    title: "倉本さんのお悩み相談室",
    description: "日頃の悩みを気軽に相談できる場を提供します。",
    category: "相談",
    href: "/plans/kuramoto-consultation",
  },
  {
    id: "communication-circle",
    title: "コミュニケーションサークル発表",
    description: "サークル活動の成果を発表します。",
    category: "発表",
    href: "/plans/communication-circle",
  },
  {
    id: "karaoke-contest",
    title: "カラオケ大会 ~ in 福岡薬院 ~",
    description: "みんなで楽しむカラオケ大会を開催します。",
    category: "音楽",
    href: "/plans/karaoke-contest",
  },
  {
    id: "quiz-contest",
    title: "第1回福岡薬院クイズ王決定戦",
    description: "知識を競うクイズ大会で優勝を目指しましょう！",
    category: "ゲーム",
    href: "/plans/quiz-contest",
  },
  {
    id: "senior-band",
    title: "薬院老人会によるバンド演奏",
    description: "経験豊富な演奏者による素晴らしい音楽をお楽しみください。",
    category: "音楽",
    href: "/plans/senior-band",
  },
  {
    id: "submarine-escape",
    title: "爆破しうる潜水艇からの脱出",
    description: "スリル満点の脱出ゲームに挑戦してみませんか？",
    category: "ゲーム",
    href: "/plans/submarine-escape",
  },
]

export function PickupSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedPlans = showAll ? plans : plans.slice(0, 3)

  return (
    <section id="plans" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">企画紹介</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedPlans.map((plan) => (
            <Card key={plan.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{plan.category}</Badge>
                </div>
                <CardTitle className="text-xl">{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
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
