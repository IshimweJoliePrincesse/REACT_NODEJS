import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from './components/Login';
// import Signup from './components/Signup';
import Exam from "./components/Contact";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
          <Route path="/contact" element={<Exam />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
