import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Todoapp from './Todoapp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Todoapp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;