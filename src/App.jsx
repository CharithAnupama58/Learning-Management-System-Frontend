import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Home from './Components/HomePage'; // Assuming Home is in the same directory
import EnrollView from './Components/EnrollView'; // Assuming EnrollView is in the same directory
import CourseLearningView from './Components/CourseLearningView';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/enroll/:courseTitle" element={<EnrollView />} />
        <Route path="/learning" element={<CourseLearningView />} />
      </Routes>
    </Router>
  );
};

export default App;
