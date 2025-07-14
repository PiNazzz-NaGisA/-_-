import { NextResponse } from "next/server"

type Message = {
  id: number
  name: string
  email: string
  message: string
}

let messages: Message[] = []

export async function GET() {
  // Return all messages (in-memory)
  return NextResponse.json({ messages })
}

export async function POST(request: Request) {
  const body = await request.json()
  const newMessage: Message = {
    id: messages.length + 1,
    name: body.name,
    email: body.email,
    message: body.message,
  }
  messages.push(newMessage)
  return NextResponse.json(newMessage, { status: 201 })
}
