import Image from "next/image"

export function Hero() {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 py-16 px-4">
          {/* Hero Left Side - Text Content */}
          <div className="w-full lg:w-2/3 flex items-center justify-center py-6 lg:py-0 mt-10">
            <div className="text-[#414141] px-4 sm:px-12">
              <div className="flex items-center gap-2 mb-4">
                <p className="w-6 md:w-8 h-[2px] bg-[#414141]"></p>
                <p className="font-medium text-xs md:text-sm tracking-wider">PTE ACADEMIC PREPARATION</p>
              </div>
              <h1 className="prata-regular text-3xl sm:text-5xl lg:text-5xl leading-tight text-blue-900">
                Master the PTE Academic exam with our expert-led course
              </h1>
              <p className="mt-4 text-md sm:text-lg text-gray-600 leading-relaxed">
                Get personalized coaching, practice tests, and expert strategies designed to help you ace every section of the exam.
              </p>
              <div className="flex items-center gap-2 mt-6">
                <p className="font-semibold text-sm md:text-base text-blue-600">ENROLL NOW</p>
                <p className="w-6 md:w-8 h-[1px] bg-[#414141]"></p>
              </div>
            </div>
          </div>

          {/* Hero Right Side - Image */}
          <div className="w-full lg:w-1/3 relative h-[350px] rounded-lg overflow-hidden mt-8 lg:mt-0 lg:ml-10 ">
            <Image src="/111.png" alt="PTE Academic Preparation" fill className="object-cover" priority />
          </div>
        </div>
      </div>
    </div>
  )
}
