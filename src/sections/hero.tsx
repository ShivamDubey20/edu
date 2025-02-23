"use client"

import { PlayCircle, Users, BookOpen,  Globe, CheckCircle, Target } from "lucide-react"
import Link from "next/link"


const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-100 relative pt-8 pb-28 overflow-hidden">
      {/* Refined Background Elements */}
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-blue-200 rounded-full blur-[180px] opacity-20 -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-blue-200 rounded-full blur-[180px] opacity-20 translate-y-1/4 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-12 sm:px-16 lg:px-20 relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 space-y-6 max-w-xl pt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 mb-4">
              <span className="flex items-center text-sm font-medium tracking-wider">
                <Globe className="w-4 h-4 mr-2" />
                WELCOME TO JG LANGUAGE ACADEMY
              </span>
            </div>

            <h1 className="prata-regular text-4xl md:text-5xl text-blue-900 leading-tight">
              Prepare for <span className="text-blue-600">IELTS, PTE, CELPIP, OET, and NAATI</span> with Expert-Led Courses
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you are aiming for higher education, professional certification, or immigration, our structured training programs will help you succeed. Benefit from personalized coaching, extensive practice materials, and proven strategies tailored to your learning style.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
              {[
                { icon: <Users className="w-5 h-5 text-blue-500" />, text: "Personalized Coaching" },
                { icon: <CheckCircle className="w-5 h-5 text-blue-500" />, text: "Proven Strategies" },
                { icon: <BookOpen className="w-5 h-5 text-blue-500" />, text: "Extensive Materials" },
                { icon: <Target className="w-5 h-5 text-blue-500" />, text: "Score Guarantees" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-3 whitespace-nowrap">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white px-7 py-3.5 rounded-lg text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center whitespace-nowrap">
                  Start Your Journey Today

                </button>
              </Link>

              <Link href="#demo-video">
                <button className="flex items-center gap-3 text-blue-700 hover:text-blue-600 transition-colors duration-300 text-base font-medium group px-4 py-2 border border-transparent hover:border-blue-100 rounded-lg hover:bg-blue-50/50 whitespace-nowrap">
                  <PlayCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <span>Watch Success Stories</span>
                </button>
              </Link>
            </div>


          </div>

          {/* Right Content - Enhanced with Taller Image */}
          <div className="flex-1 relative w-full max-w-3xl p-8">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-100/50 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100/50 rounded-full blur-xl"></div>



            {/* Decorative Corner Lines */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-blue-200/50 rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-blue-200/50 rounded-bl-3xl"></div>

            {/* Main Image Container - Increased Height */}
            <div className="relative w-full aspect-[1] rounded-2xl overflow-hidden shadow-2xl">
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent"></div>

              {/* Main Image */}
              <img
                src="/img_hero_2.webp"

                alt="Students collaborating in a modern classroom environment"
                className="object-cover w-full h-full rounded-lg transform hover:scale-102 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1000px"
                loading="eager"
                style={{ imageRendering: "crisp-edges" }}
              />


              {/* Double Border Effect */}
              <div className="absolute inset-0 border border-blue-200/30 rounded-2xl"></div>
              <div className="absolute inset-2 border border-blue-100/20 rounded-xl"></div>
            </div>

            {/* Decorative Circles */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 border-4 border-blue-200/30 rounded-full"></div>
                <div className="absolute inset-4 border-4 border-blue-200/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

   
         
      </div>
    </section>
  )
}

export default Hero