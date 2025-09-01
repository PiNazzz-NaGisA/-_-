import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PhotoboothPlanPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-screen-xl mx-auto w-full px-4 py-8">
        <div className="mb-6">
          <Link href="/#plans">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              企画一覧に戻る
            </Button>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96">
            <Image
              src="/placeholder.svg?height=400&width=800&text=フォトブース"
              alt="フォトブース企画班"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">企画班</span>
              <span className="px-3 py-1 bg-pink-100 text-pink-800 text-sm font-medium rounded-full">写真</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">フォトブース企画班</h1>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">企画概要</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                思い出に残る写真を撮ろう！楽しい背景や小道具を用意して、
                キャンフェスの思い出を素敵な写真に残すお手伝いをします。
                友達同士、家族、カップルでの記念撮影にぜひご利用ください。
              </p>

              <h2 className="text-2xl font-semibold mb-4">詳細情報</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">開催時間</h3>
                  <p className="text-gray-700">11:30 - 17:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">場所</h3>
                  <p className="text-gray-700">エントランスホール</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">参加費</h3>
                  <p className="text-gray-700">無料</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">対象</h3>
                  <p className="text-gray-700">どなたでも参加可能</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-4">用意している背景・小道具</h2>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>キャンフェス2025オリジナル背景</li>
                <li>季節感あふれる秋の装飾</li>
                <li>面白い帽子やメガネなどの小道具</li>
                <li>手作りのフォトプロップス</li>
                <li>インスタ映えするネオンサイン風ボード</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">撮影の流れ</h2>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>受付でお好みの背景を選択</li>
                <li>小道具を自由にお選びください</li>
                <li>スタッフがポーズのアドバイスをします</li>
                <li>お客様のスマートフォンで撮影</li>
                <li>気に入らなければ何度でも撮り直しOK！</li>
              </ol>

              <h2 className="text-2xl font-semibold mb-4">企画班からのメッセージ</h2>
              <div className="bg-pink-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  フォトブース企画班では、皆様の大切な思い出作りをお手伝いします！
                  手作りの背景や小道具で、他では撮れない特別な写真を撮影できます。
                  スタッフ一同、笑顔でお待ちしておりますので、ぜひお気軽にお立ち寄りください♪
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
