import ClientRouter from "@/components/ClientRouter"
import StatsStrip from "@/components/StatsStrip"
import CallToAction from "@/sections/callToActions"
import DemoSection from "@/sections/demo-section"
import FeaturedCourses from "@/sections/featuredCourses"
import Hero from "@/sections/hero"
import Navbar from "@/sections/navbar"
import Testimonials from "@/sections/testimonials"
import { Suspense } from "react"

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-r from-blue-100 via-white to-blue-50 overflow-x-hidden border-8 border-blue-100">
      <ClientRouter>
        <Navbar />
        <Hero />
        <StatsStrip/>
        <FeaturedCourses/>
        <Suspense fallback={<div>Loading...</div>}>
          <DemoSection/>
        </Suspense>
        <Testimonials/>
        <CallToAction/>
      </ClientRouter>
    </div>
  )
}
