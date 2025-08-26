import Head from 'next/head'
import { useState, useEffect } from 'react'
import Header from '../components/layout/Header'
import UserCard from '../components/common/UserCard'
import { UserProps } from '../interfaces'

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        console.error('Error fetching users:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Users Page</title>
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-8">
          Users from JSONPlaceholder
        </h1>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading users...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                address={{
                  street: user.address.street,
                  city: user.address.city,
                  zipcode: user.address.zipcode
                }}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}