import React from 'react';

const habits = [
  { id: 1, name: "Morning Exercise", progress: 80 },
  { id: 2, name: "Read Books", progress: 50 },
  { id: 3, name: "Meditate", progress: 90 },
];

function MainContent() {
  return (
    <>
    <div className='p-6'>
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Habit Tracker Dashboard</h1>
      </header>

      <section className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold">Total Habits</h2>
          <p className="text-3xl mt-2">{habits.length}</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold">Current Streak</h2>
          <p className="text-3xl mt-2">5 Days</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold">Progress</h2>
          <p className="text-3xl mt-2">75%</p>
        </div>
      </section>

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
      </div>
    </>
  );
}

export default MainContent;
