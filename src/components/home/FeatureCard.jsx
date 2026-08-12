// src/components/home/FeatureCard.jsx

import React, { useState } from 'react'
import {
  GraduationCap, Building2, FlaskConical, Code, Users, Trophy,
  ArrowRight, Sparkles, Award, BookOpen, Heart, Star
} from 'lucide-react'
import { motion } from 'framer-motion'

const FeatureCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const features = [
    {
      icon: <GraduationCap size={24} />,
      title: 'Academic Excellence',
      description: 'Our curriculum fosters critical thinking, creativity, and a lifelong love for learning in every student.',
      accent: '#7A0C1E',
      lightAccent: 'bg-maroon-50',
      iconBg: 'bg-maroon-100',
      textColor: 'text-maroon-700',
      stats: '98% Pass Rate'
    },
    {
      icon: <Building2 size={24} />,
      title: 'Modern Infrastructure',
      description: 'State-of-the-art classrooms, labs, library, and sports facilities for holistic development.',
      accent: '#8a1e2a',
      lightAccent: 'bg-rose-50',
      iconBg: 'bg-rose-100',
      textColor: 'text-rose-700',
      stats: '25+ Facilities'
    },
    {
      icon: <FlaskConical size={24} />,
      title: 'Science & Innovation',
      description: 'Well-equipped labs and innovation centers to nurture young scientists and inventors.',
      accent: '#b02d3a',
      lightAccent: 'bg-red-50',
      iconBg: 'bg-red-100',
      textColor: 'text-red-700',
      stats: '12+ Labs'
    },
    {
      icon: <Code size={24} />,
      title: 'Computer Education',
      description: 'Comprehensive computer education from basic programming to advanced AI concepts.',
      accent: '#c94a54',
      lightAccent: 'bg-pink-50',
      iconBg: 'bg-pink-100',
      textColor: 'text-pink-700',
      stats: 'AI & ML Ready'
    },
    {
      icon: <Users size={24} />,
      title: 'Community & Values',
      description: 'A nurturing environment that promotes values, discipline, and social responsibility.',
      accent: '#7A0C1E',
      lightAccent: 'bg-maroon-50',
      iconBg: 'bg-maroon-100',
      textColor: 'text-maroon-700',
      stats: '1500+ Students'
    },
    {
      icon: <Trophy size={24} />,
      title: 'Extracurricular Activities',
      description: 'Sports, arts, clubs, and cultural events for overall personality development.',
      accent: '#D9A441',
      lightAccent: 'bg-amber-50',
      iconBg: 'bg-amber-100',
      textColor: 'text-amber-700',
      stats: '50+ Activities'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/80 hover:border-gold-300/60"
        >
          {/* Top Accent Line */}
          <div
            className="h-1 w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"
            style={{ backgroundColor: feature.accent }}
          />

          {/* Content */}
          <div className="p-6 md:p-7">
            {/* Icon */}
            <div
              className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
            >
              <span className={feature.textColor}>{feature.icon}</span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-xl font-bold text-maroon-900 mb-2 group-hover:text-maroon-700 transition-colors duration-300">
              {feature.title}
            </h3>

            {/* Decorative Line */}
            <div
              className="w-10 h-0.5 rounded-full mb-3 transition-all duration-500 group-hover:w-16"
              style={{ backgroundColor: feature.accent }}
            />

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>

            {/* Stats Badge */}
            <div className="mt-4 flex items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  backgroundColor: feature.accent + '15',
                  color: feature.accent
                }}
              >
                <Star size={12} className="fill-current" />
                {feature.stats}
              </span>
            </div>

            {/* Learn More */}
            <div className="mt-4 pt-3 border-t border-gray-100 group-hover:border-gold-200 transition-colors duration-300">
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3 cursor-pointer"
                style={{ color: feature.accent }}
              >
                Learn More
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </div>

          {/* Bottom Gold Glow */}
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gold-100/0 group-hover:bg-gold-100/10 rounded-full blur-2xl transition-all duration-700 pointer-events-none" />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default FeatureCard