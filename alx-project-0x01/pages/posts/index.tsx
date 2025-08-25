import { NextPage } from "next";
import PostCard from "../../components/common/PostCard";
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

const PostsPage: NextPage = () => {
  const samplePosts: Post[] = [
    {
      id: "1",
      title: "Getting Started with Next.js and Tailwind CSS",
      excerpt:
        "Learn how to set up a modern web application using Next.js and Tailwind CSS with best practices and performance optimizations.",
      author: {
        name: "John Doe",
        avatar: "/api/placeholder/32/32",
      },
      date: "Dec 12, 2023",
      image: "/api/placeholder/400/200",
      tags: ["Next.js", "Tailwind", "React"],
    },
    {
      id: "2",
      title: "Advanced TypeScript Patterns for React",
      excerpt:
        "Discover advanced TypeScript patterns that will make your React components more type-safe and maintainable.",
      author: {
        name: "Jane Smith",
        avatar: "/api/placeholder/32/32",
      },
      date: "Dec 10, 2023",
      tags: ["TypeScript", "React", "Patterns"],
    },
    {
      id: "3",
      title: "Building Responsive UIs with Tailwind CSS",
      excerpt:
        "Master the art of creating responsive user interfaces using Tailwind CSS utility classes and responsive design principles.",
      author: {
        name: "Mike Johnson",
        avatar: "/api/placeholder/32/32",
      },
      date: "Dec 8, 2023",
      image: "/api/placeholder/400/200",
      tags: ["CSS", "Responsive", "Design"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest Posts</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the latest articles, tutorials, and insights from our community
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samplePosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostsPage;
