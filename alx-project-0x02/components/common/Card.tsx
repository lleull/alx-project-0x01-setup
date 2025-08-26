import { CardProps } from '../../interfaces'

export default function Card({ title, content, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  )
}