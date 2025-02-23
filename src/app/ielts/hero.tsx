import Image from "next/image"

export function Hero() {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 ">
        <div className="flex flex-col lg:flex-row items-center gap-5 py-12">
          {/* Hero Left Side - Text Content */}
          <div className="w-full sm:w-1/2 flex items-center justify-center py-6 sm:py-0 mt-10">
            <div className="text-[#414141] px-4 sm:px-8">
              <div className="flex items-center gap-2">
                <p className="w-6 md:w-8 h-[2px] bg-[#414141]"></p>
                <p className="font-medium text-xs md:text-sm">IELTS PREPARATION</p>
              </div>
              <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl leading-relaxed text-blue-900">
                Master the IELTS exam with our expert-led course
              </h1>
              <div className="flex items-center gap-2 mt-4">
                <p className="font-semibold text-xs md:text-sm">ENROLL NOW</p>
                <p className="w-6 md:w-8 h-[1px] bg-[#414141]"></p>
              </div>
            </div>
          </div>

          {/* Hero Right Side - Image */}
          <div className="w-full lg:w-1/2 relative h-[300px] rounded-lg overflow-hidden mt-8">
            <Image src="/11.png" alt="IELTS Preparation" fill className="object-cover" priority />
          </div>
        </div>
      </div>
    </div>
  )
}

