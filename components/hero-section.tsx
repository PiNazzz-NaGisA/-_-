import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">薬院キャンフェス</h1>
        <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          2024年11月16日（土）10:00-17:00
          <br />
          薬院キャンパスで開催される特別なフェスティバル
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-3">
            企画一覧を見る
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
            アクセス情報
          </Button>
        </div>
      </div>
    </section>
  )
}
