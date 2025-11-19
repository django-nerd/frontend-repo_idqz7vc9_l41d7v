import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AuthCard from './components/AuthCard'
import HowItWorks from './components/HowItWorks'

function App() {
  const [selectedRole, setSelectedRole] = useState(null)
  const [createdId, setCreatedId] = useState(null)

  const handleSelectRole = (role) => {
    setSelectedRole(role)
    setCreatedId(null)
    // Scroll to form
    setTimeout(() => {
      const el = document.getElementById('join');
      el && el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(37,99,235,.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,.25),transparent_40%)]/10" />
      <Header />
      <main className="relative z-10">
        <Hero onSelectRole={handleSelectRole} />
        <HowItWorks />

        <section id="join" className="py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Join PataGig</h2>
              <p className="text-blue-100/80 mt-2">Create an account, choose your side, and list your skills. You can later suggest or build a team and contract them for a gig.</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button onClick={() => handleSelectRole('hustler')} className={`rounded-lg px-4 py-2 border ${selectedRole==='hustler' ? 'bg-blue-600 border-blue-500' : 'bg-white/5 border-white/15'} transition`}>Hustler</button>
                <button onClick={() => handleSelectRole('wizard')} className={`rounded-lg px-4 py-2 border ${selectedRole==='wizard' ? 'bg-blue-600 border-blue-500' : 'bg-white/5 border-white/15'} transition`}>Wizard</button>
              </div>
              <a href="/test" className="inline-block mt-4 text-sm text-blue-300 underline/30 hover:underline">Check backend connection</a>
            </div>

            <div>
              {selectedRole ? (
                createdId ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 rounded-xl p-6">
                    <div className="font-semibold">Account created!</div>
                    <div className="text-sm mt-1">Your user id: {createdId}</div>
                  </div>
                ) : (
                  <AuthCard selectedRole={selectedRole} onCreated={setCreatedId} />
                )
              ) : (
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-blue-100/80">
                  Choose Hustler or Wizard to continue.
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 text-sm text-blue-200/70">
          © {new Date().getFullYear()} PataGig — Work meets skill.
        </div>
      </footer>
    </div>
  )
}

export default App
