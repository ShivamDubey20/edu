"use client"

import {
    Headphones,
    BookOpen,
    PenTool,
    MessageCircle,
    Award,
    Clock,
    Brain,
    Target,
    CheckCircle2,
    AlertCircle,
} from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"


export function IELTSSection() {
    const [activeTab, setActiveTab] = useState<"listening" | "reading" | "writing" | "speaking">("listening")

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    }

    const floatingElements = [
        { left: "20%", top: "25%", delay: 0, icon: "book", color: "text-purple-500" },
        { left: "40%", top: "15%", delay: 2, icon: "pen", color: "text-green-500" },
        { left: "65%", top: "30%", delay: 4, icon: "headphones", color: "text-orange-500" },
        { left: "80%", top: "20%", delay: 6, icon: "message", color: "text-pink-500" },
        { left: "15%", top: "60%", delay: 8, icon: "book", color: "text-blue-500" },
        { left: "75%", top: "45%", delay: 10, icon: "pen", color: "text-yellow-500" },
    ]

    

    const sectionTips = {
        listening: [
            "Practice understanding different accents",
            "Focus on keywords and synonyms",
            "Read questions before listening",
        ],
        reading: [
            "Skim & scan for key information",
            "Understand paraphrasing and synonyms",
            "Manage time well—don't spend too long on one question",
        ],
        writing: [
            "Follow the structure: Introduction, Body, Conclusion",
            "Use varied sentence structures and vocabulary",
            "Avoid repetition and grammatical errors",
        ],
        speaking: [
            "Speak clearly and confidently",
            "Use a mixture of simple and complex sentences",
            "Don't memorize answers—be natural and spontaneous",
        ],
    }

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-50 to-pink-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#3b82f6_1px,transparent_0)] bg-[size:40px_40px]" />
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {floatingElements.map((pos, i) => (
                    <div
                        key={i}
                        className="absolute animate-float"
                        style={{
                            left: pos.left,
                            top: pos.top,
                            animationDelay: `${pos.delay}s`,
                            opacity: 0.2,
                        }}
                    >
                        {pos.icon === "book" && <BookOpen className={`w-16 h-16 ${pos.color}`} />}
                        {pos.icon === "pen" && <PenTool className={`w-16 h-16 ${pos.color}`} />}
                        {pos.icon === "headphones" && <Headphones className={`w-16 h-16 ${pos.color}`} />}
                        {pos.icon === "message" && <MessageCircle className={`w-16 h-16 ${pos.color}`} />}
                    </div>
                ))}
            </div>

            {/* Container */}
            <div className="max-w-7xl mx-auto px-6 relative ml-20">
                {/* About IELTS Box */}
                <motion.div
                    className="bg-white backdrop-blur-lg bg-opacity-90 shadow-sm rounded-3xl p-10 border border-blue-100 mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
                        {/* Left Column: About IELTS */}
                        <div>
                            <h2 className="text-3xl bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent mb-8">
                                About the PTE Exam
                            </h2>
                            <p className="text-gray-600 text-xl  mb-8 font-medium tracking-wide">
                                The Pearson Test of English (PTE) is an English proficiency test similar to IELTS
                                and TOEFL. It evaluates listening, reading, speaking, and writing skills for non
                                native English speakers. The test is widely accepted for study, work, and
                                immigration purposes.

                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 rounded-xl bg-purple-50 border-2 border-purple-200 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                    <Award className="w-8 h-8 text-purple-500 mb-3" />
                                    <h3 className="text-xl font-bold text-purple-900 mb-2">Academic</h3>
                                    <p className="text-base text-purple-700">Focused on university admissions and professional registration</p>
                                </div>
                                <div className="p-6 rounded-xl bg-pink-50 border-2 border-pink-200 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                    <Target className="w-8 h-8 text-pink-500 mb-3" />
                                    <h3 className="text-xl font-bold text-pink-900 mb-2">General</h3>
                                    <p className="text-base text-pink-700">Tailored for visa applications, immigration, and employment purposes</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Band Scores */}
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 w-[300px]">
                            <h3 className="text-xl font-semibold text-blue-900 mb-4">Countries Accepting PTE Academic</h3>
                            <p className="text-gray-700 text-sm mb-4">
                                PTE is widely accepted in countries including:
                            </p>
                            <div className="grid grid-cols-1 gap-2">
                                {[
                                    { country: "United Kingdom", color: "bg-blue-500" },
                                    { country: "Canada", color: "bg-red-500" },
                                    { country: "Ireland", color: "bg-green-500" },
                                    { country: "United States", color: "bg-indigo-500" },
                                    { country: "Australia", color: "bg-yellow-500" },
                                ].map((countryData) => (
                                    <div
                                        key={countryData.country}
                                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 transition-colors"
                                    >
                                        <div className={`w-16 ${countryData.color} rounded-md p-1 text-center text-white text-sm font-medium`}>
                                            {countryData.country.slice(0, 2).toUpperCase()}
                                        </div>
                                        <span className="text-gray-700 text-sm">{countryData.country}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-600 text-xs mt-4">
                                However, specific requirements vary by university and immigration policies.
                            </p>
                        </div>

                    </div>
                </motion.div>

                {/* Format Tabs */}
                <div className="relative">
                    <h3 className="text-3xl font-bold text-blue-800 mb-6 ml-5">IELTS Format</h3>
                    <div className="flex gap-1 relative z-10 mb-2">
                        {[
                            { id: "listening", label: "Listening", icon: Headphones, color: "blue" },
                            { id: "reading", label: "Reading", icon: BookOpen, color: "green" },
                            { id: "writing", label: "Writing", icon: PenTool, color: "purple" },
                            { id: "speaking", label: "Speaking", icon: MessageCircle, color: "orange" },
                        ].map((tab) => {
                            const Icon = tab.icon
                            const isActive = activeTab === tab.id
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                                    className={`
                    group relative flex items-center gap-3 px-6 py-4 min-w-[180px]
                    transition-all duration-300 hover:transform hover:-translate-y-1
                    ${isActive ? "text-blue-600 border-t-2 border-x-2 border-blue-200 rounded-t-xl" : "text-gray-700"}
                  `}
                                >
                                    {isActive && (
                                        <>
                                            <div className="absolute inset-0 bg-white rounded-t-xl" />
                                            <div className="absolute -bottom-3 inset-x-0">
                                                <div className="absolute inset-0 bg-white" />
                                                <svg viewBox="0 0 100 12" preserveAspectRatio="none" className="h-3 w-full fill-white">
                                                    <path d="M 0 12 C 30 12 70 12 100 12 L 100 0 C 70 0 30 12 0 12" />
                                                </svg>
                                            </div>
                                        </>
                                    )}
                                    <Icon
                                        className={`w-6 h-6 relative z-10 transition-colors duration-200
                    ${isActive ? "text-blue-600" : "text-gray-600 group-hover:text-blue-500"}`}
                                    />
                                    <span className="relative z-10 font-medium text-lg">{tab.label}</span>
                                </button>
                            )
                        })}
                    </div>

                    {/* Content Area */}
                    <motion.div
                        className="bg-white rounded-xl rounded-tl-none shadow-sm p-6 -mt-3"
                        variants={fadeIn}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <div className="grid grid-cols-2 gap-6">
                            {/* Left Column: Section Info */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    {activeTab === "listening" && <Headphones className="w-8 h-8 text-blue-600" />}
                                    {activeTab === "reading" && <BookOpen className="w-8 h-8 text-green-600" />}
                                    {activeTab === "writing" && <PenTool className="w-8 h-8 text-purple-600" />}
                                    {activeTab === "speaking" && <MessageCircle className="w-8 h-8 text-orange-600" />}
                                    <div>
                                        <h4 className="text-xl font-bold text-blue-900 capitalize">{activeTab}</h4>
                                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                                            <Clock className="w-4 h-4" />
                                            <span>
                                                {activeTab === "listening" && "30 minutes + 10 minutes transfer"}
                                                {activeTab === "reading" && "60 minutes"}
                                                {activeTab === "writing" && "60 minutes"}
                                                {activeTab === "speaking" && "11-14 minutes"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
                                    <h5 className="font-semibold text-blue-900 mb-3">Format Overview</h5>
                                    <ul className="space-y-2">
                                        {activeTab === "speaking" && (
                                            <>
                                                <li className="flex items-center gap-2 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                                                    <span>Read Aloud</span>
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                                                    <span>Repeat Sentences</span>
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                                                    <span>Describe Image</span>
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                                                    <span>Retell Lecture</span>
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                                                    <span>Answer Short Questions</span>
                                                </li>
                                            </>
                                        )}

                                        {activeTab === "writing" && (
                                            <>
                                                <li className="flex items-center gap-2 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-purple-500" />
                                                    <span>Summarize Written Text</span>
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-purple-500" />
                                                    <span>Essay Writing</span>
                                                </li>
                                            </>
                                        )}

                                        {activeTab === "reading" && (
                                            <>
                                                <li className="flex items-center gap-2 text-sm text-blue-700">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500"/>
                                                    <span>Reading & Writing Fill in the Blanks</span>
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-blue-700">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                    <span>Multiple Choice Questions (Single & Multiple Answers)</span>
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-blue-700">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                    <span>Reorder Paragraphs</span>
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-blue-700">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                    <span>Select & Drop</span>
                                                </li>
                                            </>
                                        )}

                                        {activeTab === "listening" && (
                                            <>
                                                <li className="flex items-center gap-2 text-sm text-blue-500">
                                                    <CheckCircle2 className="w-4 h-4" />
                                                    <span>Summarize Spoken Text</span>
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-blue-500">
                                                    <CheckCircle2 className="w-4 h-4" />
                                                    <span>Multiple Choice Questions (Single & Multiple Answers)</span>
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-blue-500">
                                                    <CheckCircle2 className="w-4 h-4" />
                                                    <span>Highlight Correct Summary</span>
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-blue-500">
                                                    <CheckCircle2 className="w-4 h-4" />
                                                    <span>Select Missing Words</span>
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-blue-500">
                                                    <CheckCircle2 className="w-4 h-4" />
                                                    <span>Highlight Correct Word</span>
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-blue-500">
                                                    <CheckCircle2 className="w-4 h-4" />
                                                    <span>Write from Dictation</span>
                                                </li>
                                            </>
                                        )}
                                    </ul>

                                    {/* Duration Section */}
                                    <p className="text-gray-700 text-sm mt-4">
                                        Duration: The entire test is completed within 2 hours and 30 minutes without a break.
                                    </p>
                                </div>

                            </div>

                            {/* Right Column: Tips */}
                            <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-xl p-4 border border-blue-100">
                                <h5 className="font-semibold text-blue-900 mb-4 flex items-center gap-2">
                                    <Brain className="w-5 h-5 text-blue-500" />
                                    Tips for Success
                                </h5>
                                <div className="space-y-3">
                                    {sectionTips[activeTab].map((tip, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 p-2 hover:bg-blue-50 rounded-lg transition-colors"
                                        >
                                            <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                                            <p className="text-sm text-gray-700">{tip}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Additional Resources Section */}
                <div className="max-w-7xl mx-auto px-6 mt-16">
                    <motion.div
                        className="bg-white rounded-2xl p-8 border-2 border-blue-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className="text-3xl font-bold text-blue-800 mb-8">Additional Study Resources</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 border-blue-200">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                        <BookOpen className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h4 className="text-xl font-bold text-blue-900">Practice Tests</h4>
                                </div>
                                <p className="text-base text-blue-700">Access sample tests and practice materials for all sections.</p>
                            </div>

                            <div className="p-6 bg-gradient-to-br from-blue-50 to-pink-50 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 border-pink-200">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                                        <PenTool className="w-6 h-6 text-pink-600" />
                                    </div>
                                    <h4 className="text-xl font-bold text-pink-900">Writing Samples</h4>
                                </div>
                                <p className="text-base text-pink-700">Review model answers and writing templates.</p>
                            </div>

                            <div className="p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 border-green-200">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <MessageCircle className="w-6 h-6 text-green-600" />
                                    </div>
                                    <h4 className="text-xl font-bold text-green-900">Speaking Practice</h4>
                                </div>
                                <p className="text-base text-green-700">Access speaking topics and sample responses.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>


                <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>

            </div>

        </section>
    )
}

