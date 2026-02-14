// components/ThemeToggle.tsx
'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const html = document.documentElement
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'dark') {
      html.classList.add('dark')
      setIsDark(true)
    } else {
      html.classList.remove('dark')
      setIsDark(false)
    }
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    if (html.classList.contains('dark')) {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-white dark:bg-gray-800 text-black dark:text-white shadow-md hover:scale-110 transition-transform"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  )
}