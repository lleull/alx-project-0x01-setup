import Head from 'next/head'
import { useState, useEffect } from 'react'
import Header from '../components/layout/Header'
import PostCard from '../components/common/PostCard'
import { PostProps } from '../interfaces'

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        setPosts(data.slice(0, 12)) // Show first 12 posts
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-purple-600 mb-8">
          Posts from JSONPlaceholder
        </h1>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading posts...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                userId={post.userId}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}