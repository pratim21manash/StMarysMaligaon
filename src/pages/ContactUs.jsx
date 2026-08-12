import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, Building, Globe, Sparkles, CheckCircle } from 'lucide-react'
import { schoolInfo } from '../data/seedData.js'

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

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
      transition: { staggerChildren: 0.08 }
    }
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSent(true)
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { 
      icon: MapPin, 
      label: 'Address', 
      value: schoolInfo.address,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    { 
      icon: Phone, 
      label: 'Phone', 
      value: schoolInfo.phone,
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    { 
      icon: Mail, 
      label: 'Email', 
      value: schoolInfo.email,
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    { 
      icon: Clock, 
      label: 'Office Hours', 
      value: 'Mon - Fri: 8:00 AM - 4:00 PM',
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    }
  ]

  return (
    <div className="bg-gradient-to-b from-white to-[#FBF6EC] min-h-screen">
      
      {/* ========================================================== */}
      {/* COMPACT HERO HEADER */}
      {/* ========================================================== */}
      <div className="bg-maroon-900 text-white py-8 px-4">
        <div className="container-custom mx-auto">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gold-500/20 rounded-lg">
              <MessageSquare size={20} className="text-gold-300" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold">Contact Us</h1>
              <p className="text-gold-300 text-sm mt-0.5">We'd love to hear from you</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================== */}
      {/* MAIN CONTENT */}
      {/* ========================================================== */}
      <section ref={ref} className="py-8 md:py-10">
        <div className="container-custom max-w-5xl mx-auto">

          {/* Contact Info Cards */}
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon
              return (
                <motion.div 
                  key={item.label}
                  variants={fadeInUp}
                  className={`${item.bg} rounded-xl border border-gray-100 p-4 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2.5 rounded-xl ${item.bg} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={18} className={item.color} />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">{item.label}</p>
                      <p className="text-sm font-medium text-gray-800 mt-0.5 leading-tight">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Main Contact Section - Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column - Info & Map */}
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              animate={controls}
              className="space-y-6"
            >
              {/* School Info Card */}
              <motion.div 
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-1.5 rounded-lg bg-gold-100">
                    <Building size={18} className="text-gold-600" />
                  </div>
                  <h2 className="text-lg font-serif font-bold text-maroon-900">School Information</h2>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <MapPin size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500">Address</p>
                      <p className="text-sm text-gray-700">{schoolInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Phone size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500">Phone</p>
                      <p className="text-sm text-gray-700">{schoolInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Mail size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500">Email</p>
                      <p className="text-sm text-gray-700">{schoolInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Globe size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500">Website</p>
                      <p className="text-sm text-gray-700">{schoolInfo.website || 'www.stmarysmaligaon.edu.in'}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div 
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <div className="h-64">
                  <iframe
                    title="School location"
                    className="w-full h-full"
                    loading="lazy"
                    src="https://www.google.com/maps?q=Maligaon,Guwahati,Assam&output=embed"
                  />
                </div>
                <div className="p-3 text-center bg-gray-50 border-t border-gray-100">
                  <p className="text-[10px] text-gray-400">📍 Find us on Google Maps</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={controls}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-1.5 rounded-lg bg-gold-100">
                  <Send size={18} className="text-gold-600" />
                </div>
                <h2 className="text-lg font-serif font-bold text-maroon-900">Send a Message</h2>
              </div>

              {sent ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-maroon-900">Message Sent!</h3>
                  <p className="text-sm text-gray-500 mt-2">Thank you! We'll get back to you shortly.</p>
                  <button 
                    onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
                    className="mt-4 text-sm text-gold-600 hover:text-gold-700 font-medium"
                  >
                    Send another message →
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Your Name *</label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-maroon-400 focus:ring-2 focus:ring-maroon-100 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-maroon-400 focus:ring-2 focus:ring-maroon-100 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message *</label>
                    <textarea
                      required
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows={5}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-maroon-400 focus:ring-2 focus:ring-maroon-100 outline-none transition-all resize-none"
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-maroon-800 to-maroon-700 text-white rounded-xl font-semibold hover:from-maroon-700 hover:to-maroon-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-gray-400 text-center">
                    We'll respond within 24-48 hours
                  </p>
                </form>
              )}
            </motion.div>
          </div>

          {/* Social / Additional Info */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="mt-8 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-gray-50 to-gold-50/30 rounded-full px-6 py-2.5 border border-gray-200">
              <p className="text-xs text-gray-500 flex items-center gap-2">
                <Sparkles size={14} className="text-gold-500" />
                <span>For urgent queries, please call us during office hours</span>
              </p>
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

export default ContactUs