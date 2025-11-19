import React from 'react'

const Header = () => {
  return (
    <header className="relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 grid place-items-center text-white font-bold shadow-lg shadow-indigo-500/20">P</div>
          <span className="text-white text-xl font-semibold tracking-tight">PataGig</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-blue-100/80">
          <a href="#how" className="hover:text-white transition-colors">How it works</a>
          <a href="#roles" className="hover:text-white transition-colors">Roles</a>
          <a href="#join" className="hover:text-white transition-colors">Join</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
