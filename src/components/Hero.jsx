import React from 'react'

const Hero = ({ onSelectRole }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(1200px_600px_at_10%_-20%,rgba(99,102,241,0.6),transparent),radial-gradient(900px_400px_at_90%_10%,rgba(59,130,246,0.5),transparent)]" />
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-10">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
          Hire hands. Build products. One marketplace.
        </h1>
        <p className="mt-6 text-blue-100/90 max-w-2xl">
          From tailors to system designers, metalwork to server engineering — assemble the right people, contract a gig, and get it done.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button onClick={() => onSelectRole('hustler')} className="rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur text-white px-6 py-4 text-left transition shadow-lg">
            <div className="font-semibold">I'm a Hustler</div>
            <div className="text-sm text-blue-100/80">Hands-on craft: tailoring, carpentry, welding, painting, plumbing…</div>
          </button>
          <button onClick={() => onSelectRole('wizard')} className="rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur text-white px-6 py-4 text-left transition shadow-lg">
            <div className="font-semibold">I'm a Wizard</div>
            <div className="text-sm text-blue-100/80">Tech craft: design, dev, data, DevOps, product…</div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
