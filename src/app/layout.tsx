import type { Metadata } from "next"
import { Inter, Poppins, Outfit } from "next/font/google"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"
import "./globals.css"
import Footer from "@/components/footer"
import type React from "react"
import Navbar from "@/sections/navbar"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const poppins = Poppins({
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
})

const outfit = Outfit({
  weight: ["400", "500", "700"],
  variable: "--font-outfit",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "JG Language Academy",
  description: "Learn languages with expert guidance",
}

const phoneNumber = "918825125332"
const whatsappUrl = `https://wa.me/${phoneNumber}`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} ${outfit.variable} antialiased flex flex-col min-h-screen`}>
        <main className="flex-grow">{children}</main>
        <Navbar />
        <Footer />

        <div className="fixed bottom-6 right-6 flex flex-row gap-3 items-center z-50">
          <Link href="/#book-demo">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg text-base font-semibold hover:bg-blue-700 transition-all">
              Book a Demo
            </button>
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg text-base font-medium shadow-lg hover:bg-green-600 transition-all"
          >
            <FaWhatsapp size={20} className="text-white" />
            <span>WhatsApp</span>
          </a>
        </div>
      </body>
    </html>
  )
}
