import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const colors = {
  honey: '#FACC15',
  navy: '#0F172A',
  white: '#ffffff',
}

function Accordion({ title, value, reason }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left hover:bg-white/5 transition-colors"
        onClick={() => setOpen((o) => !o)}
      >
        <div>
          <p className="text-sm uppercase tracking-widest text-white/70">{title}</p>
          <p className="text-lg md:text-xl font-semibold text-white">{value}</p>
        </div>
        <div className="text-white/80">
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="px-4 pb-4 text-white/90"
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
    <section className="relative bg-[#0F172A] text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 opacity-30" style={{
          background: 'radial-gradient(1200px 600px at 50% 40%, rgba(250, 204, 21, 0.15), transparent 70%)'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-10 md:py-14 grid md:grid-cols-2 gap-10">
        {/* Visual - concentric circles */}
        <div className="flex items-center justify-center">
          <div className="relative w-[320px] sm:w-[380px] md:w-[460px] aspect-square">
            {/* TAM - outer */}
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(250, 204, 21, 0.15)' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, rgba(250,204,21,0.16), rgba(255,255,255,0.06))',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: 'inset 0 0 40px rgba(255,255,255,0.05)'
              }}
            >
              <div className="absolute inset-4 rounded-full border border-white/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center select-none">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">TAM</p>
                  <p className="text-lg md:text-xl font-semibold text-white">85 Million People</p>
                </div>
              </div>
            </motion.div>

            {/* SAM - middle */}
            <motion.div
              whileHover={{ scale: 1.06, y: -6, boxShadow: '0 20px 60px rgba(250,204,21,0.18)' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute rounded-full"
              style={{
                top: '10%', left: '10%', right: '10%', bottom: '10%',
                background: 'radial-gradient(circle at 30% 30%, rgba(250,204,21,0.22), rgba(255,255,255,0.04))',
                border: '1px solid rgba(255,255,255,0.16)'
              }}
            >
              <div className="absolute inset-4 rounded-full border border-white/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center select-none">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">SAM</p>
                  <p className="text-lg md:text-xl font-semibold text-white">22 Million People</p>
                </div>
              </div>
            </motion.div>

            {/* SOM - inner */}
            <motion.div
              initial={{ filter: 'drop-shadow(0 0 0 rgba(250,204,21,0))' }}
              animate={{
                filter: ['drop-shadow(0 0 0 rgba(250,204,21,0))', 'drop-shadow(0 0 20px rgba(250,204,21,0.5))', 'drop-shadow(0 0 0 rgba(250,204,21,0))'],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.08 }}
              className="absolute rounded-full"
              style={{
                top: '26%', left: '26%', right: '26%', bottom: '26%',
                background: 'radial-gradient(circle at 50% 50%, #FACC15, #FACC15 40%, rgba(250,204,21,0.8) 60%, rgba(250,204,21,0.5) 75%, rgba(250,204,21,0.2) 100%)',
                border: '1px solid rgba(250,204,21,0.7)'
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-[#0F172A] select-none">
                  <p className="text-xs uppercase tracking-[0.2em]">SOM</p>
                  <p className="text-lg md:text-xl font-semibold">120,000 People (5-Year Goal)</p>
                </div>
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

          <div className="mt-6 text-white/70 text-sm">
            Hover the rings to see subtle highlights and movement. Click the rows to read our reasoning.
          </div>
        </div>
      </div>
    </section>
  )
}
