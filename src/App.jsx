import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './Components/Landing.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx'; // create this component file

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
