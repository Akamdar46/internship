import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'next-themes'
import { describe, it, expect } from 'vitest'
import Navbar from '../navbar'

const renderWithProviders = (component: React.ReactNode) => {
  return render(
    <BrowserRouter>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {component}
      </ThemeProvider>
    </BrowserRouter>
  )
}

describe('Navbar', () => {
  it('renders the name', () => {
    renderWithProviders(<Navbar />)
    expect(screen.getByText('Aidan Kamdar')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    renderWithProviders(<Navbar />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Writing')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders theme toggle button', () => {
    renderWithProviders(<Navbar />)
    const themeButton = screen.getByRole('button')
    expect(themeButton).toBeInTheDocument()
  })
}) 