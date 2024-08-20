import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Coach from './pages/Coach';
import Student from './pages/Student';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/coach" element={<Coach />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </Router>
  );
}

export default App;

