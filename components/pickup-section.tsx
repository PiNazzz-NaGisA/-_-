import type React from "react"
import { Card } from "@/components/ui/card"

const PickupSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">注目の企画</h2>
        <p className="text-gray-700 mb-8">文化祭をさらに盛り上げる、おすすめの企画をご紹介します。</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <Card className="flex flex-col items-center p-6 text-left">
            <img
              src="/placeholder.svg?height=200&width=300"
              alt="射的企画班"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">射的企画班</h3>
            <p className="text-gray-600 text-sm">伝統的な射的ゲームで腕試し！豪華景品をゲットしよう。</p>
          </Card>
          <Card className="flex flex-col items-center p-6 text-left">
            <img
              src="/placeholder.svg?height=200&width=300"
              alt="企画班ゲーム"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">企画班ゲーム</h3>
            <p className="text-gray-600 text-sm">企画班が考案したユニークなゲームで友達と盛り上がろう！</p>
          </Card>
          <Card className="flex flex-col items-center p-6 text-left">
            <img
              src="/placeholder.svg?height=200&width=300"
              alt="フォトブース企画班"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">フォトブース企画班</h3>
            <p className="text-gray-600 text-sm">思い出に残る写真を撮ろう！楽しい背景や小道具を用意しています。</p>
          </Card>
          <Card className="flex flex-col items-center p-6 text-left">
            <img
              src="/placeholder.svg?height=200&width=300"
              alt="プロジェクションマッピング企画班"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">プロジェクションマッピング企画班</h3>
            <p className="text-gray-600 text-sm">幻想的な光と映像のアートを体験！夜のキャンパスを彩ります。</p>
          </Card>
          <Card className="flex flex-col items-center p-6 text-left">
            <img
              src="/placeholder.svg?height=200&width=300"
              alt="パンケーキ物販"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">パンケーキ物販</h3>
            <p className="text-gray-600 text-sm">ふわふわの美味しいパンケーキを販売！休憩にどうぞ。</p>
          </Card>
          <Card className="flex flex-col items-center p-6 text-left">
            <img
              src="/placeholder.svg?height=200&width=300"
              alt="わらび餅ドリンク物販"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">わらび餅ドリンク物販</h3>
            <p className="text-gray-600 text-sm">ひんやり美味しいわらび餅と、様々なドリンクをご用意！</p>
          </Card>
          <Card className="flex flex-col items-center p-6 text-left">
            <img
              src="/placeholder.svg?height=200&width=300"
              alt="週3物販"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">週3物販</h3>
            <p className="text-gray-600 text-sm">週3回限定の特別物販！お見逃しなく。</p>
          </Card>
          <Card className="flex flex-col items-center p-6 text-left">
            <img
              src="/placeholder.svg?height=200&width=300"
              alt="その他企画一覧をみる"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">その他企画一覧をみる</h3>
            <p className="text-gray-600 text-sm">全ての企画はこちらでチェック！</p>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default PickupSection
