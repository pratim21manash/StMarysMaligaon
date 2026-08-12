import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  Heart, 
  Sparkles, 
  Quote, 
  Cross, 
  BookOpen, 
  Users, 
  Globe,
  Calendar,
  Award,
  Star
} from 'lucide-react';
import coFounderImage from '../../assets/coFounder.png';

const CoFounders = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-[#FBF6EC] min-h-screen overflow-hidden">
      
      {/* ========================================================== */}
      {/* HERO SECTION - Full width with parallax effect */}
      {/* ========================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-900 py-20 md:py-28">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-gold-400/20"
                style={{
                  width: Math.random() * 300 + 50 + 'px',
                  height: Math.random() * 300 + 50 + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Decorative Gold Lines */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{ 
            y: [0, 30, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gold-400/20 backdrop-blur-sm border border-gold-400/30 text-gold-300 px-4 py-2 rounded-full text-sm font-semibold tracking-[0.2em] uppercase mb-6"
            >
              <Sparkles size={16} className="text-gold-400" />
              Our Founders
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Our <span className="text-gold-400 italic">Co-Foundress</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gold-300 text-xl md:text-2xl mt-4 font-light"
            >
              St. Mary Domenica Mazzarello
            </motion.p>

            {/* Years */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-400 text-sm mt-2 tracking-widest flex items-center justify-center gap-2"
            >
              <Calendar size={16} className="text-gold-400" />
              1837 – 1881
            </motion.p>

            {/* Decorative Divider */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '80px' }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="h-1 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full mx-auto mt-6"
            />
          </motion.div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* MAIN CONTENT */}
      {/* ========================================================== */}
      <section ref={ref} className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
            className="max-w-5xl mx-auto"
          >

            {/* ========================================================== */}
            {/* PROFILE CARD */}
            {/* ========================================================== */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100/80 hover:shadow-3xl transition-shadow duration-500"
            >
              <div className="p-8 md:p-10 lg:p-12">
                
                {/* Profile Section */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                  {/* Image Container */}
                  <motion.div
                    variants={fadeInScale}
                    className="relative flex-shrink-0 mx-auto md:mx-0"
                  >
                    <div className="relative">
                      {/* Gold Ring Animation */}
                      <motion.div
                        className="absolute -inset-2 rounded-full border-2 border-gold-400/30"
                        animate={{ 
                          scale: [1, 1.05, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      
                      {/* Main Image */}
                      <img
                        src={coFounderImage}
                        alt="St. Mary Domenica Mazzarello"
                        className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-xl border-4 border-gold-400 relative z-10"
                      />
                      
                      {/* Decorative Corner Accents */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-gold-400 rounded-tr-xl z-20" />
                      <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-gold-400 rounded-bl-xl z-20" />
                    </div>

                    {/* Saint Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="absolute -bottom-1 -right-1 bg-gold-500 text-maroon-900 px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 z-20"
                    >
                      <Star size={14} className="fill-current" />
                      <span className="text-xs font-bold">Saint</span>
                    </motion.div>
                  </motion.div>

                  {/* Profile Info */}
                  <div className="flex-1 text-center md:text-left">
                    <motion.h2 
                      variants={fadeInUp}
                      className="font-serif text-3xl md:text-4xl font-bold text-maroon-900"
                    >
                      St. Mary Domenica <br className="hidden sm:block" />
                      <span className="text-gold-600">Mazzarello</span>
                    </motion.h2>

                    <motion.p 
                      variants={fadeInUp}
                      className="text-gold-600 text-sm font-semibold mt-1 flex items-center justify-center md:justify-start gap-2"
                    >
                      <Award size={16} />
                      Co-Foundress of the Salesian Sisters (FMA)
                    </motion.p>

                    <motion.div 
                      variants={fadeInUp}
                      className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-3"
                    >
                      <span className="inline-flex items-center gap-1.5 text-xs bg-maroon-50 text-maroon-700 px-3 py-1 rounded-full">
                        <Heart size={12} className="text-rose-500" />
                        Born May 9, 1837
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs bg-maroon-50 text-maroon-700 px-3 py-1 rounded-full">
                        <Cross size={12} className="text-gold-500" />
                        Died May 14, 1881
                      </span>
                    </motion.div>

                    {/* Quote from the Saint */}
                    <motion.div 
                      variants={fadeInUp}
                      className="mt-4 p-4 bg-gradient-to-r from-gold-50/80 to-transparent rounded-xl border-l-4 border-gold-400"
                    >
                      <Quote size={16} className="text-gold-400 mb-1" />
                      <p className="text-maroon-800 italic text-sm leading-relaxed">
                        "I entrust them to you."
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* ========================================================== */}
                {/* BIOGRAPHY SECTION */}
                {/* ========================================================== */}
                <motion.div 
                  variants={fadeInUp}
                  className="mt-8 pt-8 border-t border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-maroon-100 text-maroon-700 flex items-center justify-center">
                      <BookOpen size={18} />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-maroon-900">Her Life & Mission</h3>
                  </div>

                  <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                    <p>
                      <span className="text-maroon-800 font-semibold">God's ways are marvelous.</span> Contemporary with Don Bosco, 
                      Mary Mazzarello, in the hamlet of Mornese a little village in Piedmont, Italy, 
                      thirsted with the same desire to help girls. Mary Domenica Mazzarello was born on 
                      <span className="text-maroon-700 font-medium"> May 9, 1837</span>.
                    </p>

                    <p>
                      She too did receive a heavenly mandate. While walking down the uninhabited slopes 
                      of Borgo Alto she saw a group of girls playing in the non‑existent playground and 
                      a strong voice – firm and steady, communicated to her the divine mission:{' '}
                      <span className="italic text-maroon-800 font-medium">"I entrust them to you."</span> 
                      Was it a dream, a hallucination? Yet there she was fully awake. Walking in full 
                      consciousness…
                    </p>

                    {/* Key Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                      <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                        <p className="text-2xl font-bold text-maroon-900">1837</p>
                        <p className="text-xs text-gray-500">Birth Year</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                        <p className="text-2xl font-bold text-maroon-900">1872</p>
                        <p className="text-xs text-gray-500">Founded FMA</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                        <p className="text-2xl font-bold text-maroon-900">1922</p>
                        <p className="text-xs text-gray-500">Arrived in India</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* ========================================================== */}
                {/* MEETING WITH DON BOSCO */}
                {/* ========================================================== */}
                <motion.div 
                  variants={fadeInUp}
                  className="mt-8 pt-8 border-t border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gold-100 text-gold-700 flex items-center justify-center">
                      <Users size={18} />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-maroon-900">
                      The Meeting &amp; Foundation
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                      <p>
                        In <span className="text-maroon-700 font-semibold">1864</span> came the momentous 
                        meeting with Don Bosco. <span className="italic">"He is a saint! I can feel it!"</span>{' '}
                        she said to all. Don Bosco too saw something equally precious in her. In Mary Mazzarello
                        a like‑minded soul, Salesian by instinct, Don Bosco found a ready, active and creative
                        collaborator.
                      </p>
                      <p>
                        In <span className="text-maroon-700 font-semibold">1872</span> he founded the 
                        Society of the Salesian Sisters (FMA) with Mary Mazzarello at their head. Imbued with 
                        the spirit of the Founder they would march forward in the quest of providing integral 
                        formation and education for girls.
                      </p>
                      <p>
                        <span className="text-maroon-700 font-semibold">1875</span> saw the first expansion 
                        of the Salesian work outside Europe. India welcomed the first Salesian Sisters in 
                        <span className="text-maroon-700 font-semibold"> 1922</span>.
                      </p>
                    </div>

                    {/* Timeline Visual */}
                    <div className="relative bg-gradient-to-b from-maroon-50 to-gold-50 rounded-2xl p-5 border border-gold-200">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-maroon-800 text-white flex items-center justify-center text-xs font-bold">1</div>
                          <div>
                            <p className="text-xs font-semibold text-maroon-900">1864</p>
                            <p className="text-[10px] text-gray-600">Meeting with Don Bosco</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gold-500 text-maroon-900 flex items-center justify-center text-xs font-bold">2</div>
                          <div>
                            <p className="text-xs font-semibold text-maroon-900">1872</p>
                            <p className="text-[10px] text-gray-600">Founded FMA</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-maroon-800 text-white flex items-center justify-center text-xs font-bold">3</div>
                          <div>
                            <p className="text-xs font-semibold text-maroon-900">1922</p>
                            <p className="text-[10px] text-gray-600">Arrived in India</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* ========================================================== */}
                {/* LEGACY SECTION */}
                {/* ========================================================== */}
                <motion.div 
                  variants={fadeInUp}
                  className="mt-8 pt-8 border-t border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center">
                      <Heart size={18} />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-maroon-900">
                      Her Enduring Legacy
                    </h3>
                  </div>

                  <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                    <p>
                      Today, the Salesian Sisters continue to carry forward the charism of Don Bosco and
                      Mother Mazzarello, serving young women with the same loving kindness, reason, and faith
                      that inspired their founders. Her vision of integral education – nurturing the mind,
                      heart, and spirit – remains as relevant as ever, guiding countless institutions across
                      the globe.
                    </p>

                    {/* Legacy Quote Box */}
                    <div className="relative bg-gradient-to-r from-gold-50 to-amber-50 border-l-4 border-gold-500 p-5 rounded-r-xl">
                      <Quote size={20} className="text-gold-400 absolute -top-2 -left-2 bg-white rounded-full p-1" />
                      <div className="pl-6">
                        <p className="text-maroon-900 italic font-serif text-base md:text-lg leading-relaxed">
                          "I entrust them to you." – a divine mandate that still echoes in every classroom
                          and community where Salesian sisters serve.
                        </p>
                      </div>
                    </div>

                    {/* Legacy Stats */}
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      <div className="text-center p-3 bg-maroon-50 rounded-xl">
                        <Globe size={20} className="mx-auto text-maroon-700" />
                        <p className="text-xs font-semibold text-maroon-900 mt-1">Global Presence</p>
                        <p className="text-[10px] text-gray-500">100+ Countries</p>
                      </div>
                      <div className="text-center p-3 bg-maroon-50 rounded-xl">
                        <BookOpen size={20} className="mx-auto text-maroon-700" />
                        <p className="text-xs font-semibold text-maroon-900 mt-1">Educational Institutions</p>
                        <p className="text-[10px] text-gray-500">2000+ Schools</p>
                      </div>
                      <div className="text-center p-3 bg-maroon-50 rounded-xl">
                        <Users size={20} className="mx-auto text-maroon-700" />
                        <p className="text-xs font-semibold text-maroon-900 mt-1">Salesian Sisters</p>
                        <p className="text-[10px] text-gray-500">14,000+ Sisters</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* ========================================================== */}
                {/* BOTTOM CTA - Like a Prayer/Reflection */}
                {/* ========================================================== */}
                <motion.div 
                  variants={fadeInUp}
                  className="mt-8 pt-8 border-t border-gray-100"
                >
                  <div className="bg-gradient-to-br from-maroon-900 to-maroon-800 rounded-2xl p-6 md:p-8 text-center text-white">
                    <Sparkles size={24} className="text-gold-400 mx-auto mb-3" />
                    <h4 className="font-serif text-xl font-bold text-gold-300 mb-2">
                      May Her Legacy Inspire Us
                    </h4>
                    <p className="text-maroon-200 text-sm max-w-md mx-auto">
                      Let us carry forward her spirit of loving kindness, faith, and dedication to 
                      the education of young minds.
                    </p>
                    <div className="mt-4 flex justify-center gap-2">
                      <span className="w-8 h-0.5 bg-gold-400/50 rounded-full" />
                      <span className="w-12 h-0.5 bg-gold-400 rounded-full" />
                      <span className="w-8 h-0.5 bg-gold-400/50 rounded-full" />
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* CSS Animations */}
      {/* ========================================================== */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        .shadow-3xl {
          box-shadow: 0 30px 60px -15px rgba(122, 12, 30, 0.15);
        }

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
  );
};

export default CoFounders;