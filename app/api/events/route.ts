import { NextResponse } from "next/server"

// サンプルイベントデータ
const events = [
  {
    id: 1,
    name: "NED福岡",
    date: "2024-11-16",
    time: "10:00-17:00",
    location: "メインステージ",
  },
  {
    id: 2,
    name: "コミュニケーション・サークル",
    date: "2024-11-16",
    time: "11:00-16:00",
    location: "メインステージ",
  },
  {
    id: 3,
    name: "先輩会バンド",
    date: "2024-11-16",
    time: "12:00-15:00",
    location: "メインステージ",
  },
  {
    id: 4,
    name: "カラオケ大会",
    date: "2024-11-16",
    time: "13:00-16:00",
    location: "メインステージ",
  },
]

export async function GET() {
  return NextResponse.json(events)
}
