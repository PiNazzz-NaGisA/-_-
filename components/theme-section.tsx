export function ThemeSection() {
  return (
    <section id="theme" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">今年のテーマ</h2>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-blue-600 mb-6">「つながり〜夏の思い出と共に〜」</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            薬院キャンフェスは、学生と地域の皆様、そして参加者同士の「つながり」を大切にしています。
            夏の暖かな思い出と共に、新しい出会いと発見に満ちた特別な一日をお過ごしください。
            様々な企画を通じて、世代を超えた交流と笑顔あふれる時間を創り出します。
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-3">地域とのつながり</h4>
              <p className="text-gray-700">地域の皆様と学生が一緒に楽しめる企画を多数ご用意しています。</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-3">世代を超えた交流</h4>
              <p className="text-gray-700">子どもから大人まで、みんなが楽しめる多彩なプログラムをお届けします。</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-3">夏の思い出作り</h4>
              <p className="text-gray-700">特別な体験と素敵な思い出を作っていただけるよう心を込めて準備しています。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
