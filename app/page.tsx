import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ThemeSection } from "@/components/theme-section"
import { ContentSection } from "@/components/content-section"
import { PickupSection } from "@/components/pickup-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ThemeSection />
        <ContentSection />
        <PickupSection />
      </main>
      <Footer />
    </div>
  )
}
