import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { JobListings } from "@/components/job-listings"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <JobListings />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  )
}

