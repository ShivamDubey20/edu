"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CalendarIcon,
  Mail,
  Phone,
  User,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  Clock,
  GraduationCap,
  MessageSquare,
  Globe,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { toast } from "react-hot-toast"
import emailjs from "@emailjs/browser"

type CourseType = "IELTS" | "Spoken English" | "Foreign Language"

const courseOptions: Record<CourseType, string[]> = {
  IELTS: ["PTE Core / Academy", "IELTS Academy / General", "OET - nurses / doctors", "CELPIP", "TOEFL"],
  "Spoken English": [
    "Kids",
    "Elders",
    "Communication Skills",
    "Corporate Training",
    "Personality Development Workshops",
  ],
  "Foreign Language": [
    "French",
    "German",
    "Spanish",
    "Italian",
    "TCF , TEF , Delf exam preparation",
    "Dele exam preparation",
  ],
} as const

const courseIcons: Record<CourseType, React.ReactNode> = {
  IELTS: <GraduationCap className="w-6 h-6 mb-3" />,
  "Spoken English": <MessageSquare className="w-6 h-6 mb-3" />,
  "Foreign Language": <Globe className="w-6 h-6 mb-3" />,
}

const courseDescriptions: Record<CourseType, string> = {
  IELTS: "Comprehensive preparation for international English language tests",
  "Spoken English": "Enhance your communication skills with confidence",
  "Foreign Language": "Master new languages and explore global cultures",
}

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
] as const

// Initialize EmailJS with the provided public key
emailjs.init("Buw5IVo-CyvTBxW1D")

const DemoSection = () => {
  const [step, setStep] = useState<"selection" | "form">("selection")
  const [courseType, setCourseType] = useState<CourseType | "">("")
  const [course, setCourse] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState("")
  const [hoveredCourse, setHoveredCourse] = useState<CourseType | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const searchParams = useSearchParams()
  const formRef = useRef<HTMLDivElement>(null)
  // Use the toast function

  // EmailJS configuration with the provided credentials
  const emailjsServiceId = "service_tfi2aiq"
  const emailjsTemplateId = "template_5cznodj"

  useEffect(() => {
    const courseTypeParam = searchParams.get("courseType") as CourseType | null
    if (courseTypeParam && courseTypeParam in courseOptions) {
      setCourseType(courseTypeParam)
      setStep("form")
    }
  }, [searchParams])

  const handleCourseTypeSelection = (type: CourseType) => {
    setCourseType(type)
    setStep("form")
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 100)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!date || !time || !courseType || !course) {
      toast({
        title: "Missing Information ⚠️",
        description: "Please fill in all required fields",
        variant: "destructive",
        duration: 5000,
        className:
          "bg-yellow-50 border-2 border-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100 dark:border-yellow-800",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Format date for email template
      const formattedDate = date ? format(date, "PPP") : ""

      // Prepare template parameters based on your template
      const templateParams = {
        to_name: "Admin", // The recipient of the email notification
        name,
        email,
        phone,
        courseType,
        course,
        date: formattedDate,
        time,
      }

      // Send email using EmailJS
      const response = await emailjs.send(emailjsServiceId, emailjsTemplateId, templateParams)

      console.log("Email sent successfully:", response)

      // Show success message with booking details
      toast({
        title: "Demo Booked Successfully! 🎉",
        description: `Your ${course} demo is scheduled for ${formattedDate} at ${time}. We'll send a confirmation to ${email}`,
        variant: "default",
        duration: 5000, // Show for 5 seconds
        className:
          "bg-green-50 border-2 border-green-200 text-green-800 dark:bg-green-900 dark:text-green-100 dark:border-green-800",
      })

      // Reset form
      setCourse("")
      setName("")
      setEmail("")
      setPhone("")
      setDate(undefined)
      setTime("")
      setStep("selection")
    } catch (error) {
      console.error("Failed to send email:", error)

      // Show error message
      toast({
        title: "Booking Failed ❌",
        description: "There was a problem scheduling your demo. Please try again.",
        variant: "destructive",
        duration: 5000,
        className:
          "bg-red-50 border-2 border-red-200 text-red-800 dark:bg-red-900 dark:text-red-100 dark:border-red-800",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-6rem)] bg-gradient-to-r from-blue-50 via-indigo-100 to-blue-300 py-8">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-6 space-y-3">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-indigo-900">Book a Free Demo</h1>
          <p className="text-sm sm:text-base text-center text-indigo-600">
            Not sure which course suits you best? Book a free demo session with our trainers and experience our teaching
            methods firsthand.
          </p>
        </div>

        <Card className="overflow-hidden border-0 shadow-2xl" ref={formRef}>
          <div className="grid lg:grid-cols-7">
            {step === "form" && (
              <div className="p-6 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white lg:col-span-2">
                <h2 className="text-lg font-bold mb-4">Why Choose Us?</h2>
                <ul className="space-y-3 text-sm">
                  {[
                    "Expert Tutors: Learn from highly experienced trainers",
                    "Module-Wise Training: Comprehensive coverage of all four modules",
                    "Unlimited Mock Tests: Practice in real-exam conditions",
                    "Grammar Lessons: Strengthen language fundamentals",
                    "Feedback Sessions: Get personalized feedback to improve your performance",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div
              className={`p-6 bg-gradient-to-b from-white to-indigo-50 ${step === "selection" ? "lg:col-span-7" : "lg:col-span-5"}`}
            >
              <CardContent className="px-0 pt-0">
                {step === "selection" ? (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-indigo-800 mb-6">Select a Course Type</h3>
                    <div className="grid sm:grid-cols-3 gap-6">
                      {(Object.keys(courseOptions) as CourseType[]).map((type) => (
                        <button
                          key={type}
                          onClick={() => handleCourseTypeSelection(type)}
                          onMouseEnter={() => setHoveredCourse(type)}
                          onMouseLeave={() => setHoveredCourse(null)}
                          className={`relative group p-6 rounded-xl border-2 transition-all duration-300 
                            ${
                              hoveredCourse === type
                                ? "border-blue-500 bg-indigo-50 shadow-lg scale-105"
                                : "border-blue-300 hover:border-blue-200 hover:bg-gray-50"
                            }`}
                        >
                          <div className="flex flex-col items-center text-center">
                            <div
                              className={`transition-colors duration-300 
                              ${hoveredCourse === type ? "text-blue-500" : "text-blue-400 group-hover:text-indigo-400"}`}
                            >
                              {courseIcons[type]}
                            </div>
                            <h4
                              className={`font-semibold mb-2 transition-colors duration-300
                              ${hoveredCourse === type ? "text-indigo-700" : "text-blue-700"}`}
                            >
                              {type}
                            </h4>
                            <p className="text-sm text-gray-500 leading-tight">{courseDescriptions[type]}</p>
                          </div>
                          <div
                            className={`absolute inset-0 border-2 border-indigo-500 rounded-xl opacity-0 
                            transition-opacity duration-300 pointer-events-none
                            ${hoveredCourse === type ? "opacity-100" : ""}`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex items-center justify-between mb-4">
                      <Button
                        type="button"
                        onClick={() => setStep("selection")}
                        className="text-indigo-600 hover:text-indigo-800"
                        variant="ghost"
                        size="sm"
                      >
                        <ChevronLeft className="w-4 h-4 mr-1" /> Back to Course Selection
                      </Button>
                      <span className="text-sm font-medium text-gray-500">Step 2 of 2</span>
                    </div>

                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                            <BookOpen className="w-4 h-4 mr-2 text-indigo-500" />
                            Course Type
                          </label>
                          <Input value={courseType} readOnly className="bg-gray-50 border-gray-200 text-sm py-2" />
                        </div>

                        <div>
                          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                            <BookOpen className="w-4 h-4 mr-2 text-indigo-500" />
                            Specific Course
                          </label>
                          <Select value={course} onValueChange={setCourse}>
                            <SelectTrigger className="border-gray-100 text-sm py-2">
                              <SelectValue placeholder="Choose course" />
                            </SelectTrigger>
                            <SelectContent>
                              {courseType &&
                                courseOptions[courseType]?.map((option) => (
                                  <SelectItem key={option} value={option} className="text-sm">
                                    {option}
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                            <User className="w-4 h-4 mr-2 text-indigo-500" />
                            Your Name
                          </label>
                          <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="Enter your full name"
                            className="text-sm py-2"
                          />
                        </div>

                        <div>
                          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                            <Phone className="w-4 h-4 mr-2 text-indigo-500" />
                            Phone Number
                          </label>
                          <Input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            placeholder="Your phone number"
                            className="text-sm py-2"
                          />
                        </div>

                        <div>
                          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                            <Mail className="w-4 h-4 mr-2 text-indigo-500" />
                            Your Email
                          </label>
                          <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="your@email.com"
                            className="text-sm py-2"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                            <CalendarIcon className="w-4 h-4 mr-2 text-indigo-500" />
                            Select Date
                          </label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={`w-full justify-start text-left font-normal text-sm ${
                                  !date ? "text-gray-500" : ""
                                }`}
                              >
                                <CalendarIcon className="w-4 h-4 mr-2" />
                                {date ? format(date, "PPP") : "Pick a date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                                disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>

                        <div>
                          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                            <Clock className="w-4 h-4 mr-2 text-indigo-500" />
                            Select Time
                          </label>
                          <Select value={time} onValueChange={setTime} disabled={!date}>
                            <SelectTrigger className="text-sm">
                              <SelectValue placeholder="Choose time slot" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((slot) => (
                                <SelectItem key={slot} value={slot} className="text-sm">
                                  {slot}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={!date || !time || isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700 hover:from-purple-700 hover:to-indigo-800 text-white py-3 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl text-sm mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin h-4 w-4 mr-2 border-2 border-white border-opacity-50 border-t-transparent rounded-full" />
                          Scheduling...
                        </>
                      ) : (
                        <>
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          Schedule Your Demo
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default DemoSection

