"use client"

import { Link } from 'react-router-dom'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

const Navbar = () => {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">Aidan Kamdar</span>
        </Link>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link to="/projects" className="text-sm font-medium transition-colors hover:text-primary">
              Projects
            </Link>
            <Link to="/writing" className="text-sm font-medium transition-colors hover:text-primary">
              Writing
            </Link>
            <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
