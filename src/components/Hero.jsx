import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-[#0F172A]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xa5cMvp2ipgnnda2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Cinematic gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0F172A]/30 via-[#0F172A]/60 to-[#0F172A]" />
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(800px 300px at 50% 20%, rgba(250,204,21,0.08), transparent 60%)'
      }} />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-end pb-10 text-center">
        <motion.h1
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
        >
          HiveFi Market Opportunity — TAM • SAM • SOM
        </motion.h1>
        <motion.p
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-white/80 max-w-3xl"
        >
          A cinematic, interactive view of the market landscape with smooth, premium animations.
        </motion.p>
      </div>
    </section>
  )
}
