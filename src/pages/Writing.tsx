import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

interface Post {
  id: string
  title: string
  date: string
  content: string
  tags: string[]
}

const Writing = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 5

  // Sample posts data - replace with actual data source
  const posts: Post[] = [
    {
      id: '1',
      title: 'The Intersection of Technology and History',
      date: '2024-02-15',
      content: '# The Intersection of Technology and History\n\nExploring how modern technology can help us better understand historical events...',
      tags: ['Technology', 'History', 'Data Science']
    },
    {
      id: '2',
      title: 'Building Scalable Data Platforms',
      date: '2024-02-10',
      content: '# Building Scalable Data Platforms\n\nLessons learned from implementing enterprise data solutions...',
      tags: ['Data Engineering', 'AWS', 'Best Practices']
    }
  ]

  const filteredPosts = selectedTag
    ? posts.filter(post => post.tags.includes(selectedTag))
    : posts

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  )

  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)))

  return (
    <div className="container py-12 md:py-24">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">
        Writing
      </h1>

      {/* Tags */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedTag(null)}
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            selectedTag === null
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          All
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              selectedTag === tag
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Posts */}
      <div className="space-y-8">
        {currentPosts.map(post => (
          <article key={post.id} className="rounded-lg border bg-background p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <p className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
              <div className="prose prose-sm dark:prose-invert">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default Writing 