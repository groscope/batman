import { BrowserRouter as Router, Route, Routes , useLocation } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import './App.css';
import Home from './Pages/home';
import Dashboard from './Pages/dashboard';
import Login from './Pages/login';
import Loading from './components/loading';
import Register from './Pages/register';

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    // Simulate a loading delay for demonstration
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Adjust duration as needed
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="body">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
