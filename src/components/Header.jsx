import React from 'react'
import { Link } from 'react-router'

const headerIconButtonClass = 'flex h-8 w-8 items-center justify-center rounded-full border border-white/55 bg-white/15 text-white backdrop-blur-sm'

const Header = () => {
  return (
    <header
        className="flex items-center justify-between rounded-t-[4px] border border-fuchsia-500/60 border-b-0 px-3 py-2 shadow-sm"
        style={{
        backgroundImage: 'linear-gradient(90deg, #bf3ccc 0%, #c23dbb 34%, #cb408f 68%, #de4d83 100%)',
        }}
    >
        <div className="flex items-center gap-3">
        <Link to="/" className={headerIconButtonClass}>
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
            <path d="M3.25 8.25 10 3l6.75 5.25V16a.75.75 0 0 1-.75.75h-4.25v-5h-3.5v5H4A.75.75 0 0 1 3.25 16V8.25Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
        </Link>
        <h1 className="text-[15px] font-semibold text-white">Content Library Management</h1>
        </div>

        <button type="button" className={headerIconButtonClass}>
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6" />
            <path d="M10 13.75v-.25c0-1.45 1.75-1.7 1.75-3.4 0-1.03-.8-1.85-2-1.85-1.02 0-1.72.45-2.2 1.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="10" cy="15.7" r=".8" fill="currentColor" />
        </svg>
        </button>
    </header>
  )
}

export default Header
