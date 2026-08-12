// src/pages/AboutUs.jsx

import React from 'react'
import { motion } from 'framer-motion'
import { 
  School, 
  Eye, 
  BookOpen, 
  UserPlus, 
  ArrowRight,
  Sparkles,
  GraduationCap,
  Award,
  Users
} from 'lucide-react'

const AboutUs = () => {
  const aboutItems = [
    {
      id: 1,
      icon: <School size={28} />,
      title: 'About School',
      description: "St. Mary's Senior Secondary School, Maligaon is an English medium School established in 1966, and is run by the Salesians Sisters of Don Bosco.",
      readMore: '/about/school',
      gradient: 'from-maroon-50 to-gold-50/20',
      iconBg: 'bg-maroon-100',
      iconColor: 'text-maroon-700'
    },
    {
      id: 2,
      icon: <Eye size={28} />,
      title: 'Vision & Mission',
      description: "St. Mary's School, Maligaon is committed to making the integral formation accessible to young girls of diverse backgrounds. Our mission is to nurture empowered, compassionate, and responsible citizens who will contribute meaningfully to society.",
      readMore: '/about/vision-mission',
      gradient: 'from-blue-50 to-indigo-50/20',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-700'
    },
    {
      id: 3,
      icon: <BookOpen size={28} />,
      title: 'Curriculum',
      description: "The system of education followed in the schools run by the Salesian Sisters is the Preventive System which is based on three great principles of Reason, Religion, and Loving Kindness. This system focuses on integral formation of the whole person.",
      readMore: '/academics/curriculum',
      gradient: 'from-emerald-50 to-teal-50/20',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-700'
    },
    {
      id: 4,
      icon: <UserPlus size={28} />,
      title: 'Admission Enquiry',
      description: "Age eligibility (As on 1st April of the academic session for which admission is sought). The day for the pre-primary classes is designed to address the developmental needs of young learners through play-based and activity-oriented learning.",
      readMore: '/admissions/enquiry',
      gradient: 'from-amber-50 to-orange-50/20',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-700'
    }
  ]

  const stats = [
    { value: '1966', label: 'Year Established', icon: <GraduationCap size={20} /> },
    { value: '60+', label: 'Years of Excellence', icon: <Award size={20} /> },
    { value: '1500+', label: 'Students', icon: <Users size={20} /> },
    { value: '55+', label: 'Teaching Staff', icon: <Users size={20} /> }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-100/20 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-maroon-50/20 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      
      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-0.5 bg-gold-400 rounded-full" />
            <span className="text-xs font-semibold text-gold-500 tracking-[0.2em] uppercase flex items-center gap-1.5">
              <Sparkles size={12} className="text-gold-400" />
              About Our School
            </span>
            <div className="w-8 h-0.5 bg-gold-400 rounded-full" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon-900">
            Welcome to <span className="text-gold-600">St. Mary's</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-gold-400 to-maroon-600 mx-auto mt-3 rounded-full" />
          <p className="text-gray-600 text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Empowering young minds through quality education, values, and holistic development since 1966.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={statsVariants}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 text-center border border-gray-100 hover:border-gold-200"
            >
              <div className="text-gold-500 flex justify-center mb-1">{stat.icon}</div>
              <div className="text-2xl font-bold text-maroon-900">{stat.value}</div>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {aboutItems.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className={`
                relative bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                transition-all duration-500 overflow-hidden border border-gray-100 
                hover:border-gold-300/60 h-full
                bg-gradient-to-br ${item.gradient}
              `}>
                {/* Top Decorative Accent Bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r from-${item.iconColor.split('-')[1]}-400 to-gold-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />

                <div className="p-6 md:p-8">
                  {/* Icon */}
                  <div className={`
                    w-14 h-14 rounded-2xl ${item.iconBg} 
                    flex items-center justify-center mb-4
                    group-hover:scale-110 transition-transform duration-300
                    group-hover:shadow-lg
                  `}>
                    <span className={item.iconColor}>{item.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-maroon-900 mb-2 group-hover:text-maroon-700 transition-colors">
                    {item.title}
                  </h3>

                  {/* Decorative Line */}
                  <div className={`w-12 h-0.5 bg-${item.iconColor.split('-')[1]}-400 rounded-full mb-3 group-hover:w-20 transition-all duration-500`} />

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Read More Link */}
                  <a
                    href={item.readMore}
                    className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-maroon-700 hover:text-gold-600 transition-all duration-300 group-hover:gap-3"
                  >
                    Read More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>

                  {/* Bottom Decorative Effect */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gold-100/10 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-maroon-50 to-gold-50/30 rounded-2xl px-6 py-4 border border-maroon-100/60">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-maroon-700">📚 Discover More</span>
              <span className="hidden sm:inline text-gray-400 mx-2">|</span>
              <br className="sm:hidden" />
              <span className="text-gray-500">Explore our academic programs, achievements, and community</span>
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        .font-serif {
          font-family: 'Fraunces', Georgia, serif;
        }
      `}</style>
    </section>
  )
}

export default AboutUs