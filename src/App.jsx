import React from 'react'
import Hero from './components/Hero'
import TamSamSom from './components/TamSamSom'

function App() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Hero />
      <TamSamSom />
      <footer className="bg-[#0F172A] py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur-sm">
            <h3 className="text-white font-semibold text-lg">Presentation Tips</h3>
            <p className="text-white/70 mt-2">
              Use this interactive slide in the classroom or demo day. Hover the layers to emphasize each segment and click to reveal the reasoning.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
