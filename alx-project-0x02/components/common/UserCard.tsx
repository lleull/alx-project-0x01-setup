import { UserProps } from '../../interfaces'

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {name}
      </h3>
      <p className="text-gray-600 mb-2">
        <span className="font-medium">Email:</span> {email}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Address:</span> {address.street}, {address.city}, {address.zipcode}
      </p>
    </div>
  )
}