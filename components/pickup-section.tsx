"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users, Utensils, Music, Camera, Gamepad2, Palette, Mic, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const experienceEvents = [
  {
    id: "food",
    title: "フード企画",
    description: "美味しい食べ物を楽しもう！",
    image: "/placeholder.svg?height=200&width=300&text=フード企画",
    icon: <Utensils className="h-5 w-5" />,
    category: "グルメ",
    time: "11:30-17:00",
    location: "各教室",
    href: "/plans/food",
  },
  {
    id: "photobooth",
    title: "フォトブース",
    description: "思い出の写真を撮ろう！",
    image: "/placeholder.svg?height=200&width=300&text=フォトブース",
    icon: <Camera className="h-5 w-5" />,
    category: "撮影",
    time: "12:00-17:00",
    location: "1階ロビー",
    href: "/plans/photobooth",
  },
  {
    id: "shooting",
    title: "射的",
    description: "的を狙って景品をゲット！",
    image: "/placeholder.svg?height=200&width=300&text=射的",
    icon: <Gamepad2 className="h-5 w-5" />,
    category: "ゲーム",
    time: "12:00-17:00",
    location: "体育館",
    href: "/plans/shooting",
  },
  {
    id: "projection",
    title: "プロジェクションマッピング",
    description: "幻想的な映像体験",
    image: "/placeholder.svg?height=200&width=300&text=プロジェクションマッピング",
    icon: <Palette className="h-5 w-5" />,
    category: "映像",
    time: "13:00-17:00",
    location: "大講義室",
    href: "/plans/projection",
  },
  {
    id: "submarine-escape",
    title: "潜水艦脱出ゲーム",
    description: "チームで謎を解いて脱出せよ！",
    image: "/placeholder.svg?height=200&width=300&text=潜水艦脱出ゲーム",
    icon: <Gamepad2 className="h-5 w-5" />,
    category: "謎解き",
    time: "12:30-16:30",
    location: "3階教室",
    href: "/plans/submarine-escape",
  },
  {
    id: "weekly1-workshop",
    title: "週1ワークショップ",
    description: "楽しい体験型ワークショップ",
    image: "/placeholder.svg?height=200&width=300&text=週1ワークショップ",
    icon: <Users className="h-5 w-5" />,
    category: "体験",
    time: "13:00-16:00",
    location: "2階教室",
    href: "/plans/weekly1-workshop",
  },
  {
    id: "piano-accordion",
    title: "ピアノ・アコーディオン演奏",
    description: "美しい音色をお楽しみください",
    image: "/placeholder.svg?height=200&width=300&text=ピアノ・アコーディオン演奏",
    icon: <Music className="h-5 w-5" />,
    category: "音楽",
    time: "14:00-16:00",
    location: "音楽室",
    href: "/plans/piano-accordion",
  },
  {
    id: "kuramoto-consultation",
    title: "倉本相談室",
    description: "お悩み相談承ります",
    image: "/placeholder.svg?height=200&width=300&text=倉本相談室",
    icon: <Heart className="h-5 w-5" />,
    category: "相談",
    time: "13:00-16:00",
    location: "相談室",
    href: "/plans/kuramoto-consultation",
  },
  {
    id: "quiz-contest",
    title: "クイズ大会",
    description: "知識を競い合おう！",
    image: "/placeholder.svg?height=200&width=300&text=クイズ大会",
    icon: <Gamepad2 className="h-5 w-5" />,
    category: "クイズ",
    time: "15:00-16:00",
    location: "大講義室",
    href: "/plans/quiz-contest",
  },
]

const stageEvents = [
  {
    id: "ned-fukuoka",
    title: "NED in 福岡薬院万博2025",
    description: "NED関係の何かを入れる",
    image: "/ned------.jpg",
    icon: <Mic className="h-5 w-5" />,
    category: "発表",
    time: "12:15-12:45",
    location: "ステージ",
    href: "/plans/ned-fukuoka",
  },
  {
    id: "communication-circle",
    title: "コミュニケーションサークル発表",
    description: "ドラマ化決定！",
    image: "/-----------.jpg",
    icon: <Users className="h-5 w-5" />,
    category: "発表",
    time: "13:15-13:35",
    location: "ステージ",
    href: "/plans/communication-circle",
  },
  {
    id: "karaoke-contest",
    title: "カラオケ大会 ~ in 福岡薬院 ~",
    description: "歌自慢の皆さん集合！",
    image: "/----------.jpg",
    icon: <Mic className="h-5 w-5" />,
    category: "音楽",
    time: "14:05-14:35",
    location: "ステージ",
    href: "/plans/karaoke-contest",
  },
  {
    id: "senior-band",
    title: "薬院老人会によるバンド演奏",
    description: "地域の皆さんによる心温まる演奏",
    image: "/-------.jpg",
    icon: <Music className="h-5 w-5" />,
    category: "音楽",
    time: "14:35-15:20",
    location: "ステージ",
    href: "/plans/senior-band",
  },
]

export function PickupSection() {
  return (
    <section id="plans" className="py-16 bg-gradient-to-b from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">企画紹介</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            体験型企画からステージ企画まで、多彩なプログラムをご用意しています
          </p>
        </div>

        {/* 体験型企画 */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-orange-100 rounded-full p-3 mr-4">
              <Users className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">体験型企画</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experienceEvents.map((event) => (
              <Card
                key={event.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-orange-200"
              >
                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                      {event.category}
                    </Badge>
                    <div className="flex items-center text-orange-600">{event.icon}</div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-orange-600 transition-colors">{event.title}</CardTitle>
                  <CardDescription className="text-sm">{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-orange-500" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                      {event.location}
                    </div>
                  </div>
                  <Link href={event.href}>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">詳細を見る</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ステージ企画 */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <div className="bg-red-100 rounded-full p-3 mr-4">
              <Mic className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">ステージ企画</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stageEvents.map((event) => (
              <Card
                key={event.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-red-200"
              >
                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-red-100 text-red-700 hover:bg-red-200">
                      {event.category}
                    </Badge>
                    <div className="flex items-center text-red-600">{event.icon}</div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-red-600 transition-colors">{event.title}</CardTitle>
                  <CardDescription className="text-sm">{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-red-500" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-red-500" />
                      {event.location}
                    </div>
                  </div>
                  <Link href={event.href}>
                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white">詳細を見る</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg"
          >
            その他企画一覧をみる
          </Button>
        </div>
      </div>
    </section>
  )
}
