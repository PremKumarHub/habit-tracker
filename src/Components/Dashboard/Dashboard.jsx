import React from 'react';
import SideNav from './SideNav';        // your sidebar component
import MainContent from './MainContent'; // your main dashboard content component

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-green-50 p-5 ">
  <div className="flex flex-1 min-h-screen border-16 border-white bg-gray-100 rounded-3xl shadow-lg">
    <SideNav />
    <MainContent />
  </div>
</div>

  );
}

export default Dashboard;
