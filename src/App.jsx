import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Home from './Components/HomePage'; // Assuming Home is in the same directory
import EnrollView from './Components/EnrollView'; // Assuming EnrollView is in the same directory

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/enroll/:courseTitle" element={<EnrollView />} />
      </Routes>
    </Router>
  );
};

export default App;
