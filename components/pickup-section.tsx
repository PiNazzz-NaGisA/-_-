import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

export function PickupSection() {
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
      href: null,
    },
    {
      title: "プロジェクションマッピング",
      description: "企画班",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["企画班", "アート"],
      href: null,
    },
    {
      title: "パンケーキ",
      description: "物販",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["物販", "フード"],
      href: null,
    },
    {
      title: "わらび餅ドリンク",
      description: "物販",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["物販", "ドリンク"],
      href: null,
    },
    {
      title: "週3物販",
      description: "物販",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["物販", "その他"],
      href: null,
    },
  ]

  return (
    <section id="plans" className="py-12 md:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">企画紹介</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => {
            const CardComponent = (
              <Card
                key={index}
                className={`flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  plan.href ? "cursor-pointer hover:scale-105 transform transition-transform" : ""
                }`}
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

            return plan.href ? (
              <Link key={index} href={plan.href}>
                {CardComponent}
              </Link>
            ) : (
              CardComponent
            )
          })}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" className="group bg-transparent">
            企画一覧をみる
            <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
