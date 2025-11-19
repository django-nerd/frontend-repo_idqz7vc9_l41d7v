import React, { useState } from 'react'

const roleCopy = {
  hustler: {
    title: 'Create your Hustler account',
    subtitle: 'Showcase your hands-on skills and get booked for gigs.',
    placeholder: 'e.g. Tailor, Carpenter, Plumber',
  },
  wizard: {
    title: 'Create your Wizard account',
    subtitle: 'Share your tech skills and collaborate on products.',
    placeholder: 'e.g. Designer, Full‑stack Dev, Data Analyst',
  },
}

const AuthCard = ({ selectedRole, onCreated }) => {
  const [form, setForm] = useState({ name: '', email: '', skills: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setError('')

    if (!form.name || !form.email) {
      setError('Please provide your name and email.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch(`${baseUrl}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          role: selectedRole,
          skills: form.skills
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean),
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to create account')
      onCreated && onCreated(data.id)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const copy = roleCopy[selectedRole]

  return (
    <div className="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur shadow-xl">
      <h3 className="text-white text-xl font-semibold">{copy.title}</h3>
      <p className="text-blue-100/80 text-sm mt-1">{copy.subtitle}</p>

      <form onSubmit={submit} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm text-blue-100/80 mb-1">Full name</label>
          <input
            type="text"
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm text-blue-1 00/80 mb-1">Email</label>
          <input
            type="email"
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm text-blue-100/80 mb-1">Skills (comma‑separated)</label>
          <input
            type="text"
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
            placeholder={copy.placeholder}
            value={form.skills}
            onChange={(e) => setForm({ ...form, skills: e.target.value })}
          />
        </div>

        {error && (
          <div className="text-red-300 text-sm bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-md">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg transition-colors"
        >
          {loading ? 'Creating...' : 'Create account'}
        </button>
      </form>
    </div>
  )
}

export default AuthCard
