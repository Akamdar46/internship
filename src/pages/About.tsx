import { GraduationCap, Briefcase, Trophy, Heart } from 'lucide-react'

const About = () => {
  return (
    <div className="container py-12 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
          <div className="space-y-4 text-muted-foreground">
            <p className="text-lg">
              Engineering student at the University of Virginia double-majoring in Computer Science and History.
              Seasoned in data & AI (Databricks, AWS, Java/Python), with 25 years of enterprise IT experience
              and an MBA from UC Berkeley.
            </p>
            <p className="text-lg">
              Former varsity/club soccer player and fitness enthusiast who runs the non-profit Play-It-Forward.
              Aiming to fuse tech innovation with historical insight to build sustainable, equitable ventures.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <span>UVA Engineering</span>
            </div>
            <div className="flex items-center space-x-2">
              <Briefcase className="h-5 w-5 text-primary" />
              <span>25+ Years IT Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-primary" />
              <span>Varsity Soccer</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-primary" />
              <span>Play-It-Forward</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-[400px] w-[300px] overflow-hidden rounded-lg bg-muted">
            {/* Replace with actual headshot */}
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              Professional Headshot
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 