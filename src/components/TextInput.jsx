import React from 'react'

const TextInput = ({
  label,
  value,
  onChange,
  placeholder,
  disabled = false,
}) => {
  return (
    <div>
      <label className="block text-[10px] font-semibold tracking-[0.14em] text-slate-700 mb-1 flex items-center gap-1">
        {label}
        {disabled && (
          <svg className="h-3 w-3 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
        )}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full h-9 rounded-lg border border-slate-300 bg-white px-3 py-2 text-[12px] text-slate-900 placeholder:text-slate-400 outline-none transition hover:border-slate-400 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 disabled:bg-slate-100 disabled:text-slate-500 disabled:cursor-not-allowed"
      />
    </div>
  )
}

export default TextInput
