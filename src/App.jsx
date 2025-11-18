import React from 'react'
import TamSamSom from './components/TamSamSom'

function App() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-slate-900">
      <header className="w-full py-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            HiveFi Market Opportunity — TAM • SAM • SOM
          </h1>
        </div>
      </header>

      <main>
        <TamSamSom />
      </main>

      <footer className="py-10" />
    </div>
  )
}

export default App
