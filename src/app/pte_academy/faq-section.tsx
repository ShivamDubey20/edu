"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const faqs = [
        {
            question: "How often can I take the PTE test?",
            answer: "You can take the test as many times as you want, but you must wait for your previous score before booking another test.",
        },
        {
            question: "How long does it take to get PTE results?",
            answer: "Results are usually available within 48 hours.",
        },
        {
            question: "How long is the PTE score valid?",
            answer: "The PTE score is valid for 2 years.",
        },
        {
            question: "How should I prepare for the PTE exam?",
            answer: (
                <div className="space-y-2">
                    <p>• Use official Pearson practice tests and study materials.</p>
                    <p>• Practice speaking clearly and improve typing speed.</p>
                    <p>• Work on listening and reading comprehension skills.</p>
                </div>
            ),
        },
        {
            question: "What should I bring on the test day?",
            answer: (
                <div className="space-y-2">
                    <p>• A valid passport (mandatory).</p>
                    <p>• You don’t need to bring pens, paper, or headphones—they are provided at the test center.</p>
                </div>
            ),
        },
    ]

    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white rounded-2xl p-6 lg:p-8 border-2 border-blue-100 border-b-white"
            >
                <div className="flex flex-col lg:flex-row gap-0 items-start px-4">
                    <div className="lg:w-1/3">
                        <img 
                            src="/student_4.jpg" 
                            alt="Student" 
                            className="rounded-xl w-86 h-80 sticky top-4" 
                        />
                    </div>
                    
                    <div className="flex-1">
                        <h3 className="text-3xl font-bold text-blue-800 mb-6">Frequently Asked Questions</h3>
                        <div className="grid gap-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={false}
                                    className="border-2 border-blue-100 rounded-xl overflow-hidden transition-all duration-200 hover:border-blue-200"
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="flex items-center justify-between w-full p-4 lg:p-6 text-left"
                                    >
                                        <h4 className="text-lg font-semibold text-blue-900">{faq.question}</h4>
                                        <motion.div
                                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <ChevronDown className="w-5 h-5 text-blue-500" />
                                        </motion.div>
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ 
                                                    height: "auto",
                                                    opacity: 1,
                                                    transition: {
                                                        height: {
                                                            duration: 0.4,
                                                            ease: "easeOut"
                                                        },
                                                        opacity: {
                                                            duration: 0.25,
                                                            delay: 0.15
                                                        }
                                                    }
                                                }}
                                                exit={{ 
                                                    height: 0,
                                                    opacity: 0,
                                                    transition: {
                                                        height: {
                                                            duration: 0.3,
                                                            ease: "easeInOut"
                                                        },
                                                        opacity: {
                                                            duration: 0.2
                                                        }
                                                    }
                                                }}
                                            >
                                                <div className="px-4 lg:px-6 pb-4 lg:pb-6">
                                                    <motion.div 
                                                        initial={{ y: -10 }}
                                                        animate={{ y: 0 }}
                                                        exit={{ y: -10 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="text-gray-600 prose"
                                                    >
                                                        {faq.answer}
                                                    </motion.div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
