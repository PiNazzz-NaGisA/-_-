import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContentSection() {
  return (
    <section id="content" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">企画内容</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>ステージ企画</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                様々なパフォーマンスが繰り広げられるメインステージ。
                音楽、ダンス、演劇など多彩な企画をお楽しみください。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>フード企画</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                地元の美味しい食材を使った特別メニューや、 学生手作りの心のこもった料理をご提供します。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>体験企画</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">ワークショップやゲーム、展示など、 参加型の楽しい企画が盛りだくさんです。</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
