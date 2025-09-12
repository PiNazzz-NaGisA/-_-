import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MapPin } from "lucide-react"

export function PickupSection() {
  const pickupEvents = [
    // ステージ企画（指定された順序）
    {
      id: "ned-fukuoka",
      title: "NED福岡",
      description: "エネルギッシュなパフォーマンスと観客との一体感を大切にしたステージをお届けします。",
      image: "/ned------.jpg",
      time: "10:00 - 17:00",
      location: "メインステージ",
      category: "ステージ企画",
    },
    {
      id: "communication-circle",
      title: "コミュニケーション・サークル",
      description: "様々な表現を通じて、観客の皆様とのコミュニケーションを大切にした楽しいステージをお届けします。",
      image: "/-----------.jpg",
      time: "11:00 - 16:00",
      location: "メインステージ",
      category: "ステージ企画",
    },
    {
      id: "senior-band",
      title: "先輩会バンド",
      description: "薬院の先輩方によるバンド演奏です。長年培った音楽経験と情熱を込めた演奏で、会場を盛り上げます。",
      image: "/----------.jpg",
      time: "12:00 - 15:00",
      location: "メインステージ",
      category: "ステージ企画",
    },
    {
      id: "karaoke-contest",
      title: "カラオケ大会",
      description: "薬院キャンフェス恒例のカラオケ大会です！学生、教職員、地域の皆様どなたでも参加できます。",
      image: "/-------.jpg",
      time: "13:00 - 16:00",
      location: "メインステージ",
      category: "ステージ企画",
    },
    // その他の企画
    {
      id: "food",
      title: "フード企画",
      description: "地元の食材を使った特別メニューや、学生が手作りする心のこもった料理をお楽しみいただけます。",
      image: "/placeholder.jpg?height=200&width=300&text=フード企画",
      time: "10:00 - 17:00",
      location: "フードコート",
      category: "フード",
    },
    {
      id: "pancake",
      title: "パンケーキ",
      description: "ふわふわで美味しい手作りパンケーキをご提供します。様々なトッピングをご用意しています。",
      image: "/placeholder.jpg?height=200&width=300&text=パンケーキ",
      time: "10:00 - 16:00",
      location: "フードエリア",
      category: "フード",
    },
    {
      id: "warabimochi",
      title: "わらび餅",
      description: "手作りの美味しいわらび餅をご提供します。ぷるぷるとした食感と上品な甘さが自慢です。",
      image: "/placeholder.jpg?height=200&width=300&text=わらび餅",
      time: "11:00 - 16:00",
      location: "和菓子コーナー",
      category: "フード",
    },
    {
      id: "quiz-contest",
      title: "クイズ大会",
      description: "知識と知恵を競う楽しいクイズ大会です！チーム戦で協力しながら挑戦していただけます。",
      image: "/placeholder.jpg?height=200&width=300&text=クイズ大会",
      time: "13:00 - 15:00",
      location: "講堂",
      category: "体験",
    },
    {
      id: "submarine-escape",
      title: "潜水艦脱出ゲーム",
      description: "チームワークと知恵を駆使して潜水艦からの脱出を目指すリアル脱出ゲームです！",
      image: "/placeholder.jpg?height=200&width=300&text=潜水艦脱出ゲーム",
      time: "10:00 - 17:00",
      location: "特設会場",
      category: "体験",
    },
    {
      id: "shooting",
      title: "射的",
      description: "昔懐かしい射的ゲームです！コルクガンを使って的を狙い撃ちしてください。",
      image: "/placeholder.jpg?height=200&width=300&text=射的",
      time: "10:00 - 17:00",
      location: "ゲームコーナー",
      category: "体験",
    },
    {
      id: "photobooth",
      title: "フォトブース",
      description: "薬院キャンフェスの思い出を写真に残しませんか？可愛い背景やプロップスをご用意しています。",
      image: "/placeholder.jpg?height=200&width=300&text=フォトブース",
      time: "10:00 - 17:00",
      location: "エントランス",
      category: "体験",
    },
  ]

  return (
    <section id="pickup" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">ピックアップ企画</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pickupEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute top-2 left-2">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">{event.category}</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                <Link href={`/plans/${event.id}`}>
                  <Button variant="outline" className="w-full bg-transparent">
                    詳細を見る
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
