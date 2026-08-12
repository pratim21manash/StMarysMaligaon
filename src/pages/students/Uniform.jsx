import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { 
  Shirt, 
  Users, 
  CheckCircle, 
  CircleDot,
  Sparkles,
  Award,
  Shield,
  Clock
} from 'lucide-react'

const Uniform = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 }
    }
  }

  const kgToX = [
    'White blouse',
    'Dark Grey Pinafores (KG and Class I)',
    'Dark Grey Skirt with bib (Class II & III)',
    'Dark Grey Skirt (Class IV to V)',
    'Dark Grey Trousers (Class VI to X)',
    'Neck – Tie (Class IV to X)',
    'Maroon sweater with two lemon stripes (Class KG to V) / Maroon Blazer (Class VI to X)',
    'House Shirts, track pants, white canvas shoes on Wednesday (Class IV to X)',
    'White socks & black shoes',
    'Students should plait their hair into two pony-tails and tie with red ribbon'
  ]

  const seniorSecondary = [
    'Dark brown trousers',
    'Cream Top',
    'Maroon Scarf',
    'Dark brown blazers',
    'Track Suit on PE Day',
    'White socks & black shoes',
    'Students should plait their hair neatly and tie with black rubber band or ribbon'
  ]

  const uniformHighlights = [
    { label: 'Classes KG - X', value: 'Dark Grey & Maroon', color: 'bg-gradient-to-r from-gray-600 to-maroon-700' },
    { label: 'Classes XI - XII', value: 'Dark Brown & Cream', color: 'bg-gradient-to-r from-amber-800 to-amber-100' },
    { label: 'Footwear', value: 'White socks & Black shoes', color: 'bg-gradient-to-r from-gray-300 to-black' },
    { label: 'Accessories', value: 'Tie / Scarf / Ribbon', color: 'bg-gradient-to-r from-red-600 to-maroon-800' },
  ]

  const SectionTitle = ({ icon: Icon, title, subtitle }) => (
    <motion.div 
      variants={fadeInUp}
      className="flex items-center gap-3 mb-4"
    >
      <div className="p-2 bg-gold-100 rounded-lg">
        <Icon size={18} className="text-maroon-700" />
      </div>
      <div>
        <h2 className="text-lg font-serif font-bold text-maroon-900">{title}</h2>
        {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-gold-300/50 to-transparent" />
    </motion.div>
  )

  return (
    <div className="bg-gradient-to-b from-white to-[#FBF6EC] min-h-screen">
      
      {/* ========================================================== */}
      {/* COMPACT HERO HEADER */}
      {/* ========================================================== */}
      <div className="bg-maroon-900 text-white py-8 px-4">
        <div className="container-custom mx-auto">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gold-500/20 rounded-lg">
              <Shirt size={20} className="text-gold-300" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold">School Uniform</h1>
              <p className="text-gold-300 text-sm mt-0.5">Dress code guidelines for all students</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================== */}
      {/* MAIN CONTENT */}
      {/* ========================================================== */}
      <section ref={ref} className="py-8 md:py-10">
        <div className="container-custom max-w-4xl mx-auto">
          
          {/* Compulsory Notice */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-xl p-4 mb-6 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <CheckCircle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 font-medium">
                It is compulsory for every student to come to school in full school uniform including footwear.
              </p>
            </div>
          </motion.div>

          {/* Uniform Highlights Cards */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"
          >
            {uniformHighlights.map((item) => (
              <motion.div 
                key={item.label} 
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-3.5 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-gold-300"
              >
                <div className={`h-1.5 w-12 rounded-full ${item.color} mx-auto mb-2`} />
                <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">{item.label}</p>
                <p className="text-xs font-bold text-maroon-900 mt-0.5">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Classes KG to X */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-6"
          >
            <div className="bg-gradient-to-r from-maroon-800 to-maroon-700 px-6 py-3.5">
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded-lg bg-gold-500/20">
                  <Users size={16} className="text-gold-300" />
                </div>
                <h2 className="text-white font-bold text-sm tracking-wide">Classes KG to X</h2>
                <span className="ml-auto text-[10px] text-gold-300/70 font-medium">10 Items</span>
              </div>
            </div>
            <div className="p-6">
              <motion.ul 
                variants={staggerChildren}
                initial="hidden"
                animate={controls}
                className="space-y-2.5"
              >
                {kgToX.map((item, index) => (
                  <motion.li 
                    key={index} 
                    variants={fadeInUp}
                    className="flex items-start gap-3 text-sm text-gray-700 hover:text-maroon-800 transition-colors group"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <CircleDot size={14} className="text-gold-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="group-hover:font-medium transition-all">{item}</span>
                    <span className="ml-auto text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            
            {/* Footer */}
            <div className="bg-gray-50/80 px-6 py-2.5 border-t border-gray-100 flex items-center justify-between">
              <p className="text-[10px] text-gray-400 flex items-center gap-1.5">
                <Clock size={12} className="text-gold-500" />
                Uniform applies to all students in these classes
              </p>
              <p className="text-[10px] text-gray-400">Updated: 2025-26</p>
            </div>
          </motion.div>

          {/* Senior Secondary Classes */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-maroon-800 to-maroon-700 px-6 py-3.5">
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded-lg bg-gold-500/20">
                  <Award size={16} className="text-gold-300" />
                </div>
                <h2 className="text-white font-bold text-sm tracking-wide">Senior Secondary Classes (XI - XII)</h2>
                <span className="ml-auto text-[10px] text-gold-300/70 font-medium">7 Items</span>
              </div>
            </div>
            <div className="p-6">
              <motion.ul 
                variants={staggerChildren}
                initial="hidden"
                animate={controls}
                className="space-y-2.5"
              >
                {seniorSecondary.map((item, index) => (
                  <motion.li 
                    key={index} 
                    variants={fadeInUp}
                    className="flex items-start gap-3 text-sm text-gray-700 hover:text-maroon-800 transition-colors group"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <CircleDot size={14} className="text-gold-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="group-hover:font-medium transition-all">{item}</span>
                    <span className="ml-auto text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            
            {/* Footer */}
            <div className="bg-gray-50/80 px-6 py-2.5 border-t border-gray-100 flex items-center justify-between">
              <p className="text-[10px] text-gray-400 flex items-center gap-1.5">
                <Shield size={12} className="text-gold-500" />
                Uniform applies to all Senior Secondary students
              </p>
              <p className="text-[10px] text-gray-400">Updated: 2025-26</p>
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="mt-6 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-gray-50 to-gold-50/30 rounded-full px-6 py-2.5 border border-gray-200">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Sparkles size={14} className="text-gold-500" />
                <span>All students must be in complete uniform as per their respective classes</span>
                <Sparkles size={14} className="text-gold-500" />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <style>{`
        .container-custom {
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        @media (min-width: 640px) {
          .container-custom {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .container-custom {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Uniform