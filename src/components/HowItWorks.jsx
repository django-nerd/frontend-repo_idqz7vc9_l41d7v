import React from 'react'

const HowItWorks = () => {
  const steps = [
    { title: 'Create your account', desc: 'Pick your side — Hustler or Wizard — and list your skills.' },
    { title: 'Post or join a gig', desc: 'Describe the job or raise your hand to help someone stuck.' },
    { title: 'Assemble a team', desc: 'Mix hands-on and tech skills, then agree on scope and budget.' },
    { title: 'Deliver and get paid', desc: 'Track progress and close the gig when work is done.' },
  ]
  return (
    <section id="how" className="relative py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">How it works</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-white/90">
              <div className="text-xs text-blue-200/70">Step {i + 1}</div>
              <div className="mt-1 font-semibold">{s.title}</div>
              <div className="mt-2 text-sm text-blue-100/80">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
