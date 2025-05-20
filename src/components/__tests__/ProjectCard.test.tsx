import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ProjectCard from '../ProjectCard'

const mockProject = {
  id: '1',
  title: 'Test Project',
  description: 'A test project description',
  technologies: ['React', 'TypeScript'],
  githubUrl: 'https://github.com/test',
  liveUrl: 'https://test.com',
  image: '/test.jpg'
}

describe('ProjectCard', () => {
  it('renders project title and description', () => {
    render(<ProjectCard project={mockProject} onClick={() => {}} />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('A test project description')).toBeInTheDocument()
  })

  it('renders technology tags', () => {
    render(<ProjectCard project={mockProject} onClick={() => {}} />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('renders GitHub and live demo links', () => {
    render(<ProjectCard project={mockProject} onClick={() => {}} />)
    const githubLink = screen.getByRole('link', { name: /github/i })
    const liveLink = screen.getByRole('link', { name: /live demo/i })
    expect(githubLink).toHaveAttribute('href', 'https://github.com/test')
    expect(liveLink).toHaveAttribute('href', 'https://test.com')
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<ProjectCard project={mockProject} onClick={handleClick} />)
    screen.getByRole('article').click()
    expect(handleClick).toHaveBeenCalledWith(mockProject)
  })
}) 