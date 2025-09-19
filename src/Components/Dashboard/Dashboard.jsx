import React from 'react';
import SideNav from './SideNav';        // your sidebar component
import MainContent from './MainContent'; // your main dashboard content component

function Dashboard() {
  return (
 <div className="min-h-screen bg-green-50 p-5 flex items-center justify-center border-white ">
  <div className="flex w-full max-w-7xl min-h-[90vh] bg-gray-100 rounded-3xl shadow-lg overflow-hidden border-white [border-width:2rem]">
    {/* Sidebar */}
    <SideNav />

    {/* Main Content */}
    <div className="flex-1 p-6">
      <MainContent />
    </div>
  </div>
</div>


  );
}

export default Dashboard;
