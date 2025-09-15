import { NextResponse } from "next/server"

interface Event {
  id: number
  title: string
  description: string
  datetime: string
}

let events: Event[] = [
  {
    id: 1,
    title: "オープニングセレモニー",
    description: "イベント開始を盛り上げるセレモニー",
    datetime: "2025-09-20T12:00:00+09:00",
  },
]

export async function GET() {
  return NextResponse.json({ events })
}

export async function POST(request: Request) {
  const body = await request.json()
  const newEvent: Event = {
    id: events.length + 1,
    title: body.title,
    description: body.description,
    datetime: body.datetime,
  }
  events.push(newEvent)
  return NextResponse.json(newEvent, { status: 201 })
}
