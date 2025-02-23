"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Clock, Users, Star, ChevronRight } from "lucide-react"

const SpokenEnglish = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "")
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 100)
      }
    }
  }, [])

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const courses = {
    kids: [
      { title: "Phonics Fundamentals", duration: "4 weeks", students: 1234, rating: 4.8 },
      { title: "Story-Based Learning", duration: "6 weeks", students: 987, rating: 4.9 },
      { title: "Interactive Grammar", duration: "8 weeks", students: 756, rating: 4.7 },
    ],
    elders: [
      { title: "Basic Conversation Skills", duration: "6 weeks", students: 543, rating: 4.6 },
      { title: "Daily Life English", duration: "8 weeks", students: 432, rating: 4.8 },
      { title: "Confidence Building", duration: "4 weeks", students: 321, rating: 4.7 },
    ],
    "communication-skills": [
      { title: "Public Speaking Mastery", duration: "10 weeks", students: 2345, rating: 4.9 },
      { title: "Advanced Presentation Skills", duration: "8 weeks", students: 1876, rating: 4.8 },
      { title: "Debate and Discussion", duration: "6 weeks", students: 1543, rating: 4.7 },
    ],
    "corporate-training": [
      { title: "Business Communication", duration: "12 weeks", students: 3456, rating: 4.8 },
      { title: "Email Writing Excellence", duration: "4 weeks", students: 2987, rating: 4.9 },
      { title: "Meeting Management", duration: "6 weeks", students: 2345, rating: 4.7 },
    ],
    "personal-development": [
      { title: "Personality Development", duration: "8 weeks", students: 1765, rating: 4.8 },
      { title: "Interview Skills", duration: "6 weeks", students: 1432, rating: 4.9 },
      { title: "Social Communication", duration: "4 weeks", students: 1234, rating: 4.7 },
    ],
  }

  interface CourseCardProps {
    title: string;
    duration: string;
    students: number;
    rating: number;
  }

  const CourseCard = ({ title, duration, students, rating }: CourseCardProps) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col">
      <div className="h-40 bg-blue-100 rounded-md mb-4"></div>
      <h3 className="text-lg font-semibold text-blue-900 mb-2">{title}</h3>
      <div className="flex items-center text-sm text-gray-600 space-x-4 mt-auto">
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center">
          <Users className="w-4 h-4 mr-1" />
          <span>{students.toLocaleString()}</span>
        </div>
        <div className="flex items-center">
          <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
          <span>{rating}</span>
        </div>
      </div>
    </div>
  )

  const sections = [
    { 
      id: "kids", 
      title: "Kids' English Adventures", 
      description: "Fun-filled journey of English learning for kids aged 5-12 years. Interactive lessons, games, and storytelling sessions to make learning enjoyable.",
      bgColor: "bg-blue-50"
    },
    { 
      id: "elders", 
      title: "English for Elders", 
      description: "Specially designed courses for senior citizens to help them communicate effectively in English in their daily lives.",
      bgColor: "bg-green-50"
    },
    { 
      id: "communication-skills", 
      title: "Communication Skills Mastery", 
      description: "Comprehensive programs to enhance your public speaking, presentation, and interpersonal communication skills.",
      bgColor: "bg-purple-50"
    },
    { 
      id: "corporate-training", 
      title: "Corporate English Training", 
      description: "Tailored programs for professionals to excel in business communication, meetings, and presentations.",
      bgColor: "bg-orange-50"
    },
    { 
      id: "personal-development", 
      title: "Personal Development Workshops", 
      description: "Holistic programs combining English proficiency with essential life skills and personality development.",
      bgColor: "bg-pink-50"
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Spoken English Programs</h1>
          <p className="text-xl text-blue-600 max-w-2xl mx-auto">Transform your English speaking skills with our expert-led courses designed for every age group and profession.</p>
        </div>

        {sections.map((section, index) => (
          <motion.section
            key={index}
            id={section.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className={`mb-24 rounded-xl overflow-hidden ${section.bgColor}`}
          >
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">{section.title}</h2>
              <p className="text-lg text-blue-700 mb-8">{section.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses[section.id as keyof typeof courses].map((course, courseIndex) => (
                  <CourseCard key={courseIndex} {...course} />
                ))}
              </div>

              <button className="mt-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
                View all courses <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  )
}

export default SpokenEnglish
