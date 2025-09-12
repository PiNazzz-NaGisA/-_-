export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">薬院キャンフェス</h3>
            <p className="text-gray-300">
              薬院キャンパスフェスティバルは、地域の皆様と学生が 一緒に楽しめる特別なイベントです。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">開催情報</h3>
            <ul className="text-gray-300 space-y-2">
              <li>日時: 2024年11月16日（土）</li>
              <li>時間: 10:00 - 17:00</li>
              <li>場所: 薬院キャンパス</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
            <ul className="text-gray-300 space-y-2">
              <li>電話: 092-XXX-XXXX</li>
              <li>メール: info@yakuin-canfes.jp</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 薬院キャンフェス実行委員会. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
