export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  image: string
}

export interface Post {
  id: string
  title: string
  content: string
  date: string
  tags: string[]
} 