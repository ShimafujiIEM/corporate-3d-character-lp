import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import ProcessSection from "./components/ProcessSection"
import PortfolioSection from "./components/PortfolioSection"
import PricingSection from "./components/PricingSection"
import TestimonialsSection from "./components/TestimonialsSection"
import CTASection from "./components/CTASection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProcessSection />
      <PortfolioSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}

