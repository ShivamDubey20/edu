import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Company
              </h3>
              <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
            </div>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-200" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Contact Us
              </h3>
              <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
            </div>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-0.5 text-blue-400" />
                <span>
                  123 Language Street<br />
                  Cityville, State 12345
                </span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@jglanguage.com</span>
              </li>
            </ul>
          </div>

          {/* Programs Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Programs
              </h3>
              <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
            </div>
            <ul className="space-y-3">
              {['IELTS', 'Spoken English', 'Foreign Languages', 'Corporate Training'].map((program) => (
                <li key={program}>
                  <Link 
                    href={`/${program.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <span className="relative">
                      {program}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-200" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Connect
              </h3>
              <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
            </div>
            <div className="flex space-x-5">
              {[
                { icon: Facebook, href: 'https://facebook.com' },
                { icon: Twitter, href: 'https://twitter.com' },
                { icon: Instagram, href: 'https://instagram.com' },
                { icon: Linkedin, href: 'https://linkedin.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform duration-200"
                >
                  <div className="p-3 rounded-full bg-blue-800/30 hover:bg-blue-700/50 transition-colors duration-200">
                    <social.icon size={20} className="text-blue-300" />
                  </div>
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              Follow us on social media for updates, tips, and language learning resources.
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-blue-800/50">
          <div className="text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} JG Language Academy. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 opacity-50" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[128px] opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full filter blur-[128px] opacity-20 translate-x-1/2 -translate-y-1/2" />
    </footer>
  )
}

export default Footer
