'use client'

import React from "react";
import { Users, Award, BookOpen } from "lucide-react";

const StatsStrip = () => {
  const stats = [
    {
      id: "students",
      value: "1,000+",
      label: "Successful Students",
      icon: Users,
      color: "from-blue-500 to-indigo-600",
      shadowColor: "shadow-blue-600/20",
    },
    {
      id: "score",
      value: "8.5",
      label: "Average Score",
      icon: Award,
      color: "from-purple-500 to-violet-600",
      shadowColor: "shadow-purple-600/20",
    },
    {
      id: "courses",
      value: "20+",
      label: "Expert-Led Courses",
      icon: BookOpen,
      color: "from-indigo-500 to-purple-600",
      shadowColor: "shadow-indigo-600/20",
    },
  ];

  interface StatItemProps {
    value: string;
    label: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    color: string;
    shadowColor: string;
  }

  const StatItem: React.FC<StatItemProps> = ({ value, label, icon: Icon, color, shadowColor }) => {
    return (
      <div className="flex items-center justify-center group">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-3 md:gap-4 py-4 px-2 md:px-6 transition-all">
          {/* Icon with gradient background */}
          <div className={`relative p-3 rounded-full bg-gradient-to-br ${color} shadow-lg ${shadowColor} transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
            <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-sm"></div>
            <Icon className="w-6 h-6 text-white relative z-10" strokeWidth={2.5} />
          </div>
          
          {/* Text content */}
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-gray-800 dark:text-white tracking-tight group-hover:translate-x-1 transition-transform duration-300">
              {value}
            </span>
            <span className="text-gray-600 dark:text-blue-100 font-medium text-sm md:text-base">
              {label}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-500 via-white to-purple-500 relative overflow-hidden">
      {/* Light Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-1/3 h-24 bg-blue-200/30 blur-3xl -rotate-45 top-0 -left-10"></div>
        <div className="absolute w-1/3 h-24 bg-purple-200/30 blur-3xl rotate-45 bottom-0 -right-10"></div>
        <div className="absolute w-1/4 h-16 bg-indigo-300/20 blur-3xl left-1/3 top-1/3 rounded-full"></div>
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent top-0"></div>
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent bottom-0"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-indigo-400/20">
          {stats.map((stat) => (
            <StatItem key={stat.id} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsStrip;