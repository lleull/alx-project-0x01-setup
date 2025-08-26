import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Welcome to ALX Project</title>
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Welcome to ALX Next.js Project
        </h1>
        <p className="text-lg text-center text-gray-700">
          This is the initial setup of our Next.js application with TypeScript and Tailwind CSS.
        </p>
      </main>
    </div>
  )
}