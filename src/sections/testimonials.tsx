"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Shivam",
    image: "/placeholder.svg?height=100&width=100",
    quote: "I would like to express my heartfelt gratitude to Sujata ma'am for her invaluable guidance in helping me clear my OET exam on my first attempt. Initially, I faced several challenges, but with her structured approach—from basics to advanced—my English skills improved significantly. I truly appreciate her dedication and teaching methods. I highly recommend JG Language Academy to anyone looking for an efficient and effective way to achieve their language goals.",
    rating: 5
  },
  {
    name: "Padma Priya",
    image: "/placeholder.svg?height=100&width=100",
    quote: "Sujata Mam way of teaching and handling a student are really awesome. The contents are so nice... Good mixture of teaching, listening and discussing.. Very clear instructions.. The entire course which I have done with her was unique.",
    rating: 5
  },
  {
    name: "Swagata Biswas",
    image: "/placeholder.svg?height=100&width=100",
    quote: "Mrs. Sujata is an exceptional IELTS/CELPIP educator who inspires and motivates students through innovative teaching methods. She ensures effective learning by identifying weaknesses and providing practical strategies for improvement. Her structured, student-centric approach fosters confidence and excellence, making her an invaluable mentor for language proficiency success.",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-blue-50 via-white to-blue-300 relative overflow-hidden rounded-3xl my-8 mx-4">
      {/* Enhanced Background Graphics */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <Quote className="absolute top-16 left-8 w-12 h-12 text-blue-800 opacity-20 rotate-12 animate-bounce" />
        <Quote className="absolute top-1/3 right-10 w-16 h-16 text-blue-800 opacity-10 rotate-180 animate-pulse" />
        <Quote className="absolute bottom-10 left-16 w-10 h-10 text-blue-800 opacity-20 rotate-6 animate-bounce" />
        
        {/* Animated circles in background */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-5xl font-bold text-blue-900 mb-4 relative font-serif">
            What Our Students Say
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 rounded-full"></div>
          </h2>
          <p className="text-xl text-blue-600 font-light mt-4 max-w-2xl mx-auto">
            Join hundreds of successful students who have transformed their language skills with us
          </p>
        </div>

        {/* Enhanced Testimonials Carousel */}
        <div className="relative px-16">
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-full p-3">
                  <Card className="h-[400px] bg-white/90 backdrop-blur-md border-blue-200 hover:shadow-2xl hover:scale-102 transition-all duration-300 relative group rounded-2xl shadow-lg mt-8">
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-30 rounded-2xl bg-gradient-to-br from-blue-100 via-transparent to-blue-50"></div>
                    
                    <CardHeader className="rounded-t-2xl">
                      <div className="w-full flex justify-center -mt-10">
                        <div className="relative">
                          <Avatar className="w-24 h-24 border-4 border-blue-300 shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            <AvatarFallback className="bg-blue-100 text-blue-600 text-xl">
                              {testimonial.name[0]}
                            </AvatarFallback>
                          </Avatar>
                          {/* Decorative ring animation */}
                          <div className="absolute -inset-1 rounded-full border-2 border-blue-200 animate-ping opacity-20"></div>
                        </div>
                      </div>
                      <CardTitle className="text-2xl font-semibold text-blue-800 text-center mt-4">
                        {testimonial.name}
                      </CardTitle>
                      
                    </CardHeader>

                    <CardContent>
                      <div className="relative text-center px-6">
                        <Quote className="w-8 h-8 text-blue-300 absolute -top-4 -left-2 transform -rotate-12" />
                        <blockquote className="text-gray-700 text-lg px-8 font-light italic leading-relaxed">
                          {testimonial.quote}
                        </blockquote>
                        <Quote className="w-8 h-8 text-blue-300 absolute -bottom-4 -right-2 transform rotate-12" />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Enhanced Navigation Buttons */}
            <CarouselPrevious className="absolute -left-12 bg-white/90 text-blue-600 hover:bg-blue-50 hover:scale-110 shadow-lg shadow-blue-100/50 rounded-full transition-all duration-300">
              <ChevronLeft className="w-6 h-6" />
            </CarouselPrevious>
            <CarouselNext className="absolute -right-12 bg-white/90 text-blue-600 hover:bg-blue-50 hover:scale-110 shadow-lg shadow-blue-100/50 rounded-full transition-all duration-300">
              <ChevronRight className="w-6 h-6" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  )
}