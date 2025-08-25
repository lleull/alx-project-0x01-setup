import Image from "next/image";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  image?: string;
  tags?: string[];
}

interface PostCardProps {
  post: Post;
  className?: string;
}

export default function PostCard({ post, className = "" }: PostCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      {post.image && (
        <Image src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <div className="flex items-center mb-3">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            className="w-8 h-8 rounded-full mr-3"
          />
          <span className="text-sm text-gray-600">{post.author.name}</span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-sm text-gray-500">{post.date}</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
          Read more →
        </button>
      </div>
    </div>
  );
}
