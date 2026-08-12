import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '../../data/seedData.js'

const Counter = ({ value, suffix = '' }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1200
    const stepTime = Math.max(Math.floor(duration / value), 15)
    const timer = setInterval(() => {
      start += Math.ceil(value / (duration / stepTime))
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, stepTime)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref} className="font-serif text-4xl md:text-5xl font-bold text-white">
      {count}{suffix}
    </span>
  )
}

const StatsCounter = () => {
  return (
    <section className="bg-maroon-800 py-14">
      <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Counter value={stat.value} suffix={stat.label.includes('Result') ? '%' : '+'} />
            <p className="text-maroon-200 text-sm mt-2 font-medium tracking-wide">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default StatsCounter
