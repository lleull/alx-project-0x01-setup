import Head from 'next/head'
import Header from '../components/layout/Header'
import Button from '../components/common/Button'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
          About Page
        </h1>
        
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-lg text-gray-700">
            This page demonstrates the reusable Button component with different sizes and shapes.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center justify-center p-6 bg-white rounded-lg shadow-md">
            <Button size="small" shape="rounded-sm">
              Small Rounded-sm
            </Button>
            
            <Button size="medium" shape="rounded-md">
              Medium Rounded-md
            </Button>
            
            <Button size="large" shape="rounded-full">
              Large Rounded-full
            </Button>
            
            <Button size="small" shape="rounded-full" className="bg-green-600 hover:bg-green-700">
              Green Small
            </Button>
            
            <Button size="large" shape="rounded-sm" className="bg-red-600 hover:bg-red-700">
              Red Large
            </Button>
          </div>
          
          <p className="text-gray-600 text-center mt-8">
            The Button component accepts size, shape, and custom className props for flexibility.
          </p>
        </div>
      </main>
    </div>
  )
}