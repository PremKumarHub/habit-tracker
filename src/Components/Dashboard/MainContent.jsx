import React from 'react';
import ImageCarousel from './ImageCarousel';

const habits = [
  { id: 1, name: "Morning Exercise", progress: 80 },
  { id: 2, name: "Read Books", progress: 50 },
  { id: 3, name: "Meditate", progress: 90 },
];

function MainContent() {
  return (
    <>
    <div className='p-6'>
      <header >
        <h1 className="text-3xl font-bold">Habit Tracker Dashboard</h1>
      </header>
     <div className="flex flex-col md:flex-row p-6 gap-6">
  {/* Left side - Carousel */}
  <div className="flex-1">
    <ImageCarousel />
  </div>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Your Habits</h2>
        <div className="space-y-4">
          {habits.map(habit => (
            <div key={habit.id} className="bg-white shadow rounded p-4 flex items-center justify-between">
              <p className="font-medium">{habit.name}</p>
              <div className="w-1/3 bg-gray-200 rounded-full h-4">
                <div
                  className="bg-green-500 h-4 rounded-full"
                  style={{ width: `${habit.progress}%` }}
                ></div>
              </div>
              <span>{habit.progress}%</span>
            </div>
          ))}
        </div>
      </section>
  {/* Right side - Stats */}


</div>

  <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="bg-white shadow rounded p-2 text-center h-25">
    <h2 className="text-xl font-semibold">Total Habits</h2>
    <p className="text-3xl mt-2">{habits.length}</p>
  </div>
  <div className="bg-white shadow rounded p-2 text-center h-25">
    <h2 className="text-xl font-semibold">Current Streak</h2>
    <p className="text-3xl mt-2">5 Days</p>
  </div>
  <div className="bg-white shadow rounded p-2 text-center h-25">
    <h2 className="text-xl font-semibold">Progress</h2>
    <p className="text-3xl mt-2">75%</p>
  </div>
</section>
    
      </div>
    </>
  );
}

export default MainContent;
