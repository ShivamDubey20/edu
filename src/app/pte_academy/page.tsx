'use client'

import { Clock, Users, Target, BookOpen, ChevronRight, GraduationCap, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Hero } from "./hero"
import { IELTSSection } from "./pte-section"
import FAQSection from "./faq-section"
export default function IELTSLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Hero />

      {/* About IELTS */}
      <section className="bg-blue-400 text-white p-10 rounded-2xl shadow-2xl mx-auto my-8 max-w-5xl hover:shadow-3xl transition-shadow duration-300">
        <div className="border-2 border-white p-8 rounded-xl">
          <motion.div
            className="space-y-6 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Floating decorative elements */}
            <div className="absolute top-4 left-4 w-6 h-6 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/10 rounded-full animate-bounce"></div>

            <p className="leading-relaxed text-lg tracking-wide hover:scale-105 transition-transform duration-300">
              Ace the PTE Academic exam with our expert-designed course. Whether you’re
              planning to study abroad, apply for a work visa, or settle permanently, our
              comprehensive training will help you achieve your target score in all four
              modules: 
            </p>

            {/* Icons for sections */}
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🎧</span>
                <p className="mt-2">Listening</p>
              </div>
              <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📖</span>
                <p className="mt-2">Reading</p>
              </div>
              <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">✍️</span>
                <p className="mt-2">Writing</p>
              </div>
              <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🗣️</span>
                <p className="mt-2">Speaking</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* About Course Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.4))] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">About the Course</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-100 to-blue-200 mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Clock className="w-8 h-8 text-blue-600" />,
                title: "Flexible Duration",
                description: "Choose between 1-2 months with customizable learning paths",
              },
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: "All Levels Welcome",
                description: "Tailored programs for beginners to advanced learners",
              },
              {
                icon: <BookOpen className="w-8 h-8 text-blue-600" />,
                title: "Schedule",
                description: "Anytime from 7 AM to 9 PM",
              },
              {
                icon: <Target className="w-8 h-8 text-blue-600" />,
                title: "Pricing",
                description: "Contact us for details on course fees and discounts",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-50 rounded-xl">{item.icon}</div>
                    <CardTitle className="text-lg text-blue-900">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.2),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.2),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 bg-white/80 backdrop-blur-sm p-8 rounded-xl">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-blue-900">Benefits of IELTS</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full" />
                </div>
                <ul className="space-y-4">
                  {[
                    "Opens global opportunities for study, work, and immigration.",
                    "Recognized by top universities and employers worldwide.",
                    "Helps in visa applications for various countries.",
                    "Academic Excellence: Required by top universities globally.",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 bg-white/80 backdrop-blur-sm p-8 rounded-xl">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-blue-900">Why Choose Us?</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full" />
                </div>
                <ul className="space-y-4">
                  {[
                    "Expert Tutors: Learn from certified PTE trainers.",
                    "Module-Wise Training: Detailed coverage of all test sections.",
                    "Unlimited Mock Tests: Practice under real-exam conditions.",
                    "Grammar & Writing Lessons: Strengthen fundamental skills.",
                    " Feedback Sessions: Get personalized guidance and strategies.",
                  ].map((reason, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IELTS Section */}
      <IELTSSection />



      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 text-2xl text-blue-600 mb-9">
          Start your PTE Academic journey with JG Language Academy and achieve your dream score effortlessly!
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 bg-white shadow-xl rounded-2xl p-10">
          <GraduationCap className="w-14 h-14 text-blue-600 mx-auto" />
          <h2 className="text-3xl font-bold text-blue-900">Ready to Start Your PTE Journey?</h2>
          <p className="text-lg text-blue-600">
            Join our next batch and take the first step towards your international goals.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
              Register Now
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 shadow-sm px-6 py-4">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center text-sm">
                <span>Call: +123-456-7890</span>
                <span className="hidden sm:block">|</span>
                <span>Email: info@3clanguageacademy.com</span>
              </div>
            </Button>
          </div>
        </div>
      </section>

      <FAQSection />

    </div>
  )
}

