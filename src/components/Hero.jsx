import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-[#0F172A]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xa5cMvp2ipgnnda2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to ensure text contrast. pointer-events-none so scene stays interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0F172A]/40 via-[#0F172A]/60 to-[#0F172A]" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-end pb-10 text-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
          HiveFi Market Opportunity — TAM • SAM • SOM
        </h1>
        <p className="mt-4 text-white/80 max-w-3xl">
          A clean, interactive view of the market landscape with concentric focus and smooth, premium animations.
        </p>
      </div>
    </section>
  )
}
