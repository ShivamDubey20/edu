'use client'

import React, { useEffect, useState } from 'react';
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const FeaturedCourses = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const courses = [
    { 
      title: "IELTS Preparation", 
      description: "Master all four modules with expert guidance.", 
      imageSrc: "/IELTS.webp", 
      link: "/courses/ielts",
      popular: true
    },
    { 
      title: "PTE Academic", 
      description: "Learn strategies for a high-scoring PTE test.", 
      imageSrc: "/PTE.webp", 
      link: "/courses/pte",
      popular: true
    },
    { 
      title: "CELPIP Training", 
      description: "Get the best techniques to excel in Canadian English proficiency.", 
      imageSrc: "/CELPIP.webp", 
      link: "/courses/celpip",
      popular: true
    },
    { 
      title: "OET Coaching", 
      description: "Tailored training for healthcare professionals.", 
      imageSrc: "/OET.webp", 
      link: "/courses/oet",
      popular: true
    },
    { 
      title: "NAATI CCL", 
      description: "Earn 5 extra PR points with our NAATI preparation course.", 
      imageSrc: "/Naati.webp", 
      link: "/courses/naati",
      popular: true
    },
  ];

  useEffect(() => {
    if (!api) return;

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
    
    const onChange = () => {

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };
    
    api.on("select", onChange);
    return () => {
      api.off("select", onChange);
    };
  }, [api]);

  return (
    <section className="w-full bg-gradient-to-br from-blue-300 via-white to-blue-50 py-10 px-4 rounded-2xl my-8 mx-auto relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl text-blue-700 mb-3 relative">
            Explore our top-rated courses designed for success
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"></div>
          </h2>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-10 shadow-lg">
          <div className="relative">
            <Carousel className="w-full" setApi={setApi} opts={{
              loop: false,
              align: "start",
            }}>
              <CarouselContent>
                {courses.map((course, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4 transition-transform duration-300 hover:scale-105">
                    <Card className="h-full flex flex-col bg-white border-0 transition-all duration-300 rounded-lg shadow-md overflow-hidden group" style={{ width: 'calc(100% + 4px)', height: 'calc(100% + 4px)' }}>
                      <div className="absolute top-2 right-2 z-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                        <Badge className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white px-2 py-0.5 text-xs font-semibold rounded-full shadow-md">
                          Popular
                        </Badge>
                      </div>
                      <CardHeader className="p-0 rounded-t-lg relative overflow-hidden">
                        <div className="w-full h-36 rounded-t-lg overflow-hidden">
                          <img
                            src={course.imageSrc}
                            alt={course.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 text-center flex-grow flex flex-col">
                        <CardTitle className="text-lg font-bold text-blue-900 mb-2">
                          {course.title}
                        </CardTitle>
                        <p className="text-sm text-gray-700 mb-auto">{course.description}</p>
                      </CardContent>
                      <CardFooter className="p-4 flex gap-2 bg-gradient-to-b from-white to-blue-50 mt-auto">
                        <Link href={course.link} className="w-1/2">
                          <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all text-sm rounded-md py-2">
                            Details
                          </Button>
                        </Link>
                        <Link href="/contact" className="w-1/2">
                          <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 shadow-md text-sm rounded-md py-2">
                            Enroll
                            <ShoppingCart className="ml-1 w-4 h-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {canScrollPrev && (
                <CarouselPrevious className="absolute -left-12 bg-white text-blue-700 hover:bg-blue-50 shadow-md rounded-full border-0 w-8 h-8">
                  <ChevronLeft className="w-4 h-4" />
                </CarouselPrevious>
              )}
              {canScrollNext && (
                <CarouselNext className="absolute -right-12 bg-white text-blue-700 hover:bg-blue-50 shadow-md rounded-full border-0 w-8 h-8">
                  <ChevronRight className="w-4 h-4" />
                </CarouselNext>
              )}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;