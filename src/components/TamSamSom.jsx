import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const colors = {
  honey: '#FACC15',
  navy: '#0F172A',
  white: '#ffffff',
}

function Accordion({ title, value, reason }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left hover:bg-slate-50 transition-colors"
        onClick={() => setOpen((o) => !o)}
      >
        <div>
          <p className="text-xs uppercase tracking-widest text-slate-500">{title}</p>
          <p className="text-base md:text-lg font-semibold text-slate-900">{value}</p>
        </div>
        <div className="text-slate-500">▼</div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="px-4 pb-4 text-slate-700"
          >
            <p className="leading-relaxed">{reason}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function TamSamSom() {
  return (
    <section className="relative py-6 md:py-8">
      <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* Concentric Circles */}
        <div className="flex items-center justify-center">
          <div className="relative w-[320px] sm:w-[420px] md:w-[520px] aspect-square">
            {/* TAM (outer) */}
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(250, 204, 21, 0.2)' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute inset-0 rounded-full flex items-center justify-center select-none"
              style={{ backgroundColor: colors.honey }}
            >
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-900">TAM — Total Addressable Market</p>
                <p className="text-base md:text-lg font-semibold text-slate-900 mt-1">85 Million People</p>
              </div>
            </motion.div>

            {/* SAM (middle) */}
            <motion.div
              whileHover={{ scale: 1.04, y: -4 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute rounded-full flex items-center justify-center select-none"
              style={{ top: '10%', left: '10%', right: '10%', bottom: '10%', backgroundColor: colors.navy }}
            >
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-white">SAM — Serviceable Available Market</p>
                <p className="text-base md:text-lg font-semibold text-white mt-1">22 Million People</p>
              </div>
            </motion.div>

            {/* SOM (inner) */}
            <motion.div
              whileHover={{ scale: 1.06, boxShadow: '0 0 24px rgba(250, 204, 21, 0.5)' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute rounded-full flex items-center justify-center select-none"
              style={{ top: '26%', left: '26%', right: '26%', bottom: '26%', backgroundColor: colors.white, border: `2px solid ${colors.honey}` }}
            >
              <div className="text-center" style={{ color: colors.navy }}>
                <p className="text-xs uppercase tracking-[0.2em]">SOM — Serviceable Obtainable Market</p>
                <p className="text-base md:text-lg font-semibold mt-1">120,000 People (5-Year Goal)</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          <Accordion
            title="TAM — Total Addressable Market"
            value="85 Million People"
            reason="Digitally active Indian youth aged 18–30 who use UPI, watch financial content, and want simple money tools."
          />
          <Accordion
            title="SAM — Serviceable Available Market"
            value="22 Million People"
            reason="Students and young professionals in top 100 cities reachable through campuses, ambassadors, content and ads."
          />
          <Accordion
            title="SOM — Serviceable Obtainable Market"
            value="120,000 People (5-Year Goal)"
            reason="Comes directly from our 5-year Excel model: 3K → 9K → 25K → 60K → 120K through campus expansion, referrals, and AI-driven engagement."
          />
        </div>
      </div>
    </section>
  )
}
