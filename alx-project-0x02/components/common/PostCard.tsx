import { PostProps } from '../../interfaces'

export default function PostCard({ title, body, userId }: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-1">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-3">
        {body}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">
          User ID: {userId}
        </span>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          Read More
        </button>
      </div>
    </div>
  )
}