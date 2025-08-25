import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({ user }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 `}
    >
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-500 font-bold text-xl">
            {user.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-blue-100">@{user.username}</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{user.email}</p>
              <p className="text-sm text-gray-500">Email</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{user.phone}</p>
              <p className="text-sm text-gray-500">Phone</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.083 9h1.946c.089 0 .17.027.236.078l2.853 2.156a.75.75 0 01-.9 1.2L5.147 10.28a.25.25 0 00-.236-.078H4.083a.75.75 0 010-1.5zm0-3h1.965c.089 0 .17.027.236.078l2.853 2.156a.75.75 0 01-.9 1.2L5.147 7.28a.25.25 0 00-.236-.078H4.083a.75.75 0 010-1.5zM10 3a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0v-5.5A.75.75 0 0110 3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{user.website}</p>
              <p className="text-sm text-gray-500">Website</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Address</h3>
          <p className="text-sm text-gray-600">
            {user.address.street}, {user.address.suite}
            <br />
            {user.address.city}, {user.address.zipcode}
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Company</h3>
          <p className="text-sm font-medium text-gray-600">{user.company.name}</p>
          <p className="text-sm text-gray-500 mt-1">{user.company.catchPhrase}</p>
          <p className="text-xs text-gray-400 mt-1">{user.company.bs}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
