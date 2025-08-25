import React, { useState } from "react";
import { UserData, UserModalProps } from "../../interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSave }) => {
  const [user, setUser] = useState<UserData>({
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Check if the field is a nested property
    if (name.includes('.')) {
      const [parent, child, subChild] = name.split('.');
      
      if (subChild) {
        // Handle three-level nesting (e.g., address.geo.lat)
        setUser(prev => ({
          ...prev,
          [parent]: {
            ...prev[parent as keyof UserData],
            [child]: {
              ...(prev[parent as keyof UserData] as any)[child],
              [subChild]: value
            }
          }
        }));
      } else {
        // Handle two-level nesting (e.g., address.street)
        setUser(prev => ({
          ...prev,
          [parent]: {
            ...prev[parent as keyof UserData],
            [child]: value
          }
        }));
      }
    } else {
      // Handle top-level properties
      setUser(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-2xl max-h-screen overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Add New User</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Basic Information */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Basic Information</h3>
          </div>
          
          <div className="mb-4">
            <label htmlFor="id" className="block text-gray-700 font-medium mb-2">
              ID *
            </label>
            <input
              type="number"
              id="id"
              name="id"
              value={user.id || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Full name"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
              Username *
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Username"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email address"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Phone number"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="website" className="block text-gray-700 font-medium mb-2">
              Website
            </label>
            <input
              type="text"
              id="website"
              name="website"
              value={user.website}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Website URL"
            />
          </div>
          
          {/* Address Information */}
          <div className="md:col-span-2 mt-4">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Address Information</h3>
          </div>
          
          <div className="mb-4">
            <label htmlFor="address.street" className="block text-gray-700 font-medium mb-2">
              Street
            </label>
            <input
              type="text"
              id="address.street"
              name="address.street"
              value={user.address.street}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Street address"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="address.suite" className="block text-gray-700 font-medium mb-2">
              Suite/Apt
            </label>
            <input
              type="text"
              id="address.suite"
              name="address.suite"
              value={user.address.suite}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Suite or apartment"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="address.city" className="block text-gray-700 font-medium mb-2">
              City
            </label>
            <input
              type="text"
              id="address.city"
              name="address.city"
              value={user.address.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="City"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="address.zipcode" className="block text-gray-700 font-medium mb-2">
              Zipcode
            </label>
            <input
              type="text"
              id="address.zipcode"
              name="address.zipcode"
              value={user.address.zipcode}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Zip code"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="address.geo.lat" className="block text-gray-700 font-medium mb-2">
              Latitude
            </label>
            <input
              type="text"
              id="address.geo.lat"
              name="address.geo.lat"
              value={user.address.geo.lat}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Latitude"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="address.geo.lng" className="block text-gray-700 font-medium mb-2">
              Longitude
            </label>
            <input
              type="text"
              id="address.geo.lng"
              name="address.geo.lng"
              value={user.address.geo.lng}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Longitude"
            />
          </div>
          
          {/* Company Information */}
          <div className="md:col-span-2 mt-4">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Company Information</h3>
          </div>
          
          <div className="mb-4 md:col-span-2">
            <label htmlFor="company.name" className="block text-gray-700 font-medium mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company.name"
              name="company.name"
              value={user.company.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Company name"
            />
          </div>
          
          <div className="mb-4 md:col-span-2">
            <label htmlFor="company.catchPhrase" className="block text-gray-700 font-medium mb-2">
              Catch Phrase
            </label>
            <input
              type="text"
              id="company.catchPhrase"
              name="company.catchPhrase"
              value={user.company.catchPhrase}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Company catch phrase"
            />
          </div>
          
          <div className="mb-6 md:col-span-2">
            <label htmlFor="company.bs" className="block text-gray-700 font-medium mb-2">
              Business Strategy
            </label>
            <input
              type="text"
              id="company.bs"
              name="company.bs"
              value={user.company.bs}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Business strategy"
            />
          </div>
          
          <div className="flex justify-between items-center md:col-span-2 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-gray-600 hover:text-gray-800 focus:outline-none font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;