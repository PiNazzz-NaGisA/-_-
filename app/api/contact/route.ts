import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // ここで実際のお問い合わせ処理を行う
    // 例: データベースに保存、メール送信など
    console.log("お問い合わせを受信:", { name, email, message })

    return NextResponse.json({ success: true, message: "お問い合わせを受け付けました。" }, { status: 200 })
  } catch (error) {
    console.error("お問い合わせ処理エラー:", error)
    return NextResponse.json(
      { success: false, message: "お問い合わせの処理中にエラーが発生しました。" },
      { status: 500 },
    )
  }
}
