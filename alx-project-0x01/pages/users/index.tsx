import { NextPage } from "next";
import Image from "next/image";
import UserCard from "../../components/common/UserCard";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
  postsCount: number;
  joined: string;
}

const Users: NextPage = () => {
  const sampleUsers: User[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      avatar: "/api/placeholder/64/64",
      postsCount: 24,
      joined: "2023-01-15",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Author",
      avatar: "/api/placeholder/64/64",
      postsCount: 18,
      joined: "2023-02-20",
    },
    {
      id: "3",
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "Author",
      avatar: "/api/placeholder/64/64",
      postsCount: 12,
      joined: "2023-03-10",
    },
    {
      id: "4",
      name: "Sarah Wilson",
      email: "sarah@example.com",
      role: "Contributor",
      avatar: "/api/placeholder/64/64",
      postsCount: 8,
      joined: "2023-04-05",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Community</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the amazing people who contribute to our platform and share their knowledge
          </p>
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600">Total Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">62</div>
              <div className="text-gray-600">Total Posts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-gray-600">Active Roles</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
