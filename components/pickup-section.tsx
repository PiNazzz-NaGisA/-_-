"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function PickupSection() {
  const [showAllExperience, setShowAllExperience] = useState(false)
  const [showAllStage, setShowAllStage] = useState(false)

  const experiencePlans = [
    {
      title: "射的",
      description: "企画班",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["企画班", "ゲーム"],
      href: "/plans/shooting",
    },
    {
      title: "fact photo -in campus festival-",
      description: "企画班",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["企画班", "写真"],
      href: "/plans/photobooth",
    },
    {
      title: "プロジェクションマッピングin夏の思い出",
      description: "企画班",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["企画班", "アート"],
      href: "/plans/projection",
    },
    {
      title: "もちパンカフェ",
      description: "物販",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["物販", "フード", "ドリンク"],
      href: "/plans/food",
    },
    {
      title: "FLOLA（フローラ）",
      description: "物販・体験",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["物販", "ワークショップ", "体験"],
      href: "/plans/weekly1-workshop",
    },
    {
      title: "爆破しうる潜水艇からの脱出",
      description: "脱出ゲーム",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["脱出ゲーム", "謎解き", "チームワーク"],
      href: "/plans/submarine-escape",
    },
  ]

  const stagePlans = [
    {
      title: "NED in 福岡薬院万博2025",
      description: "特別企画",
      image: "/ned-fukuoka-expo.jpg",
      tags: ["特別企画", "地域交流"],
      href: "/plans/ned-fukuoka",
    },
    {
      title: "コミュニケーションサークル発表",
      description: "発表・交流",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["発表", "コミュニケーション"],
      href: "/plans/communication-circle",
    },
    {
      title: "第1回福岡薬院クイズ王決定戦",
      description: "クイズ大会",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["クイズ", "大会", "知識"],
      href: "/plans/quiz-contest",
    },
    {
      title: "カラオケ大会 ~ in 福岡薬院 ~",
      description: "エンターテイメント",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["音楽", "大会", "エンタメ"],
      href: "/plans/karaoke-contest",
    },
    {
      title: "倉本さんのお悩み相談室",
      description: "相談・交流",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["相談", "交流", "人生"],
      href: "/plans/kuramoto-consultation",
    },
    {
      title: "薬院老人会によるバンド演奏",
      description: "音楽・演奏",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["音楽", "バンド", "世代交流"],
      href: "/plans/senior-band",
    },
  ]

  const displayedExperiencePlans = showAllExperience ? experiencePlans : experiencePlans.slice(0, 3)
  const displayedStagePlans = showAllStage ? stagePlans : stagePlans.slice(0, 3)

  const PlanCard = ({ plan, index }: { plan: any; index: number }) => (
    <Link key={index} href={plan.href}>
      <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 transform h-full">
        <Image
          src={plan.image || "/placeholder.svg"}
          alt={plan.title}
          width={400}
          height={250}
          className="w-full h-40 md:h-48 object-cover"
        />
        <CardHeader className="p-3 md:p-6">
          <CardTitle className="text-lg md:text-xl font-semibold line-clamp-2">{plan.title}</CardTitle>
          <CardDescription className="text-gray-600 text-sm md:text-base">{plan.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-1 md:gap-2 mt-auto p-3 md:p-6 pt-0">
          {plan.tags.map((tag: string, tagIndex: number) => (
            <span
              key={tagIndex}
              className="px-2 md:px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </CardContent>
      </Card>
    </Link>
  )

  return (
    <section id="plans" className="py-12 md:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-10">企画紹介</h2>

        {/* 体験型企画 */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-3xl font-bold text-center mb-6 md:mb-8">体験型企画</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {displayedExperiencePlans.map((plan, index) => (
              <PlanCard key={index} plan={plan} index={index} />
            ))}
          </div>
          <div className="text-center mt-6 md:mt-8">
            <Button
              variant="outline"
              className="group bg-transparent text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
              onClick={() => setShowAllExperience(!showAllExperience)}
            >
              {showAllExperience ? "体験型企画を閉じる" : "体験型企画一覧をみる"}
              <ArrowRightIcon
                className={`ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform ${showAllExperience ? "rotate-180" : "group-hover:translate-x-1"}`}
              />
            </Button>
          </div>
        </div>

        {/* ステージ企画 */}
        <div>
          <h3 className="text-xl md:text-3xl font-bold text-center mb-6 md:mb-8">ステージ企画</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {displayedStagePlans.map((plan, index) => (
              <PlanCard key={index} plan={plan} index={index} />
            ))}
          </div>
          <div className="text-center mt-6 md:mt-8">
            <Button
              variant="outline"
              className="group bg-transparent text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
              onClick={() => setShowAllStage(!showAllStage)}
            >
              {showAllStage ? "ステージ企画を閉じる" : "ステージ企画一覧をみる"}
              <ArrowRightIcon
                className={`ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform ${showAllStage ? "rotate-180" : "group-hover:translate-x-1"}`}
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
