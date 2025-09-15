import type { ReactNode } from "react"

interface ContentSectionProps {
  id: string
  title: string
  children: ReactNode
  className?: string
}

export function ContentSection({ id, title, children, className }: ContentSectionProps) {
  return (
    <section id={id} className={`py-8 md:py-20 ${className || "bg-white"}`}>
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8">{title}</h2>
        <div className="prose max-w-3xl mx-auto text-gray-700 text-sm md:text-base">{children}</div>
      </div>
    </section>
  )
}
