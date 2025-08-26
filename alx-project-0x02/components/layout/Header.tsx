import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800">ALX Project</h1>
          <div className="flex space-x-4">
            <Link href="/home" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
            <Link href="/about" className="text-blue-600 hover:text-blue-800">
              About
            </Link>
            <Link href="/posts" className="text-blue-600 hover:text-blue-800">
              Posts
            </Link>
            <Link href="/users" className="text-blue-600 hover:text-blue-800">
              Users
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}