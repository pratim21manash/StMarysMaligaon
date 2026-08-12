// src/components/home/PrincipalMessage.jsx

import React from 'react'
import { Mail, Sparkles, Quote, Award, Heart, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import principalImage from '../../assets/principal.png'

const PrincipalMessage = () => {
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

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-white to-[#FBF6EC] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-100/20 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-maroon-50/30 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      
      {/* Subtle Grid Pattern */}
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
              Leadership Message
            </span>
            <span className="h-px w-10 bg-gold-400" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon-900">
            From the <span className="text-gold-600 italic">Principal's Desk</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-gold-400 to-maroon-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Main Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-100/80 overflow-hidden hover:shadow-3xl transition-shadow duration-500"
        >
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Left - Photo Column */}
            <div className="md:col-span-4 relative bg-maroon-900 min-h-[320px] md:min-h-[440px] overflow-hidden">
              {/* Image */}
              <img
                src={principalImage}
                alt="Principal - St. Mary's Sr. Secondary School"
                className="absolute inset-0 w-full h-full object-cover object-top"
                loading="lazy"
              />
              
              {/* Gradient Overlay - Darker at bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/90 via-maroon-950/30 to-transparent" />
              
              {/* Decorative Gold Frame */}
              <div className="absolute inset-4 border border-gold-400/40 rounded-xl pointer-events-none" />
              <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-gold-400/60 rounded-tl" />
              <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-gold-400/60 rounded-tr" />
              <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-gold-400/60 rounded-bl" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-gold-400/60 rounded-br" />

              {/* Badges */}
              {/* <div className="absolute top-4 right-4 bg-gold-500/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                <Award size={12} className="text-maroon-900" />
                <span className="text-[10px] font-bold text-maroon-900">35 Years</span>
              </div> */}

              {/* <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                <span className="text-[10px] font-medium text-white/80 flex items-center gap-1.5">
                  <Clock size={11} className="text-gold-400" />
                  Since 1966
                </span>
              </div> */}

              {/* Name Plate */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="w-12 h-0.5 bg-gold-400 rounded-full mb-3" />
                <p className="font-serif text-2xl font-bold text-white leading-tight drop-shadow-lg">
                  GRACE PEMMILA
                </p>
                <p className="text-xs text-gold-300 tracking-[0.2em] uppercase mt-1 font-medium">
                  Principal, St. Mary's Sr. Sec. School
                </p>
              </div>
            </div>

            {/* Right - Message Column */}
            <div className="md:col-span-8 p-6 md:p-8 lg:p-10">
              {/* Opening Quote */}
              <div className="flex items-start gap-3 mb-4">
                <Quote size={24} className="text-gold-300 flex-shrink-0 mt-0.5" />
                <span className="text-[10px] font-semibold text-gold-600 tracking-[0.2em] uppercase">
                  A Message of Welcome
                </span>
              </div>

              {/* Message Content with scroll */}
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-[15px] max-h-[280px] overflow-y-auto pr-3 custom-scrollbar">
                <p className="text-base md:text-lg font-serif text-maroon-800 font-medium leading-relaxed">
                  "Education is not just about filling minds with facts, but about lighting a fire of curiosity and purpose."
                </p>

                <p>
                  Welcome to <span className="text-maroon-800 font-semibold">St. Mary's Sr. Secondary School, Maligaon</span> — a place where young minds are nurtured, characters are built, and futures are shaped. It is my privilege to lead this institution that has been a beacon of quality education in Guwahati for over 35 years.
                </p>

                <p>
                  At St. Mary's, we believe that every child is unique and possesses immense potential. Our mission is to nurture this potential through a holistic approach that combines academic excellence, character development, and life skills. We create an environment where students feel safe, valued, and inspired to explore.
                </p>

                {/* Highlight Quote */}
                <div className="my-3 pl-5 border-l-4 border-gold-400 py-2 bg-gradient-to-r from-gold-50/60 to-transparent rounded-r-lg">
                  <p className="italic text-maroon-800 text-sm leading-relaxed">
                    "We strive to create a learning environment that inspires curiosity, fosters creativity, and builds resilience. Our students are prepared not just for examinations, but for life."
                  </p>
                </div>

                <p>
                  Our dedicated team of teachers works tirelessly to ensure every student receives individual attention and support. We encourage students to discover their passions, participate in co-curricular activities, and develop a strong sense of social responsibility. We believe in education that goes beyond textbooks — education that builds character.
                </p>

                <p>
                  I invite parents to partner with us in this transformative journey. Together, we can shape the future of our children and help them become confident, compassionate, and capable individuals who will make a positive impact on the world.
                </p>
              </div>

              {/* Footer */}
              <div className="mt-5 pt-4 border-t-2 border-gold-200/60">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <a
                    href="mailto:principal@stmarysmaligaon.edu.in"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-maroon-50 hover:bg-maroon-100 rounded-xl transition-all duration-300 border border-maroon-100/50 group"
                  >
                    <Mail size={15} className="text-maroon-700 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-maroon-800">st.marysschool66@yahoo.com</span>
                  </a>

                  <div className="text-right">
                    <p className="font-serif text-xl font-bold text-maroon-800 leading-tight">GRACE PEMMILA</p>
                    <p className="text-xs font-semibold text-gold-600 tracking-[0.15em] uppercase">Principal</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between mt-3 pt-3 border-t border-gold-100/50">
                  <div className="flex items-center gap-2">
                    <Heart size={13} className="text-rose-400" />
                    <span className="text-sm font-medium text-maroon-700 italic">"With faith, knowledge, and compassion."</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles size={13} className="text-gold-500" />
                    <span className="text-xs font-semibold text-maroon-600 tracking-wide">Est. 1966</span>
                  </div>
                </div>
              </div>
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
      `}</style>
    </section>
  )
}

export default PrincipalMessage