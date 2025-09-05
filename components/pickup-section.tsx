"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const experiencePlans = [
  {
    id: "shooting",
    title: "射的",
    description: "子供の頃にやったことがある人もいるであろう「射的」を今回のキャンフェスで出展します！",
    category: "体験型",
    image: "/placeholder-k8lu0.png",
    href: "/plans/shooting",
  },
  {
    id: "photobooth",
    title: "fact photo -in campus festival-",
    description:
      "今年もフォトブース企画「fact photo」、開催いたします！昨年ご好評をいただいたこの企画、今年はさらにパワーアップ！",
    category: "体験型",
    image: "/placeholder-ube28.png",
    href: "/plans/photobooth",
  },
  {
    id: "projection",
    title: "プロジェクションマッピングin夏の思い出",
    description: "キャンフェス史上初！プロジェクションマッピングを展示します！飲食の前後にぜひ立ち寄ってみてください！",
    category: "体験型",
    image: "/placeholder-b3yzt.png",
    href: "/plans/projection",
  },
  {
    id: "food",
    title: "食品販売",
    description: "美味しいパンケーキとわらび餅ドリンクを販売します！キャンフェスの思い出と一緒にお楽しみください。",
    category: "体験型",
    image: "/placeholder-53vrk.png",
    href: "/plans/food",
  },
  {
    id: "weekly1-workshop",
    title: "週1物販ワークショップ",
    description:
      "手作りアクセサリーやオリジナルグッズの制作体験ができます。自分だけの特別なアイテムを作ってみませんか？",
    category: "体験型",
    image: "/----------.jpg",
    href: "/plans/weekly1-workshop",
  },
  {
    id: "submarine-escape",
    title: "爆破しうる潜水艇からの脱出",
    description: "スリル満点の脱出ゲーム！チームワークを駆使して潜水艇から脱出せよ！",
    category: "体験型",
    image: "/placeholder-9tqgc.png",
    href: "/plans/submarine-escape",
  },
]

const stagePlans = [
  {
    id: "ned-fukuoka",
    title: "NED in 福岡薬院万博2025",
    description:
      "福岡薬院キャンパス初開催！NED（ニュー・エデュケーション・デベロップメント）の特別企画をお楽しみください。",
    category: "ステージ",
    image: "/ned------.jpg",
    href: "/plans/ned-fukuoka",
  },
  {
    id: "communication-circle",
    title: "コミュニケーションサークル発表",
    description: "学生たちが日頃の活動成果を発表します。コミュニケーション能力向上の取り組みをご覧ください。",
    category: "ステージ",
    image: "/-----------.jpg",
    href: "/plans/communication-circle",
  },
  {
    id: "kuramoto-consultation",
    title: "倉本さんのお悩み相談室",
    description: "人生の先輩である倉本さんが、皆さんのお悩みに真摯にお答えします。気軽にご相談ください。",
    category: "ステージ",
    image: "/----------.jpg",
    href: "/plans/kuramoto-consultation",
  },
  {
    id: "quiz-contest",
    title: "第1回福岡薬院クイズ王決定戦",
    description: "知識を競い合う白熱のクイズ大会！優勝者には豪華賞品をご用意しています。",
    category: "ステージ",
    image: "/-------.jpg",
    href: "/plans/quiz-contest",
  },
  {
    id: "karaoke-contest",
    title: "カラオケ大会 ~ in 福岡薬院 ~",
    description: "歌自慢集まれ！福岡薬院キャンパス初のカラオケ大会で、あなたの歌声を披露してください。",
    category: "ステージ",
    image: "/-------.jpg",
    href: "/plans/karaoke-contest",
  },
  {
    id: "senior-band",
    title: "薬院老人会によるバンド演奏",
    description: "地域の皆様による心温まるバンド演奏をお楽しみください。世代を超えた音楽の魅力をお届けします。",
    category: "ステージ",
    image: "/placeholder-y3yib.png",
    href: "/plans/senior-band",
  },
]

export function PickupSection() {
  const [showAllExperience, setShowAllExperience] = useState(false)
  const [showAllStage, setShowAllStage] = useState(false)

  const displayedExperiencePlans = showAllExperience ? experiencePlans : experiencePlans.slice(0, 3)
  const displayedStagePlans = showAllStage ? stagePlans : stagePlans.slice(0, 3)

  return (
    <section id="plans" className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">企画紹介</h2>

        {/* 体験型企画 */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">体験型企画</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {displayedExperiencePlans.map((plan) => (
              <Card key={plan.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img src={plan.image || "/placeholder.svg"} alt={plan.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{plan.title}</CardTitle>
                    <Badge variant="secondary">{plan.category}</Badge>
                  </div>
                  <CardDescription className="text-sm">{plan.description}</CardDescription>
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
            <Button variant="outline" onClick={() => setShowAllExperience(!showAllExperience)} className="px-8">
              {showAllExperience ? "体験型企画を折りたたむ" : "体験型企画一覧をみる"}
            </Button>
          </div>
        </div>

        {/* ステージ企画 */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">ステージ企画</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {displayedStagePlans.map((plan) => (
              <Card key={plan.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img src={plan.image || "/placeholder.svg"} alt={plan.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{plan.title}</CardTitle>
                    <Badge variant="secondary">{plan.category}</Badge>
                  </div>
                  <CardDescription className="text-sm">{plan.description}</CardDescription>
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
            <Button variant="outline" onClick={() => setShowAllStage(!showAllStage)} className="px-8">
              {showAllStage ? "ステージ企画を折りたたむ" : "ステージ企画一覧をみる"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
