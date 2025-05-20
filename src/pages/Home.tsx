import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Aidan Kamdar
        </h1>
        <p className="mt-4 text-xl text-muted-foreground sm:text-2xl">
          Engineering student at UVA fusing tech innovation with historical insight
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/projects"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home 