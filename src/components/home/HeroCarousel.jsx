import React, { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { heroSlides } from '../../data/seedData.js'

const HeroCarousel = () => {
  const [index, setIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % heroSlides.length)
  }, [])

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length)
  }, [])

  // Auto-play every 4 seconds
  useEffect(() => {
    if (isHovering) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next, isHovering])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [prev, next])

  const slide = heroSlides[index]

  return (
    <section
      className="relative h-[70vh] min-h-[420px] w-full overflow-hidden bg-maroon-950"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Image with Ken Burns Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{
            duration: 1.2,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          {/* Elegant Dark Overlay — NO MAROON, just dark for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Gold Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent z-10" />

      {/* Content */}
      <div className="relative h-full container-custom flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{
              duration: 0.7,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="max-w-2xl"
          >
            {/* Subtitle Badge — Gold Accent */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-block bg-gold-400/20 backdrop-blur-sm border border-gold-400/30 text-gold-300 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4"
            >
              {slide.subtitle}
            </motion.span>

            {/* Title — Clean White Text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-2xl"
            >
              {slide.title}
            </motion.h1>

            {/* Divider — Elegant Gold Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-0.5 bg-gradient-to-r from-gold-400 to-gold-200 rounded-full mt-4"
            />

            {/* CTA Buttons — No Admission, only Learn More */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 mt-6"
            >
              <a
                href="/about/history"
                className="group inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-maroon-900 font-semibold px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Discover More
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <a
                href="/gallery"
                className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 hover:border-white/50 font-medium px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Explore Gallery
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows — Clean Minimal */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-gold-400 hover:text-maroon-900 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
      >
        <ChevronLeft size={20} className="md:w-6 md:h-6" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-gold-400 hover:text-maroon-900 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
      >
        <ChevronRight size={20} className="md:w-6 md:h-6" />
      </button>

      {/* Dots Indicator — Clean & Minimal */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`relative h-2 rounded-full transition-all duration-500 ${
              i === index
                ? 'w-10 bg-gold-400 shadow-lg shadow-gold-400/50'
                : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
          >
            {i === index && (
              <motion.span
                layoutId="activeDot"
                className="absolute inset-0 rounded-full bg-gold-400"
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Progress Bar — Elegant Gold */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
        <motion.div
          key={index}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 4, ease: 'linear' }}
          className="h-full bg-gradient-to-r from-gold-400 to-gold-500"
        />
      </div>

      {/* Slide Counter — Minimal */}
      <div className="absolute bottom-12 right-6 md:bottom-16 md:right-12 text-white/30 text-xs font-mono tracking-wider">
        {String(index + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
      </div>
    </section>
  )
}

export default HeroCarousel