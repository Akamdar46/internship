import { useState } from 'react'
import { Github, ExternalLink } from 'lucide-react'
import projectsData from '../data/projects.json'

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  image: string
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="container py-12 md:py-24">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">
        Projects
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.projects.map((project: Project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-primary/50"
            onClick={() => setSelectedProject(project)}
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl rounded-lg border bg-background p-6 shadow-lg">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <span className="sr-only">Close</span>
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <p className="text-muted-foreground">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm font-medium"
                >
                  <Github className="h-4 w-4" />
                  <span>View Source</span>
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm font-medium"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects 