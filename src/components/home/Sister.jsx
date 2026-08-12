// src/components/home/Sister.jsx

import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Sparkles, Heart, ArrowRight, Award } from 'lucide-react'
import { schoolInfo } from '../../data/seedData.js'
import sisterImage from '../../assets/sister.png'
import boscoImage from '../../assets/bosco.png'
import coFounderImage from '../../assets/coFounder.png'

const Sister = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-[#FBF6EC] to-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold-100/20 rounded-full -translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-maroon-50/30 rounded-full translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#7A0C1E 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-10 bg-gold-400" />
            <span className="text-gold-600 text-xs font-semibold tracking-[0.25em] uppercase">
              Our Leadership
            </span>
            <span className="h-px w-10 bg-gold-400" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon-900">
            Sr. Superior's <span className="text-gold-600 italic">Message</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-gold-400 to-maroon-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Superior's Message - Main Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-100/80 overflow-hidden hover:shadow-3xl transition-shadow duration-500 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Left - Photo Column */}
            <div className="md:col-span-4 relative bg-gradient-to-br from-maroon-800 to-maroon-900 min-h-[300px] md:min-h-[420px] overflow-hidden">
              <img
                src={sisterImage}
                alt="Sr. Lissy Mathew - Manager, St. Mary's Sr. Sec. School"
                className="absolute inset-0 w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/90 via-maroon-950/30 to-transparent" />
              <div className="absolute inset-4 border border-gold-400/30 rounded-xl pointer-events-none" />
              <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-gold-400/60 rounded-tl" />
              <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-gold-400/60 rounded-tr" />
              <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-gold-400/60 rounded-bl" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-gold-400/60 rounded-br" />
              <div className="absolute top-4 right-4 bg-gold-500/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                <Award size={12} className="text-maroon-900" />
                <span className="text-[10px] font-bold text-maroon-900">Salesian Sisters</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="w-12 h-0.5 bg-gold-400 rounded-full mb-3" />
                <p className="font-serif text-2xl font-bold text-white leading-tight drop-shadow-lg">
                  Sr. Lissy Mathew
                </p>
                <p className="text-xs text-gold-300 tracking-[0.2em] uppercase mt-1 font-medium">
                  Manager, {schoolInfo.name}
                </p>
              </div>
            </div>

            {/* Right - Message */}
            <div className="md:col-span-8 p-6 md:p-8 lg:p-10">
              <div className="flex items-start gap-3 mb-4">
                <Quote size={24} className="text-gold-300 flex-shrink-0 mt-0.5" />
                <span className="text-[10px] font-semibold text-gold-600 tracking-[0.2em] uppercase">
                  A Message from the Manager
                </span>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-[15px] max-h-[300px] overflow-y-auto pr-3 custom-scrollbar">
                <p className="text-base md:text-lg font-serif text-maroon-800 font-medium leading-relaxed">
                  "I am pleased to write these lines on this web page of St. Mary's Sr. Sec. School, Maligaon, as I return to the institution after nine years."
                </p>

                <p>
                  I am truly excited to be part of this educational community and contribute to the growth and success of our students. Our vision is to build upon our existing strength while implementing new initiatives and programs to enrich the educational experience for all students.
                </p>

                <p>
                  I am dedicated to working collaboratively with our esteemed faculty, staff and parents to ensure that every student receives a comprehensive education that is accessible to young people from diverse backgrounds. Our mission is to foster a child-centered learning environment within a supportive and nurturing family-like atmosphere.
                </p>

                <div className="my-3 pl-5 border-l-4 border-gold-400 py-2 bg-gradient-to-r from-gold-50/60 to-transparent rounded-r-lg">
                  <p className="italic text-maroon-800 text-sm leading-relaxed">
                    "I sincerely appreciate the ongoing support of the educational community for our school. I look forward to collaborating to achieve success together."
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t-2 border-gold-200/60">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Heart size={16} className="text-rose-400" />
                    <span className="text-sm text-gray-500">With gratitude and hope</span>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-xl font-bold text-maroon-800 leading-tight">Sr. Lissy Mathew</p>
                    <p className="text-xs font-semibold text-gold-600 tracking-[0.15em] uppercase">Manager</p>
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-400">
                  <span>{schoolInfo.name}, {schoolInfo.city}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Founder & Co-Foundress Cards - With Full Image Visibility */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Founder Card */}
          <motion.div variants={cardVariants} className="group">
  <div className="bg-white rounded-2xl shadow-lg border border-gray-100/80 hover:shadow-2xl transition-all duration-500 overflow-hidden h-full hover:-translate-y-1">

    {/* Image Section */}
    <div className="relative h-56 md:h-64 bg-gradient-to-r from-maroon-800 to-maroon-700 overflow-hidden">

      {/* Full Image - No Cropping */}
      <img
        src={boscoImage}
        alt="St. John Bosco - Founder"
        className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      {/* Gradient Overlay - Bottom only */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

      {/* Decorative gold line at top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

      {/* Badge - Top right */}
      <div className="absolute top-3 right-3 bg-gold-500/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
        <span className="text-[9px] font-bold text-maroon-900">
          Don Bosco
        </span>
      </div>

      {/* Name Plate - Bottom left */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="w-10 h-0.5 bg-gold-400 rounded-full mb-2" />

        <p className="text-white font-serif text-xl md:text-2xl font-bold drop-shadow-lg">
          St. John Bosco
        </p>

        <p className="text-gold-300 text-xs tracking-[0.2em] uppercase font-medium">
          Founder
        </p>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="font-serif text-xl font-bold text-maroon-900 group-hover:text-maroon-700 transition-colors">
        Founder Message
      </h3>

      <div className="w-12 h-0.5 bg-gold-400 rounded-full mt-2 mb-3 group-hover:w-20 transition-all duration-500" />

      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
        St. John Bosco, popularly known as Don Bosco (Italian for Father Bosco)
        was born at Becchi, in Piedmont, Italy on August 16, 1815. From a very
        young age he was inspired to work for the poor young people of his time...
      </p>

      <a
        href="/about/founders"
        className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-maroon-700 hover:text-gold-600 transition-all duration-300 group-hover:gap-3"
      >
        Read More
        <ArrowRight
          size={16}
          className="group-hover:translate-x-1 transition-transform duration-300"
        />
      </a>
    </div>

    {/* Bottom Hover Line */}
    <div className="h-0.5 bg-gradient-to-r from-gold-400 to-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

  </div>
</motion.div>

          {/* Co-Foundress Card */}
          <motion.div variants={cardVariants} className="group">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100/80 hover:shadow-2xl transition-all duration-500 overflow-hidden h-full hover:-translate-y-1">
              <div className="relative h-56 md:h-64 bg-gradient-to-r from-maroon-700 to-maroon-800 overflow-hidden">
                {/* Image - Full visible */}
                <img
                  src={coFounderImage}
                  alt="St. Mary Mazzarello - Co-Foundress"
                  className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Gradient Overlay - Bottom only, less dark */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Decorative gold line at top */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
                
                {/* Badge - Top right */}
                <div className="absolute top-3 right-3 bg-gold-500/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                  <span className="text-[9px] font-bold text-maroon-900">FMA</span>
                </div>

                {/* Name Plate - Bottom left */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-10 h-0.5 bg-gold-400 rounded-full mb-2" />
                  <p className="text-white font-serif text-xl md:text-2xl font-bold drop-shadow-lg">
                    St. Mary Mazzarello
                  </p>
                  <p className="text-gold-300 text-xs tracking-[0.2em] uppercase font-medium">Co-Foundress</p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-maroon-900 group-hover:text-maroon-700 transition-colors">
                  Co-Foundress Message
                </h3>
                <div className="w-12 h-0.5 bg-gold-400 rounded-full mt-2 mb-3 group-hover:w-20 transition-all duration-500" />
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  God's ways are marvellous. Contemporaneously with Don Bosco, Mary Mazzarello in the hamlet of Mornese a little village in Piedmont, Italy thirsted with the same desire to help girls. She was born on May 9, 1837...
                </p>
                <a
                  href="/about/co-founders"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-maroon-700 hover:text-gold-600 transition-all duration-300 group-hover:gap-3"
                >
                  Read More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
              <div className="h-0.5 bg-gradient-to-r from-gold-400 to-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom decorative */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-maroon-50/60 to-gold-50/60 rounded-2xl px-6 py-3 border border-maroon-100/60">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Sparkles size={16} className="text-gold-500" />
              <span>Inspired by the Salesian spirit of <span className="font-semibold text-maroon-700">Reason, Religion, and Loving Kindness</span></span>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .border-l-4 {
          border-left-width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #D9A441;
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #c48d32;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #D9A441 transparent;
        }
        .shadow-3xl {
          box-shadow: 0 30px 60px -15px rgba(122, 12, 30, 0.15);
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}

export default Sister