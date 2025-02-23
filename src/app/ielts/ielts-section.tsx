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

    const bandScores = [
        { band: "9.0", description: "Expert user", color: "bg-purple-600" },
        { band: "8.0-8.5", description: "Very good user", color: "bg-blue-600" },
        { band: "7.0-7.5", description: "Good user", color: "bg-green-600" },
        { band: "6.0-6.5", description: "Competent user", color: "bg-yellow-600" },
        { band: "5.0-5.5", description: "Modest user", color: "bg-orange-600" },
        { band: "4.0-4.5", description: "Limited user", color: "bg-red-600" },
        { band: "< 4.0", description: "Basic English skills", color: "bg-gray-600" },
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
                                About the IELTS Exam
                            </h2>
                            <p className="text-gray-600 text-xl  mb-8 font-medium tracking-wide">
                                The International English Language Testing System (IELTS) assesses English proficiency for study, work,
                                or migration. It has two main versions:
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 rounded-xl bg-purple-50 border-2 border-purple-200 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                    <Award className="w-8 h-8 text-purple-500 mb-3" />
                                    <h3 className="text-xl font-bold text-purple-900 mb-2">Academic</h3>
                                    <p className="text-base text-purple-700">Higher education or professional registration</p>
                                </div>
                                <div className="p-6 rounded-xl bg-pink-50 border-2 border-pink-200 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                    <Target className="w-8 h-8 text-pink-500 mb-3" />
                                    <h3 className="text-xl font-bold text-pink-900 mb-2">General</h3>
                                    <p className="text-base text-pink-700">Migration and work purposes</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Band Scores */}
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 w-[300px]">
                            <h3 className="text-xl font-semibold text-blue-900 mb-4">Band Score Descriptions</h3>
                            <div className="grid grid-cols-1 gap-2">
                                {bandScores.map((score) => (
                                    <div
                                        key={score.band}
                                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 transition-colors"
                                    >
                                        <div className={`w-16 ${score.color} rounded-md p-1 text-center text-white text-sm font-medium`}>
                                            {score.band}
                                        </div>
                                        <span className="text-gray-700 text-sm">{score.description}</span>
                                    </div>
                                ))}
                            </div>
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
                                        {activeTab === "listening" && (
                                            <>
                                                <li className="flex items-center gap-2 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                                    <span>4 sections, 40 questions total</span>
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                                    <span>Multiple choice, matching, form completion</span>
                                                </li>
                                            </>
                                        )}
                                        {activeTab === "reading" && (
                                            <>
                                                <li className="flex items-center gap-2 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                    <span>3 long texts from academic sources</span>
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                    <span>40 questions in various formats</span>
                                                </li>
                                            </>
                                        )}
                                        {activeTab === "writing" && (
                                            <>
                                                <li className="flex items-center gap-2 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-purple-500" />
                                                    <span>Task 1: Graph/table description (150 words)</span>
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-purple-500" />
                                                    <span>Task 2: Essay writing (250 words)</span>
                                                </li>
                                            </>
                                        )}
                                        {activeTab === "speaking" && (
                                            <>
                                                <li className="flex items-center gap-2 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                                                    <span>Part 1: Introduction and general topics</span>
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                                                    <span>Part 2: Individual long turn</span>
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                                                    <span>Part 3: Two-way discussion</span>
                                                </li>
                                            </>
                                        )}
                                    </ul>
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

