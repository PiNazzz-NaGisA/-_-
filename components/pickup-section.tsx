"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function PickupSection() {
  const [showAll, setShowAll] = useState(false)

  const plans = [
    {
      title: "射的",
      description: "企画班",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["企画班", "ゲーム"],
      href: "/plans/shooting",
    },
    {
      title: "フォトブース",
      description: "企画班",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["企画班", "写真"],
      href: "/plans/photobooth",
    },
    {
      title: "プロジェクションマッピング",
      description: "企画班",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["企画班", "アート"],
      href: "/plans/projection",
    },
    {
      title: "食品販売",
      description: "物販",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["物販", "フード", "ドリンク"],
      href: "/plans/food",
    },
    {
      title: "週1物販ワークショップ",
      description: "物販・体験",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["物販", "ワークショップ", "体験"],
      href: "/plans/weekly1-workshop",
    },
    {
      title: "NED in 福岡薬院万博2025",
      description: "特別企画",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["特別企画", "地域交流"],
      href: "/plans/ned-fukuoka",
    },
    {
      title: "倉本さんのお悩み相談室",
      description: "相談・交流",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["相談", "交流", "人生"],
      href: "/plans/kuramoto-consultation",
    },
    {
      title: "コミュニケーションサークル発表",
      description: "発表・交流",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["発表", "コミュニケーション"],
      href: "/plans/communication-circle",
    },
    {
      title: "カラオケ大会 ~ in 福岡薬院 ~",
      description: "エンターテイメント",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["音楽", "大会", "エンタメ"],
      href: "/plans/karaoke-contest",
    },
    {
      title: "第1回福岡薬院クイズ王決定戦",
      description: "クイズ大会",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["クイズ", "大会", "知識"],
      href: "/plans/quiz-contest",
    },
    {
      title: "薬院老人会によるバンド演奏",
      description: "音楽・演奏",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["音楽", "バンド", "世代交流"],
      href: "/plans/senior-band",
    },
    {
      title: "爆破しうる潜水艇からの脱出",
      description: "脱出ゲーム",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["脱出ゲーム", "謎解き", "チームワーク"],
      href: "/plans/submarine-escape",
    },
  ]

  const displayedPlans = showAll ? plans : plans.slice(0, 3)

  return (
    <section id="plans" className="py-12 md:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">企画紹介</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedPlans.map((plan, index) => {
            const CardComponent = (
              <Card
                key={index}
                className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 transform"
              >
                <Image
                  src={plan.image || "/placeholder.svg"}
                  alt={plan.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{plan.title}</CardTitle>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 mt-auto">
                  {plan.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </CardContent>
              </Card>
            )

            return (
              <Link key={index} href={plan.href}>
                {CardComponent}
              </Link>
            )
          })}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" className="group bg-transparent" onClick={() => setShowAll(!showAll)}>
            {showAll ? "企画を閉じる" : "企画一覧をみる"}
            <ArrowRightIcon
              className={`ml-2 h-4 w-4 transition-transform ${showAll ? "rotate-180" : "group-hover:translate-x-1"}`}
            />
          </Button>
        </div>
      </div>
    </section>
  )
}
