import { ButtonProps } from '../../interfaces'

export default function Button({
  size = 'medium',
  shape = 'rounded-md',
  children,
  onClick,
  className = ''
}: ButtonProps) {
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg'
  }

  return (
    <button
      onClick={onClick}
      className={`
        bg-blue-600 text-white font-medium
        hover:bg-blue-700 transition-colors
        ${sizeClasses[size]}
        ${shape}
        ${className}
      `}
    >
      {children}
    </button>
  )
}