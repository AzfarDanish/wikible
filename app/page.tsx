import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import HowItWorks from "@/components/how-it-works"
import UseCases from "@/components/use-cases"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <UseCases />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
