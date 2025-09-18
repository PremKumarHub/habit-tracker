import React from 'react';

function SideNav() {
  return (
    <aside className="flex flex-col w-64 bg-white  py-8 px-5 min-h-screen ">
      <div className="flex flex-col items-center gap-3 mb-10">
        <div className="relative">
                <img className="h-20 w-20 rounded-full"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                    alt="userImage1" />
                <div className="absolute bottom-2 right-0 h-3.5 w-3.5 rounded-full bg-green-500"></div>
        </div>
        <div>
          <h2 className="font-bold">Kawata Hakusoki</h2>
          <span className="text-xs text-gray-500">Habit Master</span>
        </div>
      </div>
      <nav className="flex flex-col gap-2 mb-8">
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg font-semibold">
          Home
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
          Challenge
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
          Statistics
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
          Explore
        </button>
      </nav>
      <div className="mt-auto">
        <nav className="flex flex-col gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
            Article
            <span className="ml-2 text-xs bg-red-100 rounded px-2 py-1 text-red-800">
              New
            </span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
            Bookmark
          </button>
        </nav>
      </div>
    </aside>
  );
}

export default SideNav;
