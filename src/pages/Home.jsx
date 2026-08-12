// src/pages/Home.jsx

import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUp, Sparkles, Crown, Heart, Star } from 'lucide-react'
import HeroCarousel from '../components/home/HeroCarousel.jsx'
import WelcomeSection from '../components/home/WelcomeSection.jsx'
import FeatureCard from '../components/home/FeatureCard.jsx'
import PrincipalMessage from '../components/home/PrincipalMessage.jsx'
import CircularsPanel from '../components/home/CircularsPanel.jsx'
import SectionWrapper from '../components/common/SectionWrapper.jsx'
import AboutUs from '../components/home/AboutUs.jsx'
import Sister from '../components/home/Sister.jsx'

/* ---------------------------------------------------------
   Enhanced Reusable Decorative Pieces
--------------------------------------------------------- */

// Elegant wave divider with gradient
const WaveDivider = ({ flip = false, color = '#FBF6EC', gradient = false }) => (
  <div className={`relative w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`} style={{ height: '70px' }}>
    <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
      {gradient ? (
        <defs>
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#7A0C1E', stopOpacity: 0.15 }} />
            <stop offset="50%" style={{ stopColor: '#D9A441', stopOpacity: 0.25 }} />
            <stop offset="100%" style={{ stopColor: '#7A0C1E', stopOpacity: 0.15 }} />
          </linearGradient>
        </defs>
      ) : null}
      <path
        d="M0,35 C240,70 480,0 720,25 C960,50 1200,10 1440,35 L1440,70 L0,70 Z"
        fill={gradient ? 'url(#waveGrad)' : color}
      />
      <path
        d="M0,45 C300,60 600,30 900,40 C1200,50 1320,20 1440,35 L1440,70 L0,70 Z"
        fill={gradient ? 'url(#waveGrad)' : color}
        opacity="0.4"
      />
    </svg>
  </div>
)

// Premium section eyebrow
const SectionEyebrow = ({ label, icon: Icon = Sparkles }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-center justify-center gap-3 mb-4"
  >
    <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-400" />
    <span className="flex items-center gap-2 text-gold-600 text-[11px] font-semibold tracking-[0.25em] uppercase">
      <Icon size={14} className="text-gold-400" />
      {label}
    </span>
    <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold-400" />
  </motion.div>
)

// Enhanced floating orb with glow
const FloatingOrb = ({ className = '', duration = 8, delay = 0, size = 'medium' }) => {
  const sizes = {
    small: 'w-32 h-32',
    medium: 'w-56 h-56',
    large: 'w-96 h-96',
    xl: 'w-[40rem] h-[40rem]'
  }
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${sizes[size]} ${className}`}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.05, 1]
      }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

// Premium gradient underline
const GradientUnderline = ({ className = '' }) => (
  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: '5rem' }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    className={`h-1 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-maroon-600 mx-auto ${className}`}
  />
)

// Decorative corner accent
const CornerAccent = ({ className = '' }) => (
  <div className={`absolute pointer-events-none ${className}`}>
    <div className="w-16 h-16 border-t-2 border-l-2 border-gold-300/30 rounded-tl-2xl" />
    <div className="w-12 h-12 border-b-2 border-r-2 border-gold-300/30 rounded-br-2xl absolute -bottom-8 -right-8" />
  </div>
)

// Subtle background pattern
const BackgroundPattern = ({ className = '' }) => (
  <div
    className={`absolute inset-0 opacity-[0.03] pointer-events-none ${className}`}
    style={{
      backgroundImage: `
        radial-gradient(circle at 20% 50%, #7A0C1E 1px, transparent 1px),
        radial-gradient(circle at 80% 50%, #D9A441 1px, transparent 1px)
      `,
      backgroundSize: '48px 48px, 56px 56px',
      backgroundPosition: '0 0, 24px 24px'
    }}
  />
)

/* ---------------------------------------------------------
   Floating "back to top" button — enhanced
--------------------------------------------------------- */
const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 30 }}
          whileHover={{
            scale: 1.12,
            boxShadow: '0 16px 40px -8px rgba(122,12,30,0.6)',
            y: -4
          }}
          whileTap={{ scale: 0.92 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-maroon-800 to-maroon-950 text-gold-300 shadow-2xl flex items-center justify-center border border-gold-400/20 backdrop-blur-sm group"
          aria-label="Back to top"
        >
          <ArrowUp size={22} className="group-hover:-translate-y-1 transition-transform duration-300" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gold-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.button>
      )}
    </>
  )
}

/* ---------------------------------------------------------
   Home Page — Enhanced & More Beautiful
--------------------------------------------------------- */
const Home = () => {
  const { scrollY } = useScroll()
  const parallaxSlow = useTransform(scrollY, [0, 1500], [0, 100])
  const parallaxFast = useTransform(scrollY, [0, 1500], [0, -140])

  return (
    <div className="bg-white overflow-hidden relative">

      <BackToTop />

      {/* ============ HERO + CIRCULARS ============ */}
      <section className="relative w-full overflow-hidden shadow-[0_25px_60px_-20px_rgba(0,0,0,0.4)]">
        {/* Decorative accent behind the section */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-100/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-maroon-50/20 rounded-full blur-3xl" />
        </div>

        <div className="flex flex-col lg:flex-row relative">
          <div className="relative lg:w-[72%] xl:w-[75%]">
            <HeroCarousel />
            {/* Decorative gold corner accents on hero */}
            <CornerAccent className="top-6 left-6 z-10" />
            <CornerAccent className="bottom-6 right-6 z-10 rotate-180" />
          </div>

          <div className="lg:w-[28%] xl:w-[25%] bg-gradient-to-b from-[#FBF6EC] via-white to-white flex items-stretch p-4 lg:p-6 border-l border-gold-100/40 relative">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-gold-50/30 to-transparent pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="w-full max-w-sm mx-auto lg:max-w-none h-full flex items-stretch relative z-10"
            >
              <CircularsPanel />
            </motion.div>
          </div>
        </div>

        {/* Bottom gold shimmer line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
      </section>

      {/* ============ WELCOME SECTION ============ */}
      <section className="relative bg-white py-6 overflow-hidden">
        <BackgroundPattern />
        <FloatingOrb className="top-10 -left-32 w-80 h-80 bg-maroon-100/25" duration={10} />
        <FloatingOrb className="bottom-0 -right-32 w-80 h-80 bg-gold-100/30" duration={12} delay={1} size="large" />
        <FloatingOrb className="top-1/2 left-1/2 -translate-x-1/2 w-64 h-64 bg-gold-50/20" duration={14} delay={0.5} size="medium" />
        <motion.div style={{ y: parallaxSlow }} className="relative z-10">
          <WelcomeSection />
        </motion.div>
        {/* Decorative top gold line */}
        <div className="absolute top-0 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-gold-300/30 to-transparent" />
      </section>

      <WaveDivider gradient color="#FBF6EC" />

      {/* ============ ABOUT US ============ */}
      <section className="relative bg-gradient-to-b from-[#FBF6EC] to-white py-6 overflow-hidden">
        <BackgroundPattern />
        <FloatingOrb className="top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-maroon-50/35" duration={15} size="xl" />
        <FloatingOrb className="bottom-10 right-10 w-64 h-64 bg-gold-200/25" duration={11} delay={0.6} size="large" />
        <FloatingOrb className="top-20 left-10 w-48 h-48 bg-rose-50/20" duration={9} delay={0.3} size="medium" />
        <motion.div style={{ y: parallaxFast }} className="relative z-10">
          <AboutUs />
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-300/20 to-transparent" />
      </section>

      <WaveDivider flip gradient color="#ffffff" />

      {/* ============ WHY CHOOSE US ============ */}
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        {/* Premium background texture */}
        <BackgroundPattern className="opacity-[0.05]" />

        {/* Decorative floating elements */}
        <FloatingOrb className="-top-24 -left-24 w-80 h-80 bg-gold-100/25" duration={13} />
        <FloatingOrb className="-bottom-24 -right-24 w-80 h-80 bg-maroon-100/20" duration={11} delay={0.7} />

        {/* Gold corner accents */}
        <CornerAccent className="top-8 left-8" />
        <CornerAccent className="bottom-8 right-8 rotate-180" />

        <div className="container-custom relative z-10">
          <SectionWrapper className="text-center max-w-2xl mx-auto mb-14">
            <SectionEyebrow label="What Sets Us Apart" icon={Crown} />
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-maroon-900"
            >
              Why Choose <span className="text-gold-600 italic">St. Mary's</span>
            </motion.h2>
            <GradientUnderline className="mt-4 mb-4" />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed"
            >
              A well-rounded environment built on academics, character, and opportunity.
            </motion.p>
          </SectionWrapper>
          <FeatureCard />
        </div>
      </section>

      {/* ============ PRINCIPAL MESSAGE ============ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-300/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-300/30 to-transparent" />
        </div>
        <PrincipalMessage />
      </section>

      {/* ============ SISTER SECTION ============ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#FBF6EC]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-300/20 to-transparent" />
        </div>
        <FloatingOrb className="top-0 right-0 w-96 h-96 bg-gold-100/20" duration={14} size="large" />
        <FloatingOrb className="bottom-10 left-10 w-72 h-72 bg-maroon-50/15" duration={12} delay={0.5} size="large" />
        <Sister />
      </section>

      {/* ============ CLOSING CTA STRIP — Premium ============ */}
      <section className="relative bg-maroon-900 py-20 overflow-hidden">
        {/* Animated gradient glow — more sophisticated */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(217,164,65,0.6), transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(217,164,65,0.4), transparent 45%),
              radial-gradient(circle at 50% 50%, rgba(217,164,65,0.1), transparent 60%)
            `
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            opacity: [0.25, 0.4, 0.25]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />

        {/* Premium particle dots */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, #D9A441 1.5px, transparent 1.5px),
              radial-gradient(circle at 80% 50%, #D9A441 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px, 60px 60px',
            backgroundPosition: '0 0, 20px 20px'
          }}
        />

        {/* Floating orbs behind CTA */}
        <FloatingOrb className="-top-32 -left-32 w-72 h-72 bg-gold-500/10" duration={16} size="large" />
        <FloatingOrb className="-bottom-32 -right-32 w-72 h-72 bg-gold-500/10" duration={14} delay={1} size="large" />

        {/* Decorative gold corner accents */}
        <CornerAccent className="top-6 left-6 border-gold-400/20" />
        <CornerAccent className="bottom-6 right-6 rotate-180 border-gold-400/20" />

        <div className="container-custom relative flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 text-gold-300 text-xs font-semibold tracking-[0.25em] uppercase mb-4 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full border border-gold-400/20">
              <Star size={12} className="text-gold-400 fill-gold-400" />
              Admissions Open
            </span>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to begin your child's <br className="hidden lg:block" />
              journey with us?
            </h3>
            <p className="text-maroon-200 text-base mt-4 max-w-md">
              Admissions for the new academic year are now open. Join the St. Mary's family today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row gap-4 flex-shrink-0"
          >
            <motion.a
              href="/students/parents-notice-enrollment"
              whileHover={{
                scale: 1.06,
                boxShadow: '0 20px 45px -10px rgba(217,164,65,0.7)',
                y: -3
              }}
              whileTap={{ scale: 0.96 }}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-maroon-900 font-bold px-8 py-4 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Apply Now
                <Sparkles size={16} className="text-maroon-900/70" />
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />
            </motion.a>

            <motion.a
              href="/contact-us"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-medium px-8 py-4 rounded-2xl transition-all duration-300 group"
            >
              <Heart size={18} className="text-gold-400 group-hover:scale-110 transition-transform duration-300" />
              Contact Us
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom gold shimmer */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
      </section>

      {/* ============ DECORATIVE BOTTOM ELEMENT ============ */}
      <div className="relative h-4 bg-gradient-to-t from-maroon-900/5 to-transparent">
        <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gold-300/20 to-transparent" />
      </div>

    </div>
  )
}

export default Home