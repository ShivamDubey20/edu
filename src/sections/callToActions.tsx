"use client"

import { Phone, Mail, Sparkles, ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="w-full py-12 px-6 flex justify-center items-center">
      <div className="relative max-w-5xl bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-2xl shadow-lg overflow-hidden p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <Sparkles className="absolute top-6 left-8 text-blue-400 opacity-40 w-6 h-6 animate-pulse" />
          <Sparkles className="absolute bottom-6 right-8 text-blue-300 opacity-30 w-4 h-4 animate-pulse delay-500" />
          <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-blue-100 rounded-full opacity-50" />
          <div className="absolute -right-4 -top-4 w-20 h-20 bg-blue-50 rounded-full opacity-40" />
        </div>
        
        {/* Mascot Image with Animation - INCREASED SIZE */}
        <div className="relative flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
          <img 
            src="mascot.webp" 
            alt="Friendly Mascot" 
            className="w-64 h-64 object-contain drop-shadow-xl"
          />
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-blue-300 rounded-full flex items-center justify-center shadow-md animate-bounce">
            ✨
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-4 text-center md:text-left relative z-10">
          <div className="space-y-2">
            <p className="text-lg font-semibold text-blue-900">
              Start your journey toward success today!
            </p>
            <p className="text-blue-700 text-sm">
              Enroll in our expert-led courses and achieve your desired score.
            </p>
          </div>

          {/* Contact Info with Hover Effects */}
          <div className="mt-4 space-y-3">
            <h3 className="text-lg font-semibold text-blue-900">Contact Us</h3>
            
            <div className="space-y-2">
              <a 
                href="tel:+1234567890" 
                className="group flex items-center justify-center md:justify-start gap-3 bg-blue-50/80 p-2.5 rounded-lg text-blue-700 hover:bg-blue-100 hover:shadow-md transition-all duration-300"
              >
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span className="text-base">+123-456-7890</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
              
              <a 
                href="mailto:info@languageacademy.com"
                className="group flex items-center justify-center md:justify-start gap-3 bg-blue-50/80 p-2.5 rounded-lg text-blue-700 hover:bg-blue-100 hover:shadow-md transition-all duration-300"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-base">info@languageacademy.com</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}