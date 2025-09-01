import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PickupSection() {
  const plans = [
    {
      id: "shooting",
      title: "射的企画班",
      description: "的を狙って景品をゲット！昔懐かしい射的ゲームをお楽しみください。",
      image: "/placeholder.svg?height=200&width=300&text=射的企画班",
      href: "/plans/shooting",
    },
    {
      id: "photobooth",
      title: "フォトブース",
      description: "思い出の一枚を撮影しよう！様々な小道具とセットをご用意しています。",
      image: "/placeholder.svg?height=200&width=300&text=フォトブース",
      href: "/plans/photobooth",
    },
    {
      id: "projection",
      title: "プロジェクションマッピング",
      description: "最新技術による幻想的な映像体験をお楽しみください。",
      image: "/placeholder.svg?height=200&width=300&text=プロジェクションマッピング",
      href: "/plans/projection",
    },
    {
      id: "food",
      title: "食品販売",
      description: "パンケーキとわらび餅ドリンクの美味しい組み合わせをお楽しみください。",
      image: "/placeholder.svg?height=200&width=300&text=食品販売",
      href: "/plans/food",
    },
    {
      id: "weekly1-workshop",
      title: "週1物販ワークショップ",
      description: "手作り体験と物販を組み合わせた楽しいワークショップです。",
      image: "/placeholder.svg?height=200&width=300&text=週1物販ワークショップ",
      href: "/plans/weekly1-workshop",
    },
    {
      id: "ned-fukuoka",
      title: "NED in 福岡薬院万博2025",
      description: "地域密着型の特別企画。薬院の魅力を再発見する万博形式イベントです。",
      image: "/placeholder.svg?height=200&width=300&text=NED+in+福岡薬院万博2025",
      href: "/plans/ned-fukuoka",
    },
    {
      id: "kuramoto-consultation",
      title: "倉本さんのお悩み相談室",
      description: "人生経験豊富な倉本さんが、皆さんのお悩みに真摯にお答えします。",
      image: "/placeholder.svg?height=200&width=300&text=倉本さんのお悩み相談室",
      href: "/plans/kuramoto-consultation",
    },
    {
      id: "communication-circle",
      title: "コミュニケーションサークル発表",
      description: "スピーチやプレゼンテーションなど、コミュニケーション技術の発表会です。",
      image: "/placeholder.svg?height=200&width=300&text=コミュニケーションサークル発表",
      href: "/plans/communication-circle",
    },
    {
      id: "karaoke-contest",
      title: "カラオケ大会 ~ in 福岡薬院 ~",
      description: "歌自慢の皆さん集合！福岡薬院初のカラオケ大会を開催します。",
      image: "/placeholder.svg?height=200&width=300&text=カラオケ大会",
      href: "/plans/karaoke-contest",
    },
    {
      id: "quiz-contest",
      title: "第1回福岡薬院クイズ王決定戦",
      description: "知識自慢の皆さん、チームを組んで福岡薬院の初代クイズ王を目指そう！",
      image: "/placeholder.svg?height=200&width=300&text=クイズ王決定戦",
      href: "/plans/quiz-contest",
    },
    {
      id: "senior-band",
      title: "薬院老人会によるバンド演奏",
      description: "地域の薬院老人会による心温まるバンド演奏をお楽しみください。",
      image: "/placeholder.svg?height=200&width=300&text=薬院老人会バンド演奏",
      href: "/plans/senior-band",
    },
    {
      id: "submarine-escape",
      title: "爆破しうる潜水艇からの脱出",
      description: "制限時間60分！チームワークで潜水艇からの脱出を目指せ！",
      image: "/placeholder.svg?height=200&width=300&text=潜水艇脱出ゲーム",
      href: "/plans/submarine-escape",
    },
  ]

  return (
    <section id="plans" className="py-12 md:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">企画紹介</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {plans.map((plan) => (
            <Card key={plan.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200">
                <img src={plan.image || "/placeholder.svg"} alt={plan.title} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{plan.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <Link href={plan.href}>
                  <Button variant="outline" className="w-full bg-transparent">
                    詳細を見る
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            企画一覧をみる
          </Button>
        </div>
      </div>
    </section>
  )
}
