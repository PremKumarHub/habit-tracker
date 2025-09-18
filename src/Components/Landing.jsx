import React from 'react';
import {useNavigate} from "react-router-dom";

export default function LandingPage() {
  const navigate=useNavigate();("/Dashboard")
  const handleGoToDashboard=()=>{
    navigate("/Dashboard")
  }
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 w-full">


      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-green-600">HabitTracker</h1>
        <nav>
          <ul className="flex space-x-6 text-gray-700">
            <li><a href="#features" className="hover:text-green-600">Home</a></li>
            <li><a href="#features" className="hover:text-green-600">About</a></li>
            <li><a href="#features" className="hover:text-green-600">Features</a></li>
            <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
            <li>
              <button className="bg-green-600 text-white px-4 py-1    rounded hover:bg-green-700 transition" onClick={handleGoToDashboard}>
                Get Started
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col justify-center items-center text-center px-6 py-16 md:py-32 bg-gradient-to-r from-green-50 to-indigo-50">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 max-w-full md:max-w-4xl mb-6 px-4">
          Build Better Habits, Track Your Progress
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-full md:max-w-2xl mb-12 px-4">
          Stay motivated and productive with HabitTracker. Set daily goals, monitor your habits, and celebrate small wins.
        </p>
        <button className="px-10 py-4 bg-green-600 text-white text-lg rounded shadow-lg hover:bg-green-700 transition">
          Get Started for Free
        </button>
      </main>

      {/* Features Section */}
      <section id="features" className="bg-white py-16 px-6">
        <h3 className="text-3xl font-semibold text-center mb-12 text-gray-800">Why Choose HabitTracker?</h3>
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center px-4">
          <div className="bg-green-50 p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-4 text-green-600">Easy Habit Tracking</h4>
            <p className="text-gray-700">Quickly add and mark habits to keep daily progress visible.</p>
          </div>
          <div className="bg-green-50 p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-4 text-green-600">Motivational Insights</h4>
            <p className="text-gray-700">Visualize your journey with charts and reminders that keep you on track.</p>
          </div>
          <div className="bg-green-50 p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-4 text-green-600">Cross-Platform</h4>
            <p className="text-gray-700">Use HabitTracker on any device with responsive design.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 text-center py-8 px-6">
        <p>© 2025 HabitTracker. All rights reserved.</p>
      </footer>
    </div>
  );
}
