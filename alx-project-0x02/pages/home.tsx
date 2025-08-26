import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/layout/Header'
import Card from '../components/common/Card'
import PostModal from '../components/common/PostModal'

interface Post {
  title: string;
  content: string;
}

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }])
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600">Home Page</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add Post
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card
              key={index}
              title={post.title}
              content={post.content}
            />
          ))}
          {posts.length === 0 && (
            <p className="text-gray-500 col-span-full text-center py-8">
              No posts yet. Click "Add Post" to create your first post!
            </p>
          )}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </div>
  )
}